import "cutaway"
import { assert, report } from "tapeless"
import * as sports from "./main.js"

const { ok, notOk } = assert

Object.entries(sports).forEach(([name, check]) => {
  const result = check()

  if (result) {
    ok.describe(`sports ${name}`).test(result)
  } else {
    notOk.describe(`misses ${name}`).test(result)
  }
})

report()
