var Promise = require('bluebird');

Promise.while = function(condition, action) {
  var resolver = Promise.defer();

  var loop = function() {
    if (!condition()) return resolver.resolve();
    return Promise.cast(action())
      .then(loop)
      .catch(resolver.reject);
  };

  process.nextTick(loop);

  return resolver.promise;
};

module.exports = Promise;

