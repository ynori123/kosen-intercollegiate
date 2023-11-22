from turtle import title
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles



app = FastAPI()

# CORSミドルウェアを有効にする
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 許可するオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],  # 許可するHTTPメソッドを指定（"*"はすべてのメソッドを許可）
    allow_headers=["*"],  # 許可するヘッダーを指定（"*"はすべてのヘッダーを許可）
)
app.mount("/img", StaticFiles(directory="img"), name="img")

offers = [
    {
        "id" : "f1c32b6c-eaa4-47d2-b4de-08df0c574098",
        "title" : "11/12合同説明会",
        "tag" : "online",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/11450904-0534-4f5a-9130-5816a67a91de.jpg"
    },
    {
        "id" : "b8dbe726-e1e9-4bb6-9429-742e8907cc5f",
        "title" : "11/15合同説明会",
        "tag" : "online",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/33286ac5-1241-4037-bbb6-f90b8deb90bb.jpeg"
    },
    {
        "id" : "e77f8f55-454b-4191-96a7-7b3cd7adaed3",
        "title" : "11/16合同説明会",
        "tag" : "online",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/81aa6123-fd20-4092-b00d-ef190346f08f.jpg"
    },
    {
        "id" : "4a3b20d6-27e3-45ef-9c4d-6e025b428cae",
        "title" : "11/17合同説明会",
        "tag" : "online",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/0c8dd8fe-00b5-47b7-aba0-7b2eb046e426.jpg"
    }
]

@app.get("/offers")
def get_offers():
    return {
    "code" : 0,
    "data" : {
        "page" : 1,
        "totalPage" : 1,
        "offers" : offers
        }
    }

@app.get("/offer/{offer_id}")
def get_offer(offer_id: str):
    offer = {}
    for item in offers:
        if item["id"] == offer_id:
            return {
            "code" : 0,
            "data" : {
                "offer" : item
                }
            }
    return {}
    
