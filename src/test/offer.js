var Offer = require(__dirname+'/../offer');

describe('Sumitting an Offer', function() {
  var account, secret, offer;

  before(function() {
    account = process.env.RIPPLE_MARKET_MAKER_ADDRESS
    secret  = process.env.RIPPLE_MARKET_MAKER_SECRET
  })

  it('should offer to buy 1oz silver with 100XRP', function(done) {

    offer = new Offer({
      account: account,
      buy: {
        currency: 'XAG',
        amount  : 1
      },
      sell: {
        currency: 'XRP',
        amount  : 100
      }
    });

    offer.submit({ secret: secret })
      .then(function(response) {
        console.log(response); 
        done();
      })
      .error(function(error) {
        console.log('ERROR', error);
      });
  });
});

