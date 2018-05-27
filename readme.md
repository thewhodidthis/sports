> Super simple yepnope sub

### Setup
```sh
# Fetch latest from github
npm i thewhodidthis/sports
```

### Usage
```js
import * as sports from 'sports'

Object.entries(sports).forEach(([feature, check]) => {
  console.log(feature, check())
})
```
