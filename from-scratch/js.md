# JavaScript

## Array

### map

> [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.map)

```js
function map(callback, thisArg = undefined) {
  const array = this;
  const n = array.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (!Object.hasOwn(array, i)) continue; // skip hole

    result[i] = callback.call(thisArg, array[i], i, array);
  }

  return result;
}
```
