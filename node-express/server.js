const express = require('express');
const app = express();
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


//http://localhost:3000/public/style.css
// app.get('/public/style.css',function(req,res){
//     res.sendFile(path.resolve(__dirname,'./public/style.css'))
// });

//http://localhost:3000/public/index.js
// app.get('/public/index.js',function(req,res){
//     res.sendFile(path.resolve(__dirname,'./public/index.js'))
// });

//设置静态文件托管
app.use(express.static('public'));
app.get('/public/style.css',function(req,res){
    res.sendFile(path.resolve(__dirname,'./public/style.css'))
});
app.get('/public/index.js',function(req,res){
    res.sendFile(path.resolve(__dirname,'./public/index.js'))
});


app.listen(3000);

