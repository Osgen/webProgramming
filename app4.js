//Import function (propertie)

let greet = require("./greet4.js").greet;
greet();

//Import object
// let greetObj = require("./greetOb.js");
// greetObj.greet();
// greetObj.greeting = "Changed";


//Reference to the same object
// let greetObj2 = require("./greetOb.js");
// greetObj2.greet();
// greetObj.greet();

//greetRef has de object code, so it needs to be a new instance
let greetRef = require("./greetOb");
let greetObj = new greetRef();
greetObj.greet();


let greetLiteral = require("./greetLiteral").greet;
greetLiteral();