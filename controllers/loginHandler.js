const bcrypt = require('bcryptjs');
const {UserModel} = require('./../models/userModel');

const loginHandler=(username,password,done)=>{
    UserModel.findOne({email:username}).then((user)=>{
        bcrypt.compare(password,user.password).then((result)=>{
            if(result){
                return done(null,user);
            }
            else{
                return done(null,false);
            }
        }).catch((err)=>{
            console.log('password match err:',err);
        })
    }).catch((err)=>{
        console.log(err);
    });
};

module.exports={loginHandler};