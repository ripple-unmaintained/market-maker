var Offer = require(__dirname+'/../offer');

describe('Sumitting an Offer', function() {
  var account, secret;

  before(function() {
    account = 'r4fvGghXiSSEQxhfaY7kmqzxHvSoF8sUhy'
    secret  = 'shHgHo7RdfggErwkAqFhDtScMKcHx'
  })

  it('should offer to buy 1oz silver with 100XRP', function(done) {

    var offer = new Offer({
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

