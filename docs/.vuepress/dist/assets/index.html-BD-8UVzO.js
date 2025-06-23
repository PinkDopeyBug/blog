import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>Vue是一个用于构建用户界面的渐进式框架，免除原生JavaScript中的DOM操作，简化书写。</p><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h1><ol><li>创建项目</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>vue create 项目名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>启动项目</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>npm run serve</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="vue对象" tabindex="-1"><a class="header-anchor" href="#vue对象"><span>vue对象</span></a></h1><ul><li>el属性指定选择器所管理的标签</li><li>data用于存储数据</li><li>methods用于存储定义的函数 当设置好管理的标签后在该标签内就可以通过插值表达式直接使用vue中的数据了</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    {{ msg }}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- vue --&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    new Vue({</span></span>
<span class="line"><span>      el: &#39;.app&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        msg: &#39;Hello World&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性</span></a></h2><p>基于现有的数据，计算出来的新属性。依赖的数据变化，自动重新计算。</p><ul><li>声明在computed配置项中，一个计算属性对应一个函数</li><li>使用起来和普通属性一样使用<code>{{计算属性名}}</code></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>computed:{</span></span>
<span class="line"><span>	计算属性名(){</span></span>
<span class="line"><span>		基于现有数据，编写求值逻辑</span></span>
<span class="line"><span>		return 结果</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于methods中的函数,计算属性具有缓存特性（提升性能）： 计算属性会对计算出来的结果缓存，再次使用直接读取缓存 . 依赖项变化了，会自动重新计算→并再次缓存</p><h3 id="完整写法" tabindex="-1"><a class="header-anchor" href="#完整写法"><span>完整写法</span></a></h3><p>计算属性默认的简写，只能读取访问，不能“修改&quot;。 如果要“修改”→需要写计算属性的完整写法。</p><p>计算属性是具有get和set方法的,非完整写法默认是get</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>computed:{</span></span>
<span class="line"><span>	计算属性名：{</span></span>
<span class="line"><span>		get() {</span></span>
<span class="line"><span>			一段代码逻辑（计算逻辑）</span></span>
<span class="line"><span>			return 结果</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		set（修改的值）{</span></span>
<span class="line"><span>			一段代码逻辑（修改逻辑）</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch侦听器-监视器" tabindex="-1"><a class="header-anchor" href="#watch侦听器-监视器"><span>watch侦听器(监视器)</span></a></h2><p>监视数据变化，执行一些业务逻辑或异步操作。 监听器会在监听的数据改变的时候调用,newValue是改变后的新值,oldValue是改变前的旧值 . 如果数据比较复杂需要使用引号包裹取值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>new Vue({</span></span>
<span class="line"><span>    el: &#39;.app&#39;,</span></span>
<span class="line"><span>	data: {</span></span>
<span class="line"><span>	    count:10,</span></span>
<span class="line"><span>	    obj:{</span></span>
<span class="line"><span>		    words:&quot;&quot;</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>	    count(newValue,oldValue){}</span></span>
<span class="line"><span>	    &#39;obj.words&#39;(newValue){}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="异步请求" tabindex="-1"><a class="header-anchor" href="#异步请求"><span>异步请求</span></a></h4><p>将监听器函数像正常的函数一样设置异步请求即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>watch:{</span></span>
<span class="line"><span>	async &#39;obj.words&#39;(newValue){</span></span>
<span class="line"><span>		const res = await axios({</span></span>
<span class="line"><span>			url:&#39;https://applet-base-api-t.itheima.net/api/</span></span>
<span class="line"><span>			params:{</span></span>
<span class="line"><span>				words:newValue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>		console.log(res.data.data)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="完整属性" tabindex="-1"><a class="header-anchor" href="#完整属性"><span>完整属性</span></a></h4><ul><li>deep : 深度监视,当监视的数据更改时就调用handler函数(监视obj时其内部的words和lang更改时都会触发)</li><li>immediate : 立刻执行,当监视的内容被创建时立即执行一次</li></ul><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>new Vue({</span></span>
<span class="line"><span>    el: &#39;.app&#39;,</span></span>
<span class="line"><span>	data: {</span></span>
<span class="line"><span>	    count:10,</span></span>
<span class="line"><span>	    obj:{</span></span>
<span class="line"><span>		    words:&quot;&quot;,</span></span>
<span class="line"><span>		    lang:&quot;&quot;</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>	    obj:{</span></span>
<span class="line"><span>	    	deep:true,</span></span>
<span class="line"><span>		    immediate:true,</span></span>
<span class="line"><span>		    handler(newValue){}</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="vue指令" tabindex="-1"><a class="header-anchor" href="#vue指令"><span>vue指令</span></a></h1><p>vue指令就是带有v-前缀的特殊<mark>标签属性</mark></p><h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html"><span>v-html</span></a></h3><p>以html的方式解析对应的文本</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;div v-html=&quot;msg&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- vue --&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    new Vue({</span></span>
<span class="line"><span>      el: &#39;.app&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        msg: &#39;&lt;a href=&quot;https://www.google.com&quot;&gt;Google&lt;/a&gt;&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show"><span>v-show</span></a></h3><p>控制元素的显示或隐藏 赋值为一个表达式,表达式的结果为true就是显示,表达式的结果是false就是隐藏</p><p>底层原理是切换css的display属性</p><h3 id="v-if-v-elif-v-else" tabindex="-1"><a class="header-anchor" href="#v-if-v-elif-v-else"><span>v-if v-elif v-else</span></a></h3><p>控制元素的显示与隐藏 v-if和v-elif后面跟表达式,值为true则显示,值为false则隐藏 从上往下如果遇到为true的则不会执行后面的v-if或v-elif了,如果都不符合则显示v-else的</p><p>底层原理是根据判断条件选择是否创建或移除元素</p><h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on"><span>v-on</span></a></h3><p>用于注册事件(添加监听+提供处理逻辑) 简写形式使用@代替v-on:</p><p>当需要的事件逻辑比较复杂时可以将v-on中的值赋值为vue对象的methods中函数名 如果需要函数传参也可直接像正常的函数调用那样传参 语法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>v-on:事件名=&quot;内联语句(要绑定的函数名)&quot;</span></span>
<span class="line"><span>@事件名=&quot;内联语句(要绑定的函数名)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;button v-on:click=&quot;count++&quot;&gt;{{count}}&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;count--&quot;&gt;{{count}}&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- vue --&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    new Vue({</span></span>
<span class="line"><span>      el: &#39;.app&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        count:10</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span>v-bind</span></a></h3><p>用于设置动态属性 简写形式可以省略v-bind直接在属性前加:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;a v-bind:href=&quot;url&quot;&gt;Hello World&lt;/a&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- vue --&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    new Vue({</span></span>
<span class="line"><span>      el: &#39;.app&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        url : &#39;https://www.google.com&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="操作class" tabindex="-1"><a class="header-anchor" href="#操作class"><span>操作class</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>:class=&quot;对象/数组&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对象→键就是类名，值是布尔值。如果值为true，有这个类，否则没有这个类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;box&quot; :class=&quot;{ 类名1：布尔值，类名2：布尔值 }&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>数组→数组中所有的类，都会添加到盒子上，本质就是一个 class 列表</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;box&quot; :class=&quot;[ 类名1，类名2，类名3 ]&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="操作style" tabindex="-1"><a class="header-anchor" href="#操作style"><span>操作style</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;div class=&quot;box&quot; :style=&quot;{ CSS属性名1:CSS属性值, CSS属性名2:CSS属性值 }&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span>v-for</span></a></h3><p>基于数据进行循环,多次渲染整个元素 item是元素,index是元素对应的索引,也可以省略item,当只有item一个元素时可以省略括号</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;(item,index) in skills&quot; :key=&quot;index&quot;&gt;{{item}}-{{index}}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- vue --&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    new Vue({</span></span>
<span class="line"><span>      el: &#39;.app&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        skills:[&quot;五禁玄光气&quot;,&quot;逆流护身印&quot;,&quot;玄天斩灵剑&quot;]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>:key属性用于帮助v-for排序 v-for的默认行为会尝试原地修改元素（就地复用）</p><p>如果不指定key的情况下删除一个元素那么默认删除的是最后一个元素,并将删除后的数据再使用原本的元素容器复用存放数据,如果删除的元素不是最后一个那么这个元素的样式会留下,但其中的数据被按照修改后的数据从前往后依次替换了</p><p>如果指定了key就可以定位到具体要修改的是哪个元素</p><ol><li>key 的值只能是字符串或数字类型</li><li>key 的值必须具有唯一性</li><li>推荐使用 id 作为 key（唯一），不推荐使用 index 作为 key（会变化，不对应)</li></ol><h3 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model"><span>v-model</span></a></h3><p>作用：给表单元素使用，双向数据绑定→可以快速获取或设置表单元素内容</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; v-model=&quot;user&quot; placeholder=&quot;请输入用户名&quot;&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;password&quot; v-model=&quot;pwd&quot; placeholder=&quot;请输入密码&quot;&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;login&quot;&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;register&quot;&gt;重置&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- vue --&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    new Vue({</span></span>
<span class="line"><span>      el: &#39;.app&#39;,</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        user: &quot;&quot;,</span></span>
<span class="line"><span>        pwd: &quot;&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      methods: {</span></span>
<span class="line"><span>        login() {</span></span>
<span class="line"><span>          console.log(this.user, this.pwd)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        register() {</span></span>
<span class="line"><span>          this.user = &quot;&quot;</span></span>
<span class="line"><span>          this.pwd = &quot;&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>常见的表单元素都可以用v-model绑定关联→快速获取或设置表单元素的值 它会根据控件类型自动选取正确的方法来更新元素</p><h2 id="指令修饰符" tabindex="-1"><a class="header-anchor" href="#指令修饰符"><span>指令修饰符</span></a></h2><p>通过<code>.</code>指明一些指令后缀，，不同 后缀封装了不同的处理操作用于简化代码</p><ol><li><p>按键修饰符 <code>@keyup</code>用于监听按键弹起事件 , <code>@keyup.enter</code>监听键盘回车</p></li><li><p>v-model修饰符 <code>v-model.trim</code>去除首尾空格 <code>v-model.number</code>转数字</p></li><li><p>事件修饰符 <code>@事件名.stop</code>阻止冒泡 <code>@事件名.prevent</code> 阻止默认行为</p></li></ol>`,69)]))}const c=n(l,[["render",p]]),v=JSON.parse('{"path":"/front/vue/1/","title":"1 vue","lang":"zh-CN","frontmatter":{"title":"1 vue","createTime":"2025/05/04 17:20:02","permalink":"/front/vue/1/"},"readingTime":{"minutes":5.77,"words":1730},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/前端/vue/1 vue.md","headers":[]}');export{c as comp,v as data};
