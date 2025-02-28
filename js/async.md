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

[Promise](https://262.ecma-international.org/10.0/index.html#sec-promise-objects) 只有三种状态：

1. **Pending**：等待结果中
2. **Fulfilled**：拿到正常结果
3. **Rejected**：拿到异常结果

经常同时出现的两个词：

1. **Settled**：Promise 的状态为 Fulfilled 或 Rejected
2. **Resolved**
   - 当 Promise 的状态为 Settled 时
   - 当 Promise 返回另一个 Promise，状态为 Pending 时（此时 Promise 的状态取决于另一个 Promise）

### Example 1

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

Sync Process

1. start a request, return p1
2. register c1 on p1, return p2
3. register c2 on p2, return p3

Async Process

1. p1 fulfilled
2. c1 invoked and return p4 (c1 resolved)
3. p4, p2 fulfilled
4. c2 invoked
5. p3 fulfilled

### Example 2

```js
fetch(theURL) // promise 1
  .then(callback1) // promise 2
  .then(callback2) // promise 3
  .catch(handleError);
```

If the network is down

1. p1 be rejected with a Error
2. p2 be rejected with the same Error
3. handleError be invoked

If the network is ok

1. p1 be fulfilled with a Response
2. c1 be invoked, p2 be fulfilled
3. c2 be invoked, p3 be fulfilled

### Example 3

```js
fetch(theURL) // promise 1
  .catch(requestAgain) // promise 2
  .then(callback1) // promise 3
  .then(callback2) // promise 4
  .catch(handleError);
```

If the network is down

1. p1 be rejected with a Error
2. requestAgain be invoked, p2 be fulfilled with a Response
3. c1 be invoked, p3 be fulfilled
4. c2 be invoked, p4 be fulfilled

If the network is ok

1. p1 be fulfilled with a Response
2. c1 be invoked, p3 be fulfilled
3. c2 be invoked, p4 be fulfilled
