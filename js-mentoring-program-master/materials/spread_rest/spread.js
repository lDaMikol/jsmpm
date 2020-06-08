/**
 * Spread for arrays
 */
const video = ['youtube', 'netflix', 'rutube'];
const socials = ['vk', 'instagram', 'twitter'];
let internet = [video, socials, 'facebook'];
console.log(internet); // [Array(3), Array(3), "facebook"] :(
internet = [...video, ...socials, 'facebook'];

console.log(internet); 

/**
 * Copy an array
 */
const arr = [1,2,3];
const arr2 = [...arr];

/**
 * Copy an object
 */
const obj1 = { a:1, b:2 };
const obj2 = { c:3, d:4 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // { a:1, b:2, c:3, d:4 }