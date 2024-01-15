// Primitive

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 200
const scoreV = 209.2

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id)
//console.log(anotherId);

console.log(id===anotherId);

// Reference (Non-Primitive)

// Array, Objects, Functions

const cricketers = ["Rohit","Dhoni","Virat"]

/*let myObj = {
    name: Anmol,
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}*/

// All dataypes of Non-primtive are known as functions. For function it known as function object

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// ************** Stack and Heap memory *************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Anmol"

let anotherName = myName
anotherName = "Ankit"

console.log(myName);
console.log(anotherName);

let userOne ={
    email: "abc@gmail.com",
    phone: 9834834334
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email)
