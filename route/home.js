const express = require('express');
const {add_farm, predictor} = require('../controller/farm');
const {add_service} = require('../controller/service');
const router = express.Router();
const farm = require('../model/farm');
const service = require('../model/service');
const wholesale = require('../model/wholesale');
const {sale_add} = require('../controller/wholesale')


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
router.get('/predict', async (req, res) => {
    res.render('predict');
})
router.get('/service/deals', async(req, res) =>{
    const services = await service.find({});
    res.render('service',{
        services
    })

})
router.get('/wholesale',(req, res)=>{
    res.render('wholesale_home')
})
router.get('/wholesale/exchange', async(req, res)=>{
    const sales = await wholesale.find({email:req.cookies.email});
    return res.render('deals', {
        sales
    });
})
router.get('/alldeals', async(req, res)=>{
    const sales = await wholesale.find({});
    const emails = req.cookies.email
    return res.render('alldeals',{
        sales,
        emails
    })
})


router.post('/predict', predictor);
router.post('/farms', add_farm);
router.post('/service/exchange', add_service);
router.post('/wholesale/exchange', sale_add);


module.exports = router;