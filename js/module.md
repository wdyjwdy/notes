# Module
## EcmaScript Modules (ESM)
```js
// Export
const sum = (a, b) => a + b
const square = x => x ** 2
export { sum, square }

// Import
import { sum, square } from './math.js'
```
> ES6 Module 中的语句，自动使用严格模式
## Common JS (CJS)
```js
// Export
const sum = (a, b) => a + b
const square = x => x ** 2
module.exports = { sum, square }

// Import
const { sum, square } = require('./math.js')
```
## Pre-ES6 Modules
```js
// Export
const modules = {}
const require = name => modlues[name]

modules['math.js'] = (function() {
  const sum = (a, b) => a + b
  const square = x => x ** 2
  return { sum, square }
}())

// Import
const { sum, square } = require('math.js')
```
