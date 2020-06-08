/**
 * then
 */
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve("Success!");
    }, 250); 
  });
  
  myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage); 
  });

/**
 * catch
 */
const promise1 = new Promise(function(resolve, reject) {
  throw 'Uh-oh!';
});

promise1.catch(function(error) {
  console.error(error);
});

/**
 * Promise.all
 */
const pr1 = Promise.resolve(3);
const pr2 = 42;
const pr3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([pr1, pr2, pr3]).then(function(values) {
  console.log(values);
}); // expected output: Array [3, 42, "foo"]

/**
 * Promise.race
 */
const p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

const p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([p1, p2]).then(function(value) {
console.log(value);
// Both resolve, but p2 is faster
});
// expected output: "two"