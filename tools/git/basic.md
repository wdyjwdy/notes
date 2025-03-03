# Basic

## Add

### 描述

使用[文件通配符]()，将 Working Tree 的文件添加到 Index

### 例子

1. `git add aaa.txt`: 添加 aaa.txt

2. `git add files`: 添加 files 目录下所有文件

3. `git add .`: 添加所有文件

4. `git add *.js`: 添加所有 js 文件

### 内部细节

创建一个文件名为 `hello.txt`，内容为 `hello`，执行 `git add hello.txt` 后会发生以下事情：

1. objects 下生成一个 blob 对象，其内容为 hello，文件名为内容的哈希值

   ```sh
   $ git cat-file -t ce01362 # type
   blob

   $ git cat-file -p ce01362 # value
   hello
   ```

2. index 中添加一条记录，记录文件名和哈希值
   ```sh
   $ git ls-files --stage # index
   ce01362 hello.txt
   ```

```diff
HEAD
- index
+ index
objects
  ├── info
  └── pack
+ └── ce/01362
refs
  ├── heads
  └── tags
```

> [!NOTE]
> 当两个文件的内容相同时，它们的哈希值也相同，因此只会生成一个 blob 对象
