const UserModel = require('./models/user')


//演示mongoose操作CRUD

// 增
// const user1 = new UserModel({
//     username: '张三',
//     password: '123',
//     age: 12,
//     sex: 1
// })

// user1.save(function(err){
//     if(err){
//         console.log('写入失败');
//     }else{
//         console.log('写入成功');
//     }
// });

// user1
//     .save()
//     .then(doc => {
//         console.log('写入成功',doc);
//     })
//     .catch(err => {
//         console.log('写入失败',err.Message)
//     })


//删
// UserModel.deleteOne({
//     username: '张三'
// },function(err,data){
//     console.log(err,data)
//     if(err){
//         console.log('删除失败');
//     }else{
//         console.log('删除成功');
//     }
// })


//改
// UserModel.updateOne({
//     username:"李四"
// }, {
//     $set: {
//         age: 33
//     }
// },function(err,data){
//     console.log(err,data)
//     if(err){
//         console.log('修改失败');
//     }else{
//         console.log('修改成功');
//     }
// })


//查
UserModel.find({
    username: '李四'
},function(err,data){
    console.log(err,data)
    if(err){
        console.log('查询失败');
    }else{
        console.log('查询成功');
    }
})




