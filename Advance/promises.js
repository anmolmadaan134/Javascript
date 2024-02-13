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
    setTimeout()
})