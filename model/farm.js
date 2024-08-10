const mongoose = require('mongoose');

const farmschema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    area:{
        type: Number,
        required: true,
    },
    soil:{
        type: String,
        required: true,
    },
    rainfall:{
        type: String,
        required: true,
    },
    crop:{
        type: String,
        required: true,
    },
    investment:{
        type: Number,
        required: true,
    },
    revenue:{
        type: Number,
        required: true,
    },
    risk:{
        type: Number,
        required: true,
    }
});

const farm = new mongoose.model('farm', farmschema);

module.exports = farm;