var RippleAccountMonitor = require('ripple-account-monitor');

class Market {
 
  constructor(marketMaker) {
    this.marketMaker = marketMaker
  }

  fetch() {
    // return list of all orders from XRP to currency by address
  }

  update() {
    // fetch orders, compute the difference
    // cancel expired orders and submit new orders asynchronously
  }
}

module.exports = Market
