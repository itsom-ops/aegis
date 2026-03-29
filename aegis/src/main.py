import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.config import settings
from src.core.db import Base, engine
from src.api.health import router as health_router
from src.api.ingest import router as ingest_router
from src.api.lineage import router as lineage_router
from src.api.route import router as route_router
from src.api.metrics import router as metrics_router
from src.api.decision import router as decision_router
from src.api.system import router as system_router
from src.engines.streaming import stream_processor

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# Initialize DB (Creates all tables)
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.APP_NAME, description="Production-grade backend for Autonomous Data & Decision Infrastructure")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(ingest_router)
app.include_router(lineage_router)
app.include_router(route_router)
app.include_router(metrics_router)
app.include_router(decision_router)
app.include_router(system_router)

@app.on_event("startup")
async def startup_event():
    logger.info("Starting Aegis Infrastructure...")
    await stream_processor.start()

@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Shutting down Aegis Infrastructure...")
    await stream_processor.stop()

@app.get("/")
def read_root():
    return {"message": "Aegis System is online.", "status": "healthy"}
