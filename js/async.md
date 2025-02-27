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

基于 [Callback](#callback) 的异步编程有两个缺点：

1. **回调地狱**：在处理嵌套回调时，代码会难以阅读（Promise 使用链式调用来解决这个问题）
2. **异常处理**：异步函数中的异常，无法传回函数调用者（Promise 使用 catch 方法来捕获链式调用中的异常）

---

Promise 只有三种状态：

1. **Pending**
2. **Fulfilled**
3. **Rejected**

经常同时出现的两个词：

1. **Settled**：Promise 的状态为 Fulfilled 或 Rejected
2. **Resolved**：

---
