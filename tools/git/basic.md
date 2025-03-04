# Basic

## Init

### 描述

初始化一个代码仓库

### 原理

**初始化**：创建一个空文件夹 `Fruits`，并执行 `git init` 后，Git 会做以下事情：

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

### 原理

**添加单个文件**：创建一个名为 `hello.txt`，内容为 `hello` 的文件，执行 `git add hello.txt` 后，Git 会做以下事情：

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

![add](../../imgs/git-add.png)

**添加文件夹中的文件**：若创建的是文件夹中的文件，例如创建 `greets/hello.txt`，Git 处理也几乎一样：

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

> [!NOTE]
> 当两个文件的内容相同时，它们的哈希值也相同，因此只会生成一个 blob 对象

## Commit

### 描述

将 Index 中的内容提交到 Repository

### 例子

1. `git commit`: 提交 Index 中的内容，并打开 [Vim](../vim-cheet-sheet.md) 输入 commit message
2. `git commit -m 'update'`: 提交 Index 中的内容，并使用 'update' 作为 commit message
3. `git commit -a`: 等价于 `git add .` 加 `git commit`
4. `git commit -am 'update'`: 等价于 `git add .` 加 `git commit -m 'update'`

### 原理

**提交单个文件**：若 Index 中有文件 `apple.txt`，执行 `git commit -m 'update'` 后，Git 会做以下事情：

1. 在 objects 目录下生成一个 tree 对象，该对象记录了根目录下文件的路径，以及对应的哈希值

   ```diff
   + .git/objects/1742682
   ```

   ```sh
   $ git cat-file -t 1742682 # type
   tree

   $ git cat-file -p 1742682 # value
   blob 4c479de apple.txt
   ```

2. 在 objects 目录下生成一个 commit 对象，记录了本次 commit 根目录的 tree，和 commit message 相关内容

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

3. 将当前分支指向生成的 commit 对象（当前分支即 HEAD 指向的分支）

   ```diff
   - .git/refs/heads/main
   + .git/refs/heads/main
   ```

   ```sh
   $ cat refs/heads/main
   6cc8ff6
   ```

4. 更新日志文件

![commit](../../imgs/git-commit.png)

**提交文件夹中的文件**：若 Index 中存在文件夹，例如 `fruits/apple.txt`，则 Git 会用 tree in tree 的方式来储存文件路径：

1. 在 objects 目录下生成第一个 tree 对象，该对象记录了 fruits 目录下文件的路径，以及对应的哈希值

   ```diff
   + .git/objects/1742682
   ```

   ```sh
   $ git cat-file -t 1742682 # type
   tree

   $ git cat-file -p 1742682 # value
   blob 4c479de apple.txt
   ```

2. 在 objects 目录下生成第二个 tree 对象，该对象记录了根目录下文件的路径，以及对应的哈希值

   ```diff
   + .git/objects/5635283
   ```

   ```sh
   $ git cat-file -t 5635283 # type
   tree

   $ git cat-file -p 5635283 # value
   tree 1742682 fruits # 指向第一步的 tree 对象
   ```

3. 在 objects 目录下生成一个 commit 对象，记录了本次 commit 根目录的 tree，和 commit message 相关内容

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

## Branch

### 描述

创建一个新的分支

### 例子

1. `git branch`: 显示本地分支
2. `git branch -a`: 显示本地和远程分支
3. `git branch feat`: 创建一个名为 feat 的分支
4. `git branch -d feat`: 删除 feat 分支
5. `git branch -D feat`: 强制删除 feat 分支

### 原理

**新建分支**：执行 `git branch feat` 后，Git 会做以下事情：

1. 在 refs/heads 目录下创建一个名为 feat 的文件，内容为当前分支最新 commit 的哈希值

   ```diff
   + .git/refs/heads/feat
   ```

   ```sh
   $ cat refs/heads/feat # value
   6cc8ff6
   ```

![branch](../../imgs/git-branch.png)

**如何找到当前分支的最新 commit**

1. 查看 HEAD 文件，获取当前分支的引用

   ```sh
   $ cat HEAD # value
   ref: refs/heads/main
   ```

2. 查看当前分支的最新 commit

   ```sh
   $ cat refs/heads/main # value
   6cc8ff6
   ```

**删除分支**：执行 `git branch -d feat` 后，Git 会做以下事情：

1. 删除 refs/heads 目录下的 feat 文件

   ```diff
   - .git/refs/heads/feat
   ```

> [!NOTE]
> 删除分支后，分支上的 commit 对象并不会被删除，这些对象会变成垃圾对象

## Switch

### 描述

切换分支

### 例子

1. `git switch feat`: 切换到 feat 分支
2. `git switch -c feat`: 创建并切换到 feat 分支
3. `git switch --detach 6cc8ff6`: 切换到 commit 6cc8ff6

### 原理

**切换到分支**：执行 `git switch feat` 后，Git 会做以下事情：

1. 更新 HEAD 文件，将其指向 feat 分支

   ```diff
   - .git/HEAD
   + .git/HEAD
   ```

   ```sh
   $ cat HEAD # value
   ref: refs/heads/feat
   ```

![switch](../../imgs/git-switch.png)

**切换到提交**：执行 `git switch --detach 6cc8ff6` 后，Git 会做以下事情：

1. 更新 HEAD 文件，将其指向 commit 6cc8ff6

   ```diff
   - .git/HEAD
   + .git/HEAD
   ```

   ```sh
   $ cat HEAD # value
   6cc8ff6
   ```

![switch-detach](../../imgs/git-switch-detach.png)

> [!NOTE]
> 如果想基于该提交开始工作，可以执行 `git switch -c <name>` 创建一个新分支，并在新分支上工作

## Merge

**简述**：合并分支

**例子**：

1. `git merge feat`: 将 feat 分支合并到当前分支

### fast-forward

```sh
$ git log --oneline --all # history
b0cd9f5 commit 3 (feat)
e1e6af3 commit 2 (main <- HEAD)
1b157d3 commit 1
```

假设有以上历史记录，feat 为 main 的直接后继节点，此时我们在 main 分支执行 `git merge feat` 后，Git 会做以下事情：

1. 更新 ORIG_HEAD 指针，指向 main 分支的最新提交，即 commit 2

   ```diff
   - .git/ORIG_HEAD
   + .git/ORIG_HEAD
   ```

   ```sh
   $ cat ORIG_HEAD # value
   e1e6af3
   ```

2. 更新 main 分支指针，指向 feat 分支的最新提交，即 commit 3

   ```diff
   - .git/refs/heads/main
   + .git/refs/heads/main
   ```

   ```sh
   $ cat refs/heads/main # value
   b0cd9f5
   ```

合并完成后，历史记录如下：

```sh
$ git log --oneline --all # history
b0cd9f5 commit 3 (feat, main <- HEAD)
e1e6af3 commit 2
1b157d3 commit 1
```

![fast-forward](../../imgs/git-fast-forward.png)

## 3-way merge

```sh
$ git log --oneline --all --graph # history
* a9532ef (HEAD -> main) commit 3
| * 88d8b74 (feat) commit 2
|/
* 34b711b commit 1
```

假设有以上历史记录，feat 不是 main 的直接后继节点，此时我们在 main 分支执行 `git merge feat` 后，Git 会做以下事情：

1. 更新 ORIG_HEAD 指针，指向 main 分支的最新提交，即 commit 3

   ```diff
   - .git/ORIG_HEAD
   + .git/ORIG_HEAD
   ```

   ```sh
   $ cat ORIG_HEAD # value
   a9532ef
   ```

2. 创建一个新的 merge commit 对象，记录了 feat 中的修改（注意 merge commit 对象有两个 parent）

   ```diff
   + .git/objects/cbd588d
   ```

   ```sh
   $ git cat-file -t cbd588d # type
   commit

   $ git cat-file -p cbd588d # value
   tree 03b2125
   parent a9532ef # commit 3
   parent 88d8b74 # commit 2
   author wdyjwdy <email.com>
   committer wdyjwdy <email.com>

   Merge branch 'feat'
   ```

3. 更新 main 分支指针，指向新的 merge commit 对象

   ```diff
   - .git/refs/heads/main
   + .git/refs/heads/main
   ```

   ```sh
   $ cat refs/heads/main # value
   cbd588d
   ```

合并完成后，历史记录如下：

```sh
$ git log --oneline --all --graph # history
*   cbd588d (HEAD -> main) Merge branch 'feat'
|\
| * 88d8b74 (feat) commit 2
* | a9532ef commit 3
|/
* 34b711b commit 1
```

![3-way-merge](../../imgs/git-3way-merge.png)
