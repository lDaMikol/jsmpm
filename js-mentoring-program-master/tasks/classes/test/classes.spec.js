const { describe, it } = require('mocha');
const { expect } = require('chai');
const {
    person,
    student
} = require('../classes.js');

describe('person', () => {
    it('should have firstName property', () => expect(person).to.have.property('firstName'));
    it('should have lastName property', () => expect(person).to.have.property('lastName'));
    it('should have getFullName method', () => expect(person.getFullName()).to.equal(`${person.firstName} ${person.lastName}`));
});

describe('student', () => {
    it('should have firstName property', () => expect(student).to.have.property('firstName'));
    it('should have lastName property', () => expect(student).to.have.property('lastName'));
    it('should have grade property', () => expect(student).to.have.property('grade'));
    it('should have getGrade method', () => expect(student.getGrade()).to.equal(student.grade));
    it('should have getFullName method', () => expect(student.getFullName()).to.equal(`${student.firstName} ${student.lastName}`));
});

