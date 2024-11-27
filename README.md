# Knowledge Graph Builder App

## LLM Graph builder
1. Introduce all `.env` files from `example.env`.
2. In `backend/src/llm.py` line 95, modify line to bypass env file.
3. Set the function check_account_access in `backend/src/graphDB_dataAccess.py` to always return True. See reference [here](https://github.com/neo4j-labs/llm-graph-builder/issues/839).

## Reference
- [Original Repo](https://github.com/neo4j-labs/llm-graph-builder)
- [Demo of application](https://www.youtube.com/watch?v=LlNy5VmV290)
