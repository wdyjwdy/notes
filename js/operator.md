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
## &&
> ECMA: [LogicalANDExpression(x, y)](https://tc39.es/ecma262/#sec-binary-logical-operators-runtime-semantics-evaluation)
1. 如果 `Boolean(x)` 为 false，返回 `x`
2. 否则，返回 `y`
```js
// 布尔值
false && false // false
true && false // false

// 表达式
1 && 2 // 2
0 && 2 // 0
'1' && '2' // '2'
'' && '2' // ''
```
## ||
> ECMA: [LogicalORExpression(x, y)](https://tc39.es/ecma262/#sec-binary-logical-operators-runtime-semantics-evaluation)
1. 如果 `Boolean(x)` 为 true，返回 `x`
2. 否则，返回 `y`
```js
// 布尔值
true || false // true
false || false // false

// 表达式
1 || 2 // 1
0 || 2 // 2
'1' || '2' // '1'
'' || '2' // '2'
```
## ??
> ECMA: [CoalesceExpression(x, y)](https://tc39.es/ecma262/#sec-binary-logical-operators-runtime-semantics-evaluation)
1. 如果 `x` 为 null 或 undefined，返回 `y`
2. 否则，返回 `x`
```js
// 表达式
null ?? 123 // 123
undefined ?? 123 // 123
0 ?? 123 // 123
'' ?? 123 // 123
```
