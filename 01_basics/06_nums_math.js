/***
const score = 400;
const balance = new Number(100);

console.log(balance.toString().length);

const otherNumber = 1000000.00;
console.log(otherNumber.toPrecision(3)); // To precision returns roundoff value
console.log(otherNumber.toFixed(2)); // To fixed return value upto given number of decimal values
console.log(otherNumber.toLocaleString('en-IN')); // To fixed return value in currency form
*/

/**Maths*/
/**
 * console.log(Math.abs(-4)); // It returns negative value in positives and positive value is positive
console.log(Math.round(4.9)); // It return the value is roundoff value.
console.log(Math.ceil(4.2)); // It return the value top value
console.log(Math.floor(4.2)); // It return the value lowest value
console.log(Math.sqrt(24)); // It return the square root value
console.log(Math.min(4, 4, 2, 6, 8)); // It return the lowest value

console.log(Math.random()) // It return pseudorandom  value between 0 or 1 */

console.log((Math.random() * 2) + 1) // It return values range in between 0 or 1

const min  = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);