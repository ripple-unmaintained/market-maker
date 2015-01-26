"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var RippleAccountMonitor = require("ripple-account-monitor");
var rippleLib = require("ripple-lib");

var Market = (function () {
  function Market(options) {
    this.rate = options.rate;
    this.buy = options.buy;
    this.sell = options.sell;
    this.marketMaker = marketMaker;
  }

  _prototypeProperties(Market, null, {
    fetch: {
      value: function fetch() {
        var book = new lib.OrderBook({
          taker_gets: {},
          taker_pays: {}
        });
        var offersAtRate = _.filter(offers, function (offer) {})
        // return list of all orders from XRP to currency by address
        ;
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    update: {
      value: function update() {
        this.fetch().then(function (offers) {});
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Market;
})();

module.exports = Market;
// got offers from market maker
// sum the offers
// cancel expired orders and submit new orders asynchronously