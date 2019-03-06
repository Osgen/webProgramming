// //obejcts properties and methods

// let obj ={
//     greet:"Hey"
// }

// console.log(obj.greet);
// console.log(obj["greet"]);

// let prop = "greet";
// console.log(obj[prop]);


// //functions in array
// let arr=[];
// arr.push(function(){
//     console.log("Hey world 1");
    
// });

// arr.push(function(){
//     console.log("Hey world 2");
    
// });

// arr.push(function(){
//     console.log("Hey world 3");
    
// });

// arr.forEach(function (item) {
//     item();
// });

let Emitter =require("events");
//EMITTER

let emt = new Emitter();

emt.on("greet", function(){
    console.log("Someone said: 'hey boy'");
});

emt.on("greet", function(){
    console.log("A greeting occurred!");
});

emt.emit("greet");

