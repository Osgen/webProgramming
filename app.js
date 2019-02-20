function greet(){
    console.log("Hello");
}

greet();

function logGreeting(funcion){
    funcion();
}

logGreeting(greet);