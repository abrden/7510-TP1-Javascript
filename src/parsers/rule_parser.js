var FactParser = require('./fact_parser');
var Rule = require('../entities/rule');

var RuleParser =  function (ruleStr) {
  var ruleArr = ruleStr.split(/\s*:-\s*|\)\s*,\s*|\./).slice(0, -1).map(FactParser);
  return new Rule(ruleArr[0], ruleArr.slice(1));
};

module.exports = RuleParser;