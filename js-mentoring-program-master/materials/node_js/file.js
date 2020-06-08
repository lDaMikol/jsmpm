const path = require('path');

console.log('File name: ' + path.basename(__filename)); // file.js
console.log('Directory name: ' + path.dirname(__filename)); // User/Projects/<Directory>
console.log('File extension: ' + path.extname(__filename)); // .js