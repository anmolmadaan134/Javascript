class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teach = new Teacher("Teach","teach@gmail.com","123")

teach.addCourse()

const student = new User("Anmol")

student.logMe()
teach.logMe()

console.log(teach instanceof User);