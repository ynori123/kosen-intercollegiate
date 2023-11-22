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


@app.get("/offers")
def get_offers():
    return {
    "code" : 0,
    "data" : {
        "page" : 1,
        "totalPage" : 1,
        "offers" : [
            {
                "id" : "f1c32b6c-eaa4-47d2-b4de-08df0c574098",
                "title" : "11/12合同説明会",
                "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
                "imgSrc" : "http://localhost:8000/img/11450904-0534-4f5a-9130-5816a67a91de.jpg"
            },
            {
                "id" : "b8dbe726-e1e9-4bb6-9429-742e8907cc5f",
                "title" : "11/15合同説明会",
                "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
                "imgSrc" : "http://localhost:8000/img/33286ac5-1241-4037-bbb6-f90b8deb90bb.jpeg"
            },
            {
                "id" : "b8dbe726-e1e9-4bb6-9429-742e8907cc5f",
                "title" : "11/16合同説明会",
                "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
                "imgSrc" : "http://localhost:8000/img/33286ac5-1241-4037-bbb6-f90b8deb90bb.jpg"
            },
            {
                "id" : "b8dbe726-e1e9-4bb6-9429-742e8907cc5f",
                "title" : "11/17合同説明会",
                "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
                "imgSrc" : "http://localhost:8000/img/33286ac5-1241-4037-bbb6-f90b8deb90bb.jpg"
            }
            ]
        }
    }
