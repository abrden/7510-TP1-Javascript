var DataBaseParser = require('../parsers/database_parser');

var Interpreter = function () {
    this.database;

    this.parseDB = function (arr) {
        this.database = new DataBaseParser().parse(arr);
    }

    this.doQuery = function (params) {
        //TODO return this.database.query(params);
    }

}

module.exports = Interpreter;
