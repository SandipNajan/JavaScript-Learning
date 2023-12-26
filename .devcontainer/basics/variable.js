const accounId =144553
let accountEmail="najansandip@mail.com"
var accountPassword ="12345"
accountCity = "Pune"
/*
prefer not to use var
because of issue block scope and functional scope
*/

// accounId =4  //Not allowed
accountEmail ="sdfs@gmail.com"
accountPassword ="sdf"
accountCity="blr"
// console.log(accounId);
let accountDate; //it will get undefined value in output
console.table([accounId,accountEmail,accountPassword,accountCity,accountDate]) //print the value in table format
