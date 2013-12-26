// 全局变量 global, process

console.log(process.argv);

// 标准输入流需要恢复
/*
process.stdin.resume();
process.stdin.on('data', function(data) {
	process.stdout.write('read from console: ' + data.toString());
});
*/

function somethingComplicated(args) {
	console.log('比较耗时的操作: somethingComplicated.');
	var sum = 0;
	for (var i = 0; i < 1000000000; i++) {
		sum += i;
	}
}

function compute() {
	console.log('比较耗时的操作: compute');
	var sum = 0;
	for (var i = 0; i < 1000000000; i++) {
		sum += i;
	}
}

function doSomething(args, callback) {
	somethingComplicated(args);
	//callback();
	process.nextTick(callback); //为事件循环设置一项任务
}

doSomething('args', function onEnd() {
	compute();
});

console.log(process.platform);
console.log(process.pid);
console.log(process.execPath);
console.log(process.memoryUsage());





