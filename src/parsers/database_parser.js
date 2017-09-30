let FactParser = require('./fact_parser');
let RuleParser = require('./rule_parser');
let Malformation = require('../entities/malformation');
let DataBase = require('../entities/database');

let DataBaseParser = function (arr) {
  let facts = [];
  let rules = [];
  let malformations = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[^\(]+\([^\)]+\)\ *:-\ *.*\./g)) {
      rules.push(RuleParser(arr[i]));
    } else if (arr[i].match(/[^\(]+\([^\)]+\)\./g)) {
      facts.push(FactParser(arr[i]))
    } else {
      malformations.push(new Malformation(arr[i]));
    }
  }

  return new DataBase(facts, rules, malformations);
};

module.exports = DataBaseParser;
