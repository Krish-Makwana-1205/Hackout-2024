const express = require('express');
const wholesale = require('../model/wholesale');

async function sale_add(req,res){
    const email = req.cookies.email;
    const {buy_name, crop, price, weight} = req.body;
    await wholesale.create({
        email:email,
        buy_name:buy_name,
        price:price,
        crop:crop,
        weight:weight
    });
    const sales = await wholesale.find({email:email});
    return res.render('deals',{sales});
}

module.exports = {
    sale_add
}