let queryString = require('querystring');

let bdParser = (req,res,next)=>{
    console.log('中间件内部');
    let str = '';
    req.on('data',(chunk)=>str+=chunk);
    req.on('end',()=>{
        req.body = queryString.parse(str);
        next();
    })
}

module.exports = bdParser
