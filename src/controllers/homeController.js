
// doi voi Express luc nao cung truyen 2 tham so req & res
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let homeAboutMe = (req, res) => {
    return res.render('test/about.ejs')
}

export default { getHomePage, homeAboutMe }