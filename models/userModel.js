const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect(`mongodb://shashvatnaik:creativemongodb@cluster0-shard-00-00-4mk1w.mongodb.net:27017,cluster0-shard-00-01-4mk1w.mongodb.net:27017,cluster0-shard-00-02-4mk1w.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`).then(()=>{
    console.log('connected to database...');
}).catch((err)=>{console.log('err in connecting database...',err)});

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

UserSchema.pre('save',function(next){
    bcrypt.genSalt(10).then((salt)=>{
        bcrypt.hash(this.password,salt).then((hash)=>{
            this.password=hash;
            next();
        }).catch()
    }).catch((err)=>{
        console.log('err in password encryption!..',err);
    });
});

let UserModel=mongoose.model('user_coll',UserSchema);

module.exports={
    UserModel
};
