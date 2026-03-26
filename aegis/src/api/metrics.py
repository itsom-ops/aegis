from fastapi import APIRouter
from src.models.schemas import MetricCreate, PredictionResponse
from src.engines.failure_predict import failure_predictor
import psutil
import random

router = APIRouter(prefix="/metrics", tags=["metrics"])

@router.post("/", response_model=dict)
async def post_metrics(metrics: MetricCreate):
    """Manually push metrics (usually from agents/sidecars)"""
    failure_predictor.record_metrics(
        cpu=metrics.cpu_usage,
        mem=metrics.memory_usage,
        lat=metrics.latency_ms,
        err=metrics.error_rate,
        thr=metrics.throughput
    )
    return {"status": "recorded"}

@router.get("/predict", response_model=PredictionResponse)
async def get_prediction():
    """Calculates likelihood of system failure based on recent metrics."""
    # Autogenerate some metrics based on OS to keep simulation alive
    # Not real throughput/latency, just mixing real OS stats with mock app stats
    cpu = psutil.cpu_percent()
    mem = psutil.virtual_memory().percent
    
    # Introduce random anomalies during simulation
    if random.random() < 0.1:
        cpu = random.uniform(85, 99)
        err = random.uniform(0.1, 0.3)
    else:
        err = random.uniform(0.001, 0.02)
        
    failure_predictor.record_metrics(cpu, mem, random.uniform(10, 500), err, random.uniform(100, 2000))
    
    res = failure_predictor.predict_failure()
    return PredictionResponse(**res)
