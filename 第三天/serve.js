const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');

http.createServer((req,res)=>{
    let obj=urlLib.parse(req.url);
    let url=obj.pathname;

    let str='';
    req.on('data',(data)=>{
        str+=data;
    })
    req.on('end',()=>{
        const GET=obj.query;
        const POST=querystring.parse(str);
        res.end()
    })
}).listen(8888);
