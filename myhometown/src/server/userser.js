

const  userModel = require('./db')

const express = require('express')
const unitMd5 = require('utility');

const Router = express.Router()

const User = userModel.User;
Router.get('/info', function(req, res, next) {
    // User.remove({},function(){});
    User.find({},function(err,doc){
        if(err){
            res.json({code:500,data:[]});
            return ;
        }
        res.json({code:200,data:doc});
        return ;
    })
});

Router.post('/register', function(req, res, next) {
    const {userName,pwd} = req.body;
    // console.log(req.body)
    User.findOne({user:userName},{'pwd':0,'_v':0},function(err,doc){
        if(doc){
            return res.json({code:1,data:{msg:'用户名重复'}});
        }
       
        let subUser =new User( {user:userName,pwd:md5(pwd)} )
        subUser.save(function(e,d){
            if(e){
                return res.json({code:500,data:{msg:'后端出错了'}});
            }
            const {user,_id} = d;
            res.cookie('userid',_id);
            res.cookie('usernae',userName);
            
            if(d){
                return res.json({code:200,data:{userName:user,_id,msg:'注册成功'}});
                
            }
        });
        
    });
});


// Router.post('/login',function(req,res){
//     // return res.json({code:'list'});
//     // User.remove({},function(){});
//     const {userName,pwd} = req.body;
    
//     User.findOne({user:userName,pwd:md5(pwd)},{'pwd':0,'_v':0},function(err,doc){
//         if(err){
//             console.log(err);
//             return res.json({code:1,data:{msg:'用户名或密码错误'}});
//         }
//         console.log(doc)
//         if(!doc){
//             return res.json({code:500,msg:'用户或密码错误'})
//         }
//         const {user,_id} = doc;
//         res.cookie('userid',_id);
//         return res.json({code:0,data:{userName:user,msg:'登录成功',_id}});
        
//     });
// });
Router.post('/login', function(req, res) {
    const {userName,pwd} = req.body;
    // console.log(req.body)
    User.findOne({user:userName,pwd:md5(pwd)},{'pwd':0,'_v':0},function(err,doc){
        if(err||!doc){
            console.log(err);
            return res.json({code:500,data:{msg:'用户名或密码错误'}});
        }
        if(doc){
            console.log(doc);
            const {_id,user} =  doc;
            res.cookie('userid',_id);//登陆后更新cookie
            res.cookie('avatar','moren-ava.jpg');
            res.cookie('usernae',userName);
            
            return res.json({code:200,data:{userName:user,msg:'登录成功',avatar:'moren-ava.jpg'}});
            
        }
       
       
    });
});

function md5(pwd){
    const sault = 'zjpTuihou931222;;$#%' + pwd;
    return unitMd5.md5(unitMd5.md5(sault));
}
module.exports =  Router