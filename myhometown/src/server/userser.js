

const  userModel = require('./db')

const express = require('express')

const Router = express.Router()

const User = userModel.User;
Router.get('/info', function(req, res, next) {
    User.find({},function(err,doc){
        if(err){
            res.json({code:0,data:[]});
            return ;
        }
        res.json({code:200,data:doc});
        return ;
    })
});


module.exports =  Router