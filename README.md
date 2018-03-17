A simple unicode progress-bar generator.  Un-opinionated about how to display
that bar.  But [log-update](https://www.npmjs.com/package/log-update) is a good
choice!

# Usage

Make a progress tracker:

```javascript

var unicodeProgress = require('unicode-progress');

var progress = unicodeProgress({
  min: 0,       // minimum value (default 0)
  max: 200,     // maximum value (default 100)
  width: 100,   // width in characters (default 80)
});
```

Then generate the resulting progress bar:

```javascript
let p = progress();
for (let i = 0; i < 200; i++) {
  process.stdout.write(`${p(i)}\r`);
}
```
