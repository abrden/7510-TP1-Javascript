let expect = require("chai").expect;
let should = require('should');
let assert = require('assert');

let Fact = require('../../src/entities/fact');
let Rule = require('../../src/entities/rule');

describe("Rule", function () {

  describe('Evaluate', function () {

    let daughterRule = new Rule(
      new Fact('daughter', ['X', 'Y']),
      [
        new Fact('woman', ['X']),
        new Fact('father', ['Y', 'X'])
      ]
    );

    it('Daughter rule evaluation should return an array of two facts', function () {
      expect(daughterRule.evaluate(['Rosamund', 'John'])).to.be.a('array');
      expect(daughterRule.evaluate(['Rosamund', 'John'])).to.have.lengthOf(2);
      expect(daughterRule.evaluate(['Rosamund', 'John'])[0].predicate()).to.equal('woman');
      expect(daughterRule.evaluate(['Rosamund', 'John'])[0].args()).to.deep.equal(['Rosamund']);
      expect(daughterRule.evaluate(['Rosamund', 'John'])[1].predicate()).to.equal('father');
      expect(daughterRule.evaluate(['Rosamund', 'John'])[1].args()).to.deep.equal(['John', 'Rosamund']);
    });

  });

});