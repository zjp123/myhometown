var mongoose = require('mongoose');

//创建数据库连接
var db  = mongoose.createConnection('mongodb://127.0.0.1:27017/zhangbaitai');
//监听open事件
db.once('open', function (callback) {
    console.log("数据库成功连接");
});

const  models ={
    User:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'avatar':{type:String},
        'isOnLine':{type:Boolean}
       
    }
   
}
const obj = {};
for (let key in models) {
    obj[key] =  db.model(key,new mongoose.Schema(models[key]));
}

// module.exports = {
//     getMoudel(name){
//         return db.model(name)
//     }
// }
module.exports = obj;