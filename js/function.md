# Function
## Invoke a function
> 箭头函数不能通过 call, apply, bind 修改 this 指向
### call()
- **描述**：修改函数的 this，并调用
- **语法**：`call(thisArg, ...args)`
```js
function sum(a, b) {
    return this.initValue + a + b
}
sum.call({ initValue: 100 }, 1, 2) // 103
```
### apply()
- **描述**：修改函数的 this，并调用
- **语法**：`apply(thisArg, args)`
```js
function sum(a, b) {
    return this.initValue + a + b
}
sum.apply({ initValue: 100 }, [1, 2]) // 103
```
### bind()
- **描述**：修改函数的 this，并返回该函数
- **语法**：`bind(thisArg, ...args)`
```js
function sum(a, b) {
    return this.initValue + a + b
}
let bindSum = sum.bind({ initValue: 100 })
bindSum(1, 2) // 103
```
## Appendix
### this
| 调用方式 | this |
| --- | --- |
| 函数 | 全局对象 |
| 方法 | 调用对象 |
| 构造器 | 新建对象 |
| 箭头函数 | 上下文的 this |

> 嵌套函数作为函数调用时，`this` 也为全局对象
### closure
```js
function createTimer() {
    let count = 0

    return function() { // 返回嵌套函数
        return count++ // 捕获变量 count
    }
}

const timer = createTimer() // 创建一个闭包
timer() // 0
timer() // 1
timer() // 2
```
1. 闭包通常发生在，一个函数返回它内部的嵌套函数时
2. 闭包会捕获作用域内的变量
3. 每次调用函数，创建一个独立的闭包
---
```js
function getInteger() {
    let fns = []

    for (var i = 0; i < 10; i++) { // ❌ 应使用 let
        fns[i] = () => i
    }
    return fns
}
getInteger()[3]() // 10
```
1. `var` 声明的变量会被提升，因此所有闭包共享变量 `i`
2. `let` 声明的变量范围是循环体，每次迭代都会生成独立的变量 `i`