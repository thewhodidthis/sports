import 'cutaway'
import { assert, report } from 'tapeless'
import * as sports from './index.es'

const { ok, notOk } = assert

Object.keys(sports).forEach((check) => {
  const result = sports[check]

  if (result) {
    ok(result, `sports ${check}`)
  } else {
    notOk(result, `misses ${check}`)
  }
})

report()
