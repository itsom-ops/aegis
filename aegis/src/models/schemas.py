from pydantic import BaseModel, Field
from typing import Dict, Any, List, Optional
from datetime import datetime

class EventCreate(BaseModel):
    source: str = Field(..., description="Origin of the data stream")
    payload: Dict[str, Any] = Field(..., description="The dynamic data payload")

class EventResponse(BaseModel):
    id: int
    source: str
    status: str
    complexity_score: float
    created_at: datetime
    
    class Config:
        from_attributes = True

class MetricCreate(BaseModel):
    cpu_usage: float
    memory_usage: float
    latency_ms: float
    error_rate: float
    throughput: float

class PredictionResponse(BaseModel):
    risk_level: str
    predicted_failure_probability: float
    recommended_action: str
    estimated_time_to_failure_sec: Optional[float] = None

class RouteRequest(BaseModel):
    event_id: int
    complexity_score: float
    payload_size: int

class RouteResponse(BaseModel):
    target_service: str
    estimated_latency_ms: float
    reason: str

class LineageNode(BaseModel):
    node_id: str
    label: str
    properties: Dict[str, Any]

class LineageEdge(BaseModel):
    source_id: str
    target_id: str
    relationship: str

class LineageResponse(BaseModel):
    nodes: List[LineageNode]
    edges: List[LineageEdge]
