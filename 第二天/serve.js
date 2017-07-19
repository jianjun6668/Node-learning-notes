const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');

http.createServer((req,res)=>{

    // GET 请求
    let obj=urlLib.parse(req.url);
    let url=obj.pathname;
    let data=obj.query;

    // POST请求
    let str=''; // (现假设请求回来的都是字符串)
    req.on('data',function(data){
        str+=data;
    })
    req.on('end',function(){
        let data=querystring.parse(str);

        let file_name='./www'+url;
        fs.readFile(file_name,(err,data)=>{
            if(err){
                res.write('您访问的页面不存在！')
            }else {
                res.write(data)
            }
            res.end();
        })
    })

}).listen(8889);
