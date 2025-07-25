---
title: 1 基础内容
createTime: 2025/06/22 11:09:24
permalink: /python/python/
---
## 基本的输入输出

#### input（）输入
input返回值将输入内容转换为为字符串

.split（）分隔
a，b=input().split()将输入的内容分割开，可在一行同时输入
map目标函数，序列
```python
a，b=map(int，input().split()
```

#### print（）输出，打印

#### type（）类型
判断对象的类型
int/str/float/complex/bool

### 格式化输出

#### %格式化输出方式

```python
print()'xxx%sxxx'%a)
```

| 格式化字符 | 介绍                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------ |
| %s    | 格式化字符串                                                                                           |
| %d    | 格式化整数, %d在%和d之间输几就输出几个位数的整数，不足的用空格代替 ‘%5d’%3输出的是” 3”有四个空格加上3是五位。数字前加0就是用0补齐空格‘%05d‘%3输出的是“00003“ |
| %o    | 格式化八进制数（不能带小数点）                                                                                  |
| %x    | 格式化十六位进制数（不能带小数点）                                                                                |
| %f    | 格式化浮点数，可以控制保留小数点后几位数,%f保留小数点后几位就在%和f之间输入小数点和几。若后两位则%.2f                                          |
| %c    | 格式化字符及其ASCII码                                                                                    |
| %e    | 将数字转化成科学计数法的形式                                                                                   |
| %a    | %a相比于print（‘这里有一个‘，a）输出的是这里有一个 a <br>print（‘这里有一个%s‘ %a）输出的是这里有一个a 少了一个空格                        |

#### format格式化输出方式
```python
print('xxx{}xxx'.format(x))
```

| 模式                 | 介绍                                     |
| ------------------ | -------------------------------------- |
| `{:a}`             | 控制浮点数据保留a位小数（样式型）                      |
| `{:b}{:d}{:o}{:x}` | 分别是二、十、八、十六进制（功能型）                     |
| `{:e}`             | 将数字转化成科学计数法的形式（功能型）                    |
| `{:+}`             | 用于显示数据的正负号（样式型）                        |
| `{:%}`             | 将数据转换成百分之的形式输出（功能型）                    |
| `{:f}`             | 将数据类型转换成浮点类型（默认保留小数点后六位）（功能型）          |
| `{:a<3}`           | 用a填充长度为3的字符串且转义的内容靠左（<^>分别表示靠左上右）（样式型） |

#### f转化的格式化输出方式
```python
print（f'xxx{aa}xxx'）
```


| 模式                 | 介绍                                     |
| ------------------ | -------------------------------------- |
| `{:a}`             | 控制浮点数据保留a位小数（样式型）                      |
| `{:b}{:d}{:o}{:x}` | 分别是二、十、八、十六进制（功能型）<br>                 |
| `{:e}`             | 将数字转化成科学计数法的形式（功能型）                    |
| `{:+}`             | 用于显示数据的正负号（样式型）                        |
| `{:%}`             | 将数据转换成百分之的形式输出（功能型）                    |
| `{:f}`             | 将数据类型转换成浮点类型（默认保留小数点后六位）（功能型）          |
| `{:a<3}`<br>       | 用a填充长度为3的字符串且转义的内容靠左（<^>分别表示靠左上右）（样式型） |

## 注释

`#`注释后面的代码，使其执行
`\`+转义功能的首字母
`\n`换行符
newline
`\t`水平制表符
`\\`输出一个\

## 补充

### 输出不换行

- 在输出的内容后面加上,end=''若想让其用任意符号间隔，则在单括号里加上该符号

### 去除开头和结尾的空格和换行符

- 对象.strip()

### 对象.replace()

### r‘对象’

- 能使引用的对象中的转义字符无效

### 关于python中的=

- 其他语言中定义对象，如c语言需要先声明变量类型例如：int a=10，在c语言中a就是10的一个别名，因为事先声明了名为a的存储空间是存储整型的，所以不能轻易更改数据，更改的话也只能更改同类型的。但在python中定义a=10就是单独开辟一个名为a的内存，其中数据区存储了a，链接区存储了指向10的地址，即链表形式。所以可以随意更改对象，更改时即为把a中的链接区的地址更改为新元素的地址


## 模块

### 导入模块

```python
import 模块名
```
可导入多个：import 模块名1，模块名2，……

```python
form 模块名 import 类、变量、方法等
```

```python
from 模块名 import *
```

```python
import 模块名 as 别名
```

```python
from 模块名 import 功能名 as 别名
```

### 使用模块中的功能

模块名.功能名()

## 列表中使用语句

```python
变量名=[i for i in 范围]
```
- 遍历给定范围中的元素，添加到列表中

```python
变量名=[i for i in 范围 if 条件]
```
- 遍历给定范围中的元素，把符合条件要求的元素添加到列表中
