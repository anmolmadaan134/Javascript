//var c =300
let a =300 // global scope
if(true){
    let a = 10
    const b = 20
    //console.log("Inner:",a);
    //var c = 30
}
//There is main issue with var that even if it is out of scope then also it is printing value
// that's why it is said to not use var

//console.log(a); 
//console.log(b);
//console.log(c);

// function one(){
//     const username = "Anmol"

//     function two(){
//         const web = "Youtube"
//         console.log(username);
//     }
//     //console.log(web);

//    two()
// }

// one()

if(true){
    const username = "Anmol"
    if(username==="Anmol"){
        const website = "youtube"
        console.log(username + website);
    }
  //  console.log(website);
}

//console.log(username);


//****intersting****** */
console.log(addOne(54));
function addOne(num){
    return num+1;
}

const addTwo = function(num){
    return num + 2
}


console.log(addTwo(5))