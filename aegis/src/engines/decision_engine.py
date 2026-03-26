import logging
from typing import Any, Dict

logger = logging.getLogger(__name__)

class DecisionEngine:
    """Core logic evaluating standardized payloads to make a business/system decision."""

    @staticmethod
    def evaluate(event_id: int, payload: Dict[str, Any]) -> dict:
        """
        Runs rules engine on the payload.
        Simulated complex decision matrix.
        """
        logger.info(f"Decision Engine evaluating event {event_id}")
        
        # Determine confidence based on presence of specific keys
        confidence_score = 0.5
        features = len(payload.keys())
        if features > 5:
            confidence_score += 0.2
        if "amount" in payload and isinstance(payload["amount"], (int, float)):
            if payload["amount"] > 10000:
                confidence_score -= 0.3 # Higher risk, lower confidence
            else:
                confidence_score += 0.2
                
        confidence_score = min(max(confidence_score, 0.1), 0.99)
        
        decision = "APPROVE" if confidence_score > 0.6 else "FLAG_FOR_REVIEW"
        if confidence_score < 0.3:
            decision = "REJECT"
            
        return {
            "decision": decision,
            "confidence_score": round(confidence_score, 2),
            "evaluated_features": features
        }

decision_engine = DecisionEngine()
