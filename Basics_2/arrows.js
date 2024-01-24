const user = {
    username: "Anmol",
    price:839,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Karan"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "anmol"
//     console.log(this.username);
// }

// one()

// const one = function(){
//     let username = "anmol"
//     console.log(this.username);
// }

// one()

// const one = () =>{
//     let username = "anmol"
//     console.log(this.username);
// }

// one()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(3,4))