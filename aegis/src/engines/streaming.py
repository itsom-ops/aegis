import asyncio
import json
import logging
from src.core.redis_client import get_redis
from src.config import settings
from src.core.db import SessionLocal
from src.models.orm import DataEvent
from src.engines.load_balancer import load_balancer
from src.engines.adaptive_api import adaptive_api
from src.engines.decision_engine import decision_engine

logger = logging.getLogger(__name__)

class StreamProcessor:
    def __init__(self):
        self.running = False
        self.task = None

    async def start(self):
        """Starts the background stream consumer."""
        self.running = True
        self.task = asyncio.create_task(self.consume_stream())
        logger.info("Stream Processor started.")

    async def stop(self):
        self.running = False
        if self.task:
            self.task.cancel()
        logger.info("Stream Processor stopped.")

    async def process_event(self, event_id: int, payload: dict, complexity: float):
        """Processes event through Adaptive API, Load Balancer, and Decision Engine."""
        try:
            # 1. Adapt Schema
            standardized = adaptive_api.transform_payload(payload)
            
            # 2. Routing Decision
            routing = load_balancer.route_request(event_id, complexity, len(str(payload)))
            
            # Simulate latency based on routing
            await asyncio.sleep(routing["estimated_latency_ms"] / 1000.0)
            
            # 3. Decision Engine
            decision = decision_engine.evaluate(event_id, standardized)
            logger.info(f"Event {event_id} processed: {decision['decision']} (Conf: {decision['confidence_score']}) via {routing['target_service']}")
            
            # Update PG status
            db = SessionLocal()
            try:
                db_event = db.query(DataEvent).filter(DataEvent.id == event_id).first()
                if db_event:
                    db_event.status = "processed"
                    db.commit()
            finally:
                db.close()
        except Exception as e:
            logger.error(f"Failed to process event {event_id}: {e}")

    async def consume_stream(self):
        redis_client = await get_redis()
        stream_name = settings.REDIS_STREAM_NAME
        group_name = "aegis_workers"
        consumer_name = "worker_1"
        
        try:
            await redis_client.xgroup_create(stream_name, group_name, mkstream=True)
        except Exception:
            # Group might already exist
            pass

        while self.running:
            try:
                # Read from stream, wait 1000ms max
                entries = await redis_client.xreadgroup(group_name, consumer_name, {stream_name: ">"}, count=100, block=1000)
                if not entries:
                    continue
                
                for stream, messages in entries:
                    for msg_id, values in messages:
                        event_id = int(values["event_id"])
                        complexity = float(values.get("complexity", 1.0))
                        payload = json.loads(values["payload"])
                        
                        logger.debug(f"Processing event {event_id} with complexity {complexity}")
                        
                        # Process based on priority (simulated async task queue)
                        # We just process them, but a real priority queue might re-buffer them into sorted queues in Redis
                        await self.process_event(event_id, payload, complexity)
                        
                        # Acknowledge message
                        await redis_client.xack(stream_name, group_name, msg_id)
            
            except asyncio.CancelledError:
                break
            except Exception as e:
                logger.error(f"Error in stream consumption: {e}")
                await asyncio.sleep(1)

stream_processor = StreamProcessor()
