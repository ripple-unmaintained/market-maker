"use strict";

var RippleAccountMonitor = require("ripple-account-monitor");

var Market = (function () {
  var Market = function Market(marketMaker) {
    this.marketMaker = marketMaker;
  };

  Market.prototype.fetch = function () {};

  Market.prototype.update = function () {};

  return Market;
})();

module.exports = Market;