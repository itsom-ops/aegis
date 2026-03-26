from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base

from src.config import settings

# Since we want a robust async implementation, we use asyncpg if possible, otherwise psycopg2 with sync engine for simplicity
# I'll use standard sync SQLAlchemy engine here to match psycopg2-binary, but wrap it in easy-to-use helpers.
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(settings.database_url, echo=False)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
