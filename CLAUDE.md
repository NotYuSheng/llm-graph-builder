# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a full-stack Knowledge Graph Builder application that transforms unstructured data (PDFs, videos, web pages, etc.) into structured Neo4j Knowledge Graphs using Large Language Models.

**Structure:**
- `backend/`: FastAPI Python application serving as the API layer
- `frontend/`: React TypeScript application with Vite build system
- `data/`: Sample data and configuration files
- `experiments/`: Jupyter notebooks for testing and research
- `docs/`: Documentation and architectural diagrams

**Core Components:**
- **Document Processing**: Handles multiple input sources (local files, YouTube, Wikipedia, S3, GCS, web pages)
- **LLM Integration**: Supports 10+ LLM providers (OpenAI, Gemini, Anthropic, Ollama, etc.)
- **Graph Generation**: Extracts entities and relationships to build Neo4j graphs
- **Chat Interface**: RAG-based Q&A system with multiple chat modes
- **Post-processing**: Entity deduplication, embedding creation, and graph cleanup

## Development Commands

### Frontend
```bash
cd frontend
yarn install          # Install dependencies
yarn dev              # Start development server (port 8080)
yarn build            # Build for production
yarn lint             # Run ESLint
yarn format           # Format code with Prettier
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
uvicorn score:app --reload  # Start development server (port 8000)
```

### Docker Development
```bash
docker-compose up --build  # Run full stack with hot reload
```

## Configuration

### Backend Environment
Copy `backend/example.env` to `backend/.env` and configure:
- Neo4j connection (NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD)
- LLM API keys (OPENAI_API_KEY, DIFFBOT_API_KEY, etc.)
- Model configurations using `LLM_MODEL_CONFIG_*` format

### Frontend Environment  
Copy `frontend/example.env` to `frontend/.env` and configure:
- `VITE_BACKEND_API_URL`: Backend API endpoint
- `VITE_LLM_MODELS`: Available LLM models
- `VITE_REACT_APP_SOURCES`: Input source types
- `VITE_CHAT_MODES`: Available chat modes

## Key Implementation Details

- **Entry Point**: Backend starts from `backend/score.py` (FastAPI app)
- **Core Logic**: Main processing in `backend/src/main.py`
- **LLM Abstraction**: `backend/src/llm.py` handles multi-provider LLM calls
- **Graph Operations**: `backend/src/graphDB_dataAccess.py` for Neo4j interactions
- **Document Sources**: `backend/src/document_sources/` contains input handlers
- **Frontend State**: React context in `frontend/src/context/` manages application state
- **API Layer**: `frontend/src/services/` contains service functions

## Database Requirements

- Neo4j 5.23+ with APOC plugin
- Supports Neo4j Aura (free tier included) and self-hosted instances

## Testing

Backend tests are located in the root directory:
- `backend/test_*.py` files for unit tests
- No specific test runner configured - use standard pytest patterns