let http = require("http");
let fs = require("fs");

http.createServer(function (req, res) {
    
    res.writeHead(200, {'content-type': 'text/html'});
    let html = fs.readFileSync(`${__dirname}\\index.html`, "utf8");
    let message = "Msg desde Js";
    html= html.replace("{Message}", message);
    res.end(html);

}).listen(1337, 'localhost');