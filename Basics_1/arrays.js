const arr = [0,1,2,3,4,5]

const cricket = ["India","Aus","Eng","NZ"]

const arr1 = new Array(1,2,3,4)

//console.log(cricket[2]);

// Array methods

//arr.push(6)
//arr.push(7)
//arr.push(8)
//arr.pop()

// arr.unshift(5)
// arr.unshift(5)
// arr.unshift(5)
// arr.shift()
//console.log(arr.includes(5));

const newArr = arr.join()
//console.log(arr);
//console.log(newArr);
// console.log(typeof arr) // type will be different for newArr from arr (newArr-string,arr-object)

//slice and splice

console.log("A ", arr)

const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B ", arr);

const myn2 = arr.splice(1,3)
console.log("C ",arr)
console.log(myn2);


//slice - it provided value from start to end-1 index.
//splice - it removed value from start to end index


