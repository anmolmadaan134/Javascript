const name = "Anmol"
const roll_no = 24

// console.log(name + " " + roll_no + " is excellent student") // Very old method and bad method to write.

//console.log(`Hello My name is ${name} and my roll number is ${roll_no}`); 

const gameName = new String('Anmol-Madaan')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto___);

console.log(gameName.toUpperCase);

console.log(gameName.charAt(4));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(4,-4) // can use negative values
console.log(anotherString);

const url = "https.//google.com/%20mad"

console.log(url.replace('%20','-')); // replace use for replacing word with other word.

// can use includes for checking whether any word is there in url or not

console.log(gameName.split('-'));




