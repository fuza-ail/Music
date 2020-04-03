# Top Track Music 🎵 🥁

Welcome to our Top Track Music website!  
Make your virtuoso dreams come true!

## Description

This website could search Music titles that you'll  
play, also it'll show you some previews, and the band's  
newest events 🤘  
P.S : You could also buy tickets too! 🎫 🎫 🎫  

## Contributing

1. Clone this project
2. `npm install` on server folder
3. Run `npx sequelize-cli db:create`
4. Run `npx sequelize-cli db:migrate`
5. Then run the server `nodemon app.js`
6. Goto client folder
7. Run `live-server --host=localhost`
8. Voila!

## Docs

**_APIs_** :

  1. [ Google Sign In ](https://developers.google.com/identity/sign-in/web/sign-in) and Authentications by @fuza-ail
  2. [ LyricsOvh ](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1), [ Deezer ](https://developers.deezer.com/login?redirect=/api), and [ Ticketmaster ](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) by @JulioSabandar  

**_Frameworks_** :

  1. [ Bulma ](https://bulma.io/) by @padulkemid and @2maleek
  2. [ SWAL2 ](https://sweetalert2.github.io/) (SweetAlert2) by @2maleek


## RESTful API

### GET /music
> Get all liked songs from database

_Request Header_
```javascript
{
  "Content-Type": "application/json; charset=utf-8",
  "access_token": "<access_token>"
}
```

_Request Body_
```javascript
not needed
```

_Response (200)_
```javascript
{
    "songs": [
        {
            "id": 3,
            "title": "Hey Jude",
            "artist": "The Beatles",
            "picture": "https://cdns-images.dzcdn.net/images/cover/c65b3bd84e81056e060be144381c06c8/500x500-000000-80-0-0.jpg",
            "clip": "https://cdns-preview-4.dzcdn.net/stream/c-48dcd704e15944fb14e9c3d857dc2f8e-9.mp3",
            "like": true,
            "UserId": 1,
            "createdAt": "2020-04-02T18:37:18.453Z",
            "updatedAt": "2020-04-02T18:49:59.722Z"
        },
        {
            "id": 6,
            "title": "Beat It (Single Version)",
            "artist": "Michael Jackson",
            "picture": "https://e-cdns-images.dzcdn.net/images/cover/ebeac32e9207c60877228ddc5bb37233/500x500-000000-80-0-0.jpg",
            "clip": "https://cdns-preview-3.dzcdn.net/stream/c-38cc628c62382a20a53316db263f0547-2.mp3",
            "like": true,
            "UserId": 1,
            "createdAt": "2020-04-02T18:48:44.273Z",
            "updatedAt": "2020-04-02T18:50:06.234Z"
        },
        {
            "id": 7,
            "title": "Black or White",
            "artist": "Michael Jackson",
            "picture": "https://e-cdns-images.dzcdn.net/images/cover/93a5354699d552666448e1c87c976605/500x500-000000-80-0-0.jpg",
            "clip": "https://cdns-preview-d.dzcdn.net/stream/c-d99cc18414c8d4dd96eace504aeec035-3.mp3",
            "like": true,
            "UserId": 1,
            "createdAt": "2020-04-02T18:49:01.462Z",
            "updatedAt": "2020-04-02T18:50:11.880Z"
        },
        {
            "id": 9,
            "title": "DNA.",
            "artist": "Kendrick Lamar",
            "picture": "https://cdns-images.dzcdn.net/images/cover/7ce6b8452fae425557067db6e6a1cad5/500x500-000000-80-0-0.jpg",
            "clip": "https://cdns-preview-5.dzcdn.net/stream/c-571e155201d95de6d83975c1a389005f-4.mp3",
            "like": true,
            "UserId": 1,
            "createdAt": "2020-04-02T18:51:59.699Z",
            "updatedAt": "2020-04-02T19:02:52.433Z"
        },
        {
            "id": 12,
            "title": "Lose Yourself",
            "artist": "Eminem",
            "picture": "https://cdns-images.dzcdn.net/images/cover/4463549afef8fbd03101a264ab744e11/500x500-000000-80-0-0.jpg",
            "clip": "https://cdns-preview-8.dzcdn.net/stream/c-8d5dd68d7b62a5d1eed5bfcd1cfbe53b-7.mp3",
            "like": true,
            "UserId": 1,
            "createdAt": "2020-04-02T22:16:46.087Z",
            "updatedAt": "2020-04-02T22:17:02.221Z"
        }
    ]
}
```

_Response (400)_
```javascript
{
  "message": "Access Forbidden"
}
```


_Response (500 - Internal Server Error)_
```javascript
{
  "message": "Internal Server Error"
}
```
---


### POST /music/search'
> Search for music from the APIs

_Request Header_
```javascript
{
  "Content-Type": "application/json; charset=utf-8",
  "access_token": "<access_token>"
}
```

_Request Body_
```javascript
{
  "search": "Hey Mama Kanye West"
}
```

_Response (200)_
```javascript
{
    "song": {
        "id": 24,
        "title": "Hey Mama",
        "artist": "Kanye West",
        "picture": "https://cdns-images.dzcdn.net/images/cover/288c2e16a5dc45db35f316ab373e0943/500x500-000000-80-0-0.jpg",
        "clip": "https://cdns-preview-d.dzcdn.net/stream/c-d2aeda7faaf2bf03144d10b110f6074c-8.mp3",
        "like": false,
        "UserId": 1,
        "updatedAt": "2020-04-03T05:18:11.186Z",
        "createdAt": "2020-04-03T05:18:11.186Z"
    },
    "lyrics": "Hey Mama, I wanna scream so loud for you, 'cause I'm so proud of you\nAnd Let me tell you what I'm about to do, Hey Mama\nI know I act a fool but I promise you I'm goin' back to school\nAnd I appreciate what you allowed for me\nAnd I just want you to be proud of me.\nHey Mama.\n\nI wanna tell the whole world about a friend of mine\nThis little light of mine and I'm finna let it shine\nI'm finna take y'all back to them better times\nI'm gonna talk about my mama if y'all don't mind\nI was 3 years old, when you and I moved to the Chi\nLate December, harsh winter gave me a cold\nYou fixed me up somethin' that was good for my soul\nFamous homemade chicken soup, can I have another bowl?\nYou work late nights just to keep on the lights\nMommy got me training wheels so I could keep on my bike\nAnd you would give anything in this world\nMichael Jackson leather and a glove, but didn't give me a curl\nAnd you never put no man over me\nAnd I love you for that Mommy can't you see?\n7 years old, I caught you with tears in your eyes\nCause a nigga cheatin' tellin' you lies then I started to cry\nAs we knelt on the kitchen floor\nI said Mommy I'm a love you so you don't hurt no more\nAnd when I'm older, you ain't gotta work no more\nAnd I'm a get you that mansion that we couldn't afford\nSee your unbreakable unmistakable\nHighly capable, lady that's makin' loot\nA livin' legend too, just look at what heaven do\nSend us an angel, and I thank you.\n\nHey Mama, I wanna scream so loud for you, 'cause I'm so proud of you\nAnd Let me tell you what I'm about to do, Hey Mama\nI know I act a fool but I promise you I'm goin' back to school\nAnd I appreciate what you allowed for me\nAnd I just want you to be proud of me.\nHey Mama.\n\nForrest Gump mama said, life is like a box of chocolates\nMy mama told me \"Go to school get your doctorate.\"\nSomethin' to fall back on, you could profit with\nBut still supported me when I did the opposite\nNow I feel like it's things I gotta get\nThings I gotta do, just to prove to you\nYou was gettin' through, can the choir please\nGive me a verse of \"You Are So Beautiful To Me?\"\nCan't you see, you're like a book of poetry\nMaya Angelou, Nicky Jovanni, turn 1 page and there's my Mommy\nCome on Mommy just dance with me, let the whole world see your dancing feet\nNow when I say \"Hey\" y'all say \"Mama\" now everybody answer me.\n\nHey Mama, I wanna scream so loud for you, 'cause I'm so proud of you\nAnd Let me tell you what I'm about to do, Hey Mama\nI know I act a fool but I promise you I'm goin' back to school\nAnd I appreciate what you allowed for me\nAnd I just want you to be proud of me.\nHey Mama.\n\nI guess it also depends though, if my ends low\nSecond they get up you gon' get that Benzo\nTint the windows, ride around the city and let your friends know.\nHey Mama.\n\nTell your job you gotta fake 'em out\nSince you brought me in this world, let me take you out\nTo a restaurant, upper echelon\nI'm a get you a jag, whatever else you want\nJust tell me what kind of S-Type Donda West like?\nTell me the perfect color so I make it just right\nIt don't gotta be Mother's Day, or your birthday\nFor me to just call and say \"Hey Mama.\"\n\nI wanna scream so loud for you, 'cause I'm so proud of you\nAnd Let me tell you what I'm about to do, Hey Mama.\nYou know I love you so and I never let you go\nI wrote this song just so you know no matter where you go my love is true.\nHey Mama.\nHey Mama.\nHey Mama.\nHey Mama.\nHey Mama.\n\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama.\nMy mama mama mama."
}
```

_Response (404 - Not Found)_
```javascript
{
  "message": "Song not found"
}
```


_Response (500 - Internal Server Error)_
```javascript
{
  "message": "Internal Server Error"
}
```
---
### POST /music/:id
> Add Searched Song to Playlist

_Request Header_
```javascript
{
  "Content-Type": "application/json; charset=utf-8",
  "access_token": "<access_token>"
}
```

_Request Body_
```javascript
not needed
```

_Response (200)_
```javascript
{
    "song": {
        "id": 24,
        "title": "Hey Mama",
        "artist": "Kanye West",
        "picture": "https://cdns-images.dzcdn.net/images/cover/288c2e16a5dc45db35f316ab373e0943/500x500-000000-80-0-0.jpg",
        "clip": "https://cdns-preview-d.dzcdn.net/stream/c-d2aeda7faaf2bf03144d10b110f6074c-8.mp3",
        "like": true,
        "UserId": 1,
        "createdAt": "2020-04-03T05:18:11.186Z",
        "updatedAt": "2020-04-03T05:56:10.345Z"
    }
}
```

_Response (400)_
```javascript
{
  "message": "Access Forbidden"
}
```

_Response (404 - Not Found)_
```javascript
{
  "message": "Song Not Found"
}
```

_Response (500 - Internal Server Error)_
```javascript
{
  "message": "Internal Server Error"
}
```

---

### DELETE /music/:id
> Delete song from playlist

_Request Header_
```javascript
{
  "Content-Type": "application/json; charset=utf-8",
  "access_token": "<access_token>"
}
```

_Request Body_
```javascript
not needed
```

_Response (200)_
```javascript
{
    "song": {
        "id": 24,
        "title": "Hey Mama",
        "artist": "Kanye West",
        "picture": "https://cdns-images.dzcdn.net/images/cover/288c2e16a5dc45db35f316ab373e0943/500x500-000000-80-0-0.jpg",
        "clip": "https://cdns-preview-d.dzcdn.net/stream/c-d2aeda7faaf2bf03144d10b110f6074c-8.mp3",
        "like": true,
        "UserId": 1,
        "createdAt": "2020-04-03T05:18:11.186Z",
        "updatedAt": "2020-04-03T05:56:10.345Z"
    }
}
```

_Response (400)_
```javascript
{
  "message": "Access Forbidden"
}
```

_Response (404 - Not Found)_
```javascript
{
  "message": "Song Not Found"
}
```

_Response (500 - Internal Server Error)_
```javascript
{
  "message": "Internal Server Error"
}
```

---

### GET /music/:id/events
> View events related to artist of song in playlist

_Request Header_
```javascript
{
  "Content-Type": "application/json; charset=utf-8",
  "access_token": "<access_token>"
}
```

_Request Body_
```javascript
not needed
```

_Response (200)_
```javascript
{
    "artist": "Kanye West",
    "events": [
        {
            "name": "A 16-Piece Orchestra Performs Kanye West: MBDTF",
            "date": "2020-07-14",
            "time": "19:00:00",
            "url": "https://www.ticketweb.uk/event/a-16-piece-orchestra-performs-xoyo-tickets/10532805?REFERRAL_ID=tmfeed"
        },
        {
            "name": "The College Dropout - an Orchestral Rendition of Kanye West",
            "date": "2020-11-19",
            "time": "19:00:00",
            "url": "https://www.ticketweb.uk/event/the-college-dropout-xoyo-tickets/10366925?REFERRAL_ID=tmfeed"
        }
    ]
}
```

_Response (400)_
```javascript
{
  "message": "Access Forbidden"
}
```

_Response (404 - Not Found)_
```javascript
{
  "message": "Song Not Found"
}
```

_Response (500 - Internal Server Error)_
```javascript
{
  "message": "Internal Server Error"
}
```
---

### POST /login
- Request body:
```javascript
{
	"email":"fuzatamfan@gmail.com",
	"password": "asdf"
}
```

- Response:
```javascript
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE3LCJVc2VyRW1haWwiOiJmdXphdGFtZmFuQGdtYWlsLmNvbSIsImlhdCI6MTU4NTg5MzA4Nn0.qSb7H55vGDbiO6SGPpZRFlygA_RhJIJx6y6uQZhikFY"
}
```


- Error respnose ( wrong password):
```javascript
{
    "error": "wrong password"
}
```
---

### POST /register

- Request body:
```javascript
{
	"email":"fuzatamfan@gmail.com",
	"password": "asdf"
}
```

- Response:
```javascript
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjE3LCJVc2VyRW1haWwiOiJmdXphdGFtZmFuQGdtYWlsLmNvbSIsImlhdCI6MTU4NTg5MzA4Nn0.qSb7H55vGDbiO6SGPpZRFlygA_RhJIJx6y6uQZhikFY"
}
```

- Error response ( email already exists ):
```javascript
{
    "name": "SequelizeUniqueConstraintError",
    "errors": [
        {
            "message": "email must be unique",
            "type": "unique violation",
            "path": "email",
            "value": "fuzatamfan@gmail.com",
            "origin": "DB",
            "instance": {
                "id": null,
                "email": "fuzatamfan@gmail.com",
                "password": "$2a$10$OJBvlKQIl5OZR5xIqJHJY.2F2wkboKsHnoLrgo13C46OUfX3oojae",
                "updatedAt": "2020-04-03T05:59:31.348Z",
                "createdAt": "2020-04-03T05:59:31.348Z"
            },
            "validatorKey": "not_unique",
            "validatorName": null,
            "validatorArgs": []
        }
    ],
    "fields": {
        "email": "fuzatamfan@gmail.com"
    },
    "parent": {
        "name": "error",
        "length": 212,
        "severity": "ERROR",
        "code": "23505",
        "detail": "Key (email)=(fuzatamfan@gmail.com) already exists.",
        "schema": "public",
        "table": "Users",
        "constraint": "Users_email_key",
        "file": "nbtinsert.c",
        "line": "570",
        "routine": "_bt_check_unique",
        "sql": "INSERT INTO \"Users\" (\"id\",\"email\",\"password\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4) RETURNING *;",
        "parameters": [
            "fuzatamfan@gmail.com",
            "$2a$10$OJBvlKQIl5OZR5xIqJHJY.2F2wkboKsHnoLrgo13C46OUfX3oojae",
            "2020-04-03T05:59:31.348Z",
            "2020-04-03T05:59:31.348Z"
        ]
    },
    "original": {
        "name": "error",
        "length": 212,
        "severity": "ERROR",
        "code": "23505",
        "detail": "Key (email)=(fuzatamfan@gmail.com) already exists.",
        "schema": "public",
        "table": "Users",
        "constraint": "Users_email_key",
        "file": "nbtinsert.c",
        "line": "570",
        "routine": "_bt_check_unique",
        "sql": "INSERT INTO \"Users\" (\"id\",\"email\",\"password\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4) RETURNING *;",
        "parameters": [
            "fuzatamfan@gmail.com",
            "$2a$10$OJBvlKQIl5OZR5xIqJHJY.2F2wkboKsHnoLrgo13C46OUfX3oojae",
            "2020-04-03T05:59:31.348Z",
            "2020-04-03T05:59:31.348Z"
        ]
    },
    "sql": "INSERT INTO \"Users\" (\"id\",\"email\",\"password\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4) RETURNING *;"
}
```

- Error response ( empty email ):
```javascript
{
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Validation notEmpty on email failed",
            "type": "Validation error",
            "path": "email",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "email": "",
                "password": "$2a$10$LFCaAvpfGeiKJO777rF4beDyYifD.98pr277i4jVHXrI4uq7gJTqG",
                "updatedAt": "2020-04-03T06:11:27.595Z",
                "createdAt": "2020-04-03T06:11:27.595Z"
            },
            "validatorKey": "notEmpty",
            "validatorName": "notEmpty",
            "validatorArgs": [
                false
            ],
            "original": {
                "validatorName": "notEmpty",
                "validatorArgs": [
                    false
                ]
            }
        }
    ]
}
```
