---
title: openpyxl
createTime: 2025/06/22 11:09:12
permalink: /python/dp/
---
## 打开保存

```
变量=模块名.Workbook()
```
把工作簿赋值给一个变量

```
工作簿.save('路径/test.xlsx')
```
把该工作簿保存到指定路径中并命名
做任何修改的操作后都要save才生效

```
工作簿.close()
```
关闭工作簿

```
模块名.load_workbook(路径/filename)
```
打开已有文件

## 操作工作表

### 获取

```
变量.active
```
获取当前工作表

```
wb.sheetnames
```
获取工作簿中所有工作表名

```
变量=workbook['Sheet']
```
通过表名获取表

```
wb.index(‘Sheet’)
```
获取表下标位置（从0开始）

```
worksheet.max_row
```

 获取最大行数

```
ws.max_column
```
获取最大列数

```
ws.dimensions
```
获取已启用的单元格范围

```
ws.encoding
```
获取编码类型

```
ws.sheet_view
```
获取对象信息

```
ws.title
```
获取工作表名

### 增加

```
workbook.create_sheet('sheetname',下标)
```
在指定位置创建新的工作表，若没有下标默认创建在末尾

### 修改

```
ws.title='default_sheet'
```
修改工作表名

### 移动

```
wb.move_sheet(Sheet,下标)
```
把指定sheet移动到指定位置

### 删除

```
del wb[‘Sheet’]
```
删除指定sheet

```
wb.remove_sheet(Sheet)
```
删除sheet

### 复制

```
wb.copy_worksheet(sheet)
```
复制工作表

### 过滤和排序

```
ws.auto_filter.ref='单元格范围'
```
选择数据范围

```
ws.auto_filter.add_filter_column(列数，数据)
```

选择指定列为过滤数据，并勾选过滤的数据项

```
ws.auto_filter.add_sort_condition('单元格范围'，bool)
```
设置排序范围，决定是否倒序，默认为否

## 访问单元格

### 获取单元格内容

```
cell.value
```

### 修改单元格内容

```
ws['位置']=‘内容’
```
修改指定位置单元格的内容

```
ws.cell(列数，行数，value)
```
修改指定位置单元格的内容
若无value返回单元格的值

### 单元格坐标信息

```
cell.coordinate
```
单元格坐标

```
cell.column_letter
```
单元格所在列

```
cell.column
```
单元格所在列的下标

```
cell.row
```
单元格所在行

```
cell.col_idx
```
单元列下标

```
ws.iter_rows()
```
按行遍历

```
ws.iter_cols()
```
按列遍历

