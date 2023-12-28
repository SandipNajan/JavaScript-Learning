//Array

const myArr = [0,1,2,3,4,5];
const MyHeros = ["Shaki","Gowinda"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

//Arrays Method

//myArr.push(9)  //add element last
//myArr.push(7)
//myArr.pop() //remove last element from array
//myArr.unshift(7)  //insert element start in the array
//myArr.shift()    // reomve the first element from array and retrun it
//console.log(myArr);
//console.log(myArr.includes(4)); //checking value present or not
//console.log(myArr.indexOf(33));
  //if value are present the return index number if not then return -1

  const newArr = myArr.join()
  //console.log(typeof newArr)  //convert in string

  //Interview Quetion differnce between 
  //slice ,splice

  console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);