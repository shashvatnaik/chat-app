const {UserModel} = require('./../models/userModel');

const regHandler = (req,res)=>{
    console.log('reg handler');
    let newUser=new UserModel(req.body);
    newUser.save().then(()=>{
        console.log('new user saved!');
        res.send('new usere successfully saved!');
    }).catch((err)=>{
        console.log('some error in saving the user:',err);
    });
};
module.exports={regHandler};