let queryString = require('querystring');
let urlLib = require('url');

function form(req,res){
  let getData = urlLib.parse(req.url,true).query;
  console.log('get提交的数据:',getData);

  let postStr = '';
  req.on('data',(chunk)=>{
    postStr += chunk;
  })
  req.on('end',()=>{
    let postData = queryString.parse(postStr)
    console.log('post提交的数据:',postData);
  })

}

module.exports = form
