let deepEqual = require("deep-eql");

let Fact = function (predicate, args) {
  var predicate = predicate;
  var args = args;

  this.predicate = function () {
    return predicate;
  };

  this.args = function () {
    return args;
  };

  this.equals = function (query) {
    return ((predicate == query.predicate()) && (deepEqual(args, query.args())));
  }

};

module.exports = Fact;
