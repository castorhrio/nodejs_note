var net = require('net');

var port = 8065
    //create TCP server
var server = net.createServer(function(socket) {
    console.log("someone connect");
});

//set listening port
server.listen(port, function() {
    console.log("server is listening on port:", port);
});

//上面的方法等同于下面的方法
// server.listen(port);
// server.on("listening", function() {
//     console.log("server is listening");
// });