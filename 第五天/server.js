const express=require('express');
const cookieParse=require('cookie-parser');
const cookirSession=require('cookie-session');

var server=express();

server.use(cookieParse());
server.use(cookirSession({
  keys:['aaa','bbb','ccc'], //传输数据加密
  name:'nihao',   //传输的名字
  maxAge:2*60*60*1000 //cookie存在的事件
}))
server.use('/aaa/a.html', function (req, res){
  console.log(req.session) //客户端返回的数据
  res.send({a:12}); //给客户端发送的数据
});

server.listen(8089);
