var assume = require('assume');
var unicodeProgress = require('../');

suite('progress output is always WIDTH characters', function() {
  var p = unicodeProgress({width: 80});
  for (let i = -10; i < 110; i++) {
    test('value = ' + i.toString(), function() {
      assume(p(i).length).to.equal(80);
    });
  }
});

suite('error handling', function() {
  test('min == max', function() {
    assume(function() { unicodeProgress({min: 0, max: 0}); })
      .to.throw(/min must be less than max/);
  });

  test('min > max', function() {
    assume(function() { unicodeProgress({min: 10, max: 0}); })
      .to.throw(/min must be less than max/);
  });

  test('width = 0', function() {
    assume(function() { unicodeProgress({width: 0}); })
      .to.throw(/width must be at least 1/);
  });
});
