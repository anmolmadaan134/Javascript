// let myName = "Anmol    "

// console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "Sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);

    }


}

Object.prototype.Anmol = function(){
    console.log(`Anmol is present in all objects`);
}

// When we use Object to all variables like arr,string will get power to use the prototype

// heroPower.Anmol()
Array.prototype.heyAnmol = function(){
    console.log(`Anmol says hello`);
 }

 myHeroes.Anmol()
 myHeroes.heyAnmol()

//  heroPower.heyAnmol()


//inheritance

const User = {
    user:"Anmol",
    email:"Anmol@gmail.com"
}


const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime:true,
    __proto__:TeachingSupport

}

 Teacher.__proto__ = User

 //modern syntax

 Object.setPrototypeOf(TeachingSupport,Teacher)

 let anotherUsername = "Anmol Madaan  "

 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`);
 }

 anotherUsername.trueLength()
 "Anmol".trueLength()

