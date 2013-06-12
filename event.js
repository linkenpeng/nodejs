var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(arg1, arg2) {
	console.log('some_event occured.', arg1, arg2);
});

event.on('some_event', function(arg1, arg2) {
	console.log('some_event2 occured.', arg1, arg2);
});

event.once('some_event',function() {
	console.log('once');
});

event.removeListener('some_event',function() {
	console.log('removeListener');
});

event.removeAllListeners('some_event',function() {
	console.log('removeAllListener');
});

setTimeout(function() {
	event.emit('some_event', 'byvoid', 2012);
	event.emit('error');
	
}, 1000);