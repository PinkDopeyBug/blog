---
title: 4 cmake函数
createTime: 2025/04/05 12:12:26
permalink: /cpp/cmake/4/
---

| 函数或宏                               | 含义                                                              |
| ---------------------------------- | --------------------------------------------------------------- |
| project(项目名)                       | 设置项目名,也可以在后面添加一个参数如:LANGUASGES CXX设置此项目是使用c++语言                 |
| add_library(项目名 资源文件)              | 将资源文件制作成静态库,指定项目名称                                              |
| target_link_libraries(项目名 动态库名)    | 将目标项目连接到指定的动态库                                                  |
| 宏PROJECT_NAME                      | 项目名,project中设置的                                                 |
| 宏CMAKE_PREFIX_PATH                 | 库文件所在位置,需要使用set设置                                               |
| 宏CMAKE_AUTOUIC                     | 自动添加qt文件                                                        |
| 宏CMAKE_AUTOMOC                     |                                                                 |
| 宏CMAKE_AUTORCC                     | 自动添加qt资源文件                                                      |
| find_package()                     | 插入需要引用的包,如qt的Widget核心                                           |
| add_compile_options()              | 添加编译设置,gcc编译器一般不用,msvc默认编码是gbk可以使用此函数设置为utf-8,如果是gcc编译器则自动忽略此选项 |
| target_link_libraries(项目名 权限 库名)   | 链接动态库                                                           |
| add_executable(项目名 选项 生成可执行文件的源文件) | 生成以项目名为可执行程序,选项可以使用WIN32,添加后运行程序会弹出终端,不使用则不弹出                   |

**将msvc编译器默认编码设置为utf-8**
```
add_compile_options("$<$<C_COMPILER_ID:MSVC>:/utf-8>")
add_compile_options("$<$<CXX_cOMPILER_ID:MSVC>:/utf-8>")
```

**链接qt的Widget库**
```
target_link_libraries(${PROJECT_NAME} PRIVATE Qt6::Widgets)
```

































