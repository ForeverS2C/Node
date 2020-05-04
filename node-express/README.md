# npm init -y

# 依赖
- express

# 渲染引擎
- ejs     index.ejs  使用ejs的语法来输出数据，遍历数据.....
- pug     index.pug  使用pug语法输出数据.....

# ejs 模板引擎在 express 中的使用
1. 安装 ejs   npm install ejs --save
2. 设置 express 实例的模板文件存放路径以及模板引擎类型
3. res.render('模板文件名字'，'需要带入到模板文件中的数据')
4. 最终浏览器会将模板文件的内容跟数据的内容做拼接之后再渲染到浏览器

# res.render('模板文件名字'，'需要带入到模板文件中的数据')

# 静态文件托管
> 通过 express.static() 中间件函数，将项目中某个文件夹进行托管。托管之后，可以使用路径方式访问（类似 wampserver中的www文件夹）

# express  库
http://www.expressjs.com.cn/

1. express搭建服务
express=require('express')
server=express()
server.listen(端口,地址,回调)
2. 静态页面托管
express.static('./wwww')
server.use(express.static('./wwww'));

## 接口响应:
### 各种请求姿势: get/post/put/delete/....
  server.请求姿势API(地址,处理函数)

  server.get(url,(req,res,next)=>{})
  server.post(url,(req,res,next)=>{})
  
  jsonp请求 == get请求 
    server.get('/jsonp接口',(req,res,next)=>res.jsonp(json)
    设置回调函数的key: server.set('jsonp callback name', '设定回调函数键');  默认callback

### 参数接受: req == 请求体
  req.query 获取地址栏的数据
    req.body 获取非地址栏的数据  依赖中间件
      中间件使用:body-parser  1. npm install body-parser  2. require('body-parser')   3. app.use(中间件())
    req.params 获取动态接口名
    req.method 获取前端提交方式

### 发送给浏览器： res == 响应体
任何类型: res.send(any)	~~ res.write + end
JSON: res.json(json)
jsonp: res.jsonp(响应数据) 响应数据-》jsonp请求时的回调函数
404	: res.status(404).send({error:1,msg:"Sorry can't find that!"})
静态页面: res.sendFile(path.resolve('public/error.html'))//渲染纯 HTML 文件
    
后端跳转：	res.redirect(url)

处理一部分接口 共有业务逻辑：

server.all('/admin/*',fn) all匹配全路径 处理所有HTTP 需要next 延续后续

use: 安装中间件 | 路由
server.use(地址,中间件|路由|函数体)

中间件(middleware)： 不处理业务，只处理请求   到     结束响应  的中间部分
  body-parser
  中间件:	npmjs.com   查看使用方式
  body-parser			获取post数据，限定大小，约定返回数据类xx.urlencode({limit:xx})

## 扩展:

1. Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

- req.app：当callback为外部文件时，用req.app访问express的实例
- req.baseUrl：获取路由当前安装的URL路径
- req.cookies：Cookies
- req.fresh / req.stale：判断请求是否还「新鲜」
- req.hostname / req.ip：获取主机名和IP地址
- req.originalUrl：获取原始请求URL
- req.path：获取请求路径
- req.protocol：获取协议类型
- req.route：获取当前匹配的路由
- req.subdomains：获取子域名
- req.accepts()：检查可接受的请求的文档类型
- req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
- req.get()：获取指定的HTTP请求头
- req.is()：判断请求头Content-Type的MIME类型

2. Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

- res.app：同req.app一样
- res.append()：追加指定HTTP头
- res.set()在res.append()后将重置之前设置的头
- res.cookie(name，value [，option])：设置Cookie
    opition: domain / expires / httpOnly / maxAge / path / secure / signed
- res.clearCookie()：清除Cookie
- res.download()：传送指定路径的文件
- res.get()：返回指定的HTTP头
- res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
- res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
- res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
- res.set()：设置HTTP头，传入object可以一次设置多个头
- res.status()：设置HTTP状态码
- res.type()：设置Content-Type的MIME类型

