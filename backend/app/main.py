from fastapi import FastAPI

app = FastAPI(title="StadiumSense AI")


@app.get("/")
def home():
    return {
        "message": "Welcome to StadiumSense AI"
    }