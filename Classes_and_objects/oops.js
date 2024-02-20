const user = {
    username: "Anmol",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);

    }
}



console.log(user.username);
console.log(user.getUserDetails())

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Anmol",23,false);
const userTwo = new User("Anmol Madaan",22,true);
console.log(userOne.constructor);