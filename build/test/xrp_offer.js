"use strict";

describe("Offer class always from XRP to Silver", function () {
  it("should extend offer with a fixed rate of 100/1", function () {
    var XrpToSilverOffer = Offer.extend({
      account: "rP6AY2Azjy8oDQm5YEBKSDoEjC26nDbCXV",
      sell: {
        currency: "XRP",
        rate: 100
      },
      buy: {
        currency: "XAG",
        issuer: "r4fvGghXiSSEQxhfaY7kmqzxHvSoF8sUhy"
      }
    });
  });

  it("should construct and submit an order", function () {
    var offer = new XrpToSilverOffer({
      buy: {
        amount: 15
      }
    });

    assert.strictEqual(offer.sell.amount, 1500);
    assert.strictEqual(offer.sell.currency, "XRP");
    assert.strictEqual(offer.buy.currency, "XAG");
  });
});