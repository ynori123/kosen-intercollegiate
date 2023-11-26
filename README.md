# API Document
## test
launch test server
```shell
chmod 755 test.sh
./test.sh
```
launch frontend 
```shell
npm run dev
or 
npm start
```
## GET /offers

```json
{
  "code" : 0,
  "data" : {
    "page" : 1,
    "totalPage" : 1,
    "offers" : [
      {
        "id" : "f1c32b6c-eaa4-47d2-b4de-08df0c574098",
        "title" : "11/12合同説明会",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://example.com/11450904-0534-4f5a-9130-5816a67a91de.png"
      },
      {
        "id" : "b8dbe726-e1e9-4bb6-9429-742e8907cc5f",
        "title" : "11/15合同説明会",
        "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
        "imgSrc" : "http://example.com/33286ac5-1241-4037-bbb6-f90b8deb90bb.png"
      }
    ]
  }
}
```
## GET /offers/{offerId}
```json
{
  "code" : 0,
  "offer" : {
    "id" : "f1c32b6c-eaa4-47d2-b4de-08df0c574098",
    "title" : "11/12合同説明会",
    "summary" : "A社，B社，C社の求人が一度に見れる説明会イベントです．",
    "imgSrc" : "http://example.com/11450904-0534-4f5a-9130-5816a67a91de.png",
    "content" : "A社：日本最大の商船会社 B社：タグボート事業会社 C社：XX港管理会社"
  }
}
```
