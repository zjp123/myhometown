

const express = require('express')
const app = express()
const Router = require('./userser')


const cookieParse = require('cookie-parser')
const bodyParse = require('body-parser')
app.use('/user',Router)


app.listen(9006,function(err){
    console.log(err);
});

