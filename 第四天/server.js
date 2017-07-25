const express=require('express');
const bodyParaer=require('body-parser');
const expressStatic=require('express-static');

var server=express();
server.listen(8082);
//get 请求
server.use('/',function(req,res){
    console.log(req.query);
    res.send({a:1,b:2});
});

// post 请求
server.use(bodyParaer.urlencoded({
    extended:false,     //是否开启扩展
    limit:2*1024*1024   //传输大小
}))
server.use('/',function(req,res){
    console.log(req.body);
    res.send({a:1,b:2});
})

//读取静态文件
server.use(expressStatic('./www'))
