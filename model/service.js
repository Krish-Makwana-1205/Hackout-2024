const mongoose = require('mongoose');

const serviceschema = new mongoose.Schema({
    prov_name:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    cost:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
});

const service = new mongoose.model('service', serviceschema);

module.exports = service;