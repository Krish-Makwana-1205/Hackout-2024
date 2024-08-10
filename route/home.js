const express = require('express');
const {add_farm} = require('../controller/farm')
const router = express.Router();
const farm = require('../model/farm');


router.get('/', (req, res)=>{
    res.render('home');
});
router.get('/farms', async (req, res) => {
    const farms = await farm.find({email:req.cookies.email});
    console.log(farms);
    res.render('farm', {
        farms
    });
});

router.post('/farms',add_farm);

module.exports = router;