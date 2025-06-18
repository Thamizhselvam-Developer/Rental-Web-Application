const express = require("express");
const db = require("./DataBaseConnection.js");
const routes = require("./Router/Router.js");
const exp = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = process.env.PORT || 5400;

exp.use(express.json());
exp.use(cookieParser());
exp.use(cors({
    origin: ['http://localhost:5173','http://192.168.0.111:5173','http://192.168.0.115:3000','http://192.168.0.115:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'Set-Cookie'],
    exposedHeaders: ['Set-Cookie'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));
exp.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

exp.use(routes.route);

let err = false;


db.connect = new Promise((resolve,reject)=>{

    if(err){
        reject("Your connection is rejected")
    }
    else{
        exp.listen(PORT , "0.0.0.0",()=>{
                console.log("Server Running Succesfully ")
        })

        

        resolve ("Connection is Resolved")
1
    }

})

db.connect.then((msg) => {
    console.log("Success MSG = " + msg);
}).catch((err) => {
    console.log("Error = " + err);
});
