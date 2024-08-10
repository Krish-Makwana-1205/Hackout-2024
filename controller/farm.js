const express = require('express');
const farm = require('../model/farm');

async function add_farm(req, res){
    const email = req.cookies.email
    let revenue, risk, investment;
    const {id, name, area, soil, rainfall, crop} = req.body
    if(crop == 'wheat')
    await farm.create({
        id,
        email,
        name,
        area,
        soil,
        rainfall,
        crop
    })
    return res.json({
        success:true,
    });
}

module.exports = {
    add_farm
}