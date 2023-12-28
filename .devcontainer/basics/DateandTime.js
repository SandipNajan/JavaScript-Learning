//Dates

let myDate = new Date()  //it is date object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)  //object

let mycreatedDate = new Date(2000,5,22)
console.log(mycreatedDate.toLocaleString());


let myTimeStamp =  Date.now()
//console.log(myTimeStamp);
//console.log(mycreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
console.log(newDate.getMonth() + 1)


newDate.toLocaleString('default',{
    weekday : "long",
})