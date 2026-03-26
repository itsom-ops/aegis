from fastapi import APIRouter
from src.engines.failure_predict import failure_predictor
from src.engines.load_balancer import load_balancer
from src.engines.decision_engine import decision_engine
from src.core.db import SessionLocal
from src.models.orm import DataEvent

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
        "avg_latency_ms": state_metrics["avg_latency"]
    }
