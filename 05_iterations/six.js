// const coding = ["js","java","cpp","python"]
// const values = coding.forEach((val)=>{
//      console.log(val)
//      return val
// })
//  console.log(values)


// check condition it will return in single liine
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num > 4)
//  console.log(newNums);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//    return num > 5
// })
// console.log(newNums);


// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    {title:'Book One',genre:'Fiction',publish:1981,edition:'2004'},
    {title:'Book Two',genre:'History',publish:1982,edition:'2005'},
    {title:'Book Three',genre:'Geography',publish:1983,edition:'2006'},
    {title:'Book Four',genre:'Non-Fiction',publish:1984,edition:'2007'},
    {title:'Book Five',genre:'History',publish:1985,edition:'2008'}
];

let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1980 && bk.genre === 'History'
})
console.log(userBooks);