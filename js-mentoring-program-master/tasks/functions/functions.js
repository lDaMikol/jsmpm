/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
	return a + b;
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
	return object.firstName + ' ' + object.lastName;
}

/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	return n % 2 !== 0;
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
	let shortest = wordArray[0];
 
    for (let i = 0; i < wordArray.length; i++) {
        if (shortest.length > wordArray[i].length) {
            shortest = wordArray[i];
        }
    }
 
    return shortest;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	let letters = 'g';
 
    for (let i = 0; i < n; i++) {
        letters += 'o';
    }
 
    return 'g' + letters + 'gle';
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
	return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let distance = 0;
 
    for (let i = 0; i < path.length; i++) {
        distance += path[i].distance;
    }
 
    return distance;
}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num
 * @param {percentage} num
 * e.g const discount10 = discountFunction(10);
 * discount10(90) should return 81
 * discount10(100) should return 90
 */
function discountFunction(percentage) {
	return function (amount) {
		return amount - amount/percentage;
	};
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
		console.log(Object.keys(this));
	},
	call() {
		return 'My name is' + ' ' + this.name + ' ' + this.lastName + ' ' + 'I am ' + ' ' + this.age + ' ' + 'years old. My best friend is' + ' ' + this.friends[2];
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