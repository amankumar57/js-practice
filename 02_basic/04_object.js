// const tinderUser = new Object()

const tinderUser = { }

tinderUser.id = "1245"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname :{
        userFullName:{
            firstName: "Aman",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"c",4:"d"}
const obj4 = {4:"a",5:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id:1,
        email:"ha@gmail.com"
    },
    {
        id:2,
        email:"hr@gmail.com"
    },
    {
        id:3,
        email:"ra@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course // destructor format
console.log(instructor);

// {
//     "name":"Aman",
//     "courseName":"js in hindi",
//     "price":"free"
// }


[
    {},
    {},
    {}
]
