chuc nang register:

url: /api/auth/register
req.body:
    {
        "email":"admin@gmail.com",
        "fullname":"admin",
        "password":"123456",
        "repassword":"123456"
    }

res:

    {
        "status":200,
        "message":"success",
        "user":{
            "USERID":"2",
            "email":"admin@gmail.com",
            "username":"",
            "password":"",
            "fullname":"quang minh",
            "gender":"nam",
            "decription":"Tran Quang Minh",
            "yourviewed":"0",
            "profileviewed":"0",
            "youviewed":"0",
            "lastlogin":"",
            "status":"1",
            "profilepicture":"",
            "permission":"admin"
        },
        "token":""
    }

chuc nang login:

url: /api/auth/login
req.body:
    {
        "email":"admin@gmail.com",
        "password":"123456"
    }

res:

{
    "status":200,
    "message":"success",
    "user":{
        "USERID":"2",
        "email":"admin@gmail.com",
        "username":"",
        "password":"",
        "fullname":"quang minh",
        "gender":"nam",
        "decription":"Tran Quang Minh",
        "yourviewed":"0",
        "profileviewed":"0",
        "youviewed":"0",
        "lastlogin":"",
        "status":"1",
        "profilepicture":"",
        "permission":"admin"
    },
    "token":""
}

