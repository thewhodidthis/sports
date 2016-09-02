## Sports
> Runs checks on browser features

### Setup
```sh
npm install sports --save
```

### Usage
```js
var supports = require('sports')();

for (var check in supports) {

	// List all checks
	console.log(check, supports[check]);
}
```
