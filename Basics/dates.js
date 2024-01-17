//Dates

let myDate = new Date()
//console.log(myDate.toString()); //Provides date in normal format.
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate); // date type is object

//let myCreatedDate = new Date(2024,2,7) // In js month starts from 0 means 0- Jan.
//let myCreatedDate1 = new Date(2023,1,22,14,6)
let myCreatedDate2 = new Date("10-06-2023")
//console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myCreatedDate2.getTime()); // getting time in milli sec

console.log(Math.floor(Date.now()/1000)); // converting to seconds.

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday:"long"
})

// Last line is particular used for going in depth of date like weekday long means it will return mon as monday