let http = require("http");

http.createServer(function (req, res) {
    
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hellow world\n");

}).listen(1337, 'localhost');