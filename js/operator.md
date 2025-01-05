# Operator
## ===
ECMA: [IsStrictlyEqual(x, y)](https://tc39.es/ecma262/#sec-isstrictlyequal)
```js
NaN === NaN // false
+0 === -0 // true
Infinity === Infinity // true
null === null // true
undefined === undefined // true
```
## <
ECMA: [IsLessThan(x, y)](https://tc39.es/ecma262/#sec-islessthan)
1. `x`, `y` 都是 **number**
    - x, y 有一个是 NaN, 返回 false
2. `x`, `y` 都是 **string**
    - 依次比较每个字符的 UTF-16 码
```js
// number
1 < NaN // false

// string
'12' < '3' // true
```
