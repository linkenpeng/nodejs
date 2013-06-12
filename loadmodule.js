/*
var hello1 = require('./module');
hello1.setName('ByVoid');

var hello2 = require('./module');
hello2.setName('BYVoid 2');

hello1.sayHello();
*/

var Hello = require('./singleobject');

var hello = new Hello();
hello.setName('Myron');
hello.sayHello();
