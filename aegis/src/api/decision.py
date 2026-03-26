from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any
from src.engines.decision_engine import decision_engine
from src.engines.adaptive_api import adaptive_api

router = APIRouter(prefix="/decision", tags=["decision"])

class DecisionRequest(BaseModel):
    event_id: int
    payload: Dict[str, Any]

class DecisionResponse(BaseModel):
    event_id: int
    decision: str
    confidence_score: float

@router.post("/", response_model=DecisionResponse)
async def run_decision(request: DecisionRequest):
    """API endpoint to run the decision engine synchronously if needed."""
    try:
        # Pass through adaptive API first
        standardized_payload = adaptive_api.transform_payload(request.payload)
        
        res = decision_engine.evaluate(request.event_id, standardized_payload)
        return DecisionResponse(
            event_id=request.event_id,
            decision=res["decision"],
            confidence_score=res["confidence_score"]
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
