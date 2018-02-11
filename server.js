const express=require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const {router} = require('./routes');

let app= express();
let port=  process.env.port || 5454;

app.use(bodyParser.json());
app.use(expressSession({
    secret:'shashvat',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}));


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
app.use('/',router);