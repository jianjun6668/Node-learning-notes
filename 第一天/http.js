const http=require('http');

var server=http.createServer(function (req, res){
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

  res.end();
});

//监听端口，此处的端口相当与去服务器找到你要访问的门牌
server.listen(8888);
