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
- **语法**：`push(...elements)`
- **时间**：$O(1)$
```js
[1, 2].push(3)    // Return 3, Array is [1, 2, 3]
[1, 2].push(3, 4) // Return 4, Array is [1, 2, 3, 4]
```
### pop()
- **描述**：删除数组末尾元素，并返回该元素
- **语法**：`pop()`
- **时间**：$O(1)$
```js
[1, 2].pop() // Return 2, Array is [1]
```
### unshift
- **描述**：添加元素到数组开头，并返回新数组长度
- **语法**：`unshift(...elements)`
- **时间**：$O(n)$
```js
[2, 3].unshift(1)    // Return 3, Array is [1, 2, 3]
[2, 3].unshift(0, 1) // Return 4, Array is [0, 1, 2, 3]
```
### shift()
- **描述**：删除数组开头元素，并返回该元素
- **语法**：`shift()`
- **时间**：$O(1)$
```js
[1, 2].shift() // Return 1, Array is [2]
```
### splice()
- **描述**：修改数组，并返回被删除的元素
- **语法**：`splice(start, deleteCount?, ...elements)`
	- `start`：操作位置
  - `deleteCount=Infinity`：删除元素的个数
  - `elements`：插入的元素
- **时间**：$O(n)$
```js
// remove
[1, 2, 3].splice(1)    // Return [2, 3], Array is [1]
[1, 2, 3].splice(1, 1) // Return [2], Array is [1, 3]

// insert
[1, 2, 3].splice(1, 0, 'a')      // Return [], Array is [1, 'a', 2, 3]
[1, 2, 3].splice(1, 0, 'a', 'b') // Return [], Array is [1, 'a', 'b', 2, 3]

// remove and insert
[1, 2, 3].splice(1, 2, 'a', 'b') // Return [2, 3], Array is [1, 'a', 'b']
```
## Iterating an Array
|  | for | for-of | forEach |
|---|:---:|:---:|:---:|
| continue | ✅ | ✅ | ❌ |
| break | ✅ | ✅ | ❌ |
| return | ✅ | ✅ | ❌ |
| skip array element | ✅ | ❌ | ❌ |
| skip array hole | ❌ | ❌ | ✅ |
## Transforming an Array
### map()
- **描述**：映射数组元素
- **语法**：`map(fn(v, i, a), thisArg?)`
```js
// Basic
[1, 2, 3].map((v) => v * 2)      // [2, 4, 6]
[1, 2, 3].map((v, i) => i)       // [0, 1, 2]
[1, 2, 3].map((v, i, a) => a[0]) // [1, 1, 1]

// Skip holes, return value is sparse
[1,, 3].map(x => x ** 2) // [1, empty, 9]
```
### filter()
- **描述**：返回一个数组，包含了满足条件的值
- **语法**：`filter(fn(v, i, a), thisArg?)`
```js
// Basic
[1, 2, 3].filter(x => x > 0) // [1, 2, 3]

// Skip holes, return value is dense
[1,, 3].filter(() => true) // [1, 3]
```
### reduce()
- **描述**：合并数组元素
- **语法**：`reduce(fn(p, v, i, a), initialValue?)`
```js
// Basic
[1, 2, 3].reduce((a, b) => a + b)     // 6
[1, 2, 3].reduce((a, b) => a + b, 10) // 16

// Skip holes
[1,, 3].reduce((a, b) => a + b) // 4
```
### flat()
- **描述**：返回展平后的数组（非原地）
- **语法**：`flat(depth=1)`
```js
// Basic
[1, 2, [3], 4].flat() // [1, 2, 3, 4]
[[[[[1]]]]].flat(Infinity) // [1]
```
### slice()
- **描述**：返回拷贝后的数组
- **语法**：`slice(start=0, end=length)`
```js
// positive index
[1, 2, 3].slice()     // [1, 2, 3]
[1, 2, 3].slice(1)    // [2, 3]
[1, 2, 3].slice(1, 2) // [2]

// nagetive index
[1, 2, 3].slice(-2)   // [2, 3]
```
### sort()
- **描述**：原地排序数组，并返回该数组
- **语法**：`sort(compareFn?)`
- **参数**
	- `compareFn(a, b)`：排序函数，默认会转化为字符串，按 UTF-16 码排序
        - `f(a, b) < 0`：a 在前
        - `f(a, b) === 0`：顺序不变
```js
[1, 2, 10].sort() // [1, 10, 2]
[1, 2, 10].sort((a, b) => a - b) // [1, 2, 10]
```
### reverse()
- **描述**：原地反转数组，并返回该数组
- **语法**：`reverse()`
```js
[1, 2, 3].reverse() // [3, 2, 1]
```
## Searching an Array
> 搜索函数得出结果后，会停止后续迭代
### find()
- **描述**：返回首个满足条件的元素
- **语法**：`find(fn(v, i, a), thisArg?)`
```js
[1, 2, 3].find(x => x > 0) // 1
[1, 2, 3].find(x => x < 0) // undefined
```
### findIndex()
- **描述**：返回首个满足条件元素的索引
- **语法**：`findIndex(fn(v, i, a), thisArg?)`
```js
[1, 2, 3].findIndex(x => x > 0) // 0
[1, 2, 3].findIndex(x => x < 0) // -1
```
### indexOf()
- **描述**：返回元素首次出现的索引
- **语法**：`indexOf(value, start?)`
```js
[1, 2, 3].indexOf(1) // 0
[1, 2, 3].indexOf(0) // -1
```
> 使用 `===` 判断元素是否相同
### includes()
- **描述**：是否包含某个元素
- **语法**：`includes(value, start?)`
```js
[1, 2, 3].includes(1) // true
[1, 2, 3].includes(0) // false
```
> 使用 `===` 判断元素是否相同
### every()
- **描述**：是否所有元素都满足条件
- **语法**：`every(fn(v, i, a), thisArg?)`
```js
[1, 2, 3].every(x => x > 0) // true
[].every(x => x > 0)        // true
```
### some()
- **描述**：是否存在一个元素满足条件
- **语法**：`some(fn(v, i, a), thisArg?)`
```js
[1, 2, 3].some(x => x < 0) // false
[].some(x => x < 0)        // false
```
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