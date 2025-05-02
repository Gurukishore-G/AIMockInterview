# Mock Interview Server

This is the backend server for the Mock Interview application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory with the following content:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

3. Start the server:
```bash
npm start
```

## API Endpoints

- `POST /api/process-audio`: Process audio files with OpenAI Whisper
- `POST /api/get-ai-response`: Get AI responses for interview questions 