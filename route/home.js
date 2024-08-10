const express = require('express');
const {add_farm} = require('../controller/farm')
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('home');
})
router.get('/farms', (req, res) => {
    res.render('farm')
})

router.post('/farms',add_farm);

module.exports = router;