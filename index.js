const express = require('express');
const PORT = 8009;
const login = require('./route/login');
const home = require('./route/home');
const path = require('path');
const dburl = 'mongodb://localhost:27017/hackout';
const cookieParser = require('cookie-parser')
const {mongoconnect} = require('./connect');
const app = express();
app.listen(PORT, ()=>{
    console.log('Ears up');
});
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/login',login);
app.use('/', home);
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

mongoconnect(dburl).then(()=>{
    console.log("db up");
});