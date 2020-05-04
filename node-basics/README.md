# node基础
## nodejs搭建web服务器:  使用HTTP模块
1. 引入http模块	require('http')
2. server/app = http.createServer(函数(req,res));//创建服务   返回http对象
    req 请求  浏览器->服务器
      req.url  地址   提取get数据
      req.on('data|end') 提取post数据 所有的http[s]都会触发end事件
      res 响应  服务器->浏览器
        响应头设置:	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.write(字符/数据<string><buffer>)
        res.end() 结束响应

3. 监听：
  server.listen(端口，[地址]，[回调])    回调：监听成功，回调一次
    端口: 1-65535	1024以下系统占用   80
    地址: 虚拟localhost  真实域名xx.duapp.com
小提示：
  更新后,需要每次服务器自动重启
  推荐: supervisor | nodemon   命令行工具
  npm install supervisor -g  | npm install nodemon -g

## 静态资源托管:
什么是静态资源： css/html/js/图片/json/字体..
  
- 前端资源请求:
  href/src/url()/locaction.href

- 后端资源读取：
  fs.readFile(文件名,[编码],回调(err,data));
    err 错误 null没有错误
    data 数据,buffer流

- 动态数据请求: 
  前台: get/post/put/delete/ajax/jsonp.....
  后台：http[s] 请求 ， 处理方式方式
    address:	req.url  抓取 get请求的数据  字符 切/url模块
    body:	req.on('data',(chunk)=>{CHUNK==每次收到的数据buffer})
        req.on('end',()=>{	接收完毕 字符 切/querystring })
  推荐: postman https://www.getpostman.com/downloads/


## url模块	
作用： 处理 url
- url.parse(str,true)  str -> obj  返回 对象  true 处理- - query->obj

- url.format(obj)  obj -> str   返回str

	querystring 模块 
		作用： 处理查询字符串(?key=value&key2=value2)
		querystring.parse(str) -> obj
		querystring.stringify(obj) -> str

	------------------------------------------------------------------------------

## 模块化:
  commonJS
    是主要为了JS在后端的表现制定
    commonJS 是个规范 nodejs / webpack 是一个实现
    ECMA 是个规范  js / as 实现了

  服务器端JS:	相同的代码需要多次执行|CPU和内存资源是瓶颈|加载时从磁盘中加载
  
  浏览器段js:	代码需要从一个服务器端分发到多个客户端执行|带宽是瓶颈|通过网络加载
  模块： http/fs/querystring/url		require('模块名')  系统模块
  模块化：require module exports		seajs.js / require.js   CMD/AMD/UMD   es5

  require 引入模块、输入  对象|函数|类
    require('模块名')
      不指定路径：	先找系统模块-> 再从项目环境找node_modules|bower_components (依赖模块)->not found
      指定路径	  : 指定路径 -> not found
    require(./utils).xx  按需引用

  exports 导出，批量输出 都是属性
    exports.自定义属性=值(any) 输出带接口		require(模块文件名)=modA  modA是个模块实例{自定义属性}

  module  默认输出 函数|类|对象 只能输出一次
    module.exports = {  
      自定义属性：值
    }

    module.exports=对象/fn/class   			require('..')=modA  modA 是一个fn或者是类class本身

  commonJS 是 nodejs 默认模块管理方式,不支持es6的模块化管理方式，但支持所有es6+语法





