# Aegis: Autonomous Data & Decision Infrastructure

Production-grade backend system combining data provenance, real-time streaming pipelines, cognitive load balancing, and failure prediction.

## Tech Stack
- **Python 3.11+**
- **FastAPI / Uvicorn**
- **PostgreSQL** (Relational state & metrics)
- **Redis Streams** (High-throughput async event queueing)
- **Neo4j** (DAG representation of Data Lineage)

## Setup Instructions

1. **Start System Infrastructure (Docker)**
   ```bash
   cd aegis
   docker-compose up -d
   ```
   Wait 10-15 seconds for Postgres, Redis, and Neo4j to be healthy.

2. **Setup Python Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   pip install aiohttp  # For the simulation script
   ```

3. **Run Aegis Server**
   ```bash
   # Make sure you are in the aegis directory
   set PYTHONPATH=.   # On Windows (export PYTHONPATH=. on Unix)
   uvicorn src.main:app --reload
   ```

4. **Run High-Traffic Simulation**
   In a new terminal:
   ```bash
   cd aegis
   source venv/bin/activate
   python simulation/run_sim.py
   ```

## Key APIs
- `POST /ingest/`: Accepts dynamic payloads. Assigns complexity score, records in Postgres, creates lineage DAG node in Neo4j, and publishes to Redis Streams.
- `GET /lineage/`: Returns the full data provenance DAG (nodes and edges).
- `POST /route/`: Simulates the cognitive load balancer determining structural complexity and routing.
- `GET /metrics/predict`: Collects system metrics and calculates a predicted failure probability, recommending actions to self-heal.
- `POST /decision/`: Evaluates a payload synchronously to make a mock business decision.
