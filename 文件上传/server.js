const express = require('express');
const fs = require('fs');
const pathLib = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

let objMulter = multer({
	dest: './www/upload/'
})
let server = express();

server.use(objMulter.any());

server.post('/', (req, res) => {
	let newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
	fs.rename(req.files[0].path, newName, function(err) {
		if (err)
			res.send('上传失败');
		else
			res.send('成功');
	});
})

server.listen(8888);