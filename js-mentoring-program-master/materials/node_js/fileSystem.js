const fs = require('fs');
const path = require('path');

// creates a directory inside defined directory (dirname) with the name 'myFolder'
fs.mkdir(path.join(__dirname, 'myFolder'), err => {
     if (err) {
        throw err;
     }
   console.log('The folder is created!');
}); 

const filePath = path.join(__dirname, 'myFolder', 'text.txt');

// creates a file
fs.writeFile(filePath, 'Hello', err => {
    if (err) {
        throw err;
     }
   console.log('The file is created!');
}); 

//adds info to an already existing file
fs.appendFile(filePath, ' World', err => {
    if (err) {
        throw err;
     }
   console.log('The file is created!');
}); 

//reads the file
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err;
     }
   console.log(content);
});