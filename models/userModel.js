const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chatAppDB').then(()=>{
    console.log('connected to database...');
});

let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required
    },
    email:{
        type:String,
        required
    },
    password:{
        type:String,
        required
    },
    age:{
        type:Number,
        required
    },google:{}
});

UserSchema.pre('save',()=>{

});

let UserModel=mongoose.model('user_coll',UserSchema);

module.exports={
    UserModel
};
