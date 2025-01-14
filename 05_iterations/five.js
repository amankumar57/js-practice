const coding = ["js","java","cpp","python"]

// for each loop with function 

coding.forEach( function(item){
    // console.log(item);
} )

// with arrow function
coding.forEach((val) => {
    // console.log(val);
})
function printMe(val){
    // console.log(val)
}

coding.forEach(printMe) // use reference of function

coding.forEach((val,index,arr) => {

    // console.log(val,index,arr);
})

const myCoding =[
    {
    languageName: "JavaScript",
    languageFileName: "js"
},
{
    languageName: "Java",
    languageFileName: "java"
},
{
    languageName: "Python",
    languageFileName: "py"
}
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})