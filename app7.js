// let util = require("util");

// function Person() {
//     this.firstName ="Oscar";
//     this.lastName ="Virgen";
// }

// Person.prototype.greet = function(){
//     console.log(`Hey ${this.firstName} ${this.lastName}`);
// }

// function Policeman() {
//     this.badgeNumber = "1234";
//     Person.call(this);
// }

// util.inherits(Policeman, Person);
// let officer = new Policeman();

// officer.greet();


'use strict';

class Person {

    constructor(first, last){
        this.firstName =first;
        this.lastName =last;
    }

    greet(){
        console.log(`Hey ${this.firstName} ${this.lastName}`);
    }
}

let oscar = new Person("oscar", "virgen");
oscar.greet();

let dany = new Person("dany", "oca");
dany.greet();