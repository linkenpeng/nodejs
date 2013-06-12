var util = require('util');

function Person() {
	this.name = 'myron';
	
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true, null, true));

console.log('util.isArray');
var aArray = [];
var bObject = {};
console.log(util.isArray(aArray));
console.log(util.isArray(bObject));

console.log('util.isRegExp');
var p1 = /g*/ig
var p2 = new RegExp('abc');
var p3 = 'abc';
console.log(util.isRegExp(p1));
console.log(util.isRegExp(p2));
console.log(util.isRegExp(p3));

console.log('util.isDate');
var d1 = /g*/ig
var d2 = new Date();
console.log(util.isDate(d1));
console.log(util.isDate(d2));

console.log('util.isError');
console.log('util.format');
console.log('util.debug');










