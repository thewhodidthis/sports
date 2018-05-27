import 'cutaway'
import { assert, report } from 'tapeless'
import * as sports from './index.mjs'

const { ok, notOk } = assert

Object.entries(sports).forEach(([name, check]) => {
  const result = check()

  if (result) {
    ok(result, `sports ${name}`)
  } else {
    notOk(result, `misses ${name}`)
  }
})

report()
