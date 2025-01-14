// primitive datatype

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 // String
const scoreValue = 100.3 // Number

const isLoggedIn = false // Boolean

const outsideTemp = null // Null
let userEmail; // Undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123')

console.log(id===anotherId) 

// const bigNumber = 25356746857n // BigInt


// Reference(Non-Primitive) Types : 

// Arrays, Objects, Functions

const heros = ["saktiman", "naagrag", "doga"]
let myObj = {
    name:"aman",  // Object
    age:24,
}

const myFunction = function(){ // Function
    console.log("Hello World")
}

console.log(typeof myFunction);



//++++++++++++++++++++++++++++++++++++++++++++


// Memory management

// Stack (Primitive ), Heap (Non-Primitive)

let myYoutubeName = "codewithAmanKumar"

let anotherName = myYoutubeName
anotherName = "ChaiAurCode"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@upi"
}
       
let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



