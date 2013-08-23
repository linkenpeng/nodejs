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


//////// express·�ɿ��� //////////////////
app.get('/', function(req, res){
	console.log(req.cookies);
	res.render('index', {
		title: 'Express'
	});
});

// mysql����
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

/***        express ·�ɽ���       *****/


// socket ������Ӽ���
socketio.on('connection', function(client){
	var i = 0;
	
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}

	//������Ϣ���ͻ���
	client.emit('news', { hello: 'The message is send By Server.' });

	//���տͻ��˹������¼�
	client.on('my other event', function (data) {
		console.log(data);
	});

	//�㲥��Ϣ������ǰ�û�֮����û�
	client.broadcast.emit('user connected', 'Other Can Receive.');
	//�㲥��ȫ��ͻ���
	socketio.sockets.emit('all users', 'Hi, All clients, Server broadcast.');
	
	//�Ͽ�����callback
	client.on('disconnect',function(){
		console.log('Server has disconnected');
	});
});

//��֤ handshake��ͷ��Ϣ callback�ǻص�������ֻ�гɹ���socket���ܼ�������
socketio.set('authorization', function(handshakeData, callback) {
	//console.log(handshakeData);
	return callback(null, true);//�ɹ���ص�
});