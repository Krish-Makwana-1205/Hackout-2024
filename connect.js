const mongoose = require('mongoose');

async function mongoconnect(url){
    return mongoose.connect(url);
}

module.exports = {
    mongoconnect
}