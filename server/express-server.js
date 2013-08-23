var express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	socketio = require('socket.io').listen(server),
	mysql = require("mysql");

server.listen(3000);
console.log("Express server listening in %s mode", app.settings.env);


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));


app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: false, showStack: false }));
});

app.configure('production', function(){
	app.use(express.errorHandler({ dumpExceptions: false, showStack: false }));
});


//////// express路由控制 //////////////////
app.get('/', function(req, res){
	console.log(req.cookies);
	res.render('index', {
		title: 'Express'
	});
});

// mysql测试
app.get('/mysql/accountid/:accountid', function(req, res){
	
	var connection = mysql.createConnection({
		host     : 'db.topsem.tt',
		user     : 'topsem',
		password : 'top$em2011',
		database : 'semusers',
	});

	connection.connect(function(err) {
		if(err) console.log(err);
	});

	connection.query('SELECT * FROM company LIMIT 10', function(err, rows, fields) {
	  if (err) throw err;

	console.log(req.cookies);
	  //console.log(rows);
	console.log(req.params.accountid);
	  res.render('mysql', {
		rows: rows
	  });

	});

	connection.end();	
  
});

app.post('/add', function(req,res){
  res.render('add', {
    sum: req.body.a + req.body.b
  });
});

/***        express 路由结束       *****/


// socket 添加连接监听
socketio.on('connection', function(client){
	var i = 0;
	
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}

	//发送消息给客户端
	client.emit('news', { hello: 'The message is send By Server.' });

	//接收客户端过来的事件
	client.on('my other event', function (data) {
		console.log(data);
	});

	//广播信息给除当前用户之外的用户
	client.broadcast.emit('user connected', 'Other Can Receive.');
	//广播给全体客户端
	socketio.sockets.emit('all users', 'Hi, All clients, Server broadcast.');
	
	//断开连接callback
	client.on('disconnect',function(){
		console.log('Server has disconnected');
	});
});

//认证 handshake是头信息 callback是回调函数，只有成功后socket才能继续连接
socketio.set('authorization', function(handshakeData, callback) {
	//console.log(handshakeData);
	return callback(null, true);//成功后回调
});