let express = require("express");//get express module
let app = express(); //execute express method
let database = require("./database");

let port = process.env.PORT || 3000; // get port, if environment has one uses it, if not, set port to 3000

app.get("/all", function(request, response){//mapping ulr to root, type, GET, responses with html
    let persons =database.getAll();
    
    if(persons)
    response.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Page Title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <p>Get al</p>
        </body>
    </html>`);
});

app.get("/save", function(request, response){//mapping url type GET, send json
    let person = {firstName:"a", lastName: "v", address:"av. siempre viva"};
    
    if(database.savePerson(person)){
        response.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title>Page Title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <p>${person.firstName}-${person.lastName}-${person.address}</p>
            </body>
        </html>`);
    }
});


app.listen(port);//listening to PORT

function generateList(persons){
    console.log(persons);
    
    let list="";
    persons.forEach(person => {
        list+=` <p>${person.firstName}-${person.lastName}-${person.address}</p>`;
    });
    return list;
}