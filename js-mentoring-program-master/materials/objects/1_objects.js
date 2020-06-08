/**
 * Data types and this
 */
const options = {
  width: 1024,
  color: 'red',
  fonts: ['times new roman', 'helvetica', 'calibri'],
  isModified: true,
  additionalOptions: {
    backgroundColor: 'blue',
    size: '12px'
  },
  getColor: function() {
    return this.color;
  }
};


/**
 * Arrays
 */

 
/**
 * getting the property
 */
//console.log(options.name); // test
//console.log(options['name-test']); // test

/**
 * add a property
 */
//options.myProperty = 'testProperty';

/**
 * Add another object to an existing object
 */
// options.colors = {
//     border: "black",
//     background: "red"
// }; 
// console.log(options);

/**
 * delete the listed property from the object
 */
// delete options.myProperty; 
// console.log(options);

/**
 * for..in
 */
// for (let key in options) {
//   console.log(`Property ${key} has a value ${options[key]}`); 
// }