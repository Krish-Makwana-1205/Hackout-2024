const express = require('express');
const {v4: uuidv4} = require('uuid');
const {set_user, get_user} = require('../services/auth');
const { setUser } = require('../services/auth');
const user = require('../model/user')

async function UserSignup(req, res){
    const {uname, email, pass} = req.body
    await user.create({
        uname, 
        email,
        pass,
    });
    res.redirect('/');
}

async function UserLogin(req, res){
    const {email, pass} = req.body();
}

module.exports = {
    UserSignup,
    UserLogin
}