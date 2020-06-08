const { describe, it } = require('mocha');
const expect = require('chai').expect;

const {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
} = require('../strings');

describe('Task 1 - Reverse a string', () => {

  it("should throw an error if parameter is not a string", () => {
    expect(reverseString(123)).to.equal('This is not a string!');
  });

  it("should reverse a string", () => {
    expect(reverseString('hello')).to.equal('olleh');
  });
});

describe('Calculate a century by year', () => {

  const expectedResults = [
    [1705, 18], [1900, 19], [1601, 17], [2000,20]
  ];

  expectedResults.forEach(result => {
    it(`should return ${result[1]} for ${result[0]} year`, () => {
        return expect(centuryFromYear(result[0])).to.equal(result[1]);
    });
  });

});

describe('Calculate count of the provided char in the string', () => {

  it('should 1 for string Hello for O letter', () => {
    expect(strCount('Hello', 'o')).to.equal(1);
  });

  it('should 2 for string Hello for l letter', () => {
    expect(strCount('Hello', 'l')).to.equal(2);
  });

  it('should return 0 if there is no such letter', () => {
    expect(strCount('Hello', 'z')).to.equal(0);
  });

});

describe('Truncate a string', () => {

  it('should truncate a string', () => {
    const actualStr = 'The longest string';
    const expectedStr = 'The lo...';

    expect(truncateString(actualStr, 6)).to.equal(expectedStr);
  });

  it('should return an initial string if the length is less than truncated number', () => {

    const actualStr = 'eye';

    expect(truncateString(actualStr, 3)).to.equal(actualStr);
  });

});

describe('Replace 10', () => {

  it('should replace 10 in text', () => {
    expect(replace10('23105103')).to.equal('23ten5ten3');
  });

});

describe('Replace Confidential', () => {

  it('should replace confidential in text', () => {
    expect(replaceConfidential('lorem [ipsum] si [dolor]')).to.equal('lorem [CONFIDENTIAL] si [CONFIDENTIAL]');
  });

});
