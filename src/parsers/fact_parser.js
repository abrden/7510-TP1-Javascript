var Fact = require('../entities/fact');

var FactParser = function (factStr) {
  factArr = factStr.split(/,\s*|\(|\)\.|\)/).slice(0, -1);
  return new Fact(factArr[0], factArr.slice(1))
}

module.exports = FactParser;