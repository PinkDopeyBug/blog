import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>Appscope&gt;app.json5：应用的全局配置信息。 entry：HarmonyOS工程模块，编译构建生成一个HAP包。 src&gt;main&gt;ets：用于存放ArkTS源码。 src&gt;main&gt;ets&gt;entryability：应用/服务的入口。 src&gt;main&gt;ets&gt;pages：应用/服务包含的页面。 src&gt;main&gt;resources：用于存放应用/服务所用到的资源文件。 src&gt;main&gt;module.json5：模块应用配置文件。 build-profile.json5：当前的模块信息、编译信息配置项，包括buildOption、targets配置等。 hvigorfile.ts：模块级编译构建任务脚本，开发者可以自定义相关任务和代码实现。 obfuscation-rules.txt：混淆规则文件。。 oh_modules：用于存放三方库依赖信息。 build-profile.json5：应用级配置信息，包括签名signingConfigs、产品配置products等。。 hvigorfile.ts：应用级编译构建任务脚本。</p><h1 id="布局" tabindex="-1"><a class="header-anchor" href="#布局"><span>布局</span></a></h1><h2 id="flex弹性布局" tabindex="-1"><a class="header-anchor" href="#flex弹性布局"><span>flex弹性布局</span></a></h2><p>Row和Column等线性布局使用和flex类似本质上都是使用的flex布局 但线性布局做了性能优化</p><h2 id="stack层叠布局" tabindex="-1"><a class="header-anchor" href="#stack层叠布局"><span>stack层叠布局</span></a></h2><p>在层叠布局中的元素会按照从先往后的顺序包裹后面的元素，对于层叠的位置可以单独设置 可以使用zIndex调节元素显示层级</p><h1 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理"><span>状态管理</span></a></h1><p>对于普通声明的变量只会在初始化时渲染，后续不会刷新 要进行管理需要使用<mark>状态变量</mark></p><h2 id="状态变量" tabindex="-1"><a class="header-anchor" href="#状态变量"><span>状态变量</span></a></h2><p>状态变量需要装饰器<code>@State</code>修饰来声明 状态变量的更改会引起ui的渲染刷新</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@State</span></span>
<span class="line"><span>myMsg:string=&#39;hello&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义在组件内的普通变量 或 状态变量，都需要 通过 this 访问</strong></p><h1 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句"><span>条件语句</span></a></h1><h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of"><span>for of</span></a></h2><p>基于范围的for循环</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>for(let item of arr)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach"><span>ForEach</span></a></h2><p>可以基于数组的个数，渲染组件的个数。 相当于vue中的v-for</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ForEach(arr,(item,index)=&gt;{})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="样式-结构重用" tabindex="-1"><a class="header-anchor" href="#样式-结构重用"><span>样式，结构重用</span></a></h1><p><code>@Extend</code>：扩展组件（样式、事件） <code>@Styles</code>:抽取通用属性、事件 <code>@Builder</code>：自定义构建函数（（结构、样式、事件）</p><h2 id="extend" tabindex="-1"><a class="header-anchor" href="#extend"><span>Extend</span></a></h2><ul><li>Extend参数表示要扩展的组件 当定义好扩展函数后就可以在该组件中调用这个函数了，</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Extend(Text)</span></span>
<span class="line"><span>function textExtend(color:ResourceColor){</span></span>
<span class="line"><span>	.backgroundColor(color)</span></span>
<span class="line"><span>	.fontsize(30)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Text(&#39;1&#39;){</span></span>
<span class="line"><span>	.textExtend(Color.Red)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>Style</span></a></h2><p>Style抽取的是通用属性和事件，无需传参，任何组件都可以使用style装饰的函数 在组件内定义的任何变量和函数都可以省略变量/函数声明关键字，定义的变量或函数只能在该组件内部使用</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//1.全局定义</span></span>
<span class="line"><span>@Styles</span></span>
<span class="line"><span>function commonStyles() {</span></span>
<span class="line"><span>	.width(100)</span></span>
<span class="line"><span>	.height(100)</span></span>
<span class="line"><span>	.onclick(()=&gt;{})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct FancyDemo </span></span>
<span class="line"><span>	//2.在组件内定义</span></span>
<span class="line"><span>	@Styles setBg(){</span></span>
<span class="line"><span>		.backgroundColor(Color.Red)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	builder(){</span></span>
<span class="line"><span>		Text()</span></span>
<span class="line"><span>			.commonstyles()</span></span>
<span class="line"><span>			.setBg()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="builder" tabindex="-1"><a class="header-anchor" href="#builder"><span>Builder</span></a></h2><p>在Builder装饰的函数中可以定义组件</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//全局Builder</span></span>
<span class="line"><span>@Builder</span></span>
<span class="line"><span>function navItem(icon: Resource5tr,text: string)</span></span>
<span class="line"><span>	Column({ space:10 }){</span></span>
<span class="line"><span>		Image(icon)</span></span>
<span class="line"><span>			.width(&#39;80%&#39;);</span></span>
<span class="line"><span>		Text(text);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	.width(&#39;25%)</span></span>
<span class="line"><span>	.onclick(()=&gt;{</span></span>
<span class="line"><span>		AlertDialog.show({</span></span>
<span class="line"><span>			message:&#39;点了&#39;+text</span></span>
<span class="line"><span>		})</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Row(){</span></span>
<span class="line"><span>	navItem($r(&#39;app.media.ic_reuse_01&#39;),&#39;阿里拍卖&#39;)</span></span>
<span class="line"><span>	navItem($r(&#39;app.media.ic_reuse_02&#39;),&#39;菜鸟&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="容器" tabindex="-1"><a class="header-anchor" href="#容器"><span>容器</span></a></h1><h2 id="scroll滚动容器" tabindex="-1"><a class="header-anchor" href="#scroll滚动容器"><span>scroll滚动容器</span></a></h2><p>scroll中只能有一个子组件，要显示的内容需要放到这个子组件中，子组件设置高度后就无法滚动了</p><h3 id="常见属性" tabindex="-1"><a class="header-anchor" href="#常见属性"><span>常见属性</span></a></h3><table><thead><tr><th>名称</th><th>参数类型</th><th>描述</th></tr></thead><tbody><tr><td>scrollable</td><td>ScrollDirection</td><td>设置滚动方向。<br>ScrollDirection.Vertical 纵向<br>ScrollDirection.Horizontal 横向</td></tr><tr><td>scrollBar</td><td>BarState</td><td>设置滚动条状态。</td></tr><tr><td>scrollBarColor</td><td>string | number 丨 Color</td><td>设置滚动条的颜色。</td></tr><tr><td>scrollBarWidth</td><td>string | number</td><td>设置滚动条的宽度</td></tr><tr><td>edgeEffect</td><td>value:Edge</td><td>设置边缘滑动效果。<br>EdgeEffect.None 无<br>EffectEdgeEffect.Spring 弹簧<br>EdgeEffect.Fade阴影</td></tr></tbody></table><h2 id="绑定容器" tabindex="-1"><a class="header-anchor" href="#绑定容器"><span>绑定容器</span></a></h2><p>以Scroll容器为例 绑定好容器后就可以在组件内使用组件名操控容器了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>struct FancyDemo </span></span>
<span class="line"><span>	scroller:Scroller=new Scroller()	</span></span>
<span class="line"><span>	Scroll(scroller){}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>Tabs</span></a></h2><p>Tab栏组件，其中的组件元素为TabContent组件 TabContent组件内部只允许有一个组件</p><h3 id="常见属性-1" tabindex="-1"><a class="header-anchor" href="#常见属性-1"><span>常见属性</span></a></h3><ul><li><p>barPosition：调整位置开头或结尾（参数）</p></li><li><p>vertical：调整导航水平或垂直</p></li><li><p>scrollable：调整是否手势滑动切换</p></li><li><p>animationDuration：点击滑动动画时间</p></li><li><p>BarMode：设置TabContent组件溢出屏幕时的模式</p></li><li><p>onChange(event: (index: number) =&gt; void) Tab页签切换后触发的事件。 -index：当前显示的index索引，索引从0开始计算。 滑动切换、点击切换 均会触发</p></li><li><p>onTabBarClick(event: (index: number) =&gt; void)10+ Tab页签点击后触发的事件。 -index：被点击的index索引，索引从0开始计算。</p></li></ul><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h1><p>创建类需要使用class关键字 类的成员属性要有初始值，如果不设置初始值需要使用?:符号表示属性可选</p><p>在类中定义属性和函数不需要关键字声明</p><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>constructor(参数...){}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="静态函数和属性" tabindex="-1"><a class="header-anchor" href="#静态函数和属性"><span>静态函数和属性</span></a></h3><p>静态属性和函数声明在前面加上static关键字</p><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3><p>继承使用extends关键字 在子类中可以使用super关键字来获取父类</p><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof"><span>instanceof</span></a></h3><p>instanceof运算符可以用来检测某个对象是否是某个类的实例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>实例对象 instanceof 类名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="权限修饰符" tabindex="-1"><a class="header-anchor" href="#权限修饰符"><span>权限修饰符</span></a></h3><p>类的方法和属性可以通过修饰符来 限制访问 修饰符包括：readonly、private、protected 和 public。省略不写默认为 public readonly只可以取值，无法修改 其他权限修饰符的作用和c++一样</p><h3 id="剩余参数和展开运算符" tabindex="-1"><a class="header-anchor" href="#剩余参数和展开运算符"><span>剩余参数和展开运算符</span></a></h3><p>和js/ts不同，ets的展开运算符无法展开对象，只能用于展开数组</p><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2><p>接口使用interface关键字声明，接口也是可以继承接口的</p><h1 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件"><span>自定义组件</span></a></h1><p>使用<code>@Component</code>注解的struct即自定义组件</p><p><code>@Entry</code>注解是<mark>页面的入口</mark>，一个页面只有一个entry</p><h3 id="preview" tabindex="-1"><a class="header-anchor" href="#preview"><span>@Preview</span></a></h3><p>预览器只能预览<code>@Entry</code>注解的页面，在自定义页面中加上<code>@Preview</code>注解可以预览当前自定义组件</p><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h3><p>利用 @BuilderParam 构建函数，可以让自定义组件允许外部传递 UI。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>struct SonCom {</span></span>
<span class="line"><span>	// 1.定义 BuilderParam 接受外部传入的 ui，并设置默认值</span></span>
<span class="line"><span>	@BuilderParam ContentBuilder:()=&gt; void = this.defaultBuilder</span></span>
<span class="line"><span>	//默认的Builder</span></span>
<span class="line"><span>	@Builder</span></span>
<span class="line"><span>	defaultBuilder(){</span></span>
<span class="line"><span>		Text(&quot;默认的内容&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	build(){</span></span>
<span class="line"><span>		Column(){</span></span>
<span class="line"><span>			// 2。使用 @BuilderParam 装饰的成员变量</span></span>
<span class="line"><span>			this.ContentBuilder()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct Index{</span></span>
<span class="line"><span>	build(){</span></span>
<span class="line"><span>		Column({ space: 15 }){</span></span>
<span class="line"><span>			SonCom(){</span></span>
<span class="line"><span>				//直接传递进来（尾随闭包）</span></span>
<span class="line"><span>				Button(‘待付款&quot;)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽"><span>具名插槽</span></a></h4><p>如果一个组件中有多个插槽，那么就无法使用默认的传递ui的方法了 在插入ui时需要使用插槽名指定接收哪个ui</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>SonCom({</span></span>
<span class="line"><span>	tBuilder: this.fTBuilder,</span></span>
<span class="line"><span>	cBuilder:this.fCBuilder</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="状态管理-1" tabindex="-1"><a class="header-anchor" href="#状态管理-1"><span>状态管理</span></a></h1><p>使用<code>@State</code>装饰的状态变量也有不足之处 当变量是简单类型时<code>@State</code>可以监听到状态的更新 但当变量是复杂数据类型时，变量更改时能监测到更新，变量内部成员变量更改时也能检测到更新，但如果变量内部也嵌套复杂数据类型，那么变量内的复杂数据内部的成员数据变化时无法监测到更新</p><h2 id="prop父子单向同步" tabindex="-1"><a class="header-anchor" href="#prop父子单向同步"><span>@Prop父子单向同步</span></a></h2><p>@Prop装饰的变量可以和父组件建立单向的同步关系。 @Prop装饰的变量是可变的，但是变化不会同步回其父组件</p><p>要想子组件内接收到父组件中的信息能够监听状态变化需要在子组件中对该数据使用<code>@Prop</code>装饰器装饰</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>struct SonCom{</span></span>
<span class="line"><span>  @Prop sCar:string=&#39;&#39;</span></span>
<span class="line"><span>  build(){</span></span>
<span class="line"><span>    Column(){</span></span>
<span class="line"><span>      Text(\`子组件\${this.sCar}\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct Index {</span></span>
<span class="line"><span>  @State fCar:string=&#39;RollsRoyce&#39;</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column(){</span></span>
<span class="line"><span>      Text(\`父组件\${this.fCar}\`)</span></span>
<span class="line"><span>        .fontSize(30)</span></span>
<span class="line"><span>        .onClick(()=&gt;{</span></span>
<span class="line"><span>          this.fCar=&#39;MayBach&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .backgroundColor(Color.Blue)</span></span>
<span class="line"><span>      SonCom({</span></span>
<span class="line"><span>        sCar:this.fCar</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>        .backgroundColor(Color.Pink)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .backgroundColor(Color.Orange)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>但子组件中数据更改无法传递到父组件中 可以在父组件中定义修改数据的函数，由子组件调用来修改</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>struct SonCom{</span></span>
<span class="line"><span>  @Prop sCar:string=&#39;&#39;</span></span>
<span class="line"><span>  change=()=&gt;{}</span></span>
<span class="line"><span>  build(){</span></span>
<span class="line"><span>    Column(){</span></span>
<span class="line"><span>      Text(\`子组件\${this.sCar}\`)</span></span>
<span class="line"><span>        .onClick(()=&gt;{</span></span>
<span class="line"><span>          this.change()</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct Index {</span></span>
<span class="line"><span>  @State fCar:string=&#39;RollsRoyce&#39;</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Column(){</span></span>
<span class="line"><span>      Text(\`父组件\${this.fCar}\`)</span></span>
<span class="line"><span>        .fontSize(30)</span></span>
<span class="line"><span>        .backgroundColor(Color.Blue)</span></span>
<span class="line"><span>      SonCom({</span></span>
<span class="line"><span>        sCar:this.fCar,</span></span>
<span class="line"><span>        change:()=&gt;{</span></span>
<span class="line"><span>          this.fCar=&#39;MayBach&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>        .backgroundColor(Color.Pink)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .backgroundColor(Color.Orange)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>本质上还是修改父组件的数据由<code>@Prop</code>将修改的数据传递给子组件 且传递函数时必须使用箭头函数，因为箭头函数中不会更改this的指向，这是js中的遗留问题</p><h2 id="link双向同步" tabindex="-1"><a class="header-anchor" href="#link双向同步"><span>@Link双向同步</span></a></h2><p>使用<code>@Link</code>双向同步那么子组件接收到的父组件中的数据就是引用传递，在父子任何一方修改数据都会进行同步 且多层嵌套的复杂数据结构里面数据的修改也能被监测到</p><h2 id="provide和-consume" tabindex="-1"><a class="header-anchor" href="#provide和-consume"><span>@Provide和@Consume</span></a></h2><p><code>@Prop</code>和 <code>@Link</code>只能用作父子间数据的传递，如果由多层子孙结构层层传递就会很麻烦</p><p><code>@Provide</code>和 <code>@Consume</code>是用于多层级组件中数据的传递，在使用时传递数据的组件使用<code>@Provide</code>声明数据，接受数据的一方使用<code>@Consume</code>声明数据，且声明数据的变量名必须一致，声明好后二者就进行绑定了，这种绑定是双向的，在任何一方修改都会进行同步 同样的也适用于复杂数据类型</p><h2 id="observed-objectlink嵌套对象数组属性变化" tabindex="-1"><a class="header-anchor" href="#observed-objectlink嵌套对象数组属性变化"><span>@observed&amp;@objectLink嵌套对象数组属性变化</span></a></h2><p>装饰器仅能观察到第一层的变化。对于多层嵌套的情况，比如对象数组等。他们的第二层的属性变化是无法观察到的。这就引l出了@Observed/@ObjectLink装饰器。</p><p>@observed和@objectLink用于在涉及嵌套对象或数组的场景中进行双向数据同步 <mark>ObjectLink修饰符不能用在Entry修饰的组件中</mark></p><h1 id="页面路由" tabindex="-1"><a class="header-anchor" href="#页面路由"><span>页面路由</span></a></h1><h2 id="页面创建" tabindex="-1"><a class="header-anchor" href="#页面创建"><span>页面创建</span></a></h2><p>直接在pages文件夹中创建ets文件即可，然后将文件名注册到main_pages.json的src选项中可以配置主要的页面</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h2><p>路由跳转使用router对象，pushUrl是保存历史记录跳转，replaceUrl是无痕跳转</p><h2 id="页面栈" tabindex="-1"><a class="header-anchor" href="#页面栈"><span>页面栈</span></a></h2><p>栈结构 页面栈最多存储35个页面</p><p>获取页面栈长度 router.getLength() 清空页面栈 router.clear()</p><h3 id="路由模式" tabindex="-1"><a class="header-anchor" href="#路由模式"><span>路由模式</span></a></h3><p>路由提供了两种不同的跳转模式</p><ol><li>Standard：无论之前是否添加过，一直添加到页面栈【默认常用】</li><li>Single：如果目标页面已存在，会将该页面移到栈顶【看情况使用】</li></ol><p>在第二个参数设置【路由模式】 router.pushurl(options，mode)</p><h2 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参"><span>路由传参</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>router.pushurl({</span></span>
<span class="line"><span>	url:&#39;地址&#39;,</span></span>
<span class="line"><span>	params:{</span></span>
<span class="line"><span>		//以对象的形式传递参数</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//---页面B接收并解析参数-</span></span>
<span class="line"><span>aboutToAppear():void{</span></span>
<span class="line"><span>	// 1.确认内容</span></span>
<span class="line"><span>	console.log(JsoN.stringify(router.getParams()))</span></span>
<span class="line"><span>	// 2.通过as类型断言 转为具体的类型</span></span>
<span class="line"><span>	const params = router.getParams(） as 类型</span></span>
<span class="line"><span>	// 3.通过点语法即可取值</span></span>
<span class="line"><span>	params.xxx</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h1><p>组件和页面在创建、显示、销毁的这一整个过程中，会自动执行一系列的【生命周期钩子】 区分页面和组件：@Entry @Entry装饰的是页面性质的组件，页面的生命周期钩子也会更多</p><ol><li>aboutToAppear：创建组件实例后执行，可以修改状态变量</li><li>aboutToDisappear：组件实例销毁前执行，不允许修改状态变量 以下仅@Entry修饰的页面组件生效</li><li>onPageShow：页面每次显示触发（路由过程、应用进入前后台）</li><li>onPageHide：页面每次隐藏触发（路由过程、应用进入前后台）</li><li>onBackPress：点击返回触发（returntrue阻止返回键默认返回效果）</li></ol><h1 id="stage模型" tabindex="-1"><a class="header-anchor" href="#stage模型"><span>Stage模型</span></a></h1><h2 id="uiability组件" tabindex="-1"><a class="header-anchor" href="#uiability组件"><span>UIAbility组件</span></a></h2><p>每一个UIAbility实例，都对应于一个最近任务列表中的任务。 UIAbility是一种包含用户界面的应用组件，主要用于和用户进行交互。</p><p>一个应用可以有一个UIAbility也可以有多个UIAbility</p><ul><li>单UIAbility：任务列表只有一个任务。</li><li>多UlAbility：在任务列表中会有多个任务</li></ul><p>一个ability是一个单独的进程 一个应用中有多个模块，一个模块中有多个ability，一个ability中有多个页面</p><h3 id="ability生命周期" tabindex="-1"><a class="header-anchor" href="#ability生命周期"><span>ability生命周期</span></a></h3><ul><li>onCreate：Ability创建时回调，执行初始化业务逻辑操作。</li><li>onDestory:Ability销毁时回调，执行资源清理等操作。</li><li>onForeground：当应用从后台转到前台时触发。</li><li>onBackground：当应用从前台转到后台时触发</li></ul>`,113)]))}const c=n(l,[["render",p]]),t=JSON.parse('{"path":"/front/ts/4/","title":"4 Arkts","lang":"zh-CN","frontmatter":{"title":"4 Arkts","createTime":"2025/04/13 19:23:06","permalink":"/front/ts/4/"},"readingTime":{"minutes":9.87,"words":2961},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/前端/TypeScript/4 Arkts.md","headers":[]}');export{c as comp,t as data};
