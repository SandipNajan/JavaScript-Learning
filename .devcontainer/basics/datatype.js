"use strict"; //treat all js code as newer version

//alert("hello")  //getting error in vs code bacasue we aew using nodejs not browser.
//so we need to open browser console and run this things on there
//code readability should be high

let name = "sandip"
let age = 23
let isLoggedIn = false
//number => 2 to power 53
//biginit
//string ==>"",'' - use mostly in double quote
//boolean ==> represents true/false
//null =>standalone value //The Null type has exactly one value, called null.
//undefined ==> Any variable that has not been assigned a value has the value undefined.
//symbol =>for finding uniqueness

//object
console.log(typeof age)  //output number
console.log(typeof undefined)//output undefined
console.log(typeof null) //output object

/*  Conversion Operation*/

let score = /*undefined */ true
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //output number
console.log( valueInNumber)  //output NaN  - Not a Number

//"33" => 33
//"33abc" => NaN
//true => 1 ; false ==> 0

let isLoggedInSystem = 1 
let booleanIsLoggedInSystem = Boolean(isLoggedInSystem)
console.log(booleanIsLoggedInSystem)

//1 ==> true 0==> false
//"" ==>false
//"sandip" ==>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
