function callbackFunction(cb) {
    const data = 'this is data that be accessible via callback function';
    cb(null, data);
}

function promiseFunction() {
    const data = 'this is data that be accessible via promise';
    return Promise.resolve(data);
}

function callbackFunctionError(cb) {
    cb(new Error("Error"));
}

function promiseFunctionError() {
    return Promise.reject(new Error("Error"));
}

module.exports = {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
};
