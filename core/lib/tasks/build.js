// Generated by CoffeeScript 1.6.1
(function() {
  var Build,
    _this = this;

  Build = (function() {

    function Build(singool) {
      var _this = this;
      this.singool = singool;
      this.run = function() {
        return Build.prototype.run.apply(_this, arguments);
      };
    }

    Build.prototype.description = 'Build Layout, JS and CSS';

    Build.prototype.run = function() {
      return this.singool.build();
    };

    return Build;

  })();

  module.exports = Build;

}).call(this);
