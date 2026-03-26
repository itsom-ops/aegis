import json
from src.core.graph_db import neo4j_db
from src.models.schemas import LineageNode, LineageEdge, LineageResponse
import logging

logger = logging.getLogger(__name__)

class ProvenanceEngine:
    @staticmethod
    def record_event(event_id: int, source: str, payload_keys: list):
        """Creates a node representing an event in the DAG."""
        query = """
        MERGE (e:Event {id: $event_id})
        SET e.source = $source,
            e.keys = $keys,
            e.trust_score = 1.0,
            e.timestamp = timestamp()
        RETURN e
        """
        params = {"event_id": event_id, "source": source, "keys": json.dumps(payload_keys)}
        neo4j_db.query(query, params)
        logger.info(f"Recorded origin event {event_id} in provenance graph.")

    @staticmethod
    def record_transformation(source_event_ids: list[int], new_event_id: int, transformation_type: str, new_source: str):
        """Records a new derived node and creates edges from source nodes."""
        # Create new node
        create_query = """
        MERGE (e:Event {id: $new_id})
        SET e.source = $new_source,
            e.type = $type,
            e.timestamp = timestamp()
        """
        neo4j_db.query(create_query, {"new_id": new_event_id, "new_source": new_source, "type": transformation_type})

        # Create edges
        for src_id in source_event_ids:
            edge_query = """
            MATCH (a:Event {id: $src_id}), (b:Event {id: $new_id})
            MERGE (a)-[r:TRANSFORMED_TO {type: $type}]->(b)
            """
            neo4j_db.query(edge_query, {"src_id": src_id, "new_id": new_event_id, "type": transformation_type})

    @staticmethod
    def get_lineage(event_id: int = None) -> LineageResponse:
        """Retrieves DAG lineage for a specific event or the whole graph if none."""
        if event_id:
            query = """
            MATCH path = (e:Event {id: $event_id})-[*]-(connected)
            UNWIND nodes(path) AS n
            UNWIND relationships(path) AS r
            RETURN collect(distinct n) as nodes, collect(distinct r) as rels
            """
            params = {"event_id": event_id}
        else:
            query = """
            MATCH (n:Event)
            OPTIONAL MATCH (n)-[r]->(m)
            RETURN collect(distinct n) as nodes, collect(distinct r) as rels
            """
            params = {}
            
        result = neo4j_db.query(query, params)
        
        nodes_list = []
        edges_list = []
        
        if result and len(result) > 0:
            record = result[0]
            for n in record["nodes"]:
                nodes_list.append(LineageNode(
                    node_id=str(n.get("id")),
                    label="Event",
                    properties=dict(n)
                ))
            for r in record["rels"]:
                if r is not None:
                    edges_list.append(LineageEdge(
                        source_id=str(r.start_node.get("id")),
                        target_id=str(r.end_node.get("id")),
                        relationship=r.type
                    ))

        return LineageResponse(nodes=nodes_list, edges=edges_list)

provenance_engine = ProvenanceEngine()
