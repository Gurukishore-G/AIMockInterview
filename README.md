# AI Mock Interview Application

This application provides a realistic mock interview experience using AI. It records user audio, transcribes it using OpenAI's Whisper model, and generates interview responses using GPT.

## Features

- Real-time audio recording
- Speech-to-text conversion using Whisper
- AI-powered interview responses using GPT
- Conversation history display
- Timer for interview sessions

## Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- OpenAI API key
- Whisper model installed

## Setup Instructions

### 1. Install Whisper

```bash
# Install Whisper
pip install openai-whisper

# Verify installation
whisper --version
```

### 2. Backend Setup

```bash
# Navigate to the server directory
cd src/server

# Install dependencies
npm install

# Create a .env file with your OpenAI API key
echo "OPENAI_API_KEY=your_api_key_here" > .env

# Start the server
npm start
```

### 3. Frontend Setup

```bash
# Navigate to the project root
cd /path/to/project

# Install dependencies
npm install

# Start the development server
npm start
```

## Usage

1. Open the application in your browser
2. Complete the onboarding process
3. Select your interview type and company
4. Click the microphone button to start speaking
5. The application will transcribe your speech and generate an AI response
6. Continue the conversation as needed
7. Click "Leave Interview" when finished

## API Endpoints

- `POST /api/process-audio`: Processes audio files using Whisper
- `POST /api/get-ai-response`: Generates AI responses using GPT

## Technologies Used

- React
- Express.js
- OpenAI Whisper
- OpenAI GPT
- TypeScript
- Tailwind CSS

## License

MIT
