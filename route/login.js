const express = require('express');
const {getuser} = require('../controller/user')

const router = express.Router();

router.get('/', (req, res)=>{
    return res.render('login');
})
// router.post('/',getuser)
module.exports = router;