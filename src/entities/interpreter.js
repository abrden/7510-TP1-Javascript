let FactParser = require('../parsers/fact_parser');
let DataBaseParser = require('../parsers/database_parser');

let Interpreter = function () {
  var database;

  this.parseDB = function (arr) {
      database = DataBaseParser(arr);
  };

  this.checkQuery = function (query) {
    let parseQuery = function (query) {
      if (query.match(/[^\(]+\([^\)]+\)/))
        return FactParser(query);
    };

    let parsedQuery = parseQuery(query);
    if (parsedQuery) {
      if (database.factQuery(parsedQuery) || database.ruleQuery(parsedQuery))
        return true;
      else
        return false;
    }
  };

};

module.exports = Interpreter;
