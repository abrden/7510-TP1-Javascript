var FactParser = require('/fact_parser');
var RuleParser = require('/rule_parser');
var Malformation = require('../entities/malformation');
var DataBase = require('../entities/database');

var DataBaseParser = function (arr) {
  let facts = [];
  let rules = [];
  let malformations = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/[^\(]+\([^\)]+\)\./g)) {
      facts.push(FactParser(arr[i]));
    } else if (arr[i].match(/[^\(]+\([^\)]+\)\ *:-\ *.*\./g)) {
      rules.push(RuleParser(arr[i]));
    } else {
      malformations.push(new Malformation(arr[i]));
    }
  }

  return new DataBase(facts, rules, malformations);
}

module.exports = DataBaseParser;
