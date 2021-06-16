//get home page for student
exports.getStudent = (req, res) =>{
    res.render('PC/index', {
        pageTitle: 'RougeNiel16'
    });
}

//get register page
exports.getMenu = (req, res) =>{
    res.render('PC/menu', {
        pageTitle: '2020'
    });
}


//get register page
exports.getNewProduct = (req, res) =>{
    res.render('PC/new', {
        pageTitle: '2018'
    });
}


//get register page
exports.getContactUs = (req, res) =>{
    res.render('PC/contact', {
        pageTitle: '2019'
    });
}

