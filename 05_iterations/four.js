// for in loop in object
const myObject = {
    js:'javaScript',
    cpp:'C++',
    rb:"Ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// in Array
const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(`${key} shortcut is for ${programming[key]}`)
        
    }

const map = new Map() // it is not iteratable
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")
map.set('UAE',"United Arab Emirates")
map.set('IN',"India")

for (const key in map) {
    // console.log(key)
}
