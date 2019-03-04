function Greetr(){
    this.greeting = "Hello world object";
    this.greet = function(){
        console.log(this.greeting);
        
    }
}


//Export object
//module.exports = new Greetr();


module.exports = Greetr;

