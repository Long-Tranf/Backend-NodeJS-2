import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 6969;
//Port === undefined => port = 6969
app.listen(port, () =>{
    //callback
    console.log("BackEnd NodeJS is running on the port : "+port);
})