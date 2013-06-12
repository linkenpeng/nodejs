var fs = require('fs');

fs.readFile('test.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		var sum = 0;
		for (var i = 0; i < 1000000000; i++) {
			//console.log(data);
			sum += i;
		}
	}
});

console.log("end.");
