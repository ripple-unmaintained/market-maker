# Market Maker #

The software is in Alpha currently under development!
=====================================================

## Daemon to automatically make a market between your currency and XRP ##

## Installation ##

    npm install -g market-maker

## Build from Source ##

    npm run build

## Run the Tests ##

    npm test

## USAGE ##

Configure the currencies you would like to support, the size of the market
you would like to make, and a function to determine the market price.

/currencies/
  btc.js
  ltc.js
  xag.js
  xau.js
  sgz.js

Each currency module should export a function that determines the rate,
as well as a function that determines the price, and properties that
determine the currency and wallet to use

Example:

    //btc.js

    exports.rate = function(resolve, reject) {
      // returns a Promise<Decimal>
    }

    exports.total = function(resolve, reject) {
      // total XRP you would like to sell at the rate
      // returns a Promise<Decimal>
    }

    exports.address = process.env.RIPPLE_ADDRESS;

    exports.secret = process.env.RIPPLE_SECRET;

    exports.currency = 'BTC';

    exports.issuer = process.env.RIPPLE_ADDRESS;

Then run the `market-maker start` command specifying the currency to begin
making a market

    market-maker start currencies/btc

Which will spawn a new system process that monitors the ripple network for
trades and automatically balances the order book for the specified currency.

### Proposed Interface

#### Submitting an Offer

    var offer = new Offer({
      account: 'r4fvGghXiSSEQxhfaY7kmqzxHvSoF8sUhy',
      buy: {
        amount  : 10,
        currency: 'XAG',
        issuer  : 'rP6AY2Azjy8oDQm5YEBKSDoEjC26nDbCXV'
      },
      sell: {
        amount  : 1000,
        currency: 'XRP'
      }
    }) 

    offer.submit({ secret: 'shHgHo7RdfggErwkAqFhDtScMKcHx' })
      .then(function(response) {
        console.log('SUCCESS', response)
      })
      .error(function(error) {
        console.log('ERROR', error)
      });


