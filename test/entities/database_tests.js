let expect = require("chai").expect;
let should = require('should');
let assert = require('assert');

let DataBaseParser = require('../../src/parsers/database_parser');
let Fact = require('../../src/entities/fact');

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

  describe('Fact queries', function () {

    let parentDB = DataBaseParser([
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
      "padre(roberto, cecilia)."
    ]);

    it('varon(juan) query should be true', function () {
      expect(parentDB.factQuery(new Fact('varon', ['juan']))).to.be.true;
    });

    it('varon(Juan) query should be false', function () {
      expect(parentDB.factQuery(new Fact('varon', ['Juan']))).to.be.false;
    });

    it('varon(jorge) query should be false', function () {
      expect(parentDB.factQuery(new Fact('varon', ['jorge']))).to.be.false;
    });

    it('padre(juan, pepe) query should be true', function () {
      expect(parentDB.factQuery(new Fact('padre', ['juan', 'pepe']))).to.be.true;
    });

    it('padre(pepe, juan) query should be false', function () {
      expect(parentDB.factQuery(new Fact('padre', ['pepe', 'juan']))).to.be.false;
    });

  });

  describe('Rule queries', function () {

    let parentDB = DataBaseParser([
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
    ]);

    it('hijo(pepe, juan) query should be true', function () {
      expect(parentDB.ruleQuery(new Fact('hijo', ['pepe', 'juan']))).to.be.true;
    });

    it('hija(maria, hector) query should be true', function () {
      expect(parentDB.ruleQuery(new Fact('hija', ['maria', 'hector']))).to.be.true;
    });

    it('hija(cecilia, hector) query should be false', function () {
      expect(parentDB.ruleQuery(new Fact('hija', ['cecilia', 'hector']))).to.be.false;
    });

    it('hijo(pepe, roberto) query should be false', function () {
      expect(parentDB.ruleQuery(new Fact('hijo', ['pepe', 'roberto']))).to.be.false
    });

    it('hijastro(pepe, juan) query should be false', function () {
      expect(parentDB.ruleQuery(new Fact('hijastro', ['pepe', 'juan']))).to.be.false
    });

  });

});