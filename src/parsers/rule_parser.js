var FactParser = require('/fact_parser');

var RuleParser = function () {

  this.parse = function (ruleStr) {
    ruleArr = ruleStr.split(/\s*:-\s*|\)\s*,\s*|\./).slice(0, -1).map(FactParser.parse);
    return new Rule(ruleArr[0], ruleArr.slice(1))
  }

}

module.exports = RuleParser;