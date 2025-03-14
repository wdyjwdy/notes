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

### push

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.push)
- Time: $O(k)$

```js
function push(...items) {
  const array = this;
  const n = array.length;
  const k = items.length;

  for (let i = 0; i < k; i++) {
    array[n + i] = items[i];
  }

  return array.length;
}
```

### pop

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.pop)
- Time: $O(1)$

```js
function pop() {
  const array = this;
  const n = array.length;

  if (n === 0) return undefined;

  const value = array[n - 1];
  delete array[n - 1];
  array.length = n - 1;

  return value;
}
```

### flat

- Ref: [Ecma Standard](https://tc39.es/ecma262/#sec-array.prototype.flat)
- Time: $O(n)$

```js
function flat(depth = 1) {
  const array = this;
  const n = array.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (!Object.hasOwn(array, i)) continue; // skip hole

    const value = array[i];
    if (Array.isArray(value) && depth > 0) {
      result.push(...flat.call(value, depth - 1));
    } else {
      result.push(value);
    }
  }

  return result;
}
```
