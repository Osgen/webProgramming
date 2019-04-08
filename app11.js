let http = require("http");
let fs = require("fs");

http.createServer(function (req, res) {
    
    if(req.url==="/"){//validate root request
        // let html = fs.readFileSync(`${__dirname}\\index.html`, "utf8");
        // let message = "Msg desde Js";
        // html= html.replace("{Message}", message);
        fs.createReadStream(`${__dirname}/index.html`).pipe(res);//show index view

    }else if(req.url==="/api"){//validate api request

        res.writeHead(200, {'content-type': 'application/json'});//set json content type
        let obj ={firstName:"Oscar", lastName:"Virgen"};
        res.end(JSON.stringify(obj));//show json object in view

    }else{//if any of our routes, send to error 404
        res.writeHead(404);
        res.end();
    }

}).listen(1337, 'localhost');//server listenning to localhost port 1337