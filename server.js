var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hi, Vishal. This is node server application\n");
    res.end('Hello World\n');
});

server.listen(5600);


