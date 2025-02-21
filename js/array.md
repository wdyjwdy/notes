# Array
## Creating an Array
### literals
- **描述**：创建数组
```js
let arr = []        // []
let arr = [,,,]     // [empty × 3]
let arr = [1, 2, 3] // [1, 2, 3]
```
### spread operator
- **描述**：从[可迭代对象]()创建数组
```js
[...'abc'] // ['a', 'b', 'c']
```
### Array()
- **描述**：创建数组
- **语法**：`Array(length)`, `Array(...elements)`
```js
Array()        // []
Array(3)       // [empty × 3]
Array(1, 2, 3) // [1, 2, 3]
```
### of()
- **描述**：创建数组
- **语法**：`Array.of(...elements)`
```js
Array.of()        // []
Array.of(3)       // [3]
Array.of(1, 2, 3) // [1, 2, 3]
```
> 解决了 [Array()](#array-1) 不能创建单元素数组的问题
### from()
- **描述**：从[可迭代对象](#iterable-object)或[类数组](#array-like-object)创建数组
- **语法**：`Array.from(arrayLike, mapFn?, thisArg?)`
```js
// iterable object
Array.from('hello') // ['h', 'e', 'l', 'l', 'o']

// array-like object
Array.from({ 0: 'a', 1: 'b', length: 2 }) // ['a', 'b']

// mapFn
Array.from('123', x => Number(x)) // [1, 2, 3]
```
## Accessing an Array
### subscript
- **描述**：访问索引位置元素
```js
// positive index
[1, 2, 3][0]  // 访问下标为 0 的元素

// negative index
[1, 2, 3][-1] // 访问名为 '-1' 的属性
```
### at()
- **描述**：访问索引位置元素
- **语法**：`at(index)`
```js
// positive index
[1, 2, 3].at(0)  // 访问下标为 0 的元素

// negative index
[1, 2, 3].at(-1) // 访问下标为 length - 1 的元素
```
> 解决了 [subscript](#subscript) 不能访问负索引问题
## Modifying an Array
### push()
- **描述**：添加元素到数组末尾，并返回新数组长度
- **语法**：`push(...elements){:js}`
- **时间**：$O(1)$
```js
[1, 2].push(3)    // Return 3, Array is [1, 2, 3]
[1, 2].push(3, 4) // Return 4, Array is [1, 2, 3, 4]
```
### pop()
- **描述**：删除数组末尾元素，并返回该元素
- **语法**：`pop(){:js}`
- **时间**：$O(1)$
```js
[1, 2].pop() // Return 2, Array is [1]
```
### unshift
- **描述**：添加元素到数组开头，并返回新数组长度
- **语法**：`unshift(...elements){:js}`
- **时间**：$O(n)$
```js
[2, 3].unshift(1)    // Return 3, Array is [1, 2, 3]
[2, 3].unshift(0, 1) // Return 4, Array is [0, 1, 2, 3]
```
### shift()
- **描述**：删除数组开头元素，并返回该元素
- **语法**：`shift(){:js}`
- **时间**：$O(1)$
```js
[1, 2].shift() // Return 1, Array is [2]
```
## Iterating an Array
|  | for | for-of | forEach |
|---|:---:|:---:|:---:|
| continue | ✅ | ✅ | ❌ |
| break | ✅ | ✅ | ❌ |
| return | ✅ | ✅ | ❌ |
| skip array element | ✅ | ❌ | ❌ |
| skip array hole | ❌ | ❌ | ✅ |
## Appendix
### array-like object
一个对象满足以下条件，就被称为类数组对象
1. 有 `length` 属性
2. 有非负整数属性
### iterable object
实现 `[Symbol.iterator]()` 方法的对象
### length property
1. `length` 始终为最大索引 + 1
2. 改小 `length` 会删除数组元素
### sparse array