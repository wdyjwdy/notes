# Operator
## ===
> ECMA: [IsStrictlyEqual(x, y)](https://tc39.es/ecma262/#sec-isstrictlyequal)
```js
NaN === NaN // false
+0 === -0 // true
Infinity === Infinity // true
null === null // true
undefined === undefined // true
```
## <
> ECMA: [IsLessThan(x, y)](https://tc39.es/ecma262/#sec-islessthan)
1. `x`, `y` 都是 Number，数字比较
    - x, y 有一个是 NaN, 返回 false
2. `x`, `y` 都是 String，依次比较字符的 UTF-16 码
```js
// 数字比较
12 < 3 // false
1 < NaN // false

// 字符比较
'12' < '3' // true
```
## +
> ECMA: [ApplyStringOrNumericBinaryOperator](https://tc39.es/ecma262/#sec-applystringornumericbinaryoperator)
1. `x`, `y` 都是 Number，数字相加
2. `x`, `y` 有一个是 String，字符串拼接
```js
// 数字相加
1 + 2 // 3

// 字符串拼接
'1' +  2  // '12'
 1  + '2' // '12'
'1' + '2' // '12'
```
