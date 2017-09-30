var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Interpreter = require('../src/entities/interpreter');


describe("Interpreter", function () {

  var db = [
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

  var interpreter = null;

  beforeEach(function () {
    interpreter = new Interpreter();
    interpreter.parseDB(db);
  });

  describe('Interpreter Facts', function () {

    it('varon(juan) should be true', function () {
      assert(interpreter.checkQuery('varon(juan)'));
    });

    it('varon(maria) should be false', function () {
      assert(interpreter.checkQuery('varon(maria)') === false);
    });

    it('mujer(cecilia) should be true', function () {
     assert(interpreter.checkQuery('mujer(cecilia)'));
    });

    it('padre(juan, pepe) should be true', function () {
      assert(interpreter.checkQuery('padre(juan, pepe)') === true);
    });

    it('padre(mario, pepe) should be false', function () {
      assert(interpreter.checkQuery('padre(mario, pepe)') === false);
    });

  });

  describe('Interpreter Rules', function () {

    it('hijo(pepe, juan) should be true', function () {
        assert(interpreter.checkQuery('hijo(pepe, juan)') === true);
    });
    it('hija(maria, roberto) should be false', function () {
        assert(interpreter.checkQuery('hija(maria, roberto)') === false);
    });
    it('hijo(pepe, juan) should be true', function () {
        assert(interpreter.checkQuery('hijo(pepe, juan)'));
    });

  });

  describe('Interpreter malformed queries', function () {

    it('hijo(pepe, juan should be undefined', function () {
      assert(interpreter.checkQuery('hijo(pepe, juan') === undefined);
    });
    it('hija() should be undefined', function () {
      assert(interpreter.checkQuery('hija()') === undefined);
    });
    it('hijopepe, juan) should be undefined', function () {
      assert(interpreter.checkQuery('hijopepe, juan)') === undefined);
    });

    it('(juan) should be undefined', function () {
      assert(interpreter.checkQuery('(juan)') === undefined);
    });

    it('varon should be undefined', function () {
      assert(interpreter.checkQuery('varon') === undefined);
    });

  });

});


