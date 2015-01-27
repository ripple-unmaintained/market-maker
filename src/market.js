var RippleAccountMonitor = require('ripple-account-monitor')
var rippleLib            = require('ripple-lib')
var http                 = require('superagent')
var Promise              = require(__dirname+'/promise')
var RIPPLE_REST_URL      = process.env['RIPPLE_REST_URL'] || 'https://api.ripple.com'

class Market {
 
  constructor(marketMaker) {
    //this.rate = options.rate
    //this.buy  = options.buy
    //this.sell = options.sell
    this.marketMaker = marketMaker
  }

  fetch() {
    var _this = this
    return new Promise(function(resolve, reject) {
      http
        .get(RIPPLE_REST_URL+'/v1/accounts/'+_this.marketMaker.address+'/orders')
        .end(function(error, response) {
          if (error) { return reject(error) }
          if (response.statusCode < 300) {
            resolve(response.body)
          } else {
            reject(response.error)
          }
        })
    })
  }

  update() {
    this.fetch().then(function(offers) {
      // got offers from market maker  
      // sum the offers
    })
    // cancel expired orders and submit new orders asynchronously
  }
}

module.exports = Market
