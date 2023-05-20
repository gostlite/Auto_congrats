from fastapi import FastAPI
from wisher import main

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}


