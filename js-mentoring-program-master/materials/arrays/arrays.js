const arr = [1,2,3,4,5];

/**
 * Get a length of an array
 */
console.log('The length is ' + arr.length);

/**
 * pop() method
 */

arr.pop();
console.log(arr);

/**
 * push() method
 */
arr.push(6);
console.log(arr);

/**
 * shift() method
 */
arr.shift();
console.log(arr);

/**
 * unshift() method
 */
arr.unshift(0);
console.log(arr);

/**
 * join() method
 */
const fruits = ['Apple','Banana','Orange'];
let  str = fruits.join('-');

console.log(str);
str = str.split('-');
console.log(str);

/**
 * indesOf() method
 */
console.log(fruits.indexOf('Banana'));
console.log(fruits.indexOf('Lime'));

/**
 * includes() method
 */
console.log(fruits.includes('Banana'));
console.log(fruits.includes('Lime'));

/**
 * sort() method
 */
const sortMe = ['ddd','aaa','ccc','bbb'];
sortMe.sort();

console.log(sortMe);

const numArr = [1,4,3,15];
console.log(numArr.sort());

const sortNum = (a,b) => a - b;
console.log(numArr.sort(sortNum));

/**
 * map() method
 */
const arr2 = arr.map(el => el + 2);
console.log(arr2);

/**
 * filter() method
 */
const arr3 = arr.filter(el => (el > 2) && (el < 5));
console.log(arr3);

/**
 * every() method
 */
const isBigEnough = value => value > 4;
console.log(arr.every(isBigEnough));

/**
 * some() method
 */
console.log(arr.some(isBigEnough));

/**
 * slice() method
 */
const animals = ['cat','dog','horse','pig','sheep'];
let arr1 = animals .slice(2);

console.log(arr1); 
arr1 = animals .slice(1,3);
console.log(arr1);

/**
 * splice() method
 */
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1

console.log(months); // ["Jan", "Feb", "March", "April", "June"];

months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months); // ["Jan", "Feb", "March", "April", "May"];

/**
 * reverse() method
 */
const reverseMe = ['aaa','bbb','ccc','ddd'];
let reversed = reverseMe.reverse();

console.log(reversed); // ['ddd','ccc','bbb','aaa'];

/**
 * reduce() method
 */
const reduceMe = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(reduceMe.reduce(reducer)); // 10
console.log(reduceMe.reduce(reducer, 5)); // 15

/**
 * forEach() method
 */
months.forEach(month => {
  console.log(month);
});

arr.forEach((el, i, ar) => {
  console.log(`${i}: ${el} of (${ar})`);
});

/**
 * for..of
 */
for (let month of months) {
  console.log(month);
}