const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    uname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    pass:{
        type: String,
        required: true,
    }
    
});

const user = new mongoose.model('user', userschema);

module.exports = user;