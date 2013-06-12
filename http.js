var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('<h1>Node.js<h1>');	
	var sum = 0;
	for (var i = 0; i < 1000000000; i++) {
		sum += i;
	}
	res.write('sum:' + sum);
	res.end('<p>Hello world!</p>');
}).listen(3000);

console.log("HTTP server is listening at port 3000...");
