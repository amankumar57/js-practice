const marvel_Heros = ["thor","Ironman",'Spiderman'] 
const dc_Heros = ["superman", "flash","batman"]

// marvel_Heros.push(dc_Heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const allHeros = marvel_Heros.concat(dc_Heros);
// console.log(allHeros);

// const all_new_Heros = [...marvel_Heros, ...dc_Heros]
// console.log(all_new_Heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name: "Aman"}));

let score1 = 1000;
let score2 = 2000;
let score3 = 3000;
console.log(Array.of(score1,score2,score3));

