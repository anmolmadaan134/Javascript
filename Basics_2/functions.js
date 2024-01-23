// function sayMyName(){
//     console.log("Anmol");
//     console.log("Madaan");
// }

// //sayMyName()

// // function addTwoNumbers(number1,number2){
// //     console.log(number1+number2);
// // }

// function addTwoNumbers(number1,number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(43,232)

// console.log(result);

// function loginUserMessage(username){ //Can also write direct name in place of username.
//     if(!username){
//         console.log("Please enter the username");
//     }

//     return `${username} just logged in` 
// }

//console.log(loginUserMessage("anmol"));

function calculateCartPrice(val1,val2,...num1){ // we need to use ... operator if we want to return all values of func. val1,val2 occupied by first 2 numbers.
    return num1
}

// console.log(calculateCartPrice(4334,565,7676,78));

const user = {
    username:"Anmol",
    prices:232

}

function handleObject(any){
    console.log(`Username is ${any.username} and price is ${any.price}`);
}

//handleObject(user)

handleObject({
    username :"sam",
    price:823
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[0]
}

//console.log(returnSecondValue(myNewArray));