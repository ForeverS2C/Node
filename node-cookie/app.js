let express = require('express');
var cookieSession = require('cookie-session')

let app = express();

app.use(express.static('./public'));

app.use(cookieSession({
  name: 'user1',
  keys: ['key1','key2']
}));

app.get('/login',(req,res,next)=>{
  req.session[req.query.username] = req.query.password
  res.send({err: 0})
})
app.get('/user',(req,res,next)=>{
  console.log(req.session["user1"])
  let user1 = req.session["user1"];
  if(user1){
    res.send({err:0,data:'数据'})
  }else{
    res.send({err:1,mess:'未登录'})
  }
})
app.get('/logout',(req,res,next)=>{
  req.session['user1'] = undefined
  res.send({err: 0})
})



app.listen(3000);


