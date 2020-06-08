/**
 * JS Methods
 */

 const person = {
   name: 'Ivan',
   lastName: 'Ivanov',
   call() {
     console.log(this.name + " " + this.lastName);
   },
 };

person.call();