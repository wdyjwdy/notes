# Function
## Invoke a function
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