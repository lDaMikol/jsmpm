/**
 * get a character from the string
 */
let str = 'string';
console.log('The first character is: ' + str.charAt(0)); 
console.log('The first character is: ' + str[0]);

/**
 * get a length of the string
 */
console.log('String length is: ' + str.length);

/**
 * Convert a string to an array
 */
let months = 'January February March April';
let arr = months.split(' ');
console.log(arr); // ['January', 'February', 'March', 'April']

/**
 * Remove whitespaces
 */
let trimMe = '   string   ';
console.log(trimMe.trim()); // 'string'

/**
 * extract a section from the string
 */
let sliceMe = 'My new string';
console.log('3rd word is ' + sliceMe.slice(7)); // 'string'
console.log('1st word is ' + sliceMe.slice(0,3)); // 'My'

/**
 * Convert to Upper/Lower case
 */
let caseMe = 'sTrInG';
console.log('To Upper case: ' + caseMe.toUpperCase());
console.log('To Lower case: ' + caseMe.toLowerCase());

/**
 * Template literal
 */
let firstName = 'John';
let lastName = 'Doe';
let age = 25;

console.log(firstName + " " + lastName + " is " + age + " years old"); // "John Doe is 25 years old"
console.log(`${firstName} ${lastName } is ${age} years old`); // "John Doe is 25 years old"

/**
 * Regexp
 */
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const found = paragraph.match(/[A-Z]/g);
const foundLetter = paragraph.match(/q/g);

console.log(found); // ["T", "I"]
console.log(foundLetter ); // ["q"]