# Async

JS 本身不是异步的，异步由 Browser 和 Node 提供

## Callback

1. Timer

   ```js
   setTimeout(fn, 1000);
   setInterval(fn, 1000);
   ```

2. UI Event

   ```js
   button.addEventListener("click", fn);
   ```

3. Network Event

   ```js
   request.onload = fn;
   request.onerror = fn;
   ```

4. Node Event

   ```js
   fs.readFile("file", fn);
   ```

## Promise

### Callback 的缺点

基于 [Callback](#callback) 的异步编程有两个缺点：

1. 回调地狱：在处理嵌套回调时，代码会难以阅读（Promise 使用链式调用来解决这个问题）
2. 异常处理：异步函数中的异常，无法传回函数调用者（Promise 使用 catch 方法来捕获链式调用中的异常）

### Promise 的状态

Promise 只有三种状态：

1. **Pending**
2. **Fulfilled**
3. **Rejected**

经常同时出现的两个词：

1. **Settled**：Promise 的状态为 Fulfilled 或 Rejected
2. **Resolved**： 当 Promise 1 返回 Promise 2 时，Promise 1 被称为 Resolved（此时 P1 的状态取决于 P2，当 P2 Fulfilled 时 P1 也 Fulfilled，当 P2 Rejected 时，P1 也 Rejected）

### Example

```js
function callback1(response) {
  return response.json(); // promise 4
}

function callback2(json) {
  console.log(json);
}

fetch(theURL) // promise 1
  .then(callback1) // promise 2
  .then(callback2); // promise 3
```

- Sync
  1. start a request, return p1
  2. register c1 on p1, return p2
  3. register c2 on p2, return p3
- Async
  1. p1 fulfilled
  2. c1 invoked and return p4 (c1 resolved)
  3. p4, p2 fulfilled
  4. c2 invoked
  5. p3 fulfilled
