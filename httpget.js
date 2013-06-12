//// 作为客户端的get请求
//
//var http = require('http');
//
//http.get({host: 'www.baidu.com'}, function(res) {
//	res.setEncoding('utf8');
//	res.on('data', function (data) {
//		console.log(data);
//	});
//});

//作为客户端的get请求

var http = require('http');

var req = http.get({
	host : 'http://care.39.net/'
});

req.on('response', function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data) {
		console.log(data);
	});
});

function fibo(n) {
	return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
var n = 8
function back() {
	if (!--n)
		return console.timeEnd('no thread');
}
console.time('no thread');

process.nextTick(function() {
	console.log(fibo(40));
	back();
})
process.nextTick(function() {
	console.log(fibo(40));
	back();
})
process.nextTick(function() {
	console.log(fibo(40));
	back();
})
process.nextTick(function() {
	console.log(fibo(40));
	back();
})

process.nextTick(function() {
	console.log(fibo(40));
	back();
})

process.nextTick(function() {
	console.log(fibo(40));
	back();
})
process.nextTick(function() {
	console.log(fibo(40));
	back();
})
process.nextTick(function() {
	console.log(fibo(40));
	back();
})