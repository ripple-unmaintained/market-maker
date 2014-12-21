var RippleAccountMonitor = require('ripple-account-monitor');
var Promise              = require('bluebird');
var TIMEOUT              = 10000;

class MarketMaker {
 
  constructor() {
    if (!options) { throw new Error('No module found') }
    if (!(typeof options.getRate === 'function')) { throw new Error('options.rate must be a function') }
    if (!(typeof options.getAmount === 'function')) { throw new Error('options.amount must be a function') }
    if (!(typeof options.currency === 'string')) { throw new Error('options.currency must be a string') }
    if (!(typeof options.issuer === 'string')) { throw new Error('options.issuer must be a string') }
    if (!(typeof options.address === 'string')) { throw new Error('options.address must be a string') }
    if (!(typeof options.secret === 'string')) { throw new Error('options.secret must be a string') }
    this.getRate        = options.getRate
    this.getAmount      = options.getAmount
    this.currency       = options.currency
    this.issuer         = options.issuer
    this.address        = options.address
    this.secret         = options.secret
    this.timeout        = options.timeout || TIMEOUT
    this.accountMonitor = new RippleAccountMonitor({
      address: options.address,
      secret : options.secret
    })
  }

  getMarket() {
    return new Market(this).fetch()
  }

  setMarket() {
    return new Market(this).save()
  }

  start() {
    var _this = this;
    Promise.while(function() { return true },
    function(next) {
      setTimeout(function() {
        setMarket
          .then(next)
          .error(function(error) {
            console.log('ERROR', error)
            next()
          });
      }, _this.timeout)
    }
  }
}

module.exports = MarketMaker

