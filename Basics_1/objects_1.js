//const tinder = new Object() // Singleton object

const tinderUser = {}  // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Anmol"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Anmol",
            lastName:"Madaan"
        }
    }
}

//console.log(regularUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1,obj2} // if you will do like this then it will involve both the objects in unproper way
const obj4 = Object.assign({},obj1,obj2) //Proper way

const obj5 = {...obj1,...obj2} // Also one of the ways. We will us this the most

//console.log(obj5);

const users = [
    {
        id:1,
        email:"123@gmail.com"
    },
    {
        id:1,
        email:"123@gmail.com"
    },
    {
        id:1,
        email:"123@gmail.com"
    },


]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // It gets us the data types of the value *important*
// console.log(Object.values(tinderUser));//returns the values.
// console.log(Object.entries(tinderUser)); //It provides the entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Destructuring
const course = {
    courseName:  "Android Development",
    price:"499",
    instructor:"Anmol Madaan"

}

//course.instructor 

const{instructor} = course

console.log(instructor);
