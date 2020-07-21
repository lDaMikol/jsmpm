/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
 
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
//put your code here
 
class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
 
    getGrade() {
        return this.grade;
    }
}
 
const person = new Person('John', 'Doe');//create instance of class person\
const student = new Student('John', 'Doe', 2);//create instance of class student
 
module.exports = {
    person,
    student
};