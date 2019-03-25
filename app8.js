
'use strict';

let EventEmitter = require("events");
let util = require("util");

//CREATE CLASS extending from EventEmitter
class Greetr extends EventEmitter{
    //SET CONSTRUCTOR
    constructor(){
        //call super
        super();
        this.greeting = "Hello";
    }

    //SET FUNCTION
    greet(name){
        //SET ON, OF EVENTEMITTER
        this.on('greet', function(data){
            console.log("Someone greeted");
            
        });
        
        console.log(`${this.greeting}  ${name}`);
        //EMIT FROM EVENTEMITTER0
        this.emit('greet', name);
    }
}


//CREATE OBJECT
let greeter1 = new Greetr();

//EXECUTE FUNCTION GREET
greeter1.greet("oscar");
console.log(greeter1.greet);
