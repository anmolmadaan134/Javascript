function setUsername(username){
    //Complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username)    // Call is used for calling out the function and we need to use this as to set current context of current function only.
    
    this.email = email
    this.password = password
}

const exam = new createUser("Anmol","anmol@gmail.com","123")

console.log(exam);