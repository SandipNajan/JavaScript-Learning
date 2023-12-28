const name = "Sandip"
const repoCount = 5
//console.log(name + repoCount + " Value");  //not used this syntax

//use bactics - string interpolation using placeholder
//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('SandipNajan')
// console.log(gameName[0]); //S
// console.log(gameName.__proto__); //{}  -getting a whole prototype in object format
// console.log(gameName.length) //11
// console.log(gameName.toUpperCase()); //SANDIPNAJAN
// console.log(gameName.charAt(3)); //d
// console.log(gameName.indexOf('a'));   // 1 taking first possition


const newString = gameName.substring(0,5)  // start and end last value not including Sandi
//console.log(newString);

const anotherString = gameName.slice(-5,-2)  
console.log(anotherString);

const newStringOne = "  Sandip "
console.log(newStringOne.trim());  //remove (unecessary) white space from both end side  (trimstart() and trimEnd) and 
//return new string

const url = "https://sandipnajna%20google"
console.log(url.replace('%20','_')) //replacing %20 to _ symbol
console.log(url.includes('naj'))  //checking this keyword present or not in sentence
console.log(url.split('/'));

//String Study link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

