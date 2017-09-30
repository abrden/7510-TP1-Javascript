let expect = require("chai").expect;
let should = require('should');
let assert = require('assert');

let DataBaseParser = require('../../src/parsers/database_parser');

describe("DataBase", function () {

  describe('Has malformations', function () {

    let parent = [
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

    it('Parent db shouldn\'t have malformations', function () {
      expect(DataBaseParser(parent).hasMalformations()).to.be.false;
    });

    let incomplete = [
      "varon(juan).",
      "varon"
    ];

    it('Incomplete db should have 1 fact', function () {
      expect(DataBaseParser(incomplete).hasMalformations()).to.be.true;
    });

  });

});