// for of loop
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5] 
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}

// maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")
map.set('UAE',"United Arab Emirates")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}
const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value)
    // output :TypeError: myObject is not iterable
}