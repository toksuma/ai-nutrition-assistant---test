import time
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    """Root endpoint to check if API is running"""
    return {"message": "API is running"}

@app.post("/api/analyze-image")
async def analyze_image(file: UploadFile = File(...)):
    """
    Mock endpoint to analyze an uploaded image
    Simulates AI Vision analysis with hardcoded response
    """
    # Simulate processing delay
    time.sleep(2)
    
    # Return mock response
    return {
        "ingredients": ["Tomato", "Eggs", "Onion"],
        "recipe_suggestion": "Tomato Scrambled Eggs",
        "calories": 350
    }
