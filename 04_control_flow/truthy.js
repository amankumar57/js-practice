const userEmail =[]

if(userEmail){
    console.log("got user email")
}else {
    console.log("dont have user email")
}

// falsy values

// false, 0, -0, bigint 0n, "", null, NaN, undefined

// truthy values

// "0", 'false', "space",[],{},function(){}

// if(userEmail.length === 0){
// console.log("array is empty")
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
// console.log("array  object is empty")
// }

// nullish coalescing operator(??) null & undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
// val1= undefined ?? 15

val1 = null ?? 10 ?? 15

console.log(val1)

// Ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")