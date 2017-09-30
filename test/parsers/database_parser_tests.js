let expect = require("chai").expect;
let should = require('should');
let assert = require('assert');

let DataBaseParser = require('../../src/parsers/database_parser');

describe("DataBaseParser", function () {

  describe('Parent database', function () {

    let db = [
      "varon(juan).",
      "varon(pepe).",
      "varon(hector).",
      "varon(roberto).",
      "varon(alejandro).",
      "mujer(maria).",
      "mujer(cecilia).",
      "padre(juan, pepe).",
      "padre(juan, pepa).",
      "padre(hector, maria).",
      "padre(roberto, alejandro).",
      "padre(roberto, cecilia).",
      "hijo(X, Y) :- varon(X), padre(Y, X).",
      "hija(X, Y) :- mujer(X), padre(Y, X)."
    ];

    it('Parent db should have 12 facts', function () {
      expect(DataBaseParser(db).facts()).to.have.lengthOf(12);
    });

    it('Parent db should have 2 rules', function () {
      expect(DataBaseParser(db).rules()).to.have.lengthOf(2);
    });

    it('Parent db should have 0 malformations', function () {
      expect(DataBaseParser(db).malformations()).to.have.lengthOf(0);
    });
  });

  describe('Number database', function () {

    let db = [
      "add(zero, zero, zero).",
      "add(zero, one, one).",
      "add(zero, two, two).",
      "add(one, zero, one).",
      "add(one, one, two).",
      "add(one, two, zero).",
      "add(two, zero, two).",
      "add(two, one, zero).",
      "add(two, two, one).",
      "subtract(X, Y, Z) :- add(Y, Z, X)."
    ];

    it('Number db should have 12 facts', function () {
      expect(DataBaseParser(db).facts()).to.have.lengthOf(9);
    });

    it('Number db should have 2 rules', function () {
      expect(DataBaseParser(db).rules()).to.have.lengthOf(1);
    });

    it('Number db should have 0 malformations', function () {
      expect(DataBaseParser(db).malformations()).to.have.lengthOf(0);
    });
  });

  describe('Incomplete database', function () {

    let db = [
      "varon(juan).",
      "varon"
    ];

    it('Incomplete db should have 1 fact', function () {
      expect(DataBaseParser(db).facts()).to.have.lengthOf(1);
    });

    it('Incomplete db should have 0 rules', function () {
      expect(DataBaseParser(db).rules()).to.have.lengthOf(0);
    });

    it('Incomplete db should have 0 malformations', function () {
      expect(DataBaseParser(db).malformations()).to.have.lengthOf(1);
    });
  });

});


