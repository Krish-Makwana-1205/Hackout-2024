const express = require('express');
const service = require('../model/service');

async function add_service(req, res){
    const email = req.cookies.email;
    const{name, cost, prov_name} = req.body;
    await service.create({
        name:name,
        email:email,
        cost:cost,
        prov_name:prov_name
    });
    const services = await service.find({email:email});
    return res.render('service_exchange',{services});
}



module.exports = {
    add_service
}