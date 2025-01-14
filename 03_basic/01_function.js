// Function

function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("s");
    console.log("h");
}
// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNum(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
    
}
const result = addTwoNum(3,9)

// console.log("Result:",result)
function loginuserMessage(userName = "sam"){
    if(!userName){
        console.log("please enter a username")
        return
    }
    return `${userName} just loggedIn`

}
// console.log(loginuserMessage("Aman"))
// console.log(loginuserMessage("Aman"))

function calculateCartPrice(val1,val2, ...num1){ //(...)rest operator
    return num1
}
// console.log(calculateCartPrice(200,4000,500,333,557765))

const user = {
    username: "Aman",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 499
})

const myNewArray = [200,400,555]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,555]))