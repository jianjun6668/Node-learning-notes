const express=require('express');
const expressStatic=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const consolidate=require('consolidate');

let server=express();

//解析cookie
server.use(cookieParser('sdfsfasafsfa'));

//使用session
let arr=[];
for(let i=0;i<1000;i++){
    arr.push('key_'+Math.random());
}
server.use(cookieSession({
    name:'key',
    keys:arr,
    maxAge:20*3600*1000
}))

//post 数据
server.use(bodyParser.urlencoded({
    extended:false
}))
server.use(multer({
    dest:'./www/upload',
}).any());

//配置模板引擎
//输出什么东西
server.set('view engine','html');
//模板文件放在哪儿
server.set('views','./views');
//哪种模板引擎
server.set('html',consolidate.ejs);

//接受用户请求
server.get('/index',(req,res)=>{
    res.render('1.ejs',{
        name:'spring'
    })
})

server.listen(8888);
