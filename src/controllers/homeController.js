
let getHomePage = (req,res) =>{
    return res.render('HomePage.ejs');
}

let getAboutMe = (req,res) =>{
    return res.render('test/about.ejs');
}

//object: {
    // key: '',
    // value: ''    
//}

module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe
}