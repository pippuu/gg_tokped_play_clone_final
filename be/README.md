# GIGIH Tokopedia Play Clone API
---
This API was created for GIGIH midterm assignment. The technologies used I list as follows

```
Language: Javascript
Database: MongoDB
Framework: Express
```

## Prerequisite
Make sure you have installed these software before running the program:
- [Download | Node.js (nodejs.org)](https://nodejs.org/en/download)
- [Download MongoDB Community Server | MongoDB - https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)


## Installation

```
// Clone the repo from git
git clone 

// Install the dependencies
cd midterm_assignment
npm install 

ps: don't forget to create your own .env file by copying from the .env_example
```

## Run the program

```
// Start the program with nodemon
npm run dev

or

// Start the program only using node
node src/index.js
```

## The Main API Documentation

### Video

#### Collection Structure
| Key | Type | Description |
| --- | ------|-------------|
| _id | ObjectID | unique identifier |
| urlThumbnail | String | link for the video's thumbnail |

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
            "_id": "64c312b30fadf50229584124",
            "urlThumbnail": "http://wahgosong.com",
            "__v": 0
        },
        {
            "_id": "64c33f3847d3aac43c9bff80",
            "urlThumbnail": "http://mantapmania.com",
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
            "_id": "64c316cec6f037b3bf9fff5e",
            "title": "Uwa",
            "url": "google.com",
            "price": 100000,
            "videoID": "64c312b30fadf50229584124",
            "__v": 0
        },
        {
            "_id": "64c3196fb299086589df9ece",
            "title": "Uwa",
            "url": "google.com",
            "price": 100000,
            "videoID": "64c312b30fadf50229584124",
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
Response: {
    "statusCode": 200,
    "success": true,
    "data": [
        {
            "_id": "64c336531ac0bc1466bb8b60",
            "username": "dummy",
            "comment": "macing mantap",
            "videoID": "64c312b30fadf50229584124",
            "createdAt": "2023-07-28T03:30:27.064Z",
            "updatedAt": "2023-07-28T03:30:27.064Z",
            "__v": 0
        },
        {
            "_id": "64c336db5cb24f8feac32b01",
            "username": "dummy",
            "comment": "macing mantap",
            "videoID": "64c312b30fadf50229584124",
            "createdAt": "2023-07-28T03:32:43.406Z",
            "updatedAt": "2023-07-28T03:32:43.406Z",
            "__v": 0
        },
        {
            "_id": "64c337ef6027f15df9c377d3",
            "username": "dummy",
            "comment": "macing mantap",
            "videoID": "64c312b30fadf50229584124",
            "createdAt": "2023-07-28T03:37:19.718Z",
            "updatedAt": "2023-07-28T03:37:19.718Z",
            "__v": 0
        }
    ]
}
```

## Authors
- Rafif Fausta Kusuma Syam