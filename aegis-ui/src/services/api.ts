const API_BASE = 'http://127.0.0.1:8000/system';

export const AegisAPI = {
  fetchState: async () => {
    try {
      const res = await fetch(`${API_BASE}/state`);
      if (!res.ok) throw new Error("Network response was not ok");
      return await res.json();
    } catch (e) {
      console.error("Backend unreachable. Ensure FastAPI is running on port 8000.");
      throw e; // We no longer mock. We throw intentionally for production mode.
    }
  },
  
  fetchEvents: async () => {
    try {
      const res = await fetch(`${API_BASE}/events`);
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      return [];
    }
  },
  
  fetchMetricsSeries: async () => {
    try {
      const res = await fetch(`${API_BASE}/metrics/series`);
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      return [];
    }
  }
};
