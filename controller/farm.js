const express = require('express');
const farm = require('../model/farm');

async function add_farm(req, res){
    const email = req.cookies.email
    let revenue, risk, investment;
    const {id, name, area, soil, rainfall, crop} = req.body
    if(crop == 'wheat'){
        investment = 1000*area;
        risk = 10;
        if(soil == 'black' || soil == 'alluvial'){
            if(rainfall == 'vl'){
                investment += 200*area;
            }
            else if(rainfall == 'vh'){
                risk += 10;
            }
            revenue = 9000*area;
        }
        else{
            if(rainfall == 'vl'){
                investment += 200*area;
            }
            else if(rainfall == 'vh'){
                risk += 10;
            }
            revenue = 7000*area;
        }
    }
    else if(crop == 'rice'){
        investment = 500*area;
        risk = 10;
        if(soil == 'alluvial'){
            if(rainfall == 'vl'){
                investment += 300*area;
                risk += 10;
            }
            revenue = 7000*area;
        }
        else{
            if(rainfall == 'vl'){
                investment += 400*area;
                risk += 10;
            }
            revenue = 6000*area;
        }
    }
    else if(crop == 'potato'){
        investment = 100*area;
        risk = 5;
        if(rainfall == 'vl'){
            risk += 5;
        }
        if(soil == 'alluvial'){
            revenue = 3000*area;
        }
        else{
            revenue = 2000*area;
        }
    }
    await farm.create({
        id,
        email,
        name,
        area,
        soil,
        rainfall,
        crop,
        investment:investment,
        revenue: revenue,
        risk:risk
    })
    const farms = farm.find({email:email});
    return res.render("farm",{
        farms
    });
}

module.exports = {
    add_farm
}