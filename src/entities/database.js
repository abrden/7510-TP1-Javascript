var DataBase = function (facts, rules, malformations) {
  var facts = facts;
  var rules = rules;
  var malformations = malformations;

  this.hasMalformations = function () {
    return malformations.length == 0;
  }

  this.query = function (params) {
    return false; //TODO
  }

}

module.exports = DataBase;
