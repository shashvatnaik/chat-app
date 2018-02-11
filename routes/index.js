const express= require('express');
const router=express.Router();

const {userModel}=require('./../models/userModel');

router.get('/test',(req,res)=>{
   res.send('test');
});

module.exports={router};