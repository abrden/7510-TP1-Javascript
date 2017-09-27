var FactParser = require('/fact_parser');
var RuleParser = require('/rule_parser');
var Malformation = require('../entities/malformation');
var DataBase = require('../entities/database');

var DataBaseParser = function () {
  this.factParser = new FactParser();
  this.ruleParser = new RuleParser();


  this.parse = function (arr) {
    let facts = [];
    let rules = [];
    let malformations = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].match(/[^\(]+\([^\)]+\)\./g)) {
        facts.push(this.factParser.parse(arr[i]));
      } else if (arr[i].match(/[^\(]+\([^\)]+\)\ *:-\ *.*\./g)) {
        rules.push(this.ruleParser.parse(arr[i]));
      } else {
        malformations.push(new Malformation(arr[i]));
      }
    }

    return new DataBase(facts, rules, malformations);
  }

}

module.exports = DataBaseParser;
