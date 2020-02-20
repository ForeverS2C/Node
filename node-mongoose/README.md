1. npm init -y
2. 安装  
npm install mongoose --save

3. 创建一个连接数据库的文件
config/db.js

4. 创建一个模型文件（对数据库操作的集合文件）
    4.1 schema 描述某个集合的数据结构
    4.2 基于schema创建model并暴露出去

5. 基于上面个model操作数据库
