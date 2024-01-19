//singleton - used in constructor
//Object.create

//object literals

const mySym = Symbol("Key1")

// we can't call symbol directly in object we have to use [] for calling symbol i jsuser.
const JsUser = {
    name:"Anmol",
    "Full Name":"Anmol Madaan",
    [mySym]:"MyKey1",
    age:24,
    location:"Bahadurgarh",
    email:"anmol@gmai.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

//JsUser.email = "abcd@gmail.com"
//Object.freeze(JsUser) // After applying freeze you can't change any variable which you have described above
//JsUser.email = "pqrs@gmail.com"
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello user");
}


JsUser.greetingTwo = function() {
    console.log(`Hello user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

