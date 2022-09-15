import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.homeAboutMe)
    return app.use("/", router)
}

export default initWebRoutes