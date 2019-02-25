let person = {
    firstName : 'Oscar',
    lastName : 'Bebe',
    greet :function(){
        console.log("My name is "+this.firstName+" "+ this.lastName);
        
    }
};

person.greet();
console.log(person["lastName"]);
