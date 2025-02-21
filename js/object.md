# Object
## Creating an Object
### literals
- **描述**：创建一个新对象，其原型为 `Object.prototype`
- **语法**：`{}`
```js
let x = {}
let y = { price: 88 } // 属性名为标识符
let z = { 'age': 18 } // 属性名为字符串
```
### new
- **描述**：创建一个新对象，其原型为 `fn.prototype`
- **语法**：`new fn()`
```js
let x = new Object() // 等价于 {}
let y = new Array()  // 等价于 []
```
### create()
- **描述**：创建一个新对象，其原型为 `proto`
- **语法**：`Object.create(proto, props?)`
```js
let x = Object.create({ a: 1 })         // 原型为 { a: 1 }
let y = Object.create(Object.prototype) // 等价于 {}
let z = Object.create(null)             // 无原型对象
```
## Accessing an Object
### subscript
- **描述**：访问对象属性
```js
obj.name   // 通过标识符访问
obj['age'] // 通过字符串访问
```
> 1. 若访问的属性不存在，则会顺着原型链查找
> 2. `null` 和 `undefined` 没有属性，访问会报错
## Modifying an Object
### subscript
- **描述**：修改对象属性，若属性不存在则会新增属性
```js
let obj = { name: 'xxc' }
obj.name = 'wj' // 修改属性
obj.age = 18    // 新增属性
```
> 1. 若 `obj` 的原型链中存在只读属性 `x`，则 `obj.x = 0` 无法进行新增
### delete
- **描述**：删除对象的[自有属性](#object-property)
```js
let obj = { a: 1 }
delete obj.a // true
```
## Checking Object Props
### hasOwn()
- **描述**：检查对象的[自有属性](#object-property)是否存在
- **语法**：`Object.hasOwn(obj, prop)`
```js
let obj = Object.create({ b: 2 }, { a: { value: 1 } })

Object.hasOwn(obj, 'a') // true  自有属性
Object.hasOwn(obj, 'b') // false 继承属性
```
### in
- **描述**：检查对象的[自有或继承属性](#object-property)是否存在
```js
let obj = Object.create({ b: 2 }, { a: { value: 1 } })

'a' in obj // true 自有属性
'b' in obj // true 继承属性
```
## Enumerating an Object
> 1. 属性枚举顺序：非负整数，字符串，Symbol
### keys()
- **描述**：返回一个数组，包含了对象[自有可枚举属性](#object-property)的键
- **语法**：`Object.keys(obj)`
```js
let obj = Object.create({ b: 2 }, { a: { value: 1, enumerable: true } })

Object.keys(obj) // ['a']
```
### values()
- **描述**：返回一个数组，包含了对象[自有可枚举属性](#object-property)的值
- **语法**：`Object.values(obj)`
```js
let obj = Object.create({ b: 2 }, { a: { value: 1, enumerable: true } })

Object.values(obj) // [1]
```
### entries()
- **描述**：返回一个数组，包含了对象[自有可枚举属性](#object-property)的键值对
- **语法**：`Object.entries(obj)`
```js
let obj = Object.create({ b: 2 }, { a: { value: 1, enumerable: true } })

Object.entries(obj) // [['a', 1]]
```
### for-in loop
- **描述**：迭代对象[可枚举属性](#object-property)的键
- **语法**：`for key in obj {...}`
```js
let obj = Object.create({ b: 2 }, { a: { value: 1, enumerable: true } })

for (let key in obj) { console.log(key) } // 'a', 'b'
```
## Copying an Object
### assign()
- **描述**：将 `source` 的[自有可枚举属性](#object-property)复制到 `target`，并返回修改后的 `target`
- **语法**：`Object.assign(target, ...sources){:js}`
```js
// 拷贝对象
Object.assign({}, { a: 1 }) // { a: 1 }

// 覆盖属性
Object.assign({ a: 1 }, { a: 0, b: 0 }) // { a: 0, b: 0 }
```
### spread operator
- **描述**：将 `source` 的[自有可枚举属性](#object-property)复制到 `target`，并返回修改后的 `target`
```js
// 后面属性覆盖前面属性
let source = { a: 0, b: 0 }
let target = { a: 1, ...source } // { a: 0, b: 0 }
let target = { ...source, a: 1 } // { a: 1, b: 0 }
```
## Appendix
### object property
1. **自有属性**：属性存在于对象内，而不是原型链中
2. **可枚举属性**：`enumerable` 为 `true` 的属性