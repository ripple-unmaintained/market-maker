var assert = require('assert');

describe('Making a market between BTC and XRP', function() {

  it('should initialize a MarketMaker', function() {
    var module_ = {
      getRate: function() {
        this.resolve(5);
      },
      getAmount: function() {
        this.resolve(100);
      },
      issuer: 'lkajsdfasasdfasdf',
      currency: 'BTC',
      address: 'ralkjlkjwelkrjwlkejrlwe',
      secret: 'soij2lijskjelkjrlkejre'
    }
  
    var marketMaker = new MarketMaker(module_);
    assert(marketMaker instanceof MarketMaker);
  })
});

