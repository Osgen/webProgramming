// let util = require("util");

////OBJECT IN THE KNOWN WAY
// function Person() {
//     this.firstName ="Oscar";
//     this.lastName ="Virgen";
// }
    ////CREATE FUNCTION GREET
// Person.prototype.greet = function(){
//     console.log(`Hey ${this.firstName} ${this.lastName}`);
// }

// function Policeman() {
//     this.badgeNumber = "1234";
//     Person.call(this);//CALL FATHER
// }

// util.inherits(Policeman, Person);
// let officer = new Policeman();

// officer.greet();


'use strict';


//THIS IS CLASS STRUCTURE IN ES6
class Person {

    constructor(first, last){
        this.firstName =first;
        this.lastName =last;
    }
    //FUNCTION AS OBJECT ORIENTARED
    greet(){
        console.log(`Hey ${this.firstName} ${this.lastName}`);
    }
}

//INSTANCES AND FUNCTIONS
let oscar = new Person("oscar", "virgen");
oscar.greet();

let dany = new Person("dany", "oca");
dany.greet();