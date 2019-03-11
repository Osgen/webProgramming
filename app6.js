
// // //Object literal
// // let Person ={
// //     firstName:"",
// //     lastName:"",
// //     greet:function(){
// //         return `${this.firstName} ${this.lastName}`;
// //     }
// // }

// // //this following objects are not the same as de object literal above
// // let oscar = Object.create(Person);
// // oscar.firstName="Oscar";
// // oscar.lastName="Virgen";

// // let daniel = Object.create(Person);

// // daniel.firstName="Daniel";
// // daniel.lastName="Deem";

// // console.log(oscar.greet());
// // console.log(daniel.greet());

// let EventEmitter = require("events");
// let utils =require("util");

// //create object with greeting text
// function Greetr() {
//     this.greeting = "Hello boe";
// }

// //adds eventEmitter to the heritance tree of the object created above
// utils.inherits(Greetr, EventEmitter);

// //greet is now a function of the object created
// Greetr.prototype.greet = function(who){
//     console.log(this.greeting+": "+who);
//     //beacause of the heritance, emit can by use by Greetr
//     this.emit("greet", who);
// }

// //instance a new object
// let greeter1 = new Greetr();

// //adds new listener to greet
// greeter1.on("greet", function(who){
//     console.log("someone greeted: "+who);
// });

// greeter1.greet("Me");

let obj ={
    name:"daniel juan",
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}

obj.greet();

//call and aplly allow us to send params, which sustites the variable this
//in the object function
obj.greet.call({name:"Jane Juan"});
obj.greet.apply({name:"Edgar Juan"});
