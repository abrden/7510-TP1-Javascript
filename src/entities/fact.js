var Fact = function (predicate, args) {
  var predicate = predicate;
  var args = args;

  this.predicate = function () {
    return predicate;
  };

  this.args = function () {
    return args;
  };

};

module.exports = Fact;
