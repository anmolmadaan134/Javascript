const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumber.map( (num) =>{ return num + 20}) 

const newNums = myNumbers.
                map( (num) => num*10).
                map( (num) => num+1).
                filter( (num) => num>=40)

console.log(newNums);