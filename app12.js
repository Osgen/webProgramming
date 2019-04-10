
let express = require("express");//get express module
let app = express(); //execute express method

let port = process.env.PORT || 3000; // get port, if environment has one uses it, if not, set port to 3000

app.get("/", function(request, response){//mapping ulr to root, type, GET, responses with html
    response.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
            <script src="main.js"></script>
        </head>
        <body>
            <p>Test</p>
        </body>
    </html>`);
});

app.get("/api", function(){//mapping url type GET, send json
    res.json({firstName:"Oscar", lastName: "Virgen"});
});


app.listen(port);//listening to PORT