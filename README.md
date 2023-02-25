## about

Helps detect browser features.

## setup

Load via script tag:

```html
<!-- Just an IIFE namespaced `sports` -->
<script src="https://thewhodidthis.github.io/sports/sports.js"></script>
```

Source from an import map:

```json
{
  "imports": {
    "sports": "https://thewhodidthis.github.io/sports/main.js"
  }
}
```

Download from GitHub directly if using a package manager:

```sh
# Add to package.json
npm install thewhodidthis/sports
```

## usage

Do I have the [EventSource API](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) available on this browser?

```js
import { eventsource } from "sports"

// Implicitly tries `'EventSource' in window`.
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
