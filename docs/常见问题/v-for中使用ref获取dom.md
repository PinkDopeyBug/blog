---
title: v-for中使用ref获取dom
createTime: 2025/07/15 23:00:04
tags:
  - vue
	- 前端
  - 问题
permalink: /article/question/3/
---
在v-for中不能直接使用ref获取dom，因为v-for会生成许多同样ref命名的dom有多义性

1. 数组存储
`itemRefs`是一个数组，并且打印后会发现这个数据里的 item 是没有属性可以去区分这个 ref 是哪一个具体的dom
```vue
<script setup>
	let itemRefs = []
	const setItemRef = (el) => {
		if (el) {
			itemRefs.push(el);
		}
	}
<scrippt>

<template>
	<div v-for="item in list" :ref="setItemRef"></div>
</template>
```

3. 对象存储
将dom以对象键值对的形式存储
```vue
<script setup>
	let graphRefs: { [key: string]: typeof Graph } = {};
	const setRef = (el: typeof Graph, type: string) => {
		if (el) {
			graphRefs[type] = el;
		}
	};
<scrippt>

<template>
	<div v-for="item in list" :ref="(el) => setGraphRef(el, item)"></div>
</template>
```
这样取值的话就可以使用`graphRefs[item]`取值了
