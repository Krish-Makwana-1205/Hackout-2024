const express = require('express');
const {add_farm, predictor} = require('../controller/farm');
const {add_service} = require('../controller/service');
const router = express.Router();
const farm = require('../model/farm');
const service = require('../model/service');

router.get('/', (req, res)=>{
    res.render('home');
});
router.get('/farms', async (req, res) => {
    const farms = await farm.find({email:req.cookies.email});
    res.render('farm', {
        farms
    });
});
router.get('/farms', async(req, res) =>{
    return res.render('/predict');
});
router.get('/service', async (req, res) =>{
    res.render('service_home');
})
router.get('/service/exchange', async (req, res) =>{
    const email = req.cookies.email;
    const services = await service.find({email:email});
    res.render('service_exchange',{
        services
    });
})

router.post('/predict', predictor);
router.post('/farms', add_farm);
router.post('/service/exchange', add_service);


module.exports = router;