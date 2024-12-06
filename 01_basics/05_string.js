const name = "suresh";
const repoCount = 50;

// //console.log(name + repoCount + "Value");

// //console.log(`Hi ${name} my repoCount is ${repoCount} any value`);

/***
 * Declaration of Sting
*/

const strValue = new String("New-String-Value");

/***
 * Available function in a string
 */
//console.log(strValue.__proto__);
//console.log(strValue.length);
//console.log(strValue.toUpperCase()); // to convert the string in upper case;
//console.log(strValue.charAt(2)); // Pass number or index as argument
//console.log(strValue.indexOf('S')) // to know index of a string

const newStrValue = strValue.substring(-16, 4); // It accepts start index and index of your choice to create a substring of the actual value. it does not affect the original value rather creates a new copy of the variable and modifies it. It ignores the negative value and start from 0
//console.log(newStrValue);

const anotherStringValue = strValue.slice(-3, 2); // It accepts start index and index of your choice to create a part of the actual value. It does not affect the original value rather creates a new copy of the variable and modifies it. It does not ignore the negative value and start of slicing the string value from given start index upto the given last index reversly.
//console.log(anotherStringValue);

const replaceString = "https://google.com/suresh%20pradhan";
//console.log(`Replace Method ${replaceString.replace('%20', '-')}`)
//console.log(`Includes Method ${replaceString.includes('Suresh')}`)
//console.log(strValue.split('-'));


/***
 * Practice question on String
 */
const dummyString = "hello world !";

// 1. Reverse a string
//console.log(dummyString.split('').reverse().join(''));

// 2. Count Vowels
function countVowels(dummyString) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (char of vowels) {
        if (dummyString.includes(char)) {
            count++;
        }
    }
    return count;
}

const count = countVowels(dummyString);
//console.log(count)

// 3. Palindrome a string
//console.log(dummyString.split('').reverse().join('') == dummyString);

// 4. Captilalize First Letter
function capitalizeFirstLetter(dummyString) {
    let newStr = dummyString.split(' ');
    for (let char of newStr) {
        newStr += char.charAt(0).toUpperCase() + char.slice(1) + ' ';
    }
    return newStr;
}

const result = capitalizeFirstLetter(dummyString);
//console.log(result);

// 5. Find the longest word

function longestWord(dummyString) {
    let newStr = dummyString.split(' ');
    let cleanWord = '';
    let longestWord = '';
    for (let word of newStr) {
        for (let char of word) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                cleanWord += char;
            }
        }
        if (cleanWord.length > longestWord.length) {
            longestWord += cleanWord;
        }
        return longestWord;
    }
}

const longestWordResult = longestWord("The quick brown fox jumps over the lazy dog!")
console.log(longestWordResult)
