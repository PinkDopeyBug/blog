---
title: 6 Druid
createTime: 2025/04/05 12:12:26
permalink: /tools/mysql/6/
---

# java的接口
标准接口：DataSource
官方(SUN）提供的数据库连接池标准接口，由第三方组织实现此接口。
功能：获取连接
```
Connection getConnection()
```

# Druid
Druid(德鲁伊)
Druid连接池是阿里巴巴开源的数据库连接池项目
功能强大，性能优秀，是Java语言最好的数据库连接池之一

在使用之前需要在src目录下配置`druid.properties`文件
```
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql:///db1?useSSL=false&useServerPrepStmts=true
username=root
password=1234
#初始化连接数量
initialSize=5
#最大连接数
maxActive=10
#最大等待时间
maxWait=3000
```

























