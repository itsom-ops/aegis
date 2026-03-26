import asyncio
import aiohttp
import time
import random
import sys

API_URL = "http://localhost:8000"
TOTAL_EVENTS = 10000
CONCURRENCY = 100

async def inject_event(session: aiohttp.ClientSession, event_id: int):
    # Simulate adaptive API by randomly using weird schema keys
    if random.random() < 0.2:
        payload = {"usr": f"user_{event_id}", "amt": random.randint(10, 50000), "ts": time.time()}
    else:
        payload = {"user_id": f"user_{event_id}", "amount": random.randint(10, 50000), "timestamp": time.time(), "action": "LOGIN"}
        
    # Introduce anomalies
    if random.random() < 0.05:
        # Massive payload causing complexity
        payload["extra_data"] = "0" * 5000
        
    data = {
        "source": random.choice(["web_frontend", "mobile_app", "partner_api", "iot_device"]),
        "payload": payload
    }
    
    try:
        async with session.post(f"{API_URL}/ingest/", json=data) as resp:
            return await resp.json()
    except Exception as e:
        print(f"Error: {e}")
        return None

async def query_metrics(session: aiohttp.ClientSession):
    while True:
        try:
            async with session.get(f"{API_URL}/metrics/predict") as resp:
                res = await resp.json()
                print(f"[SYSTEM METRICS] Risk: {res['risk_level']} | Prob: {res['predicted_failure_probability']} | Action: {res['recommended_action']}")
        except:
            pass
        await asyncio.sleep(2)

async def worker(queue: asyncio.Queue, session: aiohttp.ClientSession, results: list):
    while True:
        event_id = await queue.get()
        res = await inject_event(session, event_id)
        if res:
            results.append(res)
        queue.task_done()

async def main():
    print(f"--- Starting Aegis Simulation: {TOTAL_EVENTS} Events ---")
    start_time = time.time()
    
    queue = asyncio.Queue()
    for i in range(TOTAL_EVENTS):
        queue.put_nowait(i)
        
    results = []
    
    async with aiohttp.ClientSession() as session:
        # Start metrics watcher
        metrics_task = asyncio.create_task(query_metrics(session))
        
        # Start workers
        workers = []
        for _ in range(CONCURRENCY):
            task = asyncio.create_task(worker(queue, session, results))
            workers.append(task)
            
        # Wait for all events to be processed
        await queue.join()
        
        # Cleanup
        metrics_task.cancel()
        for w in workers:
            w.cancel()
            
    end_time = time.time()
    duration = end_time - start_time
    print(f"--- Simulation Complete ---")
    print(f"Ingested {len(results)} events in {duration:.2f} seconds.")
    print(f"Average Throughput: {TOTAL_EVENTS/duration:.2f} req/sec")

if __name__ == "__main__":
    # We need aiohttp: pip install aiohttp
    asyncio.run(main())
