const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chatAppDB').then(()=>{
    console.log('connected to database...');
});

let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },google:{}
});

UserSchema.pre('save',()=>{

});

let UserModel=mongoose.model('user_coll',UserSchema);

module.exports={
    UserModel
};
