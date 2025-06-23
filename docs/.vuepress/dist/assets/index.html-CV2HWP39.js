import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>default argument写在.h文件里不能写在.cpp文件中</p><h1 id="内联函数" tabindex="-1"><a class="header-anchor" href="#内联函数"><span>内联函数</span></a></h1><p>在声明函数前加inline关键字</p><p>调用函数的时候把函数代码嵌入到调用它的地方去，保持函数的独立性(有自己的空间)<br> 每次调用都要把inline函数的body插入到需要调用的地方，程序有很多处需要调用的地方的话程序就会变长，会牺牲代码的空间，降低调用函数时的overhead额外的开销(减少时间)<br> 宏也可以做类似的事情，但宏不能做类型检查，inline作为函数来说是可以由编译器做类型检查，比宏更安全</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//1</span></span>
<span class="line"><span>#define f(a) (a)+(a)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	double a=4;</span></span>
<span class="line"><span>	printf(&quot;%d&quot;,f(a));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2</span></span>
<span class="line"><span>inline int f(int i)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	return i*2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	double a=4;</span></span>
<span class="line"><span>	printf(&quot;%d&quot;,f(a));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>inline的函数只会存在于编译器中，生成的可执行文件是不存在的<br> 如果函数很小可能会被编译器自动inline<br> 如果inline函数过于巨大，编译器就可能就会拒绝inline函数如:函数中具有复杂的循环和递归(递归不能inline)递归需要不断地进栈出栈</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>inline int plusOne(int x);</span></span>
<span class="line"><span>inline int plusOne(int x) { return ++x; };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在.h文件和.cpp文件都要写inline<br> 声明类时就给出成员函数的函数体(把函数体写到class声明里面)，就会默认是内联函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Cup</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	int color;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	int getColor() { return color; }</span></span>
<span class="line"><span>	void setColor(int color)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		this-&gt;color =color;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里调用getcolor和setcolor时是和直接访问color的运行效率是没区别的，这样做了函数的隔绝</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Rectangle</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	int width, height;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	Rectangle(int w = 0,int h = 0);</span></span>
<span class="line"><span>	int getWidth() const;</span></span>
<span class="line"><span>	void setWidth(int w);</span></span>
<span class="line"><span>	int getHeight() const;</span></span>
<span class="line"><span>	void setHeight(int h);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>inline Rectangle::Rectangle(int w, int h)</span></span>
<span class="line"><span>: width(w)，height(h){}</span></span>
<span class="line"><span>	inline int Rectangle::getWidth() const</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		return width;</span></span>
<span class="line"><span>	}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这样写与直接把函数体写在class里面没区别，但是保持了class简洁</p><p>inline<br> 小函数，2或3行<br> 经常调用的函数 如:循环内部<br> not inline<br> 非常大的函数，超过20行<br> 递归函数</p><h1 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间"><span>命名空间</span></a></h1><p>C++通过引用命名空间来解决命名冲突的问题 简单来说命名空间就是定义了一个范围</p><h1 id="创建命名空间" tabindex="-1"><a class="header-anchor" href="#创建命名空间"><span>创建命名空间</span></a></h1><p>使用namespace关键字定义命名空间</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace a{</span></span>
<span class="line"><span>	int num1=10;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cout&lt;&lt;a::num1&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名空间可以嵌套</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace a{</span></span>
<span class="line"><span>	int num1=10;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	namespace a1{</span></span>
<span class="line"><span>		char c=&#39;a&#39;;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cout&lt;&lt;a::a1::c&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名空间时开放的，可以随时随地向命名空间中添加成员</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace a{</span></span>
<span class="line"><span>	int num1=10;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//追加</span></span>
<span class="line"><span>namespace a{</span></span>
<span class="line"><span>	int num2=20;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="using关键字" tabindex="-1"><a class="header-anchor" href="#using关键字"><span>using关键字</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>using namespace a;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将a内的所有内容引用到目前的命名空间中</p><p>好处：调用该命名空间内的函数时不需要重复声明命名空间 坏处：可能导致命名空间被污染</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>using a::num1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>using指定命名空间中的指定成员</p><p>如果引用命名空间中存在和当前命名空间中同名字的成员，默认使用当前命名空间中的成员</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace a{  </span></span>
<span class="line"><span>    int n=10;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int n=20;  </span></span>
<span class="line"><span>    using namespace a;  </span></span>
<span class="line"><span>    cout&lt;&lt;n&lt;&lt;endl;  //20</span></span>
<span class="line"><span>    cout&lt;&lt;a::n&lt;&lt;endl;//10</span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况如果想要使用命名空间a中的n就只能用前缀声明命名空间了</p><p>如果引用多个命名空间中存在相同名字的成员，且当前命名空间内没有这个成员，就会出现二义性，这种情况只能用前缀声明命名空间了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace a{  </span></span>
<span class="line"><span>    int n=10;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>namespace b{  </span></span>
<span class="line"><span>    int n=11;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    using namespace a;  </span></span>
<span class="line"><span>    using namespace b;  </span></span>
<span class="line"><span>    cout&lt;&lt;n&lt;&lt;endl;  //error</span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33)]))}const t=n(l,[["render",p]]),r=JSON.parse('{"path":"/cpp/cpp/6/","title":"6、作用域","lang":"zh-CN","frontmatter":{"title":"6、作用域","createTime":"2025/06/22 11:10:48","permalink":"/cpp/cpp/6/"},"readingTime":{"minutes":3.08,"words":925},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/6、作用域.md","headers":[]}');export{t as comp,r as data};
