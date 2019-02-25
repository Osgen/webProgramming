function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){
    console.log("Hey "+this.firstName+" "+this.lastName);
}

let oscar = new Person("oscar", "virgen");
oscar.greet();

let daniel = new Person("daniel", "virgen");
daniel.greet();

let juan = new Person("juan", "virgen");
juan.greet();