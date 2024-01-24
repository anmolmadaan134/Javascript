// Immediately invoked function expressions (IIFE)

(function one(){
    console.log(`DB CONNECTED`);
})();

//()() -  First () used for function defination and other () used for its execution. IIFE are particulary used to save code from global scope pollution
// ; - need to use this colon for separting 2 functions.

// ( ()=> {
//     console.log(`DB TWO CONNECTED`);
// })()

( (name)=> {
    console.log(`DB TWO CONNECTED ${name}`);
})('Anmol')