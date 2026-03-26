from fastapi import APIRouter
from pydantic import BaseModel

class HealthCheck(BaseModel):
    status: str = "ok"

router = APIRouter(prefix="/health", tags=["health"])

@router.get("/", response_model=HealthCheck)
async def read_health():
    return HealthCheck(status="Aegis Core is Healthy")
