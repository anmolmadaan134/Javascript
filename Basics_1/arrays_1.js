const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

 marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3,1]);

// const allHeroes = marvel.concat(dc)
// console.log(allHeroes);

// const all_new_hero = [...marvel,...dc] // it is used the most.
// console.log(all_new_hero);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(1)

// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Anmol"));
// console.log(Array.from({name:"Anmol"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
