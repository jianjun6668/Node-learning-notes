const express = require('express');
const fs = require('fs');
const pathLib = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

let objMulter = multer({
	dest: './www/upload/' //保存的位置
})
let server = express();

server.use(objMulter.any()); //可以储存任意类型

server.post('/', (req, res) => {
	// 获取新的名字，给文件加后缀名
	let newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
	//用fs的rename 来添加前台上传文件的后缀
	fs.rename(req.files[0].path, newName, function(err) {
		if (err)
			res.send('上传失败');
		else
			res.send('成功');
	});
})

server.listen(8888);