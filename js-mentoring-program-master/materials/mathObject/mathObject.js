/**
 * getting a random number between 0 an 1
 */
console.log('Random value is: ' + Math.random());

/**
 * getting the largest integer less than or equal to a given number
 */
console.log('The largest integer less than or equal to a given number is: ' + Math.floor(5.67));

/**
 * round a number up to the next largest whole number or integer
 */ 
console.log(Math.ceil(4)); // 4
console.log(Math.ceil(7.004)); // 8

/**
 * Example: generate a random number between 0 and the given one
 */
function getRandomNumber(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
  
console.log('The random number is: ' + getRandomNumber(10));