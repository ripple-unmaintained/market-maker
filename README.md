# Market Maker #

Automatically make a market between a currency and XRP

##### ALPHA SOFTWARE

Thousands of developers and institutions need a simple and effective mechanism to make a market from their currency to XRP. Market Maker is a humble attempt at an elegant and reliable solution they crave.

## Dependencies

- Node.js

## Installation ##

    npm install -g market-maker

## Configuration
All config settings are set via environment variables.

The following environment variables must be set, which provide the ripple secret key for the trading account, and setup the market parameters:

- RIPPLE_MARKET_MAKER_KEY
- RIPPLE_MARKET_CURRENCY
- RIPPLE_MARKET_ISSUER
- RIPPLE_MARKET_XRP_DEPTH
- RIPPLE_MARKET_XRP_PRICE

## Processes
Market Maker is composed of two concurrent processes. The first watches the ripple ledger for trades on the market currency, and notes which adjustments must be made to reconstruct the desired market. The second actually performs updates to the ripple market ledger by placing new orders.

- Monitoring the market order book
- Modifying the market order book

## Contributing

Architecure shall follow closely the [Twelve-Factor App](http://12factor.net/) design principles.

To contribute a feature fork the project and add your feature under a feature flag in a feature branch. Feature flags can be enabled individually like so:

````
market-maker start --feature multi-market
````

Make a pull request from your fork's feature branch into the origin master branch with the feature disabled by default.

Pull requests must not be accepted without test coverage, and automated test builds must pass before merging any pull requests.

### Build From Source

First install git and node.js, then run the build tasks:

    git clone https://github.com/ripple/market-maker.git
    cd market-maker
    npm install
    npm run build
    npm run link


