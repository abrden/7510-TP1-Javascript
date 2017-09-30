var DataBaseParser = require('../parsers/database_parser');

var Interpreter = function () {
    var database;

    this.parseDB = function (arr) {
        database = DataBaseParser(arr);
    };

    this.doQuery = function (params) {
        //TODO return this.database.query(params);
    };

};

module.exports = Interpreter;
