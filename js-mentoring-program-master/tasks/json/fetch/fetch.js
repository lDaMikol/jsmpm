/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs');
 
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const filteredData = data.filter(item => item.id < 20);
 
    fs.writeFile('response.json', JSON.stringify(filteredData, null, 2), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    })
}
 
fetchData();