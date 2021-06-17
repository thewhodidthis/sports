## about

Helps detect browser features.

## setup

Download from the _npm_ registry:

```sh
# Contains named exports for a range of newer browser features
npm install sports
```

## usage

Do I have the [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) available on this browser?

```js
import { eventsource } from "sports"

// Implicitly tries `'EventSource' in window`
if (eventsource()) {
  console.log("Fortunately yes")
}
```

What checks and features are available in all?

```js
import * as sports from "sports"

Object.entries(sports).forEach(([feature, check]) => {
  console.log(feature, check())
})
```
