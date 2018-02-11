const express= require('express');
const passport=require('passport');
const Strat = require('passport-local').Strategy;
const expressSession = require('express-session');
const jwt = require('jsonwebtoken');


const {regHandler} = require('./../controllers/regHandler');
const {loginHandler} = require('./../controllers/loginHandler');

const router=express.Router();

router.use(expressSession({
    secret:'shashvat',
    resave:true,
    saveUninitialized:false
}));
router.use(passport.initialize());
router.use(passport.session());
router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",req.headers.origin);
    next();
});

passport.serializeUser((user,done)=>{
    user=jwt.sign({user},'shashvat');
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    user=jwt.verify(user,'shashvat');
    done(null,user);
});

passport.use('local',new Strat((username,password,done)=>{
   loginHandler(username,password,done);
}));

router.get('/test',(req,res)=>{
   res.send('test');
});

router.post('/login',passport.authenticate('local',{
    successRedirect:'/loginSuccess',
    failureRedirect:'/loginFailure'
}));

router.get('/loginSuccess',(req,res)=>{
    console.log('req.user:',req.user);
    res.send('successfully logged in');
});

router.get('/loginFailure',(req,res)=>{
    res.send('login fail');
});

router.get('/logout',(req,res)=>{
    res.send('logged out');
});
router.post('/reg',regHandler);

module.exports={router};