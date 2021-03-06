var Fact = require('../entities/fact');

var FactParser = function (factStr) {
  var factArr = factStr.split(/,\s*|\(|\)\.|\)/).filter(Boolean);
  return new Fact(factArr[0], factArr.slice(1))
};

module.exports = FactParser;