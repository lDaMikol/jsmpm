const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");
 
/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    const cb = (str, data) => console.log(data);
    callbackFunction(cb);
}
 
/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    return promiseFunction()
        .then(value => console.log(value));
}
 
/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const data = await promiseFunction();
    console.log(data);
}
 
/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    const cb = (error) => {
        throw error;
    };
    callbackFunctionError(cb);
}
 
/**
 * throw error come from promiseFunctionError
 */
 
function handlePromiseError() {
            promiseFunctionError.catch(e => console.error(`.catch(${e})`));
      }
 
/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        await promiseFunctionError();
      } catch (error) {
        throw error;
      }
}
 
module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};