
# Node-learning-notes

## node学习第一天：

* http模块

可以通过`http.createServer`创建一个服务，
创建的服务里有一个回调函数，回调函数里有两个参数，分别是`request`，`response`，
    `request` 是客户端想服务端发起的请求，里面有`url`,可以通过`request.url`访问到当前请求的路径
    `response` 是服务端给客户端响应端数据，有`write`(向客户端发送端数据)方法和`end`方法。

```js
const http=require('http'); //导入http模块

//创建一个服务，服务里有一个回调函数，有两个参数
var server=http.createServer(function (req, res){
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

监听事件（post请求）

```js
//data——有一段数据到达(很多次)
  var i=0;
  req.on('data', function (data){
    console.log(`第${i++}次收到数据`);
  });

  //end——数据请求完成(一次)
  req.on('end', function (){
  });
```

## node学习第二天：

* fs模块

fs模块主要用于读写服务器上的文件

引入fs模块

```js
const fs=reqiure('fs');
```

`fs.readFile` 读取服务器上的文件

```js
fs.readFile('要读的文件名',function(err,data){
  //err 读取错误返回的信息
  //读取到的信息
  })
```
fs.writeFile 写入文件

```js
fs.writeFile('要写入的文件名','写入的内容',function(err){
  //err写入错误返回的信息
  })
```
* querystring模块

querystring模块主要用于解析url的数据，用于get请求回来的数据，`name="spring&age=18&sex="man" => {name:"spring",age:18,sex:"man"}`

引入querystring模块

```js
const querystring=require('querystring')
```

解析数据

```js
var urldata='name="spring&age=18&sex="man"';
querystring.parse(urldata); //{name:"spring",age:18,sex:"man"}
```

* url模块

url模块主要用于解析前台返回的数据，常用于post请求。

引入url模块

```js
const urllib=reqiure('url')
```

解析数据

```js
let clientobj=urlLib.parse(req.url, true) //加上默认false，加上true会对query进行转换
clientobj.pathname //url路径
clientobj.query //前台传过来的数据
```
