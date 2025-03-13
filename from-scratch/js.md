# JavaScript

## Array

### map

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.map)
- Time: $O(n)$

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

### filter

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.filter)
- Time: $O(n)$

```js
function filter(callback, thisArg = undefined) {
  const array = this;
  const n = array.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (!Object.hasOwn(array, i)) continue; // skip hole

    if (callback.call(thisArg, array[i], i, array)) {
      result[result.length] = array[i];
    }
  }

  return result;
}
```

### forEach

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.foreach)
- Time: $O(n)$

```js
function forEach(callback, thisArg = undefined) {
  const array = this;
  const n = array.length;

  for (let i = 0; i < n; i++) {
    if (!Object.hasOwn(array, i)) continue; // skip hole

    callback.call(thisArg, array[i], i, array);
  }
}
```

### reduce

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.reduce)
- Time: $O(n)$

```js
function reduce(callback, initialValue) {
  const array = this;
  const n = array.length;

  if (n === 0 && !initialValue) throw new Error();

  let [prev, i] = initialValue ? [initialValue, 0] : [array[0], 1];

  for (; i < n; i++) {
    if (!Object.hasOwn(array, i)) continue; // skip hole

    prev = callback.call(undefined, prev, array[i], i, array);
  }

  return prev;
}
```

###
