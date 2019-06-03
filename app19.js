let express = require("express");//get express module
let app = express(); //execute express method
let port = process.env.PORT || 3000; // get port, if environment has one uses it, if not, set port to 3000
let statusSuccess = {"error":false, "status":200, "message":"Success"};
let statusFailed = {"error":true, "status":404, "message":"Not found"};

app.get("/", function(request, response){//mapping ulr to root, type, GET, responses with html
    response.json(statusSuccess);
});

app.get("/user", function(request, response){//mapping ulr to root, type, GET, responses with html
    let id = request.param('id');
    if(id<10){
        response.json(statusFailed);
    }else{
        response.json(statusSuccess);
    }
});

app.listen(port);//listening to PORT