const myNums = [1,2,3,4,5,6,7,8,9,10,50]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`)
//     return acc + currval
// }, 0)
const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(myTotal);

const shopppingCart = [
    {
        itemName: "js Course",
        price: 1999
    },
    {
        itemName: "java Course",
        price: 2999
    },
    {
        itemName: "python Course",
        price: 3999
    },
    {
        itemName: "dev Course",
        price: 4999
    },
    {
        itemName: "dataScience Course",
        price: 12999
    }
] 
const priceToPay = shopppingCart.reduce((acc, item) => acc + item.price,0)
console.log(priceToPay);