// npm(node package manager[包管理器]) 提供了上万个模块，都是这样提供的
var name;

exports.setName = function(thyName) {
	name = thyName;
};

exports.sayHello = function() {
	console.log('Hello ' + name);
};