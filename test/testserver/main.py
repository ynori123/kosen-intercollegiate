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
        "place" : "オンライン",
        "datetime" : "2023/11/12 18:00~19:00",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/offer/11450904-0534-4f5a-9130-5816a67a91de.jpg"
    },
    {
        "id" : "b8dbe726-e1e9-4bb6-9429-742e8907cc5f",
        "title" : "11/15合同説明会",
        "place" : "オンライン",
        "datetime" : "2023/11/12 18:00~19:00",
        "summary" : "X社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/offer/33286ac5-1241-4037-bbb6-f90b8deb90bb.jpeg"
    },
    {
        "id" : "e77f8f55-454b-4191-96a7-7b3cd7adaed3",
        "title" : "11/16合同説明会",
        "place" : "オンライン",
        "datetime" : "2023/11/12 18:00~19:00",
        "summary" : "Y社，Z社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/offer/81aa6123-fd20-4092-b00d-ef190346f08f.jpg"
    },
    {
        "id" : "4a3b20d6-27e3-45ef-9c4d-6e025b428cae",
        "title" : "11/17合同説明会",
        "place" : "オンライン",
        "datetime" : "2023/11/12 18:00~19:00",
        "summary" : "S社，G社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/offer/0c8dd8fe-00b5-47b7-aba0-7b2eb046e426.jpg"
    },
    {
        "id" : "9c4e5807-fa18-4770-a85c-0e1940290c45",
        "title" : "11/20日本郵船説明会",
        "place" : "オンライン",
        "datetime" : "2023/11/12 18:00~19:00",
        "summary" : "日本最大級の商船会社の説明会イベントです．",
        "imgSrc" : "http://localhost:8000/img/offer/a0d6b9b0-8577-4098-8d9c-5c3949ee5977.png"
    }
]
companies = [
    {
        "id": "58697b80-a66d-4d97-9b40-937f4a6a5d18",
        "name": "日本郵船株式会社",
        "tag" : ["商船"],
        "description" : "日本郵船株式会社は、東京都千代田区丸の内に本社を置く、日本の大手海運会社である。三菱グループの中核企業であり、三菱グループの源流企業にあたる。1885年9月29日に、三菱の創始者である岩崎弥太郎によって設立され、1893年12月15日に株式会社となった。三菱金曜会 及び三菱広報委員会 の会員企業である。",
        "imgSrc" : "http://localhost:8000/img/company/314c7c29-8345-4cbf-85bc-b4a006b5ae8e.png",
        "url" : "https://www.nyk.com/"
    },
    {
        "id": "9c20f11d-e864-4336-8eed-5e07748c962b",
        "name": "株式会社商船四井",
        "tag" : ["商船"],
        "description" : "株式会社商船四井は、東京都港区虎ノ門に本店を置く、日本の大手海運会社である。東証プライム上場。略称はYOL。",
        "imgSrc" : "http://localhost:8000/img/company/3b6afd3d-dd30-49a8-9680-0664799d3b57.png",
        "url" : "https://www.yol.co.jp/"
    },
    {
        "id": "ee9ef14e-1afd-4217-8d23-3803bec14de0",
        "name": "株式会社奈良港",
        "tag" : ["タグボート", "港湾"],
        "description" : "株式会社奈良港は，世界最古の港を持つ奈良港を運営する西日本最大の港湾会社である．",
        "imgSrc" : "http://localhost:8000/img/company/86fdec9f-a9c5-40b8-8d8a-3ac8608ec57e.jpg",
        "url" : "https://www.nara-kou.co.jp/"
    },
    {
        "id": "a8b8458e-37b3-400b-826a-6c62e682a091",
        "name": "株式会社タグボートプロフェッショナル",
        "tag" : ["タグボート"],
        "description" : "株式会社タグボートプロフェッショナルは、日本発祥のタグボートベンチャーです．",
        "imgSrc" : "http://localhost:8000/img/company/51aa8cb1-ae96-458a-8ff2-936e531e0b17.jpg",
        "url" : "https://www.tagpoat-pro.co.jp/"
    },
    {
        "id": "a8b8458e-37b3-400b-826a-6c62e682a091",
        "name": "Ever Blue International",
        "tag" : ["商船"],
        "description" : "Ever Blue Internationalは世界最大級の商船会社である．",
        "imgSrc" : "http://localhost:8000/img/company/74b3d8d4-918b-43b3-a2d9-0ec3c7f8d576.jpg",
        "url" : "https:/everblue.com/"
    },
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
    
@app.get("/companies")
def get_companies():
    return {
    "code" : 0,
    "data" : {
        "page" : 1,
        "totalPage" : 1,
        "companies" : companies
        }
    }
