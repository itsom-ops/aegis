from sqlalchemy import Column, Integer, String, Float, DateTime, JSON, Boolean
from sqlalchemy.sql import func
from src.core.db import Base

class DataEvent(Base):
    __tablename__ = "data_events"

    id = Column(Integer, primary_key=True, index=True)
    source = Column(String, index=True, nullable=False)
    payload = Column(JSON, nullable=False)
    status = Column(String, default="pending", index=True) # pending, processed, failed
    complexity_score = Column(Float, default=0.0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    processed_at = Column(DateTime(timezone=True), nullable=True)

class SystemMetric(Base):
    """Stores system metrics for failure prediction."""
    __tablename__ = "system_metrics"

    id = Column(Integer, primary_key=True, index=True)
    cpu_usage = Column(Float, nullable=False)
    memory_usage = Column(Float, nullable=False)
    latency_ms = Column(Float, nullable=False)
    error_rate = Column(Float, nullable=False)
    throughput = Column(Float, nullable=False)
    is_anomaly = Column(Boolean, default=False)
    recorded_at = Column(DateTime(timezone=True), server_default=func.now(), index=True)
