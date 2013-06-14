var Fiber = require('fibers');
var fs = require('fs');
var http = require('http');

//Fiber(function() {
//	var fiber = Fiber.current;
//	
//	var data = Fiber.yield();
//	
//	http.get({host: 'www.baidu.com'}, function(res) {
//		res.setEncoding('utf8');
//		res.on('data', function (data) {
//			fiber.run(data);
//		});
//	});
//	
//	console.log(data);
//	
//}).run();

var titleReg = /<a[^\s]+/gi; //new RegExp('h3');

//for (var i=0; i < 1; i++) {

	var options = {
		hostname : 'www.baidu.com',
		port : 80,
		path : '/s?word=多线程&ie=utf-8',
		method : 'GET'
	};
	var fileName = 't.html';
	http.get(options, function(res) {
		//console.log('STATUS: ' + res.statusCode);
		//console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		try {
			fs.unlink(fileName, function(){});
		} catch(e) {
			throw e;
		}
		var i = 0;
		console.log(i);
		res.on('data', function (data) {
			i++;
			/*
			fs.appendFile(fileName, data, function(err){
				if(err) throw err;
				console.log('save ok');
			});
			
			console.log(data);
			var titleArr = data.match(titleReg);
			console.log(titleArr);
			*/
			console.log(i);
		});
		
		res.on('end', function(){
			
		});
		console.log(i);
	});
//}









