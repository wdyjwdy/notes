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

## Function

### call

- 原理：将函数作为对象的属性调用，此时函数的 this 指向该对象

```js
function call(thisArg = window, ...args) {
  const key = Symbol("key");
  thisArg[key] = this;
  const val = thisArg[key](...args);
  delete thisArg[key];
  return val;
}
```

### apply

```js
function apply(thisArg, args) {
  return this.call(thisArg, ...args);
}
```

### bind

```js
function bind(thisArg = window, ...args) {
  return (...rest) => {
    return this.call(thisArg, ...args, ...rest);
  };
}
```

## Object

### instanceOf

1. 遍历 `instance` 的原型链
2. 检查 `constructor` 的原型是否在其中

```js
function Instanceof(instance, constructor) {
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    if (proto === constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```

### new

1. 创建一个空对象
2. 调用构造函数（this -> 空实例）
3. 空实例原型 -> 构造函数原型

```js
function New(constructor, ...args) {
  let instance = {};
  constructor.call(instance, ...args);
  Object.setPrototypeOf(instance, constructor.prototype);
  return instance;
}
```

### create

```js
function create(proto) {
  const instance = {};
  Object.setPrototypeOf(instance, proto);
  return instance;
}
```

### assign

```js
function assign(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (Object.hasOwn(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
```

### keys

- 返回一个数组，包含[自身可枚举](./js/object.md/#object-property)属性的键

```js
function keys() {
  const arr = [];
  for (const key in this) {
    if (!Object.hasOwn(this, key)) continue;
    arr.push(key);
  }
  return arr;
}
```
