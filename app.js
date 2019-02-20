
//function statement
function greet(){
    console.log("Hey");
}

greet();

//function are first-class
function logGreeting(funcion){
    funcion();
}

logGreeting(greet);

//function expression
let greetMe = function(){
    console.log("Hey Oscar");
}

greetMe();

logGreeting(greetMe);