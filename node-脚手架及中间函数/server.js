var express = require('express');
var app = express();

// app.get('/',function(res,req,next){
//     console.log('1');
//     //next  执行下一个中间件函数
//     next();
// },function(req,res,next){
//     console.log('2');
//     res.send('首页');
//     next();
// },function(req,res){
//     console.log('3');
//     // res.send('无法第二次写请求');
//     console.log(req.url);
// })


// //确保某个中间件函数在使用use()的后面都需要的话，就可以将中间件函数放在use中调用
// app.use(function(req,res,next){
//     console.log('请求地址是：',req.url);
//     next();
// });

// app.get('/hello',function(req,res){
//     res.send('hello');
// });

// app.get('/world',function(req,res){
//     res.send('world');
// });

//’/a'  对指定前缀路径生成日志打印
app.use('/a',function(req,res,next){
    console.log('请求地址是：',req.url);
    next();
});

app.get('/a/hello',function(req,res){
    res.send('hello');
});

app.get('/b/world',function(req,res){
    res.send('world');
});


app.listen(3000);


