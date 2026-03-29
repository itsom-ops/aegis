from fastapi import APIRouter
from src.engines.failure_predict import failure_predictor
from src.engines.load_balancer import load_balancer
from src.engines.decision_engine import decision_engine
from src.core.db import SessionLocal
from src.models.orm import DataEvent, SystemMetric

router = APIRouter(prefix="/system", tags=["system"])

@router.get("/state")
async def get_system_state():
    """Returns a unified snapshot of the entire Aegis infrastructure."""
    
    # 1. Failure config & Anomalies
    prediction = failure_predictor.predict_failure()
    state_metrics = failure_predictor.get_system_state()
    
    # 2. Routing Strategy
    strategy = load_balancer.get_current_strategy()
    
    # 3. Overall confidence (Mocking average trust score from recent events)
    db = SessionLocal()
    try:
        recent_events = db.query(DataEvent).order_by(DataEvent.created_at.desc()).limit(20).all()
        # Mock calculating trust from complexity and anomaly rate
        avg_complexity = sum(e.complexity_score for e in recent_events) / len(recent_events) if recent_events else 1.0
        base_trust = 0.98 - (state_metrics["active_anomalies"] * 0.05) - (avg_complexity * 0.01)
        confidence_score = max(min(base_trust, 1.0), 0.1)
    finally:
        db.close()

    return {
        "system_health": state_metrics["system_health"],
        "active_anomalies": state_metrics["active_anomalies"],
        "predicted_failures": prediction["predicted_failure_probability"],
        "routing_strategy": strategy,
        "confidence_score": round(confidence_score, 2),
        "avg_cpu_load": state_metrics["avg_cpu"],
        "avg_latency_ms": state_metrics["avg_latency"],
        "active_nodes": 128,  # Hardcoded compute array simulation for UI
        "tensor_ops_sec": int(state_metrics["throughput"] * 2.5),
        "memory_usage_gb": round(state_metrics["avg_cpu"] * 1.5, 1),
        "bandwidth_tbps": 1.2,
        "active_rulesets": 142
    }

@router.get("/events")
async def get_system_events():
    """Returns the most recent highly-processed data events from Postgres."""
    db = SessionLocal()
    try:
        events = db.query(DataEvent).order_by(DataEvent.created_at.desc()).limit(100).all()
        result = []
        for e in events:
            # Safely extract payload which might be dict or string
            p = e.payload if isinstance(e.payload, dict) else {}
            
            result.append({
                "id": f"EVT-{e.id}",
                "method": p.get("method", "POST"),
                "endpoint": p.get("endpoint", "/api/data"),
                "region": p.get("region", "us-east-1"),
                "ip": e.source,
                "source": "Network Simulator",
                "size_kb": f"{(len(str(p)) / 1024):.2f}",
                "latency_ms": int(max(5, e.complexity_score * 10)),
                "complexity": f"{e.complexity_score:.2f}",
                "hash": f"0x{hash(str(p)) & 0xFFFFFFFFFFFFFFF:016x}",
                "time": e.created_at.isoformat() if e.created_at else ""
            })
        return result
    finally:
        db.close()

@router.get("/metrics/series")
async def get_metrics_series():
    """Returns time-series system metric logs for Recharts plotting."""
    db = SessionLocal()
    try:
        metrics = db.query(SystemMetric).order_by(SystemMetric.recorded_at.desc()).limit(30).all()
        metrics.reverse() # Chronological left-to-right
        return [
            {
                "time": m.recorded_at.strftime("%M:%S") if m.recorded_at else "",
                "latency": m.latency_ms,
                "cpu": m.cpu_usage,
                "throughput": m.throughput
            } for m in metrics
        ]
    finally:
        db.close()
