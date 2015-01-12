var RippleAccountMonitor = require('ripple-account-monitor');
var rippleLib            = require('ripple-lib');

class Market {
 
  constructor(options) {
    this.rate = options.rate
    this.buy  = options.buy
    this.sell = options.sell
    this.marketMaker = marketMaker
  }

  fetch() {
    var book = new lib.OrderBook({
      taker_gets: {
      },
      taker_pays: {
      }
    }) 
    var offersAtRate = _.filter(offers, function(offer) {

    })
    // return list of all orders from XRP to currency by address
  }

  update() {
    this.fetch().then(offers) {
      // got offers from market maker  
      // sum the offers
    })
    // cancel expired orders and submit new orders asynchronously
  }

  private sumOffers(offers) {
    var sum = 0;
    

    return offers
  }
}

module.exports = Market
