/*const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2))

let numberForPricision = 123.8935
console.log(numberForPricision.toPrecision(4));


const hundreds = 1000000
console.log(hundreds.toLocaleString())   //this is shpwing US format  - 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  //this is showing in India Format numbering  - 10,00,000

*/

// +++++++Maths+++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));   //changing to possitive value
console.log(Math.round(4.6));  //if value after decimal greater than 5 then taking next number like 4.6 == 5 or below five getting privious number like 4.4 = 4 
//For controlling which value we need before or after the number for that use ceil and floor
console.log(Math.ceil(4.2));   //taking next value =5
console.log(Math.floor(4.9));  //taking 4  lowest value
console.log(Math.random());  //giving output 0... and 1...  -  for avoiding this things so we are multipying 10 for shifing left side and add 1 for above 1 
console.log(Math.random()*10 + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)   //it will show number between 10 and 20