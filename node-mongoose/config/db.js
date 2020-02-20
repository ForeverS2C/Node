const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test';

//回调函数方式
// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
//     if(err){
//         console.log('连接数据库失败',err.message);
//     }else{
//         console.log('连接成功');
//     }
// })

//promise方式
mongoose
    .connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => {
        console.log('连接成功')
    })
    .catch(err => {
        console.log('连接数据库失败',err.message);
    })

//暴露mongoose
module.exports = mongoose;