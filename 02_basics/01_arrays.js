// Array
const arr = [0,1 ,2, 4, 3, 6, 5];
const myHeros = ['Ben10', 'Shaktiman'];

const arr2 = new Array(1, 2, 3, 4)

// Array Methods

arr.push(6); // Appends new elements as a last element of the array.
arr.pop() // removes the last element of the array

arr.unshift(8) // Appends the new elements as a first element of the array.
arr.shift(); // removes the first element of the array.

// console.log(arr.includes(9)); // returns boolean value for 
// console.log(arr.indexOf(3)); // returns the index number of the value


// console.log(arr.join()) // Join every element of the array using comma and converts them to string

// Slice and splice

console.log("A", arr);

const sliceArr = arr.slice(1, 3); // It does not modifies the original array. Rather creates a shallow copy and modifies the copied array
console.log(sliceArr);
console.log("b",arr)

const spliceArr = arr.splice(1, 3); // It does modifies the original array. 
console.log(spliceArr);
console.log("c", arr)