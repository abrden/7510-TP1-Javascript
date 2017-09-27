var DataBase = function (facts, rules, malformations) {
  this.facts = facts;
  this.rules = rules;
  this.malformations = malformations;

  this.hasMalformations = function () {
    return this.malformations.length == 0;
  }

  this.query = function (params) {
    return false; //TODO
  }

}

module.exports = DataBase;
