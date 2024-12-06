/**
 * Primitive Data Types = This are call by value. When the variable of these  are assigned it creates a copy and the values are assigned to those copies 
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. undefined
 * 6. Symbol
 * 7. BigInt
 * 
 * Notes : 
 * It comes under stack memory. Which creates a copy of the variable and assigned the value to the newly created copied variable
 */

/**
 * Non Primitive Type = This are call by reference. When the variable of these are assigned it was assigned to the index number of these type
 * 1. Arrays
 * 2. Object
 * 3. Function
 * Notes:
 * It comes under heap memory. Which reassigned the value to the reference of the variable. It does not create a copy 
 */

// Stack(Primtive), Heap(Non- Primitive) 


let myName = 'Suresh';
let anotherName = myName;
anotherName = 'Pradhan';
console.log(myName);
console.log(anotherName);