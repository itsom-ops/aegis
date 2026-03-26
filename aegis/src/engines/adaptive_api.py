import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

class AdaptiveAPI:
    """Detects schema changes block and auto-transforms payloads."""
    
    BASE_SCHEMA_KEYS = {"user_id", "timestamp", "action", "amount"}
    
    @staticmethod
    def transform_payload(payload: Dict[str, Any]) -> Dict[str, Any]:
        """
        Simulates schema versioning by adapting incoming keys to expected base schema.
        E.g., mapping 'usr' -> 'user_id', 'ts' -> 'timestamp'.
        """
        transformed = dict(payload)
        
        # Simple auto-mapping logic
        schema_mappings = {
            "usr": "user_id",
            "uid": "user_id",
            "ts": "timestamp",
            "time": "timestamp",
            "amt": "amount",
            "value": "amount"
        }
        
        for old_key, new_key in schema_mappings.items():
            if old_key in transformed and new_key not in transformed:
                logger.info(f"Adaptive API: Transforming {old_key} -> {new_key}")
                transformed[new_key] = transformed.pop(old_key)
                
        # Calculate schema drift
        current_keys = set(transformed.keys())
        missing_keys = AdaptiveAPI.BASE_SCHEMA_KEYS - current_keys
        extra_keys = current_keys - AdaptiveAPI.BASE_SCHEMA_KEYS
        
        if missing_keys or extra_keys:
            logger.warning(f"Schema drift detected. Missing: {missing_keys}, Extra: {extra_keys}")
            
        return transformed

adaptive_api = AdaptiveAPI()
