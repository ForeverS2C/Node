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



