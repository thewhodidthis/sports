const test = require('tape');
const supports = require('../');

// Add favicon
const linkTag = document.createElement('link');

linkTag.rel = 'shortcut icon';
linkTag.href = 'data:;base64,iVBORw0KGgo=';

document.head.appendChild(linkTag);

test('will compute', (t) => {
  Object.keys(supports).forEach((check) => {
    const result = supports[check];

    if (result) {
      t.ok(result, `sports ${check}`);
    } else {
      t.notOk(result, `misses ${check}`);
    }
  });

  t.end();
});
