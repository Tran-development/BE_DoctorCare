import express from "express"

let configViewEngine = (app) => {
    app.use(express.static("./src/public"))
    app.set("view engine", "ejs") // like jsp, blade in java
    app.set("views", "./src/views") 

}

export default configViewEngine