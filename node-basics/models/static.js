let fs = require('fs');

function static(req,res,url){
  let path = req.url === '/'?'/index.html':req.url;

  fs.readFile(url + path,(err,data)=>{
    if(err){
      fs.readFile(url + '/error.html',(err,data)=>{
        res.write(data);
        res.end();
      })
    }else{
      res.write(data);
      res.end();
    }
  })
}

module.exports = static
