---
title: node
createTime: 2025/06/18 21:13:08
permalink: /front/node/
---
1. 浏览器是JavaScript的前端运行环境
2. Node.js是JavaScript的后端运行环境。
3. Node.js中无法调用DOM和BOM等浏览器内置API。

# 系统模块

## fs
fs模块是Nodejs官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

| 函数        | 作用                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| readFile  | 读取指定文件中的内容,参数一：读取的文件路径。参数二（可选）：读取文件时采用的编码。参数三：回调函数，回调函数有两个参数：第一个参数是如果读取失败传入的错误信息，第二个参数是如果读取成功传入的内容，读取成功时err的值是null，读取失败时datastr的值是undefine |
| writeFile | 向指定的文件中写入内容，和readFile的参数一样，但多了一个参数为要写入的内容                                                                                                  |

## path
path模块是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

| 函数        | 作用                                  |
| --------- | ----------------------------------- |
| __dirname | 当前文件所在目录                            |
| join      | 将多个路径片段拼接成一个完整的路径字符串                |
| basename  | 从路径字符串中将文件名解析出来。参数1：路径字符串，参数2：文件扩展名 |
| extname   | 返回文件扩展名。参数1：文件路径                    |

## http
http模块是Nodejs官方提供的、用来创建web服务器的模块。


| 函数           | 作用                                                                    |
| ------------ | --------------------------------------------------------------------- |
| createServer | 创建服务器对象                                                               |
| on           | 为服务器对象绑定事件，参数1：绑定的时间名，参数2：触发事件时的回调，回调中的第一个参数是接收到的请求，第二个参数是返回给客户端的响应对象 |
| listen       | 启动服务器，参数1：监听的端口号，参数2：回调函数                                             |
| end          | 向客户端响应内容                                                              |
| setHeader    | 给res对象设置响应头                                                           |

# module对象
在每个js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息

由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准。

# 模块加载机制
npm优先从缓存中加载模块，如果缓存中有了就不会去磁盘中加载了，一个模块只会加载一次

**优先加载内置模块**
内置模块是由Nodejs官方提供的模块，内置模块的加载优先级最高。
例如，require('fs'）始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs。

使用requireO加载自定义模块时以/或/开头的路径标识符。在加载自定义模块时，如果没有指定/或./
这样的路径标识符，则node会把它当作**内置模块**或**第三方模块**进行加载。

在使用require0导入自定义模块时，如果省略了文件的扩展名，会按顺序分别尝试加载以下的文件：
1. 按照确切的文件名进行加载
2. 补全js扩展名进行加载
3. 补全json扩展名进行加载
4. 补全.node扩展名进行加载
5. 加载失败，终端报错

**第三方模块加载机制**
如果传递给requireO的模块标识符不是一个内置模块，也没有以‘/”或‘./”开头，则Node.js会从当前模块的父目录开始，尝试从/nodemodules文件夹中加载第三方模块。
如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。

当把目录作为模块标识符，传递给require进行加载的时候，有三种加载方式：
1. 在被加载的目录下查找一个叫做 packagejson 的文件，并寻找 main 属性，作为 requireO 加载的入口
2. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 indexjs 文件。
3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error:Cannot find module'xxx'

# nodemon
热重载项目

下载后使用nodemon命令启动项目

# Express
Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的
提供了快速创建Web服务器的便捷方法。

http内置模块用起来很复杂，开发效率低；Express是基于内置的http模块进一步封装出来的，能够极大的提高开发效率。

| 函数         | 作用                                                          |
| ---------- | ----------------------------------------------------------- |
| express    | 创建服务器对象                                                     |
| get        | 为服务器对象设置监听get请求，参数1：请求的url，参数2：回调函数，回调函数的第一个参数请求体，第二个参数响应数据 |
| post       | 监听post请求                                                    |
| res.send   | 响应内容                                                        |
| req.query  | 获取到请求中的参数，json对象                                            |
| req.params | 获取到url中通过:匹配的动态参数,'/index/:id'                              |
| static     | 创建静态资源服务器，指定将哪个文件夹部署到静态资源服务器                                |

# npm
查看npm配置信息
- -l：查看详细信息
```shell
npm config ls
```

查看npm仓库源
```shell
npm config get registry
```

设置npm仓库源
```shell
npm config set registry http://registry.npm.taobao.org
```

配置缓存路径
```shell
npm config set cache "D:\Develop\npm-cache"
```

配置npm库全局安装路径
```shell
npm config set prefix "D:\Develop\npm-global"
```

配置pnpm
```shell
pnpm config set global-bin-dir "D:\Develop\.pnpm-store"
pnpm config set cache-dir "D:\Develop\.pnpm-store\cache"
pnpm config set state-dir "D:\Develop\.pnpm-store\state"
pnpm config set global-dir-dir "D:\Develop\.pnpm-store\global"
```
