//  Date 

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

//  let myCreatedDate = new Date (2023,0,23)
//  console.log(myCreatedDate.toLocaleDateString());

 let myCreatedDate = new Date ("2023-01-14")

 //  console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now()

//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime())
//  console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

//  `${newDate.getDay} and the time`

newDate.toLocaleString('dafault',{
    weekday: "long",
})
