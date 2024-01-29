const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (val){   // we not have to give any specific name to thid function as it is a call back func
    //console.log(val);
})

coding.forEach((item)=>{
    //console.log(item);
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName :"js"
    },
    {
        languageName : "java",
        languageFileName :"java"
    },
    {
        languageName : "python",
        languageFileName :"py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})