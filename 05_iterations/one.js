// for


// for (let j = 0; index < 10; index++) {
//     const i = index;
//     if(i == 3){
//         // console.log("5 is best number");
//     }
//     // console.log(i);
// }
// // console.log(i)



// for (let i = 0; i <= 10; i++) {
//     // console.log(`Inner loop ${i}`);

//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Outer loop ${j} and inner loop ${j}`)
        
//     } 
// }

let myArray = ["batman","ironman", "superman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// continue and break keyword

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue;
    } 
    console.log(`value of i is ${index}`);  
}