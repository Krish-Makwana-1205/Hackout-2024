const mongoose = require('mongoose');

const wholesaleschema = new mongoose.Schema({
    buy_name:{
        type: String,
        required: true,
    },
    crop:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    weight:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true
    }
});

const wholesale = new mongoose.model('wholsale', wholesaleschema);

module.exports = wholesale;