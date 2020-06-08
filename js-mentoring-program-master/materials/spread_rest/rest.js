/**
 * Changing the value of variables
 */
let a = 1;
let b = 2;
[a,b] = [b,a];

console.log(a,b);

/**
 * Function parameters
 */
function log(a,b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const numbers = [1,2,3];
log(numbers); // it won't work
log(...numbers); // it will

/**
 * Desctruct an object
 */
const destrObj = { name: 'Joe', lastName: 'Doe' };


const { name: userName, lastName: surName } = destrObj;

console.log(userName, surName); // Joe Doe

// The same behavior
// const destrObj = { name: 'Joe', lastName: 'Doe' };
// const {name, lastName} = destrObj;

// console.log(name, lastName); // Joe Doe