//Pass by value

function change (h){
    h=2;
}

let a = 1;
change(a);
console.log(a);

//Pass by reference

function changeObject(d){
    d.prop1 = function(){};
    d.prop2 = {}; //Empty object
}

let c={};//Empty object
c.prop1 = {};//Empty object
changeObject(c);
console.log(c);

