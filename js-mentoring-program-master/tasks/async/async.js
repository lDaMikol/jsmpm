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
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
