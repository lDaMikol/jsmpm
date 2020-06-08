/**
 * async function example
 */
async function f() {
  return 1;
}
console.log(f() instanceof Promise); //true

/**
 * Another example
 */
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();