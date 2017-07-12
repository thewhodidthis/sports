require('kpow')()

const test = require('tape')
const supports = require('./')

test('will compute', (t) => {
  Object.keys(supports).forEach((check) => {
    const result = supports[check]

    if (result) {
      t.ok(result, `sports ${check}`)
    } else {
      t.notOk(result, `misses ${check}`)
    }
  })

  t.end()
})
