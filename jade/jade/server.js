const jade=require('jade');
const fs=require('fs');

let str=jade.renderFile('index.jade',{pretty:true});

fs.writeFile('./index.html',str,(err)=>{
    err?console.log('编译出错啦！'):console.log('编译成功！');
})

