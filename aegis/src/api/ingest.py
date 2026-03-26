import json
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.core.db import get_db
from src.core.redis_client import get_redis
from src.models.schemas import EventCreate, EventResponse
from src.models.orm import DataEvent
from src.engines.provenance import provenance_engine
from src.config import settings
import redis.asyncio as redis

router = APIRouter(prefix="/ingest", tags=["ingestion"])

def calculate_complexity(payload: dict) -> float:
    """Basic complexity scoring based on payload size and depth."""
    score = len(str(payload)) / 100.0
    if isinstance(payload, dict):
        score += len(payload.keys()) * 0.5
    return min(score, 10.0)

@router.post("/", response_model=EventResponse)
async def ingest_event(event: EventCreate, db: Session = Depends(get_db), redis_client: redis.Redis = Depends(get_redis)):
    try:
        # Calculate complexity
        complexity = calculate_complexity(event.payload)

        # 1. Save metadata to Postgres
        db_event = DataEvent(
            source=event.source,
            payload=event.payload,
            status="pending",
            complexity_score=complexity
        )
        db.add(db_event)
        db.commit()
        db.refresh(db_event)

        # 2. Add to Neo4j Lineage DAG
        provenance_engine.record_event(
            event_id=db_event.id,
            source=db_event.source,
            payload_keys=list(event.payload.keys())
        )

        # 3. Publish to Redis Stream for processing
        stream_payload = {
            "event_id": str(db_event.id),
            "source": db_event.source,
            "complexity": str(complexity),
            "payload": json.dumps(event.payload)
        }
        await redis_client.xadd(settings.REDIS_STREAM_NAME, stream_payload)

        return db_event
        
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
