import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>使用react语法的script标签type字段需要是<code>text/babel</code>，react依赖于babel将jsx语法编译为js语法</p><h1 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式"><span>严格模式</span></a></h1><p>严格模式只在开发模式下生效，生产上线时会去除，作用简要概括有两方面的作 用</p><ol><li>检测一些危险的操作(比如使用已经废弃api和不推荐的api)</li><li>会把一些生命周期执行两次，来检测额外副作用（比如render)</li></ol><h2 id="渲染元素" tabindex="-1"><a class="header-anchor" href="#渲染元素"><span>渲染元素</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const vdom= &lt;div&gt;hello react&lt;/div&gt; //创建虚拟节点</span></span>
<span class="line"><span>ReactDOM.render(vdom,选择器) //使用原生api查询到的选择器为挂载点，将虚拟dom渲染为真实dom挂载到挂载点上</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="语法规则" tabindex="-1"><a class="header-anchor" href="#语法规则"><span>语法规则</span></a></h1><ol><li>定义虚拟DOM时，不要写引号。</li><li>标签中混入JS表达式时要用大括号</li><li>样式的类名指定不要用class，要用className。</li><li>内联样式要用<code>style={{key1:val1,key2:val2}}</code></li><li>虚拟dom只能有一个根标签</li><li>事件绑定只需要<code>on+事件名={函数名}</code>，如果函数需要传参需要使用匿名函数包裹</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const myData=&#39;hello&#39;</span></span>
<span class="line"><span>function handleClick(n:number){</span></span>
<span class="line"><span>	console.log(\`被点击:\${n}\`)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const vdom=(</span></span>
<span class="line"><span>	&lt;div className=&#39;active&#39; id={myData}&gt;</span></span>
<span class="line"><span>		&lt;h2 </span></span>
<span class="line"><span>		style={{color:&#39;white&#39;,fontSize:&#39;20px&#39;}} </span></span>
<span class="line"><span>		onClick={()=&gt;{handleClick(&#39;1)}}&gt;</span></span>
<span class="line"><span>			{myData}</span></span>
<span class="line"><span>		&lt;/h2&gt;</span></span>
<span class="line"><span>	&lt;/div&gt;</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>通过onXxx属性指定事件处理函数（注意大小写） React使用的是自定义（合成）事件，而不是使用的原生DoM事件为了更好的兼容性 React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）为了的高效</li><li>通过event.target得到发生事件的DoM元素对象不要过度使用ref</li></ol><p><strong>卸载组件</strong> 卸载查询到节点上的组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ReactDOM.unmountComponentAtNode(选择器)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="空标签" tabindex="-1"><a class="header-anchor" href="#空标签"><span>空标签</span></a></h2><p>react中组件只能有一个根标签，这个标签在编译时也是会正常编译成一个标签的，在vue中有template标签在编译时会被去除，在react中可以使用空标签实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function App(){</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		&lt;&gt;</span></span>
<span class="line"><span>			&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>			&lt;span&gt;&lt;/span&gt;</span></span>
<span class="line"><span>		&lt;/&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h1><p>组件的命名必须是首字母大写，如果是小写babel会解析成html默认标签</p><p>使用自定义组件包裹内容时，该内容会被当做标签体传入给props属性，在props属性中的名为children</p><p><strong>函数式组件和类式组件的区别</strong></p><ol><li>函数组件没有生命周期</li><li>函数组件没有this</li><li>函数组件通过hook来完成各种操作</li><li>函数组件本身的函数体相当于render函数</li><li>props在函数的第一个参数接受</li></ol><h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件"><span>函数式组件</span></a></h2><p>适用于简单组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function MyCom(){</span></span>
<span class="line"><span>	return &lt;h2&gt;函数式组件&lt;/h2&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ReactDOM.render(&lt;MyCom/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过程：</p><ol><li>React解析组件标签，找到了MyCom组件。</li><li>发现组件是使用函数定义的，随后调用该函数</li></ol><h2 id="类式组件" tabindex="-1"><a class="header-anchor" href="#类式组件"><span>类式组件</span></a></h2><p>适用于复杂组件</p><p>复杂组件就是有状态的 类式组件有一个类，这个类上有一个state属性要将数据放在状态中</p><p>必须继承<code>React.Component</code>类 其中有一个render函数，这个函数的返回值用于返回虚拟dom</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class MyCom extends React.Component{</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		//render是放在哪里的？一MyComponent的原型对象上，供实例使用。</span></span>
<span class="line"><span>		return &lt;h2&gt;类式组件&lt;/h2&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ReactDOM.render(&lt;MyCom/&gt;,document.getElementById(&#39;root&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过程：</p><ol><li>React解析组l件标签，找到了MyComponent组件</li><li>发现组件是使用类定义的，后new出来该类的实例，并通过该实例调用到原型上的render方法</li><li>将render返回的虚拟DoM转为真实DoM，随后呈现在页面中</li></ol><p>类中的函数默认开启了严格模式，所以类中的函数的this指向都是undefined，想要通过类的私有函数修改类的状态无法实现 可以在构造函数中调用bind函数给类的私有函数绑定上this并重新得到绑定好的函数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	constructor(props){</span></span>
<span class="line"><span>		super(props)</span></span>
<span class="line"><span>		//初始化状态</span></span>
<span class="line"><span>		this.state ={isHot:false}</span></span>
<span class="line"><span>		this.changeWeather = this.changeWeather.bind(this)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		//读取状态</span></span>
<span class="line"><span>		const {isHot}= this.state</span></span>
<span class="line"><span>		return &lt;h1 onClick={this.changeWeather}&gt;今天天气很{isHot？‘炎热’：‘凉爽&#39;}&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	changeWeather(){</span></span>
<span class="line"><span>		//changeWeather放在哪里？Weather的原型对象上，供实例使用</span></span>
<span class="line"><span>		//由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用</span></span>
<span class="line"><span>		//类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined</span></span>
<span class="line"><span>		this.setState({this.state.isHot=!this.state.isHot})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//2.渲染组件到页面</span></span>
<span class="line"><span>ReactDoM.render(&lt;Weather/&gt;,document.getElementById(&#39;test&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>如果直接修改类中的状态，状态不是响应式的，需要使用setState设置可以实现数据的响应式更改 使用setState修改数据之后react还会再调用一次组件的render函数重新渲染</p><h4 id="简写形式" tabindex="-1"><a class="header-anchor" href="#简写形式"><span>简写形式</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	state ={isHot:false}</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		const {isHot}= this.state</span></span>
<span class="line"><span>		return &lt;h1 onClick={this.changeWeather}&gt;今天天气很{isHot？‘炎热’：‘凉爽&#39;}&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	changeWeather=()=&gt;{</span></span>
<span class="line"><span>		this.setState({this.state.isHot=!this.state.isHot})</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ReactDoM.render(&lt;Weather/&gt;,document.getElementById(&#39;test&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="组件之间传值" tabindex="-1"><a class="header-anchor" href="#组件之间传值"><span>组件之间传值</span></a></h1><p>在react中组件间通信只有父子间的props传值 如果有其他的需求可以使用pubsub库的消息订阅和发布</p><h2 id="父传子props" tabindex="-1"><a class="header-anchor" href="#父传子props"><span>父传子props</span></a></h2><p>每个组件上有一个props属性，默认是空的，当传值给子组件时，react会收集传入的值放在子组件的props中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person extends React.Component{</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		console.log(this);</span></span>
<span class="line"><span>		const {name,age,sex}=this.props</span></span>
<span class="line"><span>		return (</span></span>
<span class="line"><span>			&lt;ul&gt;</span></span>
<span class="line"><span>				&lt;li&gt;姓名：{name}&lt;/li&gt;</span></span>
<span class="line"><span>				&lt;1i&gt;性别：{sex}&lt;/1i&gt;</span></span>
<span class="line"><span>				&lt;1i&gt;年龄：{age}&lt;/1i&gt;</span></span>
<span class="line"><span>			&lt;/ul&gt;</span></span>
<span class="line"><span>		)</span></span>
<span class="line"><span>//演染组件到页面</span></span>
<span class="line"><span>ReactDoM.render(&lt;Person name=&quot;jerry&quot;age=&quot;19&quot;sex=&quot;nan&quot;/&gt;,document.getElementById(&#39;test1&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="限定props" tabindex="-1"><a class="header-anchor" href="#限定props"><span>限定props</span></a></h4><p>可以限定props的类型以及是否必填</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person.propTypes={</span></span>
<span class="line"><span>	name:PropTypes.string.isRequired  //字符串类型，且必传</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PropTypes需要额外导入 还可以给props设定默认值，使用defaultProps属性 但props是只读的，不可以修改</p><h3 id="children" tabindex="-1"><a class="header-anchor" href="#children"><span>children</span></a></h3><p>children是使用标签包裹是被包裹的内容 也是父传子的一种</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;MyCom&gt;&lt;div&gt;this is a component&lt;/div&gt;&lt;MyCom&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在子元素的props中的children属性中</p><h2 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父"><span>子传父</span></a></h2><p>子传父通过事件绑定的方法实现</p><ol><li>在子组件中定义事件</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function Son({onGetSonMsg}){</span></span>
<span class="line"><span>	return(</span></span>
<span class="line"><span>		&lt;div onClick={()=&gt;{onGetSonMsg(&#39;hello&#39;)}}&gt;&lt;/div&gt;</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Father(){</span></span>
<span class="line"><span>	return(</span></span>
<span class="line"><span>		&lt;Son onGetSonMsg={(msg)=&gt;{console.log(msg)}}&gt;&lt;/Son&gt;</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兄弟组件之间通信" tabindex="-1"><a class="header-anchor" href="#兄弟组件之间通信"><span>兄弟组件之间通信</span></a></h2><p>兄弟组件之间通信可以先子传父将子组件的数据传递给父组件，再通过父传子再将数据传递给它的兄弟组件</p><h2 id="组件的跨层级通信" tabindex="-1"><a class="header-anchor" href="#组件的跨层级通信"><span>组件的跨层级通信</span></a></h2><ol><li>使用createContext函数创建一个上下文对象</li><li>再顶层组件中通过Provider组件提供数据</li><li>再底层组件中同挂useContext钩子函数获取消费数据</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const MsgContext=createContext()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App (){</span></span>
<span class="line"><span>	return(</span></span>
<span class="line"><span>		&lt;div&gt;</span></span>
<span class="line"><span>			&lt;MsgContext.Provider value={&#39;hello&#39;}&gt;</span></span>
<span class="line"><span>				&lt;A /&gt;</span></span>
<span class="line"><span>			&lt;/MsgContext.Provider&gt;</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function A (){</span></span>
<span class="line"><span>	return (</span></span>
<span class="line"><span>		&lt;div&gt;</span></span>
<span class="line"><span>			&lt;B/&gt;</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function B (){</span></span>
<span class="line"><span>	const msg=useContext(MsgContext)</span></span>
<span class="line"><span>	return (</span></span>
<span class="line"><span>		&lt;div&gt;</span></span>
<span class="line"><span>		{msg}</span></span>
<span class="line"><span>		&lt;/div&gt;</span></span>
<span class="line"><span>	)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span>ref</span></a></h2><h3 id="字符串形式" tabindex="-1"><a class="header-anchor" href="#字符串形式"><span>字符串形式</span></a></h3><p>使用ref标记组件内的虚拟节点，使用this.refs获取到虚拟节点转换成的真实dom</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		return &lt;h1 ref=&#39;btn&#39; onClick={this.show}&gt;Click&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	show=()=&gt;{</span></span>
<span class="line"><span>		console.log(this.refs.btn)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但字符串形式的性能比较差，后续也有可能弃用</p><h3 id="回调函数形式的ref" tabindex="-1"><a class="header-anchor" href="#回调函数形式的ref"><span>回调函数形式的ref</span></a></h3><p>在节点的ref上传入一个回调函数，回调函数的参数就是当前节点的对象，可以将这个节点对象挂载到当前类上来使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		return &lt;h1 ref={(curNode)=&gt;{this.btn=curNode}} onClick={this.show}&gt;Click&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	show=()=&gt;{</span></span>
<span class="line"><span>		console.log(this.btn)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这种内联形式的回调在频繁切换时会多次调用，可以将函数挂载到类上再绑定ref</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	saveInput=(curNode)=&gt;{</span></span>
<span class="line"><span>		this.btn=curNode</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		return &lt;h1 ref={saveInput} onClick={this.show}&gt;Click&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	show=()=&gt;{</span></span>
<span class="line"><span>		console.log(this.btn)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样不是内联形式的回调函数可以避免这种问题，react在切换时会查看类上面是否有这个属性，如果有就不会再调用了 不管内联属性的性能消耗也不大</p><h3 id="createref" tabindex="-1"><a class="header-anchor" href="#createref"><span>createRef</span></a></h3><p>在类的构造时调用createRef会返回一个容器，将这个容器保存在自己定义的一个属性上，在虚拟dom的ref上绑定这个容器，当虚拟dom转换为真实dom时会自动将当前真实dom的节点存储到这个容器中 但这个容器只能存储一个ref，后续绑定的ref会覆盖前面的ref，如果有多个ref需要创建多个容器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	myRef=createRef()</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		return &lt;h1 ref={this.myRef} onClick={this.show}&gt;Click&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	show=()=&gt;{</span></span>
<span class="line"><span>		console.log(this.btn)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件"><span>受控组件</span></a></h1><p>react中并没有实现vue中的数据绑定，要想实现数据的绑定只能使用事件</p><h1 id="事件回调函数接收多个参数" tabindex="-1"><a class="header-anchor" href="#事件回调函数接收多个参数"><span>事件回调函数接收多个参数</span></a></h1><p>事件函数默认传入一个值是event，但有其他参数也要传递的情况</p><h2 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化"><span>函数柯里化</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	myRef=createRef()</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		return &lt;h1 onClick={handleClick(1)}&gt;Click&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	handleClick=(n)=&gt;{</span></span>
<span class="line"><span>		return (event)=&gt;{</span></span>
<span class="line"><span>			console.log(n,event)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不使用函数柯里化的方式" tabindex="-1"><a class="header-anchor" href="#不使用函数柯里化的方式"><span>不使用函数柯里化的方式</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Weather extends React.Component{</span></span>
<span class="line"><span>	myRef=createRef()</span></span>
<span class="line"><span>	render(){</span></span>
<span class="line"><span>		return &lt;h1 onClick={(event)=&gt;handleClick(1,event)}&gt;Click&lt;/h1&gt;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	handleClick=(n,event)=&gt;{</span></span>
<span class="line"><span>		console.log(n,event)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h1><p>旧的 ![[Pasted image 20250529142144.png]] forceUpdate强制更新</p><p>新的 ![[Pasted image 20250601172804.png]]</p><table><thead><tr><th>旧函数</th><th>新函数</th><th>作用</th></tr></thead><tbody><tr><td>constructor</td><td>constructor</td><td>构造函数也是创建前的钩子，可以接收props的参数，如果设置这个生命周期必须在里面的头部调用super()，如果接收有props需要调用super(props)</td></tr><tr><td>componentWillReceiveProps</td><td>getDerivedStateFromProps</td><td>将要从父组件中获取props数据。在新的生命周期中可以获取props参数，返回state数据，如果有返回的state会覆盖掉当前组件中的state。主要用于一个罕见东用例，即state的值取决于props</td></tr><tr><td>shouldComponentUpdate</td><td>shouldComponentUpdate</td><td>setState函数调用后调用的，有一个返回值如果返回false不允许更新，如果为true运行更新，默认为true</td></tr><tr><td>componentWillMount</td><td>-</td><td>组件将要挂载</td></tr><tr><td>componentWillUpdate</td><td>getSnapsHotBeforeUpdate</td><td>组件将要更新，返回值是传递给componentDidUpdate的参数</td></tr><tr><td>render</td><td>render</td><td>组件更新</td></tr><tr><td>componentDidMount</td><td>componentDidMount</td><td>组件挂载完毕</td></tr><tr><td>componentDidUpdate</td><td>componentDidUpdate</td><td>组件更新完毕，有两个参数第一个参数时更新前的props，第二个参数时更新前的state，第三个参数是getSnapsHotBeforeUpdate的返回值，通常用于打开新页面时记录当前页面的视口位置</td></tr><tr><td>componentWillUnmount</td><td>componentWillUnmount</td><td>组件将要卸载</td></tr></tbody></table><h1 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h1><p>在react中没有样式隔离，即在特定文件中引入样式打包时也依旧会打包到一起共同生效</p><p>要在react中实现样式隔离需要借用到css模块化 在写样式文件时命名为：<code>文件名+.modules.css</code>这样css在编译时会进行模块化，没有引入这个样式的文件将不会生效</p>`,88)]))}const r=n(l,[["render",t]]),c=JSON.parse('{"path":"/front/react/1/","title":"1 概述","lang":"zh-CN","frontmatter":{"title":"1 概述","createTime":"2025/06/01 17:48:20","permalink":"/front/react/1/"},"readingTime":{"minutes":8.66,"words":2598},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/前端/React/1 概述.md","headers":[]}');export{r as comp,c as data};
