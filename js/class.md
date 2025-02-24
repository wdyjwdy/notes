# Class
## Creating a class
```js
class Person {
  constructor() {
    // Instance property
    this.age = 18
  }

  // Instance method
  greet() { ... }

  // Static property
  static type = 'human'

  // Static method
  static isPerson() { ... }
}
```

> 1. 类中的语句，隐式的使用了严格模式
> 2. 类声明的变量不会被提升
## Implementing a Class Pre-ES6
```js
function Person() {
  // Instance property
  this.age = 18
}

// Instance method
Person.prototype.greet = function() { ... }

// Static property
Person.type = 'human'

// Static method
Person.isPerson = function() { ... }
```