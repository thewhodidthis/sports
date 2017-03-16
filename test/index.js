const test = require('tape');
const supports = require('../');

test('will compute', (t) => {
  // Run all the checks
  Object.keys(supports).forEach((check) => {
    t.ok(supports[check], `supports ${check}`);
  });

  t.end();
});
