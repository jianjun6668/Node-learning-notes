## ejs

1. 引入ejs

```js
const ejs=require('ejs')
```

2. 使用ejs

```js
ejs.renderFile('/path',{'参数'},function(err，data){
    // err 错误信息
    // data 引入的模版数据
})
```

3. 语法

* 引入变量

```js
ejs.renderFile('a.ejs',{name:'spring'},function(err，data){
    // err 错误信息
    // data 引入的模版数据
})

//a.ejs
<div><%= name %></div> //<div>spring</div>
```

* 在页面中写js（不用写=）

```js
ejs.renderFile('a.ejs',{sex:'man'},function(err，data){
    // err 错误信息
    // data 引入的模版数据
})
<% if(sex==='man'){ %>
    <div>他是个男孩</div>
<%}else{%>
    <div>她是个女孩</div>
<%}%>
```

* 在页面输出html(加个减号)

```js
<%var str="<div></div>";%>
<%- str %>
```

* 在页面引入文件

```js
//style.css
div{
    width:100px;
}

//a.ejs
<style>
<% include style.css %> //这里点路径不用加引号
</style>

/*
<style>
    div{
        width:100px;
    }
</style>
*/
```


