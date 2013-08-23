// ������Ҫ��ģ�飺http��socket.io
var http = require('http'), io = require('socket.io');
//����server
var server = http.createServer(function(req, res){ 
  // Send HTML headers and message
  res.writeHead(200,{ 'Content-Type': 'text/html' }); 
  res.end('<h1>Hello Socket Lover!</h1>');
});
//�˿�8000
server.listen(8888);
//����socket
var socket = io.listen(server);
//������Ӽ���
socket.on('connection', function(client){

	//���ӳɹ���ִ������ļ���
	client.on('message',function(event){ 
		console.log('Received message from client!',event);
	});
	//�Ͽ�����callback
	client.on('disconnect',function(){
		console.log('Server has disconnected');
	});
});