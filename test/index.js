const test = require('tape');
const supports = require('../');

// Add favicon
const linkTag = document.createElement('link');

linkTag.rel = 'shortcut icon';
linkTag.href = 'data:;base64,iVBORw0KGgo=';

document.head.appendChild(linkTag);

test('will compute', (t) => {
  // Run all the checks
  Object.keys(supports).forEach((check) => {
    t.ok(supports[check], `supports ${check}`);
  });

  t.end();
});
