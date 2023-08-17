# Tokopedia Play Clone

Tokopedia Play Clone is a replica of Tokopedia Play. Here, user can check the list of the video displayed, add comments to that video, and also check the products linked to the video.

# URL
You can access the hosted FE and BE in tis following url:
- Frontend: https://gg-tokped-play-clone-final-fe.vercel.app/
- Backend: https://gg-tokped-play-clone-final-api.vercel.app/

## Prerequisite
Make sure you have installed these software before running the program:
- [Download | Node.js (nodejs.org)](https://nodejs.org/en/download)
- [Download MongoDB Community Server | MongoDB - https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- [Installation | Yarn (yarnpkg.com)](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Installation
1. Git clone this repository with command:
```
git clone https://github.com/pippuu/gg_tokped_play_clone_final.git
```
2. Install the dependencies needed with yarn for both Backend and Frontend directory with command:
```
// Go to frontend directory
// Make sure you are already in each directory (either fe or be)
cd fe
yarn install

// Go to backend directory
cd be
yarn install
```

3. Make copy of .env_example in the be directory and name it .env. Then, replace and adjust the value of MONGO_DB_URI and APP_PORT.
```
// Replace it with your own mongo db uri (locally or hosted)
MONGO_DB_URI = mongodb://localhost:27017 // default localhost mongoDB
APP_PORT = 8080 // default port
```

3. Run the Backend and Frontend locally with command:
```
// Make sure you are already in each directory (either fe or be)
// For running frontend locally
yarn dev

// For running backend locally
yarn start
```

4. Start experimenting!

## Features
- Homepage. See all the list of videos stored in database (mongodb).
- Video details page. See the detail of a video, comments of the video, and products listed in the video.
- Comment section. See or add comment corresponding to the video.

## Routes
- "/": Direct to homepage.
- "/video/:id": Direct to the video detail page of the selected id.

## The Main Tokopedia Play Clone API Documentation

### Video

#### Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | ObjectID | unique identifier |
| title | String | title of the video (required) |
| url | String | link to the youtube url (required) |
| urlThumbnail | String | link for the video's thumbnail (required) |
| tag | String | categories for the video (required) |
| owner | String | owner of the video (required) |

#### API Structure
Get Video Thumbnail List
```
Method: GET
URL: http://localhost:8080/api/video
Response: {
    "statusCode": 200,
    "success": true,
    "data": [
        {
            "_id": "64ddb1b931f9f44a31cac6f6",
            "title": "Topup diamond",
            "tag": "Live",
            "urlThumbnail": "https://i.ytimg.com/vi/d0WuRI0SyUw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh7IDUofzAP&rs=AOn4CLCQyToABu0vuvbYFHA7LfoILX1nHQ",
            "url": "https://www.youtube.com/watch?v=d0WuRI0SyUw&pp=ygUOVG9wIHVwIGRpYW1vbmQ%3D",
            "owner": "BenGaming Shop",
            "__v": 0
        },
        {
            "_id": "64ddb62d6ef62d44f3d81a14",
            "title": "Topup diamond",
            "tag": "Live",
            "urlThumbnail": "https://i.ytimg.com/vi/d0WuRI0SyUw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh7IDUofzAP&rs=AOn4CLCQyToABu0vuvbYFHA7LfoILX1nHQ",
            "url": "https://www.youtube.com/watch?v=d0WuRI0SyUw&pp=ygUOVG9wIHVwIGRpYW1vbmQ%3D",
            "owner": "BenGemingShop",
            "__v": 0
        },
        {
            "_id": "64ddb87ca581965e996de8be",
            "title": "Topup ml murah",
            "tag": "Promo",
            "urlThumbnail": "https://i.ytimg.com/vi/vJCzAp0oD9M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgBk5te5h-iZlxd-Q_3XN0PS1WkQ",
            "url": "https://www.youtube.com/watch?v=vJCzAp0oD9M&pp=ygUIVG9wdXAgTUw%3D",
            "owner": "JessUnlimited",
            "__v": 0
        },
        {
            "_id": "64ddb8d1a581965e996de8c0",
            "title": "Borong furniture rumah",
            "tag": "Live",
            "urlThumbnail": "https://i.ytimg.com/vi/3x40E518Kec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7076wreGIpdDSYyJxjIfLm3Nq8g",
            "url": "https://www.youtube.com/watch?v=3x40E518Kec&pp=ygUUQmVsaSBmdXJuaXR1cmUgcnVtYWg%3D",
            "owner": "Bedah Rumah Official",
            "__v": 0
        }
    ]
}
```

### Product

#### Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | ObjectID | unique identifier |
| title | String | title of the product |
| url | String | url of the product |
| urlThumbnail | String | url thumbnail of the product |
| price | Number | cost of the product |
| videoID | ObjectID | reference to the according video |

#### API Structure
Get Product List by VideoID
```
Method: GET
URL: http://localhost:8080/api/product/video/:id
Response: {
    "statusCode": 200,
    "success": true,
    "data": [
        {
            "_id": "64ddbacd2b48e2908a30b187",
            "title": "Topup 1000 diamond",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiqtorehOOAAxV6aGwGHdxFBosQFnoECBcQAQ&url=https%3A%2F%2Fwww.lapakgaming.com%2Fid-id%2Fmobile-legends&usg=AOvVaw001yxgtuj8IrVz9G2Dxq3k&opi=89978449m",
            "urlThumbnail": "https://s2.bukalapak.com/img/25318965942/s-400-400/data.jpeg.webp",
            "price": 150000,
            "videoID": "64ddb87ca581965e996de8be",
            "__v": 0
        },
        {
            "_id": "64ddbc24a581965e996de8ce",
            "title": "Topup 1000 diamond",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiqtorehOOAAxV6aGwGHdxFBosQFnoECBcQAQ&url=https%3A%2F%2Fwww.lapakgaming.com%2Fid-id%2Fmobile-legends&usg=AOvVaw001yxgtuj8IrVz9G2Dxq3k&opi=89978449m",
            "urlThumbnail": "https://s2.bukalapak.com/img/25318965942/s-400-400/data.jpeg.webp",
            "price": 150000,
            "videoID": "64ddb87ca581965e996de8be",
            "__v": 0
        },
        {
            "_id": "64ddbc26a581965e996de8d1",
            "title": "Topup 1000 diamond",
            "url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiqtorehOOAAxV6aGwGHdxFBosQFnoECBcQAQ&url=https%3A%2F%2Fwww.lapakgaming.com%2Fid-id%2Fmobile-legends&usg=AOvVaw001yxgtuj8IrVz9G2Dxq3k&opi=89978449m",
            "urlThumbnail": "https://s2.bukalapak.com/img/25318965942/s-400-400/data.jpeg.webp",
            "price": 150000,
            "videoID": "64ddb87ca581965e996de8be",
            "__v": 0
        }
    ]
}
```

### Comment

#### Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | ObjectID | unique identifier |
| username | String | the username of the author |
| comment | String | the message of the comment |
| videoID | ObjectID | reference to the according video |
| createdAt | Date | the time when the document created |
| updatedAt | Date | the time when the document updated |

#### API Structure
- Submit Comment
```
Method: POST
URL: http://localhost:8080/api/comment
Response: {
    "statusCode": 200,
    "success": true,
    "message": "Successfully created comment."
}
```

- Get Comment List by VideoID
```
Method: GET
URL: http://localhost:8080/api/comment/video/:id
{
    "statusCode": 200,
    "success": true,
    "data": [
        {
            "_id": "64ddb9e42b48e2908a30b17e",
            "username": "Roger",
            "comment": "Keren",
            "videoID": "64ddb87ca581965e996de8be",
            "createdAt": "2023-08-17T06:10:44.525Z",
            "updatedAt": "2023-08-17T06:10:44.525Z",
            "__v": 0
        },
        {
            "_id": "64ddba042b48e2908a30b181",
            "username": "Layla",
            "comment": "Mantapppp",
            "videoID": "64ddb87ca581965e996de8be",
            "createdAt": "2023-08-17T06:11:16.696Z",
            "updatedAt": "2023-08-17T06:11:16.696Z",
            "__v": 0
        }
    ]
}
```


## Authors
Rafif Fausta Kusuma Syam

## Notes
After this GIGIH program, I will be updating this code for both Frontend and Backend, maybe migrating to NextJS will be better. Let me know if you have better idea to improve this project.
