from fastapi import APIRouter, HTTPException
from typing import Optional
from src.models.schemas import LineageResponse
from src.engines.provenance import provenance_engine

router = APIRouter(prefix="/lineage", tags=["lineage"])

@router.get("/", response_model=LineageResponse)
async def get_full_lineage():
    try:
        return provenance_engine.get_lineage()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{event_id}", response_model=LineageResponse)
async def get_event_lineage(event_id: int):
    try:
        return provenance_engine.get_lineage(event_id=event_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
