import random
import logging
from src.engines.failure_predict import failure_predictor

logger = logging.getLogger(__name__)

class LoadBalancer:
    """Cognitive Load Balancer that routes traffic based on complexity and system state."""
    
    SERVICES = {
        "fast_lane": {"max_complexity": 3.0, "latency_estimate": 10.0},
        "standard_compute": {"max_complexity": 7.0, "latency_estimate": 50.0},
        "heavy_compute": {"max_complexity": 100.0, "latency_estimate": 250.0}
    }
    
    @staticmethod
    def get_current_strategy():
        prediction = failure_predictor.predict_failure()
        risk = prediction["risk_level"]
        return "CONSERVATIVE_THROTTLE" if risk == "Critical" else ("DEFENSIVE_ROUTING" if risk == "Warning" else "OPTIMIZED_THROUGHPUT")

    @staticmethod
    def route_request(event_id: int, complexity_score: float, payload_size: int) -> dict:
        """Determines the optimal routing path using a CLOSED FEEDBACK LOOP."""
        
        # Query the Failure Prediction Engine for current load (Feedback Loop)
        system_prediction = failure_predictor.predict_failure()
        failure_prob = system_prediction["predicted_failure_probability"]
        
        # Adjust complexity based on system stress. If stressed, we artificially inflate complexity 
        # so it gets routed to heavy_compute (offloading core) or we shed it entirely
        system_load_factor = 1.0 + (failure_prob * 2.0)
        adjusted_complexity = complexity_score * system_load_factor
        
        target_service = "heavy_compute"
        for service, thresholds in LoadBalancer.SERVICES.items():
            if adjusted_complexity <= thresholds["max_complexity"]:
                target_service = service
                break
                
        # If Critical risk, override and force shedding/throttling strategy
        if system_prediction["risk_level"] == "Critical" and target_service != "fast_lane":
            target_service = "heavy_compute" # push off main loop

        estimated_latency = LoadBalancer.SERVICES[target_service]["latency_estimate"] * system_load_factor
        
        logger.info(f"Routing Event {event_id} (Complexity: {complexity_score:.2f}) -> {target_service} (Feedback Risk: {failure_prob:.2f})")
        
        return {
            "target_service": target_service,
            "estimated_latency_ms": estimated_latency,
            "reason": f"System risk {failure_prob:.2f} adjusted complexity to {adjusted_complexity:.2f}"
        }

load_balancer = LoadBalancer()
