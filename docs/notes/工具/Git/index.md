---
title: 1、简介
createTime: 2025/06/18 21:08:06
permalink: /tools/git/
---
Git GUI 图形界面工具
Git Bash 窗口，相当于小型的Linux，能够执行Linux命令

Git为了和Linux命令区分开，在每个Git命令前都会有git

要首先配置用户名和邮箱，通过这些信息区分是谁修改的（邮箱不要求是必须存在的邮箱）

# 配置
配置用户信息
```bash
git config --global user.name "用户名"
git config --global user.email "邮箱地址"
```
如果用户名或邮箱地址字段有空格需要用双引号括起来，如果没有空格不用双引号也可以
省略（Local）：本地配置，只对本地仓库有效
--global：全局配置，所有仓库生效
--system：系统配置，对所有用户生效

保存用户名和密码
```bash
git config --global credential.helper store
```

查看配置信息
```bash
git config --global user.name     #查看用户名
git config --global user.email    #查看邮箱
git config --global --list        #查看所有配置信息
```

## 为常用指令配置别名
有些常用指令参数非常多，每次都要输入很多参数，可以使用别名解决
1. 打开用户目录，创建`.bashrc`文件。有的windows无法创建以.开头的文件，可以使用git bash用linux的touch命令创建
2. 在`.bashrc`文件中输入以下内容
```bash
#用于输出git提交日志
alias git-log='git log --pretty=oneline --all --graph --abbrev-commit'
#用于输出当前目录所有文件及基本信息
alias ll='ls -al'
```

# 分区

git分为三个区：工作区（Working DIrectory）、暂存区（Staging Area/index）、本地仓库（Local Repository）

- 工作区：电脑上能看到的文件夹就是工作区
- 暂存区：用于保存即将提交到GIt仓库的修改内容，是在Git进行版本控制时非常重要的区域
- 本地仓库：通过git init命令创建的仓库，包含完整的项目历史和元数据，是git存储代码和版本信息的主要位置
当修改完工作区的文件后需要将它们添加到暂存区（git add），然后再将暂存区的修改提交到本地仓库中（git commit）

## Git中的文件状态
**存在以下四种状态**

1. 未跟踪Untrack
新创建的还没有被git管理起来的文件
2. 未修改Unmodified
被git管理起来，但文件的内容没有发生变化（没有被修改过）的文件
3. 已修改Modified
修改了文件但还没有添加到暂存区里面
4. 已暂存Staged
已经修改后并且已经添加到了暂存区域内的文件

# 创建仓库
一般有两种方法创建仓库
一种是在本地创建仓库
一种是把远程的仓库克隆过来

## 创建本地仓库
```bash
git init
```
.git目录存放了git仓库所有的数据，默认是隐藏的

## 克隆仓库
```bash
git clone "仓库地址"
```
如果仓库地址不带空格也可以不使用双引号

### 查看仓库的状态
```bash
git status
```
看到的Untracked files中有一个红色的文件就是未被跟踪的文件
使用git add命令将未被跟踪的文件添加到暂存区中后查看可以看到之前红色的文件已经变为绿色且变为：未提交的更改区域，表示这个文件现在被添加到了暂存区

### 添加到暂存区
```bash
git add "文件名"
```

将添加到暂存区中的文件取消暂存
```bash
git rm --cached "文件名"
```
可以跟多个文件名批量取消

在添加到暂存区和取消暂存时也可以使用* 通配符批量添加（取消）
也可以使用git add . 将当前文件夹所有文件都添加到暂存区中， . 表示当前目录

### 提交
```bash
git commit [-a] [-m "提交的信息"]
```
-m：后面跟提交的信息，这个信息会被记录到仓库中，如果不指定-m参数那么git commit命令会进入一个交互式的界面，默认使用vim来编辑提交信息
-a：添加了此参数后就能一个命令完成添加暂存和提交两个操作

-a -m也可以简化成-am

此命令只会提交暂存区中的文件，而不会提交工作区其他的文件

删除也是一种修改，在删除后也需要添加到暂存区然后提交才会生效

### 查看提交信息
```bash
git log
```

### 回退版本
```bash
git reset [参数]
```
参数：
三种模式
--soft：软，回退到某个版本并且保留工作区和暂存区的所有修改内容
--hard：硬，回退到某个版本并且丢弃工作区和暂存区的所有修改内容
--mixed：混合，介于以上两种模式之间，回退到某个版本并只保存工作区修改的内容丢弃暂存区的修改内容。也是reset的默认模式

### 查看差异
```bash
git diff [参数] [文件名]
```
可以查看工作区、暂存区、本地仓库之间的差异
也可以查看不同版本之间的差异
也可以查看不同分支之间的差异

不加任何参数默认查看工作区和暂存区之间的差异
第一行：提示了发生变更的文件
第二行：git会将文件的内容使用哈希算法生成一个40位的哈希值，只显示了哈希值的前七位和后七位，哈希值后面的数字表示文件的权限
后面就是修改的内容了，红色表示删除的内容，绿色表示添加的内容

没有任何输出表示内容是一致的

| 参数          | 作用               |
| ----------- | ---------------- |
| HEAD        | 比较工作区和版本库之间的差异   |
| --cached    | 比较暂存区和版本库之间的差异   |
| 加上两个版本的提交ID | 比较两个版本之间的提交内容的差异 |
| HEAD~ HEAD  | 比较上一个版本和当前版本的差异  |
| 加上两个分支名     | 比较两个分支的差异        |

HEAD表示当前版本
HEAD~表示上一个版本
HEAD~加数字，数字几就表示当前版本前几个版本

在参数后面加上文件名就表示只对比不同版本之间此文件的差异

# .gitignore
系统或者软件自动生成的文件
编译产生的中间文件和结果文件
运行时生成日志文件、缓存文件、临时文件
涉及身份、密码、口令、秘钥等敏感信息文件

在.gitignore文件中列出需要忽略的文件的模式

需要创建.gitignore文件，然后把需要忽略的文件名写入到.gitignore文件中

也可以忽略文件夹，把文件夹名/写入到.gitignore文件中，文件夹名必须是以/结尾的，
git默认是不会把空文件夹纳入到版本控制中，只有文件夹中有文件时才自动纳入到版本控制中。

空行或者以#开头的行会被Git忽略。一般空行用于可读性的分隔，#一般用作注释
使用标准的Blob模式匹配，例如：
- 星号＊通配任意个字符
- 问号？匹配单个字符
- 中括号[ ]表示匹配列表中的单个字符，比如：[abc]表示a/b/c
- 两个星号*＊表示匹配任意的中间目录
- 中括号可以使用短中线连接，比如：[0-9] 表示任意一位数字，[a-z]表示任意一位小写字母
- 感叹号！表示取反

```bash
#忽略所有的·a文件
*.a
#但跟踪所有的lib.a，即便你在前面忽略了.a文件
!lib.a
#只忽略当前目录下的TODO文件，而不忽略subdir/TODO/TODO#忽略任何目录下名为 build 的文件夹
build/
# 忽略doc/notes.txt，但不忽略doc/server/arch.txt
doc/*.txt
#忽略doc/目录及其所有子目录下的·pdf文件
doc/***/*.pdf
```


### 从远程仓库拉取文件
```bash
git pull
```
可以在后面跟文件名或分支等选择性拉取
拉取后会自动合并，如果两文件有冲突就会报错，这时就需要手动处理报错

可以使用
```bash
git fetch
```
拉取文件而不合并

### 从本地仓库推送文件到远程仓库
```bash
git pull
```

# 分支
### 查看/创建分支
```bash
git branch [分支名]
```
如果不加分支名就是查看分支
如果加了分支名就是创建分支
### 切换分支
```bash
git checkout "分支名"
```
此命令处理切换分支外还可以恢复文件或者目录到之前的某一个状态，而这时分支名称和文件名称相同时就会出现歧义，git checkout命令会默认切换分支而不是恢复文件
为了避免这个歧义，git在2.23版本开始提供一个新的命令专门用于切换分支
```bash
git switch "分支名"
```
切换分支后工作区的内容也会发生变化

### 合并分支
```bash
git merge "要合并的分支名"
```
将要合并的分支合并到当前所在的分支
若想合并到一个分支必须先切换到那个分支再执行此命令

### 查看分支图
```bash
git log --graph --oneline --decorate --all
```

### 删除分支
```bash
git branch -d "分支名"
```
合并分支后被合并的分支并不会被删除，还是会保留的，如果不需要此分支了就要用此命令删除
-d参数表示删除已经完成合并的分支，但如果没有合并的话就不能使用-d删除
这时就需要使用-D命令强制删除
```bash
git branch -D "分支名"
```

## 冲突处理
一般情况下两个分支的修改内容没有重合的部分的话，那么git就会自动完成合并
如果两个分支修改了同一块区域的内容的话，git就不知道该保留哪个分支的修改内容了，也就产生了冲突

发生冲突时使用git diff查看冲突的具体内容，它会把两个分支的修改内容全都显示出来然后用<、=、>将两文件的内容区分开
这时需要修改这个文件中的内容再提交
### 变基
```bash
git rebase "分支名"
```
在不同分支上执行变基操作结果是不一样的
执行rebase之后结果都是一条直线
在git中每个分支都有一个HEAD指针指向当前分支的最新提交记录
而在执行rebase操作之后git会先找到当前分支和目标分支的共同祖先（也就是分歧点）
再把当前分支上共同祖先到最新提交记录的所有提交都移动到目标分支的最新提交后面
