import{_ as p,c as d,a as l,b as e,e as n,d as i,r as t,o as c}from"./app-CEcM0piI.js";const r={};function v(u,s){const a=t("VPIcon");return c(),d("div",null,[s[23]||(s[23]=l(`<p>静态是指编译期的 动态指运行期，等拥有了内存之后才产生的</p><h1 id="运行时断言" tabindex="-1"><a class="header-anchor" href="#运行时断言"><span>运行时断言</span></a></h1><p>在静态断言出现以前，我们使用的是运行时断言，只有程序运行起来之后才有可能触发它。 通常情况下运行时断言只会在Debug模式下使用，因为断言的行为比较粗暴，它会直接显示错误信息并终止程序。 断言不能 代替程序中的错误检查，它只应该出现在需要表达式返回true的位置，例如：算术表达式的除数 不能为0，分配内存的大小必须大于0等。相反，如果表达式中涉及外部输入，则不应该依赖断言，例如客户输入、服务端返回等</p><p>对一个表达式的判断，当表达式为假时就输出诊断消息并调用abort()函数中止程序。 语法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>assert(bool_constexpr );</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要包含头文件&lt; assert.h&gt;</p><p>每个断言只能检测一个条件。因为条件过多，当出现错误时，无法判断是哪个条件出错。 不能在断言中放入改变源程序数值的语句，例如assert(++i == 3); 因为频繁调用断言会影响程序性能，因此有时需要禁用断言。只需要在头文件里添加NDEBUG的宏定义。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#define NDEBUG</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>虽然运行时断言可以满足一部分需求，但是它有一个缺点就是必须让程序运行到断言代码的位置才会触发断言。如果想在模板实例化的时候对模板实参进行约束，这种断言是无法办到的。 可以通过其他特性来模拟</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#define STATIC_ASSERT_CONCAT_IMP(x, y) x ## y  </span></span>
<span class="line"><span>#define STATIC_ASSERT_CONCAT(x, y) \\  </span></span>
<span class="line"><span> STATIC_ASSERT_CONCAT_IMP(x, y)  </span></span>
<span class="line"><span>// 方案1  </span></span>
<span class="line"><span>#define STATIC_ASSERT(expr) \\  </span></span>
<span class="line"><span> do { \\  </span></span>
<span class="line"><span> char STATIC_ASSERT_CONCAT( \\  </span></span>
<span class="line"><span> static_assert_var, __COUNTER__) \\  </span></span>
<span class="line"><span> [(expr) != 0 ? 1 : -1]; \\  </span></span>
<span class="line"><span> } while (0)  </span></span>
<span class="line"><span>template&lt;bool&gt;  </span></span>
<span class="line"><span>struct static_assert_st;  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>struct static_assert_st&lt;true&gt; {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>// 方案2  </span></span>
<span class="line"><span>#define STATIC_ASSERT2(expr) \\  </span></span>
<span class="line"><span> static_assert_st&lt;(expr) != 0&gt;()  </span></span>
<span class="line"><span>// 方案3  </span></span>
<span class="line"><span>#define STATIC_ASSERT3(expr) \\  </span></span>
<span class="line"><span> static_assert_st&lt;(expr) != 0&gt; \\  </span></span>
<span class="line"><span> STATIC_ASSERT_CONCAT( \\  </span></span>
<span class="line"><span> static_assert_var, __COUNTER__)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>方案1，利用的技巧是数组的大小不能为负值，当expr表达式返回结果为false的时 候，条件表达式求值为−1，这样就导致数组大小为−1，自然就会引发编译失败。 方案2和方案3则是利用了C++模板特化的特性，当模板实参为true的时候，编译器能找到特化版本的定义。但当模板参数为false的时候，编译器无法找到相应的特化定义，从而编译失败。 方案2和方案3的区别在于，方案2会构造临时对象，这让它无法出现在类和结构体的定义当中。而方案3则声明了一个变量，可以出现在结构体和类的定义中，但是它最大的问题是会改变结构体和类的内存布局。</p><h1 id="静态断言" tabindex="-1"><a class="header-anchor" href="#静态断言"><span>静态断言</span></a></h1><p>用于在程序编译阶段评估常量表达式并对返回 false的表达式断言</p><p>使用static_assert需要传入两个实参：常量表达式和诊断消息字符串。第一个实参必须是常量表达式，因为编译器无法计算运行时才能确定结果的表达式</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class B : public A {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class C {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>class E {  </span></span>
<span class="line"><span>    static_assert(is_base_of&lt;A, T&gt;::value, &quot;T is not base of A&quot;);  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(int argc, char *argv[]) {  </span></span>
<span class="line"><span>    static_assert(argc &gt; 0, &quot;argc &gt; 0&quot;); // 使用错误，argc&gt;0不是常量表达式  </span></span>
<span class="line"><span>    E&lt;C&gt; x; // 使用正确，但由于A不是C的基类，所以触发断言  </span></span>
<span class="line"><span>    static_assert(sizeof(int) &gt;= 4, // 使用正确，表达式返回真，不会触发失败断言&quot;sizeof(int) &gt;= 4&quot;);  </span></span>
<span class="line"><span>    E&lt;B&gt; y; // 使用正确，A是B的基类，不会触发失败断言  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>argc &gt; 0依赖于用户输入的参数，显然不是一个常量表达式。在这种情况下，编译器会报错，符合上面的第5条要求。类模板E对static_ assert的使用是正确的，根据第1条和第4条要求，static_assert可以在类定义里使用并且不会改变类的内部状态。只不过在实例化类模板E&lt; C&gt;的时候，因为A不是C的基类，所以会触发静态断言，导致编译中断</p><h2 id="单参数static-assert" tabindex="-1"><a class="header-anchor" href="#单参数static-assert"><span>单参数static_assert</span></a></h2><p>在大多数情况下使用static_assert的时候输入的诊断信 息字符串就是常量表达式本身，所以让常量表达式作为诊断信息字符串参数的默认值是非常理想的。为了达到这个目的，我们可以定义一个宏</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#define LAZY_STATIC_ASSERT(B) static_assert(B, #B)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可能是该需求比较普遍的原因，2014年2月C++标准委员会就提出升级static_ assert的想 法，希望让其支持单参数版本，即常量表达式，而断言输出的诊断信息为常量表达式本身。这个 观点提出后得到了大多数人的认同，但是由于2014年2月C++14标准已经发布了，因此该特性不 得不顺延到C++17标准中。在支持C++17标准的环境中，我们可以忽略第二个参数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class B : public A {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class C {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>class E {  </span></span>
<span class="line"><span>    static_assert(is_base_of&lt;A, T&gt;::value);  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(int argc, char *argv[]) {  </span></span>
<span class="line"><span>    E&lt;C&gt; x; // 使用正确，但由于A不是C的基类，会触发失败断言  </span></span>
<span class="line"><span>    static_assert(sizeof(int) &lt; 4); // 使用正确，但表达式返回false，会触发失败断言  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="结构化绑定" tabindex="-1"><a class="header-anchor" href="#结构化绑定"><span>结构化绑定</span></a></h1><p>在C++11标准中引入了元组的概念，通过元组C++能返回多个值 需要包含头文件&lt; tuple&gt;</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>tuple&lt;int,int&gt; return_multiple_values(){</span></span>
<span class="line"><span>    return make_tuple(11, 7);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>    int x = 0, y = 0;</span></span>
<span class="line"><span>    tie(x, y) = return_multiple_values();</span></span>
<span class="line"><span>    cout &lt;&lt; x &lt;&lt; &#39;,&#39; &lt;&lt; y &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)),e("p",null,[s[0]||(s[0]=n("这段代码和Python完成了同样的工作，但代码却要麻烦许多。其中一个原因是 C++11必须指定return_multiple_values函数的返回值类型，另外，在调用return_multiple_values 函数前还需要声明变量x和y，并且使用函数模板std")),i(a,{provider:"iconify",name:"tie将x和y通过引用绑定到std"}),s[1]||(s[1]=n("tuple上。 解决第一个问题可以使用auto关键字声明函数返回类型 解决第二个问题就需要使用结构化绑定"))]),s[24]||(s[24]=l(`<p>结构化绑定是指将一个或者多个名称绑定到初始化对象中的一个或者多个子对象（或者元素） 上，相当于给初始化对象的子对象（或者元素）起了别名，别名不同于引用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>auto return_multiple_values() {  </span></span>
<span class="line"><span>    return make_tuple(11, 7);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    auto [x, y] = return_multiple_values();  </span></span>
<span class="line"><span>    cout &lt;&lt; x &lt;&lt; &#39;,&#39; &lt;&lt; y &lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>auto[x,y] = return_multiple_values()是一个典型的结构化绑定声明，其中auto是类型占位符，[x, y]是绑定标识符列表，其中x和y是用于绑定的名称，绑定的目标是函数 return_multiple_values()返回结果副本的子对象或者元素。 结构化绑定的目标不必是一个函数的返回结果，等号的右边可以是任意一个合理的表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a=6;  </span></span>
<span class="line"><span>    string s=&quot;Aeolian&quot;;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    A a;  </span></span>
<span class="line"><span>    auto [x, y] = a;  </span></span>
<span class="line"><span>    cout &lt;&lt; x &lt;&lt; &#39;,&#39; &lt;&lt; y &lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构化绑定能够直接绑定到结构体上。也可以将其运用到基于范围的for循环</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct BindTest {  </span></span>
<span class="line"><span>    int a = 42;  </span></span>
<span class="line"><span>    string s = &quot;Aeolian&quot;;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    vector&lt;BindTest&gt; bt{{11, &quot;hello&quot;},{7,  &quot;c++&quot;},{42, &quot;world&quot;}};  </span></span>
<span class="line"><span>    for (const auto &amp;[x, y]: bt) {  </span></span>
<span class="line"><span>        cout &lt;&lt; x &lt;&lt; &#39;,&#39; &lt;&lt; y &lt;&lt; endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构化绑定的本质" tabindex="-1"><a class="header-anchor" href="#结构化绑定的本质"><span>结构化绑定的本质</span></a></h2><p>在结构化 绑定中编译器会根据限定符生成一个等号右边对象的匿名副本，而绑定的对象正是这个副本而非原对象本身。 这里的别名真的是单纯的别名，别名的类型和绑定目标对象的子对象类型相同，而引用类型本身就是一种和非引用类型不同的类型。 编译器生成的副本是使用const auto修饰的，也就是说副本是const还是volatile完全依赖于auto的限定符 如果在试图使用x和y去修改bt的数据成员是无法成功的，因为一方面x和y都是常量类 型；另一方面即使x和y是非常量类型，改变的x和y只会影响匿名对象而非bt本身。</p><p>可以使用引用的结构化绑定修改bt成员变量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>BindTest bt;  </span></span>
<span class="line"><span>auto&amp;[x, y] = bt;  </span></span>
<span class="line"><span>cout &lt;&lt; &amp;bt.a &lt;&lt; &#39;,&#39; &lt;&lt; &amp;x &lt;&lt; endl;  </span></span>
<span class="line"><span>cout &lt;&lt; &amp;bt.s &lt;&lt; &#39;,&#39; &lt;&lt; &amp;y &lt;&lt; endl;  </span></span>
<span class="line"><span>x = 11;  </span></span>
<span class="line"><span>cout &lt;&lt; bt.a &lt;&lt; endl;  </span></span>
<span class="line"><span>bt.s = &quot;hi structured binding&quot;;  </span></span>
<span class="line"><span>cout &lt;&lt; y &lt;&lt; endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然只是将const auto修改为auto&amp;，但是已经能达到让bt数据成员和x、y相互修改的目的了</p><p><strong>如果结构化绑定声明为const auto&amp;[x, y] = bt，那么x = 11会编译失败，因为x绑定的对象是一个常量引用，而bt.s = &quot;hi structured binding&quot;却能成功修改y的值，因为bt本身不存在常量问题。</strong></p><p>使用结构化绑定无法忽略对象的子对象或者元素</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>auto t = make_tuple(42, &quot;hello world&quot;);  </span></span>
<span class="line"><span>auto [x] = t;//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构化绑定的3种类型" tabindex="-1"><a class="header-anchor" href="#结构化绑定的3种类型"><span>结构化绑定的3种类型</span></a></h2><p>结构化绑定可以作用于3种类型，包括原生数组、结构体和类对象、元组和类元组的对象</p><h5 id="原生数组" tabindex="-1"><a class="header-anchor" href="#原生数组"><span>原生数组</span></a></h5><p>绑定到原生 数组即将标识符列表中的别名一一绑定到原生数组对应的元素上。所需条件仅仅是要求别名的数量与数组元素的个数一致</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int a[3]{ 1, 3, 5 };  </span></span>
<span class="line"><span>auto[x, y, z] = a;  </span></span>
<span class="line"><span>cout&lt;&lt; x &lt;&lt; &#39;,&#39;&lt;&lt; y &lt;&lt; &#39;,&#39;&lt;&lt; z &lt;&lt; endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定到原生数组需要小心数组的退化，因为在绑定的过程中编译器必须知道原生数组的元素个数，一旦数组退化为指针，就将失去这个属性。</p><h5 id="结构体和类对象" tabindex="-1"><a class="header-anchor" href="#结构体和类对象"><span>结构体和类对象</span></a></h5><p>将标识符列表中的别名分别绑定到结构体和类的非静态成员变量上的限制条件要比原生数组复杂得多 首先，类或者结构体中的非静态数据成员个数必须和标识符列表中的别名的个数相同； 其次，这些数据成员必须是公有的 这些数据成员必须是在同一个类或者基类中； 最后，绑定的类和结构体中不能存在匿名联合体：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class BindBase1 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a = 42;  </span></span>
<span class="line"><span>    double b = 11.7;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindTest1 : public BindBase1 {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindBase2 {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindTest2 : public BindBase2 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a = 42;  </span></span>
<span class="line"><span>    double b = 11.7;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a = 42;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindTest3 : public BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    double b = 11.7;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    BindTest1 bt1;  </span></span>
<span class="line"><span>    BindTest2 bt2;  </span></span>
<span class="line"><span>    BindTest3 bt3;  </span></span>
<span class="line"><span>    auto [x1, y1] = bt1; // 编译成功  </span></span>
<span class="line"><span>    auto [x2, y2] = bt2; // 编译成功  </span></span>
<span class="line"><span>    auto [x3, y3] = bt3; // 编译错误  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>auto[x1, y1] = bt1和auto[x2, y2] = bt2可以顺利地编译，因为类 BindTest1和BindTest2的非静态数据成员要么全部在派生类中定义，要么全部在基类中定义。 BindTest3却不同，其中成员变量a的定义在基类，成员变量b的定义在派生类，这一点违反了绑定 结构体的限制条件，所以auto[x3, y3] = bt3会导致编译错误。最后需要注意的是，类和结构体中 不能出现匿名的联合体，而对于命名的联合体则没有限制。</p><h5 id="元组和类元组对象" tabindex="-1"><a class="header-anchor" href="#元组和类元组对象"><span>元组和类元组对象</span></a></h5><p>绑定到元组就是将标识符列表中的别名分别绑定到元组对象的各个元素。</p><p>绑定元组和类元组有一系列抽象的条件： 对于元组或者类元组类型T。</p>`,27)),e("ol",null,[e("li",null,[s[2]||(s[2]=n("需要满足std")),i(a,{provider:"iconify",name:"tuple_size"}),s[3]||(s[3]=n("value是一个符合语法的表达式，并且该表达式获得的整数 值与标识符列表中的别名个数相同。"))]),e("li",null,[s[4]||(s[4]=n("类型T还需要保证std")),i(a,{provider:"iconify",name:"tuple_element"}),s[5]||(s[5]=n("type也是一个符合语法的表达式，其中i是小于std")),i(a,{provider:"iconify",name:"tuple_size"}),s[6]||(s[6]=n("value的整数，表达式代表了类型T中第i个元素的类型。"))]),e("li",null,[s[7]||(s[7]=n("类型T必须存在合法的成员函数模板get_()或者函数模板get_(t)，其中i是小于 std")),i(a,{provider:"iconify",name:"tuple_size"}),s[8]||(s[8]=n("value的整数，t是类型T的实例，get_()和get_(t)返回的是实例t中第i个元素的值。"))])]),e("p",null,[s[9]||(s[9]=n("这些条件并没有明确规定结构化绑定的类型一定是元组，任何具有上述条件特征的类型都可以成为绑定的目标。另外，获取这些条件特征的代价 也并不高，只需要为目标类型提供std")),i(a,{provider:"iconify",name:"tuple_size、std"}),s[10]||(s[10]=n("tuple_element以及get的特化或者偏特化版本即可。 标准库中除了元组本身能够作为绑定目标以外，std")),i(a,{provider:"iconify",name:"pair和",extra:"std"}),s[11]||(s[11]=n("array也能作为结构化绑定的目标，其原因就是它们是满足上述条件的类元组。"))]),s[25]||(s[25]=l(`<p>对于pair</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>map&lt;int,string&gt; id2str{ {1, &quot;hello&quot;},  </span></span>
<span class="line"><span>                        {3, &quot;Structured&quot;},  </span></span>
<span class="line"><span>                        {5, &quot;bindings&quot;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>for (const auto&amp; elem : id2str) {  </span></span>
<span class="line"><span>    cout &lt;&lt; elem.first&lt;&lt; &#39;,&#39; &lt;&lt; elem.second &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),e("p",null,[s[12]||(s[12]=n("上面这段代码是一个基于范围的for循环遍历std")),i(a,{provider:"iconify",name:"map的例子，其中elem是std"}),s[13]||(s[13]=n("pair类型，要在循环体中输出key和value的值就需要访问成员变量first和second。这个例 子中使用基于范围的for循环已经比使用迭代器遍历std")),i(a,{provider:"iconify",name:"map简单了很多，但是加入结构化绑定后",extra:""}),s[14]||(s[14]=n("pair的成员变量first和second绑定到别名以保证代码阅读起来更加清晰"))]),s[26]||(s[26]=l(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>map&lt;int,string&gt; id2str{ {1, &quot;hello&quot;},  </span></span>
<span class="line"><span>                        {3, &quot;Structured&quot;},  </span></span>
<span class="line"><span>                        {5, &quot;bindings&quot;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>for (const auto&amp;[id, str]:id2str) {  </span></span>
<span class="line"><span>    cout &lt;&lt; id&lt;&lt; &#39;,&#39; &lt;&lt; str &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现一个类元组类型" tabindex="-1"><a class="header-anchor" href="#实现一个类元组类型"><span>实现一个类元组类型</span></a></h2><p>BindTest3,我们知道由于它的数据成员分散在派生类和基类之中，因此无法使用结构化绑定。下面将通过让其满足类元组的条件，从而达到支持结构化绑定 的目的</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a = 42;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindTest3 : public BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    double b = 11.7;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>namespace std {  </span></span>
<span class="line"><span>    template&lt;&gt;  </span></span>
<span class="line"><span>    struct tuple_size&lt;BindTest3&gt; {  </span></span>
<span class="line"><span>        static constexpr size_t value = 2;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>    template&lt;&gt;  </span></span>
<span class="line"><span>    struct tuple_element&lt;0, BindTest3&gt; {  </span></span>
<span class="line"><span>        using type = int;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>    template&lt;&gt;  </span></span>
<span class="line"><span>    struct tuple_element&lt;1, BindTest3&gt; {  </span></span>
<span class="line"><span>        using type = double;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;std::size_t Idx&gt;  </span></span>
<span class="line"><span>auto &amp;get(BindTest3 &amp;bt) = delete;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>auto &amp;get&lt;0&gt;(BindTest3 &amp;bt) { return bt.a; }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>auto &amp;get&lt;1&gt;(BindTest3 &amp;bt) { return bt.b; }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    BindTest3 bt3;  </span></span>
<span class="line"><span>    auto &amp;[x3, y3] = bt3;  </span></span>
<span class="line"><span>    x3 = 78;  </span></span>
<span class="line"><span>    std::cout &lt;&lt; bt3.a &lt;&lt; std::endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>我们为BindTest3实现了3种特性以满足类元组的限制条件。首先实现的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;&gt; </span></span>
<span class="line"><span>struct tuple_size { </span></span>
<span class="line"><span>	static constexpr size_t value = 2;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的作用是告诉编译器将要绑定的子对象和元素的个数，这里通过特化让 tuple_size::value的值为2，也就是存在两个子对象。然后需要明确的是每个子对象和 元素的类型:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>struct tuple_element&lt;0, BindTest3&gt; {  </span></span>
<span class="line"><span>    using type = int;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>struct tuple_element&lt;1, BindTest3&gt; {  </span></span>
<span class="line"><span>    using type = double;  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里同样通过特化的方法指定了两个子对象的具体类型。最后需要实现的是get函数，注 意，get函数的实现有两种方式，一种需要给BindTest3添加成员函数；另一种则不需要，我们通常 会选择不破坏原有代码的方案，所以这里先展示后者:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;std::size_t Idx&gt;  </span></span>
<span class="line"><span>auto &amp;get(BindTest3 &amp;bt) = delete;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>auto &amp;get&lt;0&gt;(BindTest3 &amp;bt) { return bt.a; }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>auto &amp;get&lt;1&gt;(BindTest3 &amp;bt) { return bt.b; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到函数模板get也特化出了两个函数实例，它们分别返回bt.a和bt.b的引用。之所以这 里需要返回引用，是因为我希望结构化绑定的别名能够修改BindTest3的实例，如果需要的是一个 只读的结构化绑定，则这里可以不必返回引用。最后template auto&amp; get(BindTest3 &amp;bt) = delete可以明确地告知编译器不要生成除了特化版本以外的函数实例以防止 get函数模板被滥用。 正如上文强调的，我不推荐实现成员函数版本的get函数，因为这需要修改原有的代码。但是 当我们重新编写一个类，并且希望它支持结构化绑定的时候，也不妨尝试实现几个get成员函数：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a = 42;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class BindTest3 : public BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    double b = 11.7;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    template&lt;std::size_t Idx&gt;  </span></span>
<span class="line"><span>    auto &amp;get() = delete;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>auto &amp;BindTest3::get&lt;0&gt;() { return a; }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>auto &amp;BindTest3::get&lt;1&gt;() { return b; }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>namespace std {  </span></span>
<span class="line"><span>    template&lt;&gt;  </span></span>
<span class="line"><span>    struct tuple_size&lt;BindTest3&gt; {  </span></span>
<span class="line"><span>        static constexpr size_t value = 2;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>    template&lt;&gt;  </span></span>
<span class="line"><span>    struct tuple_element&lt;0, BindTest3&gt; {  </span></span>
<span class="line"><span>        using type = int;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>    template&lt;&gt;  </span></span>
<span class="line"><span>    struct tuple_element&lt;1, BindTest3&gt; {  </span></span>
<span class="line"><span>        using type = double;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    BindTest3 bt3;  </span></span>
<span class="line"><span>    auto &amp;[x3, y3] = bt3;  </span></span>
<span class="line"><span>    x3 = 78;  </span></span>
<span class="line"><span>    cout &lt;&lt; bt3.a &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这段代码和第一份实现代码基本相同，我们只需要把精力集中到get成员函数的部分</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class BindTest3 : public BindBase3 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    double b = 11.7;  </span></span>
<span class="line"><span>    template&lt;std::size_t Idx&gt; auto&amp; get() = delete;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>template&lt;&gt; auto&amp; BindTest3::get&lt;0&gt;() { return a; }  </span></span>
<span class="line"><span>template&lt;&gt; auto&amp; BindTest3::get&lt;1&gt;() { return b; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码中get成员函数的优势显而易见，成员函数不需要传递任何参数。另外，特化版本的 函数get&lt;0&gt;和get&lt;1&gt;可以直接返回a和b，这显得格外简洁。读者不妨自己编译运行一下这两段代码，其输出结果应该都是78，修改bt.a成功。</p><h2 id="绑定的访问权限问题" tabindex="-1"><a class="header-anchor" href="#绑定的访问权限问题"><span>绑定的访问权限问题</span></a></h2><p>当在结构体或者类中使用结构化绑定的时候，需要有公开的访问权限，否则会 导致编译失败。这条限制乍看是合理的，但是仔细想来却引入了一个相同条件下代码表现不一致的问题</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct A {  </span></span>
<span class="line"><span>    friend void foo();  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    int i;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>void foo() {  </span></span>
<span class="line"><span>    A a{};  </span></span>
<span class="line"><span>    auto x = a.i; // 编译成功  </span></span>
<span class="line"><span>    auto [y] = a; // 编译失败  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这段代码中，foo是结构体A的友元函数，它可以访问A的私有成员i。但是，结构化绑 定却失败了，这就明显不合理了。同样的问题还有访问自身成员的时候：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class C {  </span></span>
<span class="line"><span>    int i;  </span></span>
<span class="line"><span>    void foo(const C&amp; other) {  </span></span>
<span class="line"><span>        auto [x] = other; // 编译失败  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决这类问题，C++20标准规定结构化绑定的限制不再强调必须为公开数据成员，编译 器会根据当前操作的上下文来判断是否允许结构化绑定。幸运的是，虽然标准是2018年提出修改 的，但在实验的3种编译器上，无论是C++17还是C++20标准，以上代码都可以顺利地通过编译。</p><h1 id="可调用对象包装器、绑定器" tabindex="-1"><a class="header-anchor" href="#可调用对象包装器、绑定器"><span>可调用对象包装器、绑定器</span></a></h1><h1 id="可调用对象包装器、绑定器-1" tabindex="-1"><a class="header-anchor" href="#可调用对象包装器、绑定器-1"><span>可调用对象包装器、绑定器</span></a></h1><h2 id="可调用对象" tabindex="-1"><a class="header-anchor" href="#可调用对象"><span>可调用对象</span></a></h2><p>函数指针、具有operator()的类对象(仿函数)、可被转换为函数指针的类对象、类成员的函数指针或类成员指针</p><h3 id="将类对象转换为函数指针" tabindex="-1"><a class="header-anchor" href="#将类对象转换为函数指针"><span>将类对象转换为函数指针</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef void(*funcptr)(int,string);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Test{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>	int a=10;</span></span>
<span class="line"><span>    void hello(int a,string s){cout&lt;&lt;&quot;hello&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>    static void world(int a,string s){cout&lt;&lt;&quot;world&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>    operator funcptr(){</span></span>
<span class="line"><span>	    return hello;  //error  </span></span>
<span class="line"><span>        return world;  //ok</span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类成员在实例化类对象前是不存在的，但静态成员是存在的（静态方法是属于类的）</p><h3 id="类的函数指针" tabindex="-1"><a class="header-anchor" href="#类的函数指针"><span>类的函数指针</span></a></h3><p>如果想要创建能调用类的非静态成员的指针就需要创建类的函数指针了 对于以上案例只需要在函数指针声明中加上类的作用域即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Test t;  </span></span>
<span class="line"><span>using fptr= void(Test::*)(int,string);  </span></span>
<span class="line"><span>fptr f1=&amp;Test::hello;  </span></span>
<span class="line"><span>(t.*f1)(16,&quot;jerry&quot;);//相等(&amp;t-&gt;*f1)(16,&quot;jerry&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的成员指针" tabindex="-1"><a class="header-anchor" href="#类的成员指针"><span>类的成员指针</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef int Test::*ptr1;  </span></span>
<span class="line"><span>ptr1 p=&amp;Test::a;  </span></span>
<span class="line"><span>cout&lt;&lt;t.*p&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可调用对象包装器" tabindex="-1"><a class="header-anchor" href="#可调用对象包装器"><span>可调用对象包装器</span></a></h2><p>需要包含头文件&lt; functional &gt; std::function是可调用对象的包装器，他是一个类模板，可以容纳<mark>除类成员（函数）指针之外</mark>所有可调用对象通过它的模板参数，它可以用统一的方式处理函数、函数对象、函数指针，并允许保存和延迟执行它们 语法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function&lt;返回值类型(参数类型列表)&gt; diy_name = 可调用对象;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>声明和调用</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef void(*funcptr)(int,string);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Test{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a=10;  </span></span>
<span class="line"><span>    void hello(int a,string s){cout&lt;&lt;&quot;类的成员函数&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>    static void world(int a,string s){cout&lt;&lt;&quot;类的静态函数&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void operator()(string s){cout&lt;&lt;&quot;仿函数&quot;&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>    operator funcptr(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;转换成函数指针的类对象&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>        return world;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void test(int a,string s){cout&lt;&lt;&quot;普通函数&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//包装普通函数  </span></span>
<span class="line"><span>function&lt;void(int,string)&gt; p1=test;  </span></span>
<span class="line"><span>p1(1,&quot;a&quot;);  </span></span>
<span class="line"><span>//包装类的静态成员  </span></span>
<span class="line"><span>function&lt;void(int,string)&gt; p2=Test::world;  </span></span>
<span class="line"><span>p2(2,&quot;b&quot;);  </span></span>
<span class="line"><span>//包装仿函数  </span></span>
<span class="line"><span>Test t;  </span></span>
<span class="line"><span>function&lt;void(string)&gt; p3=t;//仿函数可调用对象就是t本身  </span></span>
<span class="line"><span>p3(&quot;c&quot;);  </span></span>
<span class="line"><span>//包装转换为函数指针的类对象  </span></span>
<span class="line"><span>function&lt;void(int,string)&gt; p4=t;  </span></span>
<span class="line"><span>p4(4,&quot;d&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>通过可调用对象包装器将他们打包之后就能得到统一的类型，基于这个类型我们可以像函数一样调用，也可以作为函数的参数传递 实际应用</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    function&lt;void(int,string)&gt;callback;  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    A(const function&lt;void(int,string)&gt; &amp; f):callback(f){}  </span></span>
<span class="line"><span>    void notify(int id,string name){  </span></span>
<span class="line"><span>        callback(id,name);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A a(test);  </span></span>
<span class="line"><span>a.notify(1,&quot;as&quot;);  </span></span>
<span class="line"><span>A b(Test::world);  </span></span>
<span class="line"><span>b.notify(2,&quot;df&quot;);  </span></span>
<span class="line"><span>A c(t);  </span></span>
<span class="line"><span>c.notify(3,&quot;cx&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="可调用对象绑定器" tabindex="-1"><a class="header-anchor" href="#可调用对象绑定器"><span>可调用对象绑定器</span></a></h2>`,41)),e("p",null,[s[15]||(s[15]=n("std")),i(a,{provider:"iconify",name:"bind用来将可调用对象与其参数一起进行绑定。绑定后的结果可以使用std"}),s[16]||(s[16]=n("function进行保存，并延迟调用到任何我们需要的对象 作用 1、将可调用对象与其参数一起绑定成一个")),s[17]||(s[17]=e("mark",null,"仿函数",-1)),s[18]||(s[18]=n(" 2、将多元（参数个数为m,n>1）可调用对象转换为一元或者(n+1)元可调用对向，即只绑定部分参数 语法"))]),s[27]||(s[27]=l(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//绑定非类成员函数/变量</span></span>
<span class="line"><span>auto f=std::bind(可调用对象地址,绑定的参数/占位符);</span></span>
<span class="line"><span>//绑定类成员函数/变量</span></span>
<span class="line"><span>auto f=std::bind(类函数/成员地址,类实例对象地址,绑定的参数/占位符);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态函数不属于类对象，因此应当使用第一种方式 绑定器返回的是一个仿函数类型，得到的返回值可以直接赋值给一个std::function，在使用的时候我们不需要关心绑定器的放回值类型，使用auto进行了自动类型推导即可</p><h3 id="占位符" tabindex="-1"><a class="header-anchor" href="#占位符"><span>占位符</span></a></h3>`,3)),e("p",null,[s[19]||(s[19]=n("placeholders")),i(a,{provider:"iconify",name:"_",extra:""}),s[20]||(s[20]=n("_ 1、placeholders")),i(a,{provider:"iconify",name:"_",extra:""}),s[21]||(s[21]=n("_ 3、placeholders")),i(a,{provider:"iconify",name:"_",extra:""}),s[22]||(s[22]=n("_ 5等 占位符在调用时就转换为后面小括号里传入的参数 占位符后面的数是多少就表示找后面小括号里第几个参数"))]),s[28]||(s[28]=l(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void test(int a,int s){cout&lt;&lt;&quot;普通函数&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}</span></span>
<span class="line"><span>bind(test,1,placeholders::_1)(3);  //test的x参数传入1，y参数为后面括号第一个参数</span></span>
<span class="line"><span>bind(test,placeholders::_1,2)(3);  //test的y参数传入2，x参数为后面括号第一个参数</span></span>
<span class="line"><span>bind(test,placeholders::_1,placeholders::_2)(3,4); //test的y参数为后面括号第一个参数，x参数为后面括号第二个参数 </span></span>
<span class="line"><span>bind(test,placeholders::_2,placeholders::_1)(3,4);//test的y参数为后面括号第二个参数，x参数为后面括号第一个参数</span></span>
<span class="line"><span>bind(test,2,placeholders::_1)(3,4);//使用绑定的数值而使用参入的数值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定器函数绑定类成员函数（变量）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//成员函数绑定  </span></span>
<span class="line"><span>Test t;  </span></span>
<span class="line"><span>auto f1=bind(&amp;Test::hello,&amp;t,20,placeholders::_1);  </span></span>
<span class="line"><span>function&lt;void(int,string)&gt; f11=bind(&amp;Test::hello,&amp;t,20,placeholders::_1);  </span></span>
<span class="line"><span>f1(&quot;2077&quot;);  </span></span>
<span class="line"><span>//成员变量  </span></span>
<span class="line"><span>auto f2= bind(&amp;Test::a,&amp;t);  </span></span>
<span class="line"><span>function&lt;int()&gt; f22=bind(&amp;Test::a,&amp;t);//只读  </span></span>
<span class="line"><span>function&lt;int&amp;()&gt; f23=bind(&amp;Test::a,&amp;t);//加上引用可修改  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>cout&lt;&lt;f2()&lt;&lt;endl;  </span></span>
<span class="line"><span>f2()=6;//可修改  </span></span>
<span class="line"><span>cout&lt;&lt;f2()&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const m=p(r,[["render",v]]),h=JSON.parse('{"path":"/cpp/modern-cpp/5/","title":"5 工具","lang":"zh-CN","frontmatter":{"title":"5 工具","createTime":"2025/06/22 12:10:16","permalink":"/cpp/modern-cpp/5/"},"readingTime":{"minutes":19.34,"words":5803},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/现代C++特性/5 工具.md","headers":[]}');export{m as comp,h as data};
