from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import requests
from piper import PiperVoice
import hashlib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_URL = "https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/faber/medium/pt_BR-faber-medium.onnx"
JSON_URL = "https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/faber/medium/pt_BR-faber-medium.onnx.json"

MODEL_PATH = "model.onnx"
JSON_PATH = "model.onnx.json"

def download_model():
    if not os.path.exists(MODEL_PATH):
        print("Downloading Piper model...")
        r = requests.get(MODEL_URL, allow_redirects=True)
        open(MODEL_PATH, 'wb').write(r.content)
    if not os.path.exists(JSON_PATH):
        print("Downloading Piper config...")
        r = requests.get(JSON_URL, allow_redirects=True)
        open(JSON_PATH, 'wb').write(r.content)

download_model()
voice = PiperVoice.load(MODEL_PATH)

os.makedirs("audio_cache", exist_ok=True)

@app.get("/tts")
def tts(text: str):
    # Hash the text to avoid generating the same audio twice
    text_hash = hashlib.md5(text.encode()).hexdigest()
    output_file = f"audio_cache/{text_hash}.wav"
    
    if not os.path.exists(output_file):
        with open(output_file, "wb") as f:
            voice.synthesize(text, f)
            
    return FileResponse(output_file, media_type="audio/wav")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
