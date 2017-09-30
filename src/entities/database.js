let DataBase = function (facts, rules, malformations) {
  var facts = facts;
  var rules = rules;
  var malformations = malformations;

  this.facts = function () {
    return facts;
  };

  this.rules = function () {
    return rules;
  };

  this.malformations = function () {
    return malformations;
  };

  this.hasMalformations = function () {
    return malformations.length != 0;
  };

  this.factQuery = function (query) {
    for (let i = 0; i < facts.length; i++) {
      if (facts[i].equals(query))
        return true;
    }
    return false;
  };

  this.ruleQuery = function (query) {

    let findRuleWithPredicate = function (predicate) {
      for (let i = 0; i < rules.length; i++) {
        if (rules[i].signature().predicate() == predicate)
          return rules[i];
      }
      return false;
    };

    let rule = findRuleWithPredicate(query.predicate());

    if (!rule) return false;

    let evaluatedRule = rule.evaluate(query.args());
    for (let i = 0; i < evaluatedRule.length; i++) {
      if (!this.factQuery(evaluatedRule[i]))
        return false;
    }
    return true;

  };

};

module.exports = DataBase;
