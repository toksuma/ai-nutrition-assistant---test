# AI Nutrition Assistant (MVP Version)

A nutrition assistant application that analyzes fridge photos and provides recipe suggestions.

## Project Structure

```
ai-nutrition-assistant/
├── backend/           # FastAPI backend
│   ├── app/          # Application logic
│   ├── main.py       # Main FastAPI application
│   └── requirements.txt
└── frontend/         # React + Vite frontend
    ├── src/
    └── package.json
```

## Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

The backend API will be available at `http://localhost:8000`

### Backend Endpoints

- `GET /` - Health check endpoint
- `POST /api/analyze-image` - Analyze uploaded fridge image (accepts multipart/form-data with a file)

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

## How to Use

1. Start both the backend and frontend servers (in separate terminals)
2. Open your browser to `http://localhost:5173`
3. Upload a photo of your fridge
4. Click "Analyze Image" to get recipe suggestions
5. View the detected ingredients, recipe suggestion, and estimated calories

## Current Features (MVP)

- Image upload interface with preview
- Mock AI analysis (returns hardcoded response)
- Display of ingredients, recipe suggestions, and calorie information
- Responsive design with Tailwind CSS
- Loading states and error handling

## Future Enhancements

- Integration with Google Gemini Vision API for real image analysis
- Recipe database and multiple recipe suggestions
- Nutritional information details
- User preferences and dietary restrictions
- Recipe saving and history

## Tech Stack

**Backend:**
- FastAPI
- Python 3.x
- Uvicorn (ASGI server)

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Native Fetch API

## Development Notes

The current implementation uses mock data. The `/api/analyze-image` endpoint returns hardcoded values:
- Ingredients: ["Tomato", "Eggs", "Onion"]
- Recipe: "Tomato Scrambled Eggs"
- Calories: 350

This is intentional for the MVP phase to validate the application structure and user flow before implementing the actual AI integration.
