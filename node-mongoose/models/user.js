const db = require('../config/db');

const schema = new db.Schema({
    username: String,
    // username: {type: String,required: true,default: '张三'},
    password: String,
    age: Number,
    sex: Number,
    createTime: {
        type: Number,
        // default: Date.now  //default可以指定字符串，函数...
        default: function(){
            return new Date().getTime();
        }
    }
})

//暴露model
module.exports = db.model('user',schema);


