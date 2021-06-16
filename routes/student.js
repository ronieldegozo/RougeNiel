const express = require('express');
const router = express.Router();
const {getStudent, getMenu, getNewProduct, getContactUs} = require('../controller/student');
const { postEmail} = require('../controller/email');


//get student  home page
router.get('/', getStudent);

//register page
router.get('/2020', getMenu);

router.get('/2018', getNewProduct);

router.get('/2019', getContactUs);

//email student inquiry
router.post('/email', postEmail);



module.exports = router;
