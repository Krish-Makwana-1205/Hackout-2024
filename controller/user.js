const express = require('express');
const {v4: uuidv4} = require('uuid');
const {set_user, get_user} = require('../services/auth');
const { setUser } = require('../services/auth');
const user = require('../model/user');

async function UserSignup(req, res){
    const {uname, email, pass, occupation} = req.body
    const z = await user.findOne({email:email});
    if(z != null){
        if(uname == z.uname && pass == z.pass){
            const ses_id = uuidv4();
            setUser(ses_id, user);
            res.cookie('uid', ses_id);
            res.cookie('email', email);
            res.redirect('/home');
        }
        else{
            res.redirect('/login');
        }
    }
    else{
        await user.create({
            uname, 
            email,
            pass,
        });
        res.cookie('email', email);
        const ses_id = uuidv4();
        setUser(ses_id, user);
        res.cookie('uid', ses_id);
        res.redirect('/home');
    }
}

async function UserLogin(req, res){
    const {email, pass} = req.body();
}

module.exports = {
    UserSignup,
    UserLogin
}