function sayMyName(){
    console.log("Anmol");
    console.log("Madaan");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(43,232)

console.log(result);

function loginUserMessage(username){ //Can also write direct name in place of username.
    if(!username){
        console.log("Please enter the username");
    }

    return `${username} just logged in` 
}

console.log(loginUserMessage("anmol"));