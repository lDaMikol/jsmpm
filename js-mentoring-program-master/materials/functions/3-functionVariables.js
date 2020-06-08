/**
 * Example (let and scope)
 */
let num = 10;

function showAnotherMessage(text) {
    let num = 1;
    console.log(num);
    console.log(text);
}

showAnotherMessage('hello!!'); // 1; 'Hello'
console.log(num); // 10