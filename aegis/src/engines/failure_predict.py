import random
import logging
from src.core.db import SessionLocal
from src.models.orm import SystemMetric

logger = logging.getLogger(__name__)

class FailurePredictor:
    """Uses recent system metrics to predict failures."""

    @staticmethod
    def record_metrics(cpu: float, mem: float, lat: float, err: float, thr: float):
        db = SessionLocal()
        try:
            is_anomaly = (cpu > 90) or (mem > 95) or (lat > 1000) or (err > 0.1)
            metric = SystemMetric(
                cpu_usage=cpu,
                memory_usage=mem,
                latency_ms=lat,
                error_rate=err,
                throughput=thr,
                is_anomaly=is_anomaly
            )
            db.add(metric)
            db.commit()
        except Exception as e:
            logger.error(f"Failed to record metrics: {e}")
        finally:
            db.close()

    @staticmethod
    def predict_failure() -> dict:
        """
        Simulates an ML pipeline that reads time-series data from Postgres
        to calculate failure probability.
        """
        db = SessionLocal()
        try:
            # Get last 10 metrics (mocking a time window)
            metrics = db.query(SystemMetric).order_by(SystemMetric.recorded_at.desc()).limit(10).all()
            if not metrics:
                return {
                    "risk_level": "Low",
                    "predicted_failure_probability": 0.05,
                    "recommended_action": "None",
                    "estimated_time_to_failure_sec": None
                }
                
            # Naive time-series evaluation
            anomaly_count = sum(1 for m in metrics if m.is_anomaly)
            avg_latency = sum(m.latency_ms for m in metrics) / len(metrics)
            avg_error = sum(m.error_rate for m in metrics) / len(metrics)
            
            prob = min((anomaly_count / len(metrics)) + (avg_error * 2), 0.99)
            
            if prob > 0.7:
                risk = "Critical"
                action = "Throttle intake and scale workers."
                ttf = max(10, 300 - (prob * 100))
            elif prob > 0.4:
                risk = "Warning"
                action = "Monitor closely."
                ttf = max(300, 1000 - (prob * 200))
            else:
                risk = "Low"
                action = "None"
                ttf = None
                
            return {
                "risk_level": risk,
                "predicted_failure_probability": round(prob, 2),
                "recommended_action": action,
                "estimated_time_to_failure_sec": round(ttf, 1) if ttf else None
            }
        finally:
            db.close()

    @staticmethod
    def get_system_state() -> dict:
        db = SessionLocal()
        try:
            metrics = db.query(SystemMetric).order_by(SystemMetric.recorded_at.desc()).limit(50).all()
            if not metrics:
                return {"system_health": "UNKNOWN", "active_anomalies": 0, "avg_cpu": 0, "avg_latency": 0}
            
            recent_anomalies = sum(1 for m in metrics[:10] if m.is_anomaly)
            avg_cpu = sum(m.cpu_usage for m in metrics[:10]) / min(len(metrics), 10)
            avg_lat = sum(m.latency_ms for m in metrics[:10]) / min(len(metrics), 10)
            
            health = "HEALTHY"
            if recent_anomalies > 5 or avg_cpu > 90:
                health = "CRITICAL"
            elif recent_anomalies > 2 or avg_cpu > 70:
                health = "DEGRADED"

            return {
                "system_health": health,
                "active_anomalies": recent_anomalies,
                "avg_cpu": round(avg_cpu, 2),
                "avg_latency": round(avg_lat, 2)
            }
        finally:
            db.close()

failure_predictor = FailurePredictor()
