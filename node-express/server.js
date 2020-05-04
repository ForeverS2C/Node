const express = require('express');
const bodyParser = require('body-parser');

//1、搭建web服务器
const app = express();  //相当于http.createServer(fn)
const cookieParser = require('cookie-parser');
const path = require('path');

//设置模板文件的存放路径
app.set('views','./views');
//设置模板引擎类型
app.set('view engine','ejs')
app.get('/',function(req,res){
    // console.log(req.query);
    // res.write('hello express');
    // res.end();

    res.render('index.ejs',{
        name: '张三',
        age: 123,
        list: [
            {name: '吃饭'},
            {name: '睡觉'},
            {name: '哈哈'}
        ]
    })
});

//处理中间件函数，json urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/post',function (req,res) {
    console.log(req.body);
    res.write('hello')
    res.end();
});


//设置cookie
app.get('/setCookie',function (req,res) {
    res.cookie('name','cookie001',{
        maxAge: 60*1000*10
    });
    res.write('set OK')
    res.end();
});

//得到cookie
app.use(cookieParser());
app.get('/getCookie',function (req,res) {
    console.log(req.cookies);
    res.write('get OK')
    res.end();
});

//根据请求头中的 user-angent 渲染页面
app.get('/abc',function(req,res){
    res.set('Content-Type','text/html; charset=utf-8');
    if(req.get('User-Agent').indexOf('Mobile') > -1){
        res.write('Mobile')
    }else{
        res.write('PC')
    }
    res.end();
});

//下载
app.get('/download',function(req,res){
    res.download('./README.md');
});

//后端跳转
app.get('/baidu',(req,res,next)=>{
    res.redirect('https://www.baidu.com')
})

//中间件自定义封装：
let bdParser = require('./middlewave/bd-parser');

app.use(bdParser);
app.get('/aaa',(req,res,next)=>{
    console.log('body',req.body)
})


//next 管道函数
app.get('/a1',(req,res,next)=>{
    // console.log('1处理')
    setTimeout(()=>{
        console.log('1处理');
        next();
    })
})
app.get('/a1',(req,res,next)=>{
    console.log('2处理');
})
//处理集中的接口
//all 处理一部分接口的共有逻辑
app.all('/api/*',(req,res,next) => {
    console.log('all',req.query)
    console.log('all',req.body)
    console.log('all',req.method)
    //处理公共的业务逻辑
    next() //管道函数
})
app.get('/api/goeods',(req,res,next)=>{
    console.log('/api/goeods');
})
app.post('/api/news',(req,res,next)=>{
    console.log('/api/news');
})
app.put('/api/products',(req,res,next)=>{
    console.log('/api/products');
})


//http://localhost:3000/public/style.css
// app.get('/public/style.css',function(req,res){
//     res.sendFile(path.resolve(__dirname,'./public/style.css'))
// });

//http://localhost:3000/public/index.js
// app.get('/public/index.js',function(req,res){
//     res.sendFile(path.resolve(__dirname,'./public/index.js'))
// });

//3、设置静态资源托管
app.use(express.static('./public'));
app.get('/public/style.css',function(req,res){
    res.sendFile(path.resolve(__dirname,'./public/style.css'))
});
app.get('/public/index.js',function(req,res){
    res.sendFile(path.resolve(__dirname,'./public/index.js'))
});


//4、抓取浏览器->参数 & 数据
app.get('/goods',(req,res,next)=>{
    // console.log('获取地址栏数据',req.url);
    // console.log('获取地址栏数据',req.query);
    res.send({a:1,b:2});
})


//2、监听
app.listen(3000);

