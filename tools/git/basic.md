# Basic

## Init

### 描述

初始化一个代码仓库

### 内部细节

创建一个空文件夹 `Fruits`，并执行 `git init` 后，Git 会做以下事情：

1. 创建一个 .git 文件
   ```diff
   Fruits
   + └── .git
   +   ├── config
   +   ├── description
   +   ├── HEAD
   +   ├── index
   +   ├── hooks
   +   │   └── samples
   +   ├── info
   +   │   └── exclude
   +   ├── objects
   +   │   ├── info
   +   │   └── pack
   +   └── refs
   +     ├── heads
   +     └── tags
   ```

## Add

### 描述

使用[文件通配符]()，将 Working Tree 的文件添加到 Index

### 例子

1. `git add hello.txt`: 添加 hello.txt

2. `git add fruits`: 添加 fruits 目录下所有文件

3. `git add .`: 添加所有文件

4. `git add *.js`: 添加所有 js 文件

### 内部细节

创建一个名为 `hello.txt`，内容为 `hello` 的文件，执行 `git add hello.txt` 后，Git 会做以下事情：

1. 在 objects 目录下生成一个 blob 对象，其内容为 hello，文件名为 hello 的哈希值

   ```diff
   + .git/objects/ce01362
   ```

   ```sh
   $ git cat-file -t ce01362 # type
   blob

   $ git cat-file -p ce01362 # value
   hello
   ```

2. 在 index 中添加一条记录，记录文件路径和哈希值

   ```diff
   - .git/index
   + .git/index
   ```

   ```sh
   $ git ls-files -s # index
   ce01362 hello.txt
   ```

> [!NOTE]
> 当两个文件的内容相同时，它们的哈希值也相同，因此只会生成一个 blob 对象

若创建的是文件夹中的文件，例如创建 `greets/hello.txt`，Git 处理也几乎一样：

1. 在 objects 目录下生成一个 blob 对象

   ```diff
   + .git/objects/ce01362
   ```

   ```sh
   $ git cat-file -t ce01362 # type
   blob

   $ git cat-file -p ce01362 # value
   hello
   ```

2. 在 index 中添加一条记录

   ```diff
   - .git/index
   + .git/index
   ```

   ```sh
   $ git ls-files -s # index
   ce01362 greets/hello.txt # 这里不一样
   ```

## Commit

### 描述

将 Index 中的内容提交到 Repository

### 例子

1. `git commit`: 提交 Index 中的内容，并打开 [Vim](../vim-cheet-sheet.md) 输入 commit message
2. `git commit -m 'update'`: 提交 Index 中的内容，并使用 'update' 作为 commit message
3. `git commit -a`: 等价于 `git add .` 加 `git commit`
4. `git commit -am 'update'`: 等价于 `git add .` 加 `git commit -m 'update'`

### 内部细节

若 Index 中有文件 `apple.txt`，执行 `git commit -m "update"` 后，Git 会做以下事情：

1. 在 objects 目录下生成一个 tree 对象，记录了文件目录树，以及文件对应的哈希值

   ```diff
   + .git/objects/1742682
   ```

   ```sh
   $ git cat-file -t 1742682 # type
   tree

   $ git cat-file -p 1742682 # value
   blob 4c479de apple.txt
   ```

2. 在 objects 目录下生成一个 commit 对象，记录了本次 commit 的文件目录树，和 commit message 相关内容

   ```diff
   + .git/objects/6cc8ff6
   ```

   ```sh
   $ git cat-file -t 6cc8ff6 # type
   commit

   $ git cat-file -p 6cc8ff6 # value
   tree 1742682
   author wdyjwdy <email.com>
   committer wdyjwdy <email.com>

   update
   ```

3. 将当前分支指向最新的 commit 对象（当前分支即 HEAD 指向的分支）

   ```diff
   - .git/refs/heads/main
   + .git/refs/heads/main
   ```

   ```sh
   $ cat refs/heads/main
   6cc8ff6
   ```

4. 更新日志文件

若 Index 中存在文件夹，例如 `fruits/apple.txt`，则 Git 会用 tree in tree 的方式来储存文件路径：

1. 在 objects 目录下生成第一个 tree 对象，其中记录了 `apple.txt` 文件

   ```diff
   + .git/objects/1742682
   ```

   ```sh
   $ git cat-file -t 1742682 # type
   tree

   $ git cat-file -p 1742682 # value
   blob 4c479de apple.txt
   ```

2. 在 objects 目录下生成第二个 tree 对象，其中记录了 `fruits` 文件夹对应的 tree （也就是第一步的 tree 对象）

   ```diff
   + .git/objects/5635283
   ```

   ```sh
   $ git cat-file -t 5635283 # type
   tree

   $ git cat-file -p 5635283 # value
   tree 1742682 fruits
   ```

3. 在 objects 目录下生成一个 commit 对象

   ```diff
   + .git/objects/c2594b5
   ```

   ```sh
   $ git cat-file -t c2594b5 # type
   commit

   $ git cat-file -p c2594b5 # value
   tree 5635283
   author wdyjwdy <email.com>
   committer wdyjwdy <email.com>

   update
   ```

4. 更新分支指向
5. 更新日志文件
