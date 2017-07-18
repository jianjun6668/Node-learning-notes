# Node-learning-notes
## node学习第一天：
* http模块
可以通过`http.createServer`创建一个服务，
创建的服务里有一个回调函数，
    回调函数里有两个参数，分别是`request`，`response`，
    `request` 是客户端想服务端发起的请求，里面有`url`,可以通过`request.url`访问到当前请求的路径<br>
    `response` 是服务端给客户端响应端数据，有`write`(向客户端发送端数据)方法和`end`方法。<br>
<br>
```js
const http=require('http'); //导入http模块

var server=http.createServer(function (req, res){ //创建一个服务，服务里有一个回调函数，有两个参数
  //判断请求路径，返回相对应数据
  switch(req.url){
    case '/1.html':
      res.write("这是页面1");
      break;
    case '/2.html':
      res.write("这是页面2");
      break;
    default:
      res.write('这个页面找不到！！！');
      break;
  }
  //响应结束
  res.end();
});

//监听端口，此处的端口相当与去服务器找到你要访问的门牌
server.listen(8888);
```
