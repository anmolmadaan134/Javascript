const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Db calls, cryptography, network.

    setTimeout(function(){
        console.log('Async Task is complete');
        resolve()   // To connect then we need to add resolve function so can it connects to then and run successfully
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Anmol",email:"anmol@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Anmolmad123",password:"123"})            
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript",password:"123"})            
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()  // basically it takes time to provide the data so we need to use await.
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/anmolmadaan368')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error=> console.log(error)))