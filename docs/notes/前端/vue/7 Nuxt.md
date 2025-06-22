---
title: 7 Nuxt
createTime: 2025/06/10 18:17:50
permalink: /front/vue/7/
---
Nuxt框架提供了一种基于Node.js的服务端渲染方案SSR（Server Side Rendering），可以让Vue应用在服务器端进行染，从而提高页面的加载速度和SEO。I

**SPA和SSR是什么**
- SPA（SinglePageApplication）单页面应用，在客户端通过JS动态地构建页面。
- SSR（Server-SideRendering）服务器端渲染，在服务器端生成HTML页面并发送给客户端。

**Nuxt框架优势**
- Nuxt采用了混合的架构模式，同时支持SSR和SPA。
- SSR服务端渲染：首次访问页面，Nuxt.js在服务器端执行Vue组件的渲染过程，并生成初始HTML
- SPA客户端激活：一旦初始HTML被发送到浏览器，Vue.js会接管页面，后续的页面切换则使用SPA的方式进行。
- Nuxt框架优势：兼顾了SSR和SPA的优点。

# 配置
- 开发工具
```
  devtools: { enabled: true },
```
- 开发服务器配置
```
  devServer: {
    port: 3000,
  },
```
- 源码映射
```
  sourcemap: {
    server: true,
    client: true,
  },
```
- 导入的模块
```
  modules: ["@element-plus/nuxt"],
```
- 运行时配置
```
  runtimeConfig: {
    isServer: true,
    public: {
      apiBase: process.env.NUXT_API_BASE,
    },
  },
```
public属性下的是客户端和服务端都可以获取的，isServer或者isClient是只有服务端或只有客户端才可以获取。如果获取的不是自己有权访问的得到的结构是undefined
在获取时从全局对象`config`中获取
# 路由
在nuxt中不需要使用vue-router，它是基于文件的路由系统

跳转时使用`NuxtLink`组件，显示路由页面使用`NuxtPage`组件

nuxt会检查当前项目根目录中的**pages**文件夹，根据其中的文件夹设置路由，并且路由名是pages文件夹下的子文件夹名字，跳转页面是子目录中的index.vue文件
```
├── pages/                     //页面目录
|    ├── index/ 
│    |   └── index.vue         //主页
|    └── video/ 
         └── video.vue         //视频页
```
默认生效条件如下：页面名必须是pages、子目录中必须包含index文件、pages文件夹必须在根目录中等。
如果有不同的需求也可以更改配置

## 路由传参
文件命名时将页面命名为带`[]`的文件，其中的变量就是路由传参的变量名
如：`pages/posts/[id].vue`
```pages/posts/[id].vue
<script setup lang="ts">
const route = useRoute()

// 当访问 /posts/1 时，route.params.id 将为 1
console.log(route.params.id)
</script>
```
如果动态路由页面同级目录下有其他的页面文件则先精准匹配其他的页面路由，最后再匹配动态路由
# SEO优化
使用Nuxt最主要的是实现SEO优化，可以被搜索引擎搜索到
要使用seo优化需要在App.vue中做设置
- title：在搜索引擎中显示的标题
- description：标题下的描述
- keywords：搜索关键字
```
<script setup lang="ts">
useSeoMeta({
  title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
  description:
    "哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站。",
  keywords:
    "B站,哔哩哔哩,bilibili,弹幕网,弹幕视频,弹幕网站,动漫,电影"
});
</script>
```

# 接口请求
在nuxt项目中可以设置后端接口
需要在特定文件夹下

接口文件需要放在根目录的server文件夹中，请求路径就是`nuxt服务器地址+端口号+/server文件夹中的文件夹+/文件名`
`server/api/user.ts`文件请求的接口就是`localhost:3000/api/user`，默认是所有请求都可以识别的，但也可以更改文件名设置只接收某种请求，如：`user.get.ts`文件只能被get请求识别

返回后端数据需要使用defineEventHandler函数，为这个函数传入一个函数，返回值就是要返回的数据
```
export default defineEventHandler(()=>{
	return data
})
```

## 发送请求
nuxt有封装好的请求函数，不需要使用axios
```
const res=await useFetch('/api/user')
```

# 状态共享
对于服务端渲染的代码，需要辨别当前运行环境是服务端还是客户端，
判断当前文件是客户端还是服务端使用`import.meta`
如果在服务端渲染的代码中设置了修改了变量，而这段代码在服务端和客户端都会运行通常会运行两次，默认的情况下客户端和服务端是属性隔离的

如果以下代码在服务端和客户端都有执行
```
const a=ref(0)
a.value++
console.log(a.value) //服务端和客户端输出的都是1，这是因为属性是隔离的
```
如果要服务端和客户端共享数据可以使用useState函数获取共享的状态
```
const a= useState("number",()=>{
	return 0
)
a.value++
console.log(a.value) //服务端输出是1，客户端输出是2
```

# 生命周期

nuxt中有三种生命周期钩子，
首先是服务端的生命周期，这些函数都运行在服务端，但输出可能在服务端也可能在客户端
服务端的生命周期执行完毕后就是vue本身的生命周期了，在vue自身的生命周期中beforeCreated和created这两个生命周期函数可能运行在服务端也可能运行在客户端（因为是服务端渲染）
在nuxt中不存在keep-alive和dekeep-alive生命周期，因为是服务端渲染的所以不存在组件的缓存

![[Pasted image 20250522113533.png]]
![[Pasted image 20250522113747.png]]

































