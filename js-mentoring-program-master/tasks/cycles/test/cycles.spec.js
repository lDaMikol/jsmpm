const calculateDiscount = require('../cycles');
const expect = require('chai').expect;

describe('Calculate a discount test', () => {

  it('should return 0 if passing a string', () => {
    expect(calculateDiscount('hello')).to.equal(0);
  });

  const expectedResults = [
    [0, 0], [360, 15], [1360, 30]
  ];

  expectedResults.forEach(result => {
    it(`should return ${result[1]} for ${result[0]}`, () => {
        return expect(calculateDiscount(result[0])).to.equal(result[1]);
    });
  });

});