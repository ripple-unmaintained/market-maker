"use strict";

var Promise = require(__dirname + "/../../src/promise");

Promise["while"](function () {
  return true;
}, function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("loop");
      resolve();
    }, 1000);
  });
});