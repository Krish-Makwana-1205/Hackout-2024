const {getUser} = require('../services/auth');

async function usercheck(req, res, next){
    if(!req.cookies.uid)return res.redirect('/login');
    const user = getUser(req.cookies.uid);
    if(!user)return res.redirect('/login');
    req.cookies.user = user;
    next();
}

module.exports = {
    usercheck
}