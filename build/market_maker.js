"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var RippleAccountMonitor = require("ripple-account-monitor");
var Promise = require(__dirname + "/promise");
var TIMEOUT = 10000;
var Market = require(__dirname + "/market");

var MarketMaker = (function () {
  function MarketMaker(options) {
    if (!options) {
      throw new Error("No module found");
    }
    if (!(typeof options.getRate === "function")) {
      throw new Error("options.rate must be a function");
    }
    if (!(typeof options.getAmount === "function")) {
      throw new Error("options.amount must be a function");
    }
    if (!(typeof options.currency === "string")) {
      throw new Error("options.currency must be a string");
    }
    if (!(typeof options.issuer === "string")) {
      throw new Error("options.issuer must be a string");
    }
    if (!(typeof options.address === "string")) {
      throw new Error("options.address must be a string");
    }
    if (!(typeof options.secret === "string")) {
      throw new Error("options.secret must be a string");
    }
    this.getRate = options.getRate;
    this.getAmount = options.getAmount;
    this.currency = options.currency;
    this.issuer = options.issuer;
    this.address = options.address;
    this.secret = options.secret;
    this.timeout = options.timeout || TIMEOUT
    /*
    this.accountMonitor = new RippleAccountMonitor({
      rippleRestUrl: 'https://api.ripple.com/v1',
      account: options.address,
      secret : options.secret
    })
    */
    ;
  }

  _prototypeProperties(MarketMaker, null, {
    getMarket: {
      value: function getMarket() {
        return new Market(this).fetch();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    setMarket: {
      value: function setMarket() {
        return new Market(this).save();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    start: {
      value: function start() {
        var _this = this;
        Promise["while"](function () {
          return true;
        }, function () {
          return new Promise(function (resolve, reject) {
            console.log("When implemented this will update the market every", TIMEOUT / 1000, "seconds");
            setTimeout(function () {
              new Market(_this).fetch().then(function (market) {
                console.log("market", market);
              }).then(resolve).error(function (error) {
                console.log("error fetching market", error);
                resolve();
              });
            }, _this.timeout);
          });
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return MarketMaker;
})();

module.exports = MarketMaker;