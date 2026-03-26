from fastapi import APIRouter
from src.models.schemas import RouteRequest, RouteResponse
from src.engines.load_balancer import load_balancer

router = APIRouter(prefix="/route", tags=["routing"])

@router.post("/", response_model=RouteResponse)
async def route_event(request: RouteRequest):
    """Predicts target service and estimated latency based on event complexity."""
    routing_decision = load_balancer.route_request(
        event_id=request.event_id,
        complexity_score=request.complexity_score,
        payload_size=request.payload_size
    )
    
    return RouteResponse(
        target_service=routing_decision["target_service"],
        estimated_latency_ms=routing_decision["estimated_latency_ms"],
        reason=routing_decision["reason"]
    )
