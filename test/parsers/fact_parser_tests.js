var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var FactParser = require('../../src/parsers/fact_parser');

describe("FactParser", function () {

  describe('DataBase facts (with period)', function () {

    it('man(John). should have predicate man', function () {
      expect(FactParser('man(John).').predicate).to.equal('man');
    });

    it('man(John). should have arg man', function () {
      expect(FactParser('man(John).').args).to.deep.equal(['John']);
    });

    it('father(John, Rosamund). should have predicate father', function () {
      expect(FactParser('father(John, Rosamund).').predicate).to.equal('father');
    });

    it('father(John, Rosamund). should have args John and Rosamund father', function () {
      expect(FactParser('father(John, Rosamund).').args).to.deep.equal(['John', 'Rosamund']);
    });

    it('father(John, Rosamund). should have args John and Rosamund father in that order', function () {
      expect(FactParser('father(John, Rosamund).').args).to.not.deep.equal(['Rosamund', 'John']);
    });

    it('friends(John,Sherlock,Molly). should have predicate friends', function () {
      expect(FactParser('friends(John,Sherlock,Molly).').predicate).to.equal('friends');
    });

    it('friends(John,Sherlock,Molly). should have args John, Sherlock and Molly', function () {
      expect(FactParser('friends(John,Sherlock,Molly).').args).to.deep.equal(['John', 'Sherlock', 'Molly']);
    });

  });

  describe('Rule facts or queries (without period)', function () {

    it('man(John) should have predicate man', function () {
      expect(FactParser('man(John)').predicate).to.equal('man');
    });

    it('man(John) should have arg man', function () {
      expect(FactParser('man(John)').args).to.deep.equal(['John']);
    });

    it('father(John, Rosamund) should have predicate father', function () {
      expect(FactParser('father(John, Rosamund)').predicate).to.equal('father');
    });

    it('father(John, Rosamund) should have args John and Rosamund father', function () {
      expect(FactParser('father(John, Rosamund)').args).to.deep.equal(['John', 'Rosamund']);
    });

    it('father(John, Rosamund) should have args John and Rosamund father in that order', function () {
      expect(FactParser('father(John, Rosamund)').args).to.not.deep.equal(['Rosamund', 'John']);
    });

    it('friends(John,Sherlock,Molly) should have predicate friends', function () {
      expect(FactParser('friends(John,Sherlock,Molly)').predicate).to.equal('friends');
    });

    it('friends(John,Sherlock,Molly) should have args John, Sherlock and Molly', function () {
      expect(FactParser('friends(John,Sherlock,Molly)').args).to.deep.equal(['John', 'Sherlock', 'Molly']);
    });

  });

});


