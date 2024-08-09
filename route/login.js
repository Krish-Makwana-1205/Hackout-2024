const express = require('express');
const {UserSignup} = require('../controller/user')

const router = express.Router();

router.get('/', (req, res)=>{
    return res.render('login');
})
router.post('/',UserSignup)
module.exports = router;