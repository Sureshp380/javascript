const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const flatArray = [1 , 2, 3, 4, [5, 6, 7, [8, 9, 0]]]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


const spread = [...marvel_heros, ...dc_heros]; // Spread Operator : It allows an iterable, such as arrays or string to be expanded in places where zero or more arguments or elements are expected.
console.log(spread);

console.log(flatArray.flat(Infinity)); // Flat: Returns a new array with all sub elements to a given depth. It "infinity" as a argument is given it will includes all the elements.

console.log(Array.isArray("Suresh")); // IsArray : return boolean if the passed argument is an Array.
console.log(Array.from("Suresh")); // from: Converts the given string as a argument into an array.
console.log(Array.from({
    name: "Suresh"
}));

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3)); // of : return a new set of arrays.

