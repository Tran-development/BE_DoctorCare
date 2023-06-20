import express from "express";
import bodyParser from "body-parser"; // user?id=7 => getted
import viewEngine from './config/viewEngine';
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB'
require('dotenv').config(); // giup chay dong process.env.PORT

let app = express()

//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

connectDB()

let port = process.env.PORT || 8081
app.listen(port, () => {
    console.log("Backend NodeJS is running on port: " + port)
})