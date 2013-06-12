// 作为客户端的post请求

var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
	name: 'myron',
	email: 'linkenpeng@gmail.com',
	address: 'Guangzhou',	
});

var options = {
	host: 'localhost',
	path: '/test.php',
	method: 'post',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': contents.length
	}	
};

var req = http.request(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function (data){
		console.log(data);
	});
});

req.write(contents);
req.end();