
//function statement
let greet = ()=>{
    console.log("Hey");
}
greet();

//function are first-class
let  logGreeting = (funcion)=>{
    funcion();
}
logGreeting(greet);

//function expression
let greetMe = ()=>{
    console.log("Hey Oscar");
}
greetMe();

logGreeting(greetMe);
logGreeting(()=>{console.log("Hey Oscar, this is an anonymous function on the fly");})