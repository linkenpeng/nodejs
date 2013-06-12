// npm(node package manager[包管理器]) 提供了上万个模块，都是这样提供的


function Hello() {
	var name;

	this.setName = function(thyName) {
		name = thyName;
	};

	this.sayHello = function() {
		console.log('Hello ' + name);
	};
}

module.exports = Hello;
//exports.Hello = Hello;