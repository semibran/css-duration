# css-duration
Converts CSS-style durations to milliseconds.

## Installation
`npm install --save css-duration`

## Usage
```javascript
var duration = require("css-duration")

duration('1000ms')
// > 1000

duration('1.5s')
// > 1500

duration('30m')
// > 1800000

duration('8h')
// > 28800000

duration('2d')
// > 172800000

```
