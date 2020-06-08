const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const chars = require('../characters.json');
const {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
} = require('../arrays');



describe('getCharactersNames', () => {
    it('should return character names', () => {
        const actual = getCharactersNames(chars);
        const expected = require('./expected_names');
        expect(expected).to.deep.equal(actual);
    });
});

describe('printCharacterNames', () => {
    it('should print character names', () => {
        const expected = require('./expected_names');
        const consoleLogSpy = sinon.spy(console, 'log');
        printCharacterNames(chars);
        consoleLogSpy.restore();
        const calls = consoleLogSpy.getCalls().map(call => call.args[0]);
        expect(expected).to.deep.equal(calls);
    });
});

describe('getNonHumanCharacters', () => {
    it('should return non-human characters', () => {
        const actual = getNonHumanCharacters(chars);
        const expected = require('./expected_non_humans');
        expect(expected).to.deep.equal(actual);
    });
});

describe('getJerryInfo', () => {
    it('should return jerry info', () => {
        const actual = getJerryInfo(chars);
        const expected = require('./jerry');
        expect(expected).to.deep.equal(actual);
    });
});

describe('isAllHuman', () => {
    it('should false if any non-human', () => {
        const actual = isAllHuman(chars);
        expect(actual).to.equal(false);
    });
});

describe('isAnyFishPerson', () => {
    it('should true if any fish person', () => {
        const actual = isAnyFishPerson(chars);
        expect(actual).to.equal(true);
    });
});

describe('Example - Find an index of a minimal item of an array', () => {

    it("should return the 3rd index from [2,4,5,1,2] array", () => {
        expect(minItem([2,4,5,1,2])).to.equal(3);
    });

    it("should return the first index from [1,4,5,6,2] array", () => {
        expect(minItem([1,4,5,6,2])).to.equal(0);
    });

    it("should return the last index from [8,4,5,6,1] array", () => {
        expect(minItem([8,4,5,6,1])).to.equal(4);
    });

});
