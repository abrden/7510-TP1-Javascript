var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var RuleParser = require('../../src/parsers/rule_parser');

describe("RuleParser", function () {

  describe('DataBase rules with spaces', function () {

    it('daughter(X, Y) :- woman(X), father(Y, X). should have signature with predicate daughter', function () {
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').signature.predicate).to.equal('daughter');
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have signature with args X and Y', function () {
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').signature.args).to.deep.equal(['X', 'Y']);
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have signature with args X and Y in that order', function () {
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').signature.args).to.not.deep.equal(['Y', 'X']);
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have facts', function () {
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').facts).to.exist;
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have fact woman', function () {
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').facts[0].predicate).to.equal('woman');
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').facts[0].args).to.deep.equal(['X']);
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have fact father', function () {
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').facts[1].predicate).to.equal('father');
      expect(RuleParser('daughter(X, Y) :- woman(X), father(Y, X).').facts[1].args).to.deep.equal(['Y', 'X']);
    });

  });

  describe('DataBase rules', function () {

    it('daughter(X, Y) :- woman(X), father(Y, X). should have signature with predicate daughter', function () {
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').signature.predicate).to.equal('daughter');
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have signature with args X and Y', function () {
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').signature.args).to.deep.equal(['X', 'Y']);
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have signature with args X and Y in that order', function () {
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').signature.args).to.not.deep.equal(['Y', 'X']);
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have facts', function () {
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').facts).to.exist;
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have fact woman', function () {
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').facts[0].predicate).to.equal('woman');
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').facts[0].args).to.deep.equal(['X']);
    });

    it('daughter(X, Y) :- woman(X), father(Y, X). should have fact father', function () {
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').facts[1].predicate).to.equal('father');
      expect(RuleParser('daughter(X, Y):-woman(X),father(Y, X).').facts[1].args).to.deep.equal(['Y', 'X']);
    });

  });

});


