let Fact = require('./fact');

let Rule = function (signature, facts) {
  var signature = signature;
  var facts = facts;

  this.signature = function () {
    return signature;
  };

  this.facts = function () {
    return facts;
  };

  this.evaluate = function (args) {

    let variablesMap = function (args) {
      let varmap = {};
      for (let i = 0; i < signature.args().length; i++)
        varmap[signature.args()[i]] = args[i];
      return varmap;
    };

    let evaluateFact = function (fact, varmap) {
      let evaluatedFactArgs = fact.args().map(function (factArgs) {
        return varmap[factArgs];
      });
      return new Fact(fact.predicate(), evaluatedFactArgs);
    };

    let varmap = variablesMap(args);
    return facts.map(function (fact) {
      return evaluateFact(fact, varmap);
    });
  }

};

module.exports = Rule;
