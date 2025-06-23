import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>装饰器本质是一种特殊的函数，它可以对：类、属性、方法、参数进行扩展，同时能让代码更简洁。 装饰器自2015年在ECMAScript-6中被提出到现在，已将近10年。 截止目前，装饰器依然是实验性特性，需要开发者手动调整配置，来开启装饰器支持。</p><p>装饰器有5种：</p><ol><li>类装饰器</li><li>属性装饰器</li><li>方法装饰器</li><li>访问器装饰器</li><li>参数装饰器 备注：虽然TypeScript5.0中可以直接使用类装饰器，但为了确保其他装饰器可用，现阶段使用时，仍建议使用experimentalDecorators配置来开启装饰器支持，而且不排除在来的版本中，官方会进一步调整装饰器的相关语法！</li></ol><p>装饰器就是函数,参数是被装饰的对象</p><h1 id="类装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器"><span>类装饰器</span></a></h1><p>类装饰器是一个应用在类声明上的函数，可以为类添加额外的功能，或添加额外的逻辑</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function CustomString(target:Function){</span></span>
<span class="line"><span>	target.prototype.tostring = function(){</span></span>
<span class="line"><span>		return JsoN.stringify(this)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	// object.seal(target.prototype)</span><span>  //seal封锁,封锁后的类无法被扩展即不能被prototype获取出来对其属性进行更改</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Customstring</span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>	name: string</span></span>
<span class="line"><span>	age: number</span></span>
<span class="line"><span>	constructor(name: string, age: number) {</span></span>
<span class="line"><span>		this.name = name</span></span>
<span class="line"><span>		this.age = age</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const p1 = new Person(&#39;张三&#39;,18)  //打印的是json形式的张三</span></span>
<span class="line"><span>console.log(p1.tostring())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>prototype是原型的意思,相当于java中反射的class</p><p>类装饰器有返回值：若类装饰器返回一个新的类，那这个新类将替换掉被装饰的类。 类装饰器无返回值：若类装饰器无返回值或返回undefined，那被装饰的类不会被替换。</p><p>在 JavaScript 和 TypeScript 中，类实际上是一个特殊的函数。当定义一个类时，实际上是在创建一个构造函数。</p><p>一个对象可以有多个装饰器来装饰</p><h1 id="函数装饰器" tabindex="-1"><a class="header-anchor" href="#函数装饰器"><span>函数装饰器</span></a></h1><p>函数装饰器的类型时MethodDecorator</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const showDecorator: MethodDecorator = (...args: any[]) =&gt; {</span></span>
<span class="line"><span>  console.log(args);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User {</span></span>
<span class="line"><span>  @showDecorator</span></span>
<span class="line"><span>  public show() { }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用此装饰器获取函数的信息</p><h1 id="静态函数装饰器" tabindex="-1"><a class="header-anchor" href="#静态函数装饰器"><span>静态函数装饰器</span></a></h1><p>和普通函数使用装饰器没有区别</p>`,17)]))}const c=n(l,[["render",p]]),d=JSON.parse('{"path":"/front/ts/2/","title":"2 装饰器","lang":"zh-CN","frontmatter":{"title":"2 装饰器","createTime":"2025/06/18 21:06:50","permalink":"/front/ts/2/"},"readingTime":{"minutes":1.82,"words":546},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/前端/TypeScript/2 装饰器.md","headers":[]}');export{c as comp,d as data};
