# Physical AI & Humanoid Robotics Textbook RAG API

This is the backend API for the RAG (Retrieval-Augmented Generation) chatbot that powers the Physical AI & Humanoid Robotics textbook.

## Features

- FastAPI-based REST API
- Qdrant vector database for document storage and retrieval
- OpenAI integration for response generation
- Selected-text-only answering mode
- Personalization support based on user preferences

## Prerequisites

- Python 3.11+
- Qdrant vector database (local or cloud)
- OpenAI API key

## Installation

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up environment variables (copy `.env.example` to `.env` and fill in your values):
   ```bash
   # OpenAI settings
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL_NAME=gpt-3.5-turbo
   OPENAI_MAX_TOKENS=1000
   OPENAI_TEMPERATURE=0.7

   # Qdrant settings (use either local or cloud)
   # For local Qdrant:
   QDRANT_URL=
   QDRANT_API_KEY=

   # For Qdrant Cloud:
   QDRANT_URL=your_qdrant_cluster_url
   QDRANT_API_KEY=your_qdrant_api_key
   ```

## Loading Textbook Content

Before using the API, you need to load the textbook content into the vector database:

```bash
python load_textbook_content.py
```

This will parse all markdown files in the `website/docs` directory and load them into the vector database.

## Running the API

```bash
python run_api.py
```

Or with uvicorn directly:

```bash
uvicorn src.main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Endpoints

### Chat Endpoint

`POST /api/v1/chat`

Request body:
```json
{
  "query": "Your question here",
  "user_preferences": {
    "adaptive_difficulty": "intermediate",
    "adaptive_code_samples": true
  }
}
```

### Selected Text Chat Endpoint

`POST /api/v1/chat-selected-text`

Request body:
```json
{
  "query": "Your question about the selected text",
  "selected_text": "The text that was selected by the user",
  "user_preferences": {
    "adaptive_difficulty": "intermediate",
    "adaptive_code_samples": true
  }
}
```

## Environment Variables

**Important Note**: This system requires an OpenAI API key, not a Google Gemini API key. The RAG (Retrieval-Augmented Generation) system uses OpenAI's GPT models for text generation and cannot work with Google's Gemini API.

- `OPENAI_API_KEY`: Your OpenAI API key
- `OPENAI_MODEL_NAME`: OpenAI model to use (default: gpt-3.5-turbo)
- `OPENAI_MAX_TOKENS`: Maximum tokens for the response (default: 1000)
- `OPENAI_TEMPERATURE`: Temperature for response generation (default: 0.7)
- `QDRANT_URL`: URL for Qdrant Cloud instance (leave empty for local)
- `QDRANT_API_KEY`: API key for Qdrant Cloud (leave empty for local)
- `PORT`: Port to run the API on (default: 8000)
- `HOST`: Host to bind to (default: 0.0.0.0)
- `RELOAD`: Whether to enable auto-reload (default: True)

## Docker

To build and run with Docker:

```bash
# Build the image
docker build -t textbook-rag-api .

# Run the container
docker run -p 8000:8000 -e OPENAI_API_KEY=your_key -e QDRANT_URL=your_url -e QDRANT_API_KEY=your_key textbook-rag-api
```

## Free Hosting Options

This API can be deployed for free on several platforms:

### Railway
1. Sign up at Railway.app
2. Connect your GitHub repository
3. Create a new project and select this repository
4. Set the following environment variables in the Variables section:
   - OPENAI_API_KEY: your OpenAI API key
   - QDRANT_URL: (optional) your Qdrant Cloud URL or leave empty for local
   - QDRANT_API_KEY: (optional) your Qdrant API key or leave empty for local
5. Deploy the project
6. Your API will be available at the provided Railway URL

### Render (Free Tier)
1. Sign up at Render.com
2. Create a new Web Service
3. Connect to your GitHub repository
4. Use the following settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python load_textbook_content.py && python -m uvicorn src.main:app --host 0.0.0.0 --port $PORT`
5. Set the required environment variables in the Environment Variables section
6. Deploy the service

### Heroku (Free Tier)
1. Sign up at Heroku.com
2. Install the Heroku CLI
3. Create a new app
4. Add the Heroku Python buildpack
5. Set the required environment variables
6. Deploy using Git

## Local Development