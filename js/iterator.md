# Iterator

- 迭代器是懒惰的：只有在需要时才计算

## Iterable Object

1. 可迭代对象：有 `Symbol.iterator` 方法的对象（该方法返回一个迭代器对象）
2. 迭代器对象：有 `next` 方法的对象（该方法返回一个迭代结果对象）
3. 迭代结果对象：有 `value` 或 `done` 属性的对象

```js
class Range { // iterable object
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let [start, end] = [this.from, this.to];
    return { // iterator object
      [Symbol.iterator]() { return this; }, // make the iterator itself iterable
      next() {
        return start <= end
          ? { value: start++ } // iterator result object
          : { done: true };    // iterator result object
      },
    };
  }
}
```

## Generator

生成器是一种定义迭代器的新语法，生成器能够使用 yield 语句来暂停和恢复函数的执行

```js
// Generator function
function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i
  }
}

// Generator method
class Range {
  constructor(from, to) {
    this.from = from
    this.to = to
  }

  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      yield i
    }
  }
}
```
