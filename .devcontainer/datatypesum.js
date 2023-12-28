//DataType Primitive and Non Primitive/Reference type
// Primitive Datatype : 7 Types : String,Number,Boolean,Null,undefined,Symbol,BigInit
//Reference Type : (Non Primitive): Array,Objects,Functions

//Que : JS is Dynamics or Static Lang?

//symbol define
const id = Symbol('123')
const anotherid = Symbol('123');
console.log(id === anotherid)   //output false

const bigNumber = 231432543543654632423423423432423n
console.log(bigNumber)

const heros =["a","b","c"]
let myObj = {
    name:"d",
    age:4,
}

const myFunction = function(){
    console.log("hello world");
}


//typeof asking in interview  null==object
// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack and Heap memory management
//Stack (Primitive  datatype : Stored Value in stack)
//Heap (Non Primitive Datatype : Stored Address(Refrence) in memory)
