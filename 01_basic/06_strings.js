 const name = "aman"
 const repoCount = 10

//  console.log(name+repoCount+"Value");

//  console.log(`Hello my name is ${name} and My repoCount is ${repoCount}`);// String Iterpolation

    const gameName = new String ('hitesh-hc')
//  console.log(gameName.__proto__);


//  console.log(gameName.length);
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8,4)
 console.log(anotherString);


 const newString1 ="    hitesh   "
 console.log(newString1.trim());

 const url = "https://aman.com/aman%20kumar"
console.log(url.replace('%20','-'))

// console.log(url.includes(sunder))

console.log(gameName.split(''))
