# 模版引擎

## jade

* 引入jade

``` js
const jade=require('jade');
```

* jade渲染文件

``` js
let str=jade.renderFile('要渲染的文件路径',{'一些配置项'})； //pretty: true(格式化代码)
```

* jade 语法

1. 根据缩进，规定层级

```js
doctype
    html
        head
        body
            div
              
/*
    <!DOCTYPE html>
    <html>
        <head>
        </head>
        <body>
            <div></div>
        </body>
    </html>
*/

```

2. 属性放在括号里，逗号分隔(属性可以放在接送里，class可以放在数组里)

```js
script(src='jquery.js')  //<script src="jquery.js"></script>

div(style= {width: '200px', height: '200px', background: 'red'}) //<div style="width:200px;height:200px;background:red"></div>

div(class=['clearfix','btn']) //<div class="clearfix btn"></div>
```

3. 内容的写法

* 标签后加空格，直接写入内容（只能写入单行）

```js
div 我叫永春  //<div>我叫永春</div>
```

* 标签后缩紧直出

```js
script.
    window.onload=function (){
        var oBtn=document.getElementById('btn1');
        oBtn.onclick=function (){
          alert('这是多行的写法');
        };
      };
```

* 不对字符进行转换

```js
html
  head
  body
    abc

/*
    <html>
        <head></head>
        <body>
            <abc></abc>
        </body>
    </html>
*/

html
  head
  body
    |abc

/*
    <html>
        <head></head>
        <body>
            abc
        </body>
    </html>
*/
```

* 直接引入外部js

```js
//a.js
window.onload=function(){
    alert('加载完成！')
}

script 
    include 'a.js' 
/*
<script>
    window.onload=function(){
        alert('加载完成！')
    }
</script> 
*/
```

* 页面引入变量

```js
 jade.renderFile('index.jade',{name:'spring'});

 div 我的名字: #{name} //<div>我的名字：spring</div>

 //当元素里只有变量时，可以这么写
 div=name //<div>spring</div>

 div name=name //<div>name=name</div>
```

* 可以在页面中，直接写js

```js
body 
    -var a=1;
    -var b=2;
    div 结果是#{a+b}

/*
<body>
    <div>3</div>
</body>
*/
```

* 直接输出标签

```js
//node.js
jade.renderFile('./views/12.jade', {pretty: true,
  content: "<h2>你好啊</h2><p>对方水电费色弱威尔士地方</p>"
})

div=content //<div>&lt;h2&gt;你好啊&lt;/h2&gt;&lt;p&gt;对方水电费色弱威尔士地方&lt;/p&gt;</div>
div!=content //<div><h2>你好啊</h2><p>对方水电费色弱威尔士地方</p></div>
```










