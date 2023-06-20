import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.homeAboutMe)
    router.get('/crud', homeController.getCRUD)

    router.post('/post-crud', homeController.postCRUD)
    return app.use("/", router)
}

export default initWebRoutes