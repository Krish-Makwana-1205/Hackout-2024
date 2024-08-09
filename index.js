const express = require('express');
const PORT = 8009;
const login = require('./route/login');
const path = require('path');

const app = express();
app.listen(PORT, ()=>{
    console.log('Ears up');
})
app.use('/login',login);
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));
