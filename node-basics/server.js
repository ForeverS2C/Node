let http = require('http');

let static = require('./models/static');
let form = require('./models/form');

let server = http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  
  if(req.url != '/favicon.ico'){

    if(req.url.indexOf('/form') !== -1){
      //动态处理
      form(req,res);
    }else{
      //静态文件托管
      static(req,res,'./static');
    }
  }
  

})

server.listen(3000,'127.0.0.1',() => {
  console.log("server is runing...")
})
