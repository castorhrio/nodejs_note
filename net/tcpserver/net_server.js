var net = require("net");

var server = new net.Server();
server.listen(8037);

server.on("connection", function(socket) {
    console.log('someone connects');
    //设置最大连接数
    //超过这个数的请求，服务器不处理
    server.maxConnections = 100;
    server.getConnections(function(err, count) {
        console.log("the count of client is :" + count);
    });

    var message = "client,the server address is " + JSON.stringify(server.address());
    socket.write(message, function() {
        var writeSize = socket.bytesWritten;
        console.log(message + " has send");
        console.log("this size of message is:" + writeSize);
    });
});


server.on("listening", function() {
    console.log("server is listening");
    var address = server.address();
    console.log("the port of server is " + address.port);
    console.log("the address of server is :" + address.address);
    console.log("the family of server is: " + address.family);
});

server.on("close", function() {
    console.log("server closed");
});

server.on("error", function(err) {
    console.log(err);
});

server.on("data", function(data) {
    console.log(data.toString());
});