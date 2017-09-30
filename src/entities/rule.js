var Rule = function (signature, facts) {
  var signature = signature;
  var facts = facts;

  this.signature = function () {
    return signature;
  };

  this.facts = function () {
    return facts;
  };

};

module.exports = Rule;
