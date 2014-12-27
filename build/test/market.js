"use strict";

var assert = require("assert");
var lib = require("ripple-lib");

describe("Market", function () {
  before(function (done) {
    remote = new lib.Remote({
      servers: ["wss://s1.ripple.com:443"]
    });
    remote.connect(done);
  });

  it.skip("should fetch the orders for an account", function (done) {
    var book = remote.createOrderBook({
      taker_gets: {
        currency: "XRP"
      },
      taker_pays: {
        currency: "XAG"
      }
    });

    book.requestOffers(function (error, offers) {
      console.log(error, offers);
      done();
    });
  });

  it("should submit an offer to buy silver", function () {
    var offer = new Offer({
      account: "r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk",
      buy: {
        currency: "XAG",
        amount: 1,
        issuer: "r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk"
      },
      sell: {
        currency: "XRP",
        amount: 100
      }
    });
  });

  offer.submit().then(function (response) {
    console.log(response);
    done();
  });
});