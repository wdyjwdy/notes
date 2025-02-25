# Standard Library

## Set

1. Set 是无序的
2. Set 中的元素是唯一的
3. Set 使用 `===` 比较元素
4. Set 元素没有索引（但 Set 会记住元素的插入顺序）

## Map

1. Map 中的 key 可以是任意类型

> Map 中 key 的特性和 Set 保持一致

## WeakMap

WeakMap 通常用于将 object 储存为 Key，而不会造成内存泄漏。
因为 Map 会持有 Key 的强引用，而 WeakMap 持有的是 Key 的弱引用。

1. WeakMap 中的 key 必须是 object 类型
