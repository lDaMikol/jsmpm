/**
 * write function that adds two numbers
 *
 */
function add(a, b) {

}

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {

}

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {

}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {

}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {

}

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {

}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {

}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

function discountFunction(amount) {

}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		//write your code here
	},
	call() {
		//write your code here
	}

};

module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};