var BARS = ' ▏▎▍▌▋▊▉█';

function makechars(char, n) {
  return Array(n + 1).join(char);
}

function progress(options) {
  options = options || {};
  var width = options.width !== undefined ? options.width : 80;
  var min = options.min !== undefined ? options.min : 0;
  var max = options.max !== undefined ? options.max : 100;
  if (min >= max) {
    throw new Error('min must be less than max');
  }
  if (width < 1) {
    throw new Error('width must be at least 1');
  }

  return function(value) {
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }
    if (value == max) {
      // special-case this value, otherwise we will get an extra-wide result
      return makechars(BARS[9], width);
    }
    var chars = width * (value - min) / (max - min);
    var intchars = Math.floor(chars);
    var fracchar = BARS[Math.floor((chars - intchars) * (BARS.length - 1))];
    return makechars(BARS[8], intchars) + fracchar + makechars(' ', width - intchars - 1);
  };
}

module.exports = progress;
