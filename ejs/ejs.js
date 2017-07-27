const ejs=require('ejs');

ejs.renderFile('./view/index.ejs',{name:'spring'},function(err,data){
    err?console.log(err):console.log(data);
})