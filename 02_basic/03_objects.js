// singleton
// Object.create


// object literal

const mySym = Symbol("key1")

const jsUser = {
    name : "Aman",
    "full Name" : "Aman Kumar",
    [mySym] : "mykey1",
    age : 18,
    loaction : "Jaipur",
    email : "abc57199@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym])

jsUser.email = "aman0507@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "aman5799@gmail.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello jsUser");
}
jsUser.greeting2 = function(){
    console.log(`Hello jsUser,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());