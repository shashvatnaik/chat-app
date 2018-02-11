const express=require('express');
const bodyParser = require('body-parser');

const {router} = require('./routes');

let app= express();
let port=  process.env.port || 5454;

app.use(bodyParser.json());


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
app.use('/',router);