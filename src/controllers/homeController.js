import db from '../models/index'
import CRUDService from '../services/CRUDServices'

// doi voi Express luc nao cung truyen 2 tham so req & res
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
    
}

let homeAboutMe = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message);
    return res.send('post crud from server')
}

export default { getHomePage, homeAboutMe, getCRUD, postCRUD }