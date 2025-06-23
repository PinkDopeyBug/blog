import{_ as p,c as d,a as e,b as l,e as n,d as i,r as t,o as r}from"./app-CEcM0piI.js";const c={};function v(u,s){const a=t("VPIcon");return r(),d("div",null,[s[39]||(s[39]=e(`<h1 id="std-enable-if约束模板" tabindex="-1"><a class="header-anchor" href="#std-enable-if约束模板"><span>std::enable_if约束模板</span></a></h1><p>对于SFINAE规则，一个典型的应用就是标准库中的std::enable_if模板元函数，SFINAE规则使该模板元函数能辅助模板的开发者限定实例化模板的模板实参类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T, class U = std::enable_if_t&lt;std::is_integral_v&lt;T&gt;&gt;&gt;</span></span>
<span class="line"><span>struct X {};</span></span>
<span class="line"><span>X&lt;int&gt; x1; // 编译成功</span></span>
<span class="line"><span>X&lt;std::string&gt; x2; // 编译失败</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),l("p",null,[s[0]||(s[0]=n("类模板X的模板形参class U = std")),i(a,{provider:"iconify",name:"enable_if_t",extra:""}),s[1]||(s[1]=n("is_integral_v 返回true，于是 std")),i(a,{provider:"iconify",name:"enable_if_t>返回类型void，所以X实际上是X的一个",extra:""}),s[2]||(s[2]=n(" enable_if不存在嵌套类型 type，于是std::enable_if_t>无法符合语法规范，导致编译失败。"))]),s[40]||(s[40]=e(`<p>enable_if的一种实现方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;bool B, class T = void&gt;</span></span>
<span class="line"><span>struct enable_if {};</span></span>
<span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>struct enable_if&lt;true, T&gt; { using type = T; };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enable_if的实现十分简单，而让它发挥如此大作用的幕后功臣就是SFINAE规则。不 过使用std::enable_if作为模板实参约束也有一些硬伤，比如使用范围窄，需要加入额外的模板形 参等。于是为了更好地对模板进行约束，C++20标准引入了概念（concept）。</p><h1 id="概念引入" tabindex="-1"><a class="header-anchor" href="#概念引入"><span>概念引入</span></a></h1><p>概念是对C++核心语言特性中模板功能的扩展。它在编译时进行评估，对类模板、函数模板以及类模板的成员函数进行约束：它限制了能被接受为模板形参的实参集。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class C&gt;</span></span>
<span class="line"><span>concept IntegerType = std::is_integral_v&lt;C&gt;;</span></span>
<span class="line"><span>template &lt;IntegerType T&gt;</span></span>
<span class="line"><span>struct X {};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码使用concept关键字定义了模板形参T的约束条件IntegerType，模板实参替换T之后 必须满足std::is_integral_v计算结果为true的条件，否则编译器会给出IntegerType约束失败的 错误提示。这份代码还可以简化为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T&gt;</span></span>
<span class="line"><span>requires std::is_integral_v&lt;T&gt;</span></span>
<span class="line"><span>struct X {};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>requires关键字可以直接约束模板形参T，从而达到相同的效果。</p><h1 id="concept和约束表达式定义概念" tabindex="-1"><a class="header-anchor" href="#concept和约束表达式定义概念"><span>concept和约束表达式定义概念</span></a></h1><p>使用concept关键字来定义概念</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class C&gt;</span></span>
<span class="line"><span>concept IntegerType = std::is_integral_v&lt;C&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中IntegerType是概念名，这里的std::is_integral_v称为约束表达式。 约束表达式应该是一个bool类型的纯右值常量表达式，当实参替换形参后，如果表达式计算 结果为true，那么该实参满足约束条件，概念的计算结果为true。反之，在实参替换形参后，如果 表达式计算结果为false或者替换结果不合法，则该实参无法满足约束条件，概念的计算结果为 false。 这里所谓的计算都是编译期执行的，概念的最终结果是一个bool类型的纯右值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T&gt; concept TestConcept = true;</span></span>
<span class="line"><span>static_assert(TestConcept&lt;int&gt;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>TestConcept是一个bool类型的常量表达式，因为它能够作为 static_assert的实参。 约束表达式还支持一般的逻辑操作，包括合取和析取</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 合取</span></span>
<span class="line"><span>template &lt;class C&gt;</span></span>
<span class="line"><span>concept SignedIntegerType = is_integral_v&lt;C&gt; &amp;&amp; is_signed_v&lt;C&gt;;</span></span>
<span class="line"><span>// 析取</span></span>
<span class="line"><span>template &lt;class C&gt;</span></span>
<span class="line"><span>concept IntegerFloatingType = is_integral_v&lt;C&gt; || is_floating_point_v&lt;C&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>约束的合取是通过逻辑与&amp;&amp;完成的，运算规则也与逻辑与相同，要求 两个约束都为true，整个约束表达式才会为true，当左侧约束为false时，整个约束表达式遵循短 路原则为false。同样，约束的析取是通过逻辑或||完成的，运算规则与逻辑或相同，只要任意约 束为true，整个约束表达式就会为true，当左侧约束为true时，整个约束表达式遵循短路原则为 true。让我们尝试用上面的两个概念约束模板实参：</p><h1 id="模板优化" tabindex="-1"><a class="header-anchor" href="#模板优化"><span>模板优化</span></a></h1><h1 id="模板参数" tabindex="-1"><a class="header-anchor" href="#模板参数"><span>模板参数</span></a></h1><p>相对于以类型为模板参数的模板而言，以非类型为模板参数 的模板实例化规则更加严格。 在C++17标准之前，这些规则包括以下几种：</p><ol><li>如果整型作为模板实参，则必须是模板形参类型的经转换常量表达式。所谓经转换常量表达式是指隐式转换到某类型的常量表达式，特点是隐式转换和常量表达式。例如：constexpr char到int的转换就满足隐式转换和常量表达式。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>constexpr char v = 42;  </span></span>
<span class="line"><span>constexpr char foo() { return 42; }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;int&gt;  </span></span>
<span class="line"><span>struct X {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    X&lt;v&gt; x1;  </span></span>
<span class="line"><span>    X&lt;foo()&gt; x2;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>如果对象指针作为模板实参，则必须是静态或者是有内部或者外部链接的完整对象。</li><li>如果函数指针作为模板实参，则必须是有链接的函数指针。</li><li>如果左值引用的形参作为模板实参，则必须也是有内部或者外部链接的。</li><li>而对于成员指针作为模板实参的情况，必须是静态成员。 以上提到的后4条规则都强调了两种特性：链接和静态。因为一旦代码满足了这些要 求，就表明实参指引的内存地址固定了下来，对于编译器而言这是实例化模板的关键。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;const char *&gt;  </span></span>
<span class="line"><span>struct Y {};  </span></span>
<span class="line"><span>extern const char str1[] = &quot;hello world&quot;; // 外部链接  </span></span>
<span class="line"><span>const char str2[] = &quot;hello world&quot;; // 内部链接  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    Y&lt;str1&gt; y1;  </span></span>
<span class="line"><span>    Y&lt;str2&gt; y2;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面的规则以外，其他的实例化方式都是非法的，这其中也包括了一些合理场景，例如 返回指针的常量表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int v = 42;  </span></span>
<span class="line"><span>constexpr int* foo() { return &amp;v; }  </span></span>
<span class="line"><span>template&lt;const int*&gt; struct X {};  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    X&lt;foo()&gt; x;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码在C++17之前是无法编译成功的，因为模板并不接受foo()的返回值类型，根据第一条规则它只会接受整型的经转换常量表达式。</p><p>在C++17标准中，C++委员会对这套规则做了重新的梳理，一方面简化规则的描述，另一方面也允许常量求值作为所有非类型模板的实参。 非类型模板形参使 用的实参可以是该模板形参类型的任何经转换常量表达式。其中经转换常量表达式的定义添加了 对象、数组、函数等到指针的转换。这从另一个角度对以前的规则进行了兼容。 在新规则的支持下，上面的代码可以编译成功，因为新规则不再强调经转换常量表达式的求值结果为整型。 现在对于指针不再要求是具有链接的，取而代之的是必须满足经转换常量表达式求值。这就是说，下面的代码可以顺利地编译通过</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;const char *&gt; struct Y {};  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    static const char str[] = &quot;hello world&quot;;  </span></span>
<span class="line"><span>    Y&lt;str&gt; y;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在C++17以前，上面的代码会编译失败，给出的错误提示为&amp;str，而不是一个有效的模板实 参，因为str没有链接。不过C++17不存在上述问题，代码能够顺利地编译通过。</p><p>新规则并非万能，以下对象作为非类型模板实参依旧会造成编译器报错:</p><ol><li>对象的非静态成员对象。</li><li>临时对象。</li><li>字符串字面量。</li><li>typeid的结果。</li><li>预定义变量。</li></ol><h2 id="允许局部和匿名类型作为模板实参" tabindex="-1"><a class="header-anchor" href="#允许局部和匿名类型作为模板实参"><span>允许局部和匿名类型作为模板实参</span></a></h2><p>在C++11标准之前，将局部或匿名类型作为模板实参是不被允许的，但是这个限制并没有什么道理，所以在C++11标准中允许了这样的行为</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T&gt; class X { };  </span></span>
<span class="line"><span>template &lt;class T&gt; void f(T t) { }  </span></span>
<span class="line"><span>struct {} unnamed_obj;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    struct A { };  </span></span>
<span class="line"><span>    enum { e1 };  </span></span>
<span class="line"><span>    typedef struct {} B;  </span></span>
<span class="line"><span>    B b;  </span></span>
<span class="line"><span>    X&lt;A&gt; x1; // C++11编译成功，C++03编译失败  </span></span>
<span class="line"><span>    X&lt;A*&gt; x2; // C++11编译成功，C++03编译失败  </span></span>
<span class="line"><span>    X&lt;B&gt; x3; // C++11编译成功，C++03编译失败  </span></span>
<span class="line"><span>    f(e1); // C++11编译成功，C++03编译失败  </span></span>
<span class="line"><span>    f(unnamed_obj); // C++11编译成功，C++03编译失败  </span></span>
<span class="line"><span>    f(b); // C++11编译成功，C++03编译失败  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>由于结构体A和B都是局部类型，因此x1、x2和x3在C++11之前会编译失 败。另外，因为e1、unnamed_obj的类型为匿名类型，所以f(e1)和f(unnamed_obj)在C++11之前也会 编译失败。最后，由于b的类型是局部类型，因此f(b)在C++11之前同样无法编译成功。</p><h2 id="允许函数模板的默认模板参数" tabindex="-1"><a class="header-anchor" href="#允许函数模板的默认模板参数"><span>允许函数模板的默认模板参数</span></a></h2><p>在C++11之前类模板是可以有默认模板参数的，而函数模板却不能，但却找不到一条要这么限制函数模板的理由。这条限制在C++11标准中也被解除了。在语法上比类模板更加灵活</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T = double&gt;  </span></span>
<span class="line"><span>void foo() {  </span></span>
<span class="line"><span>    T t;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo(5);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数模板的默认模板参数是不会影响模板实参的推导的，也就是说推导出的类型的优先级高于默认参数</p><p>无论是函数的默认参数还是类模板的默认模板参数，都必须保证从右往左定义 默认值，否则无法通过编译</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T = double, class U, class R = double&gt;  </span></span>
<span class="line"><span>struct X {};  </span></span>
<span class="line"><span>void foo(int a = 0, int b, double c = 1.0) {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码由于模板参数U和参数b没有指定默认参数，破坏了必须从右往左定义默认值的规 则，因此会编译失败。而函数模板就没有这个问题了：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T = double, class U, class R = double&gt;  </span></span>
<span class="line"><span>void foo(U u) {}  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    foo(5);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码可以顺利地通过编译，其中T和R都有默认参数double，而U没有默认参数，不过U可以 通过实参5推导出来。所以这里实际上调用的是foo(int)函数。</p><h2 id="函数模板添加到adl查找规则" tabindex="-1"><a class="header-anchor" href="#函数模板添加到adl查找规则"><span>函数模板添加到ADL查找规则</span></a></h2><p>在C++20标准之前，ADL的查找规则是无法查找到带显式指定模板实参的函数模板的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace N {</span></span>
<span class="line"><span>    struct A {};</span></span>
<span class="line"><span>    template &lt;class T&gt; int f(T) { return 1; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int x = f&lt;N::A&gt;(N::A());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从C++20标准开始以上问题得以解决，编译器可以顺利地找到命名空间N中的函数f。不过需要注意的是，有些情况仍会让编译器报错</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int h = 0;  </span></span>
<span class="line"><span>void g() {}  </span></span>
<span class="line"><span>namespace N {  </span></span>
<span class="line"><span>    struct A {};  </span></span>
<span class="line"><span>    template &lt;class T&gt; int f(T) { return 1; }  </span></span>
<span class="line"><span>    template &lt;class T&gt; int g(T) { return 2; }  </span></span>
<span class="line"><span>    template &lt;class T&gt; int h(T) { return 3; }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int x = f&lt;N::A&gt;(N::A()); // 编译成功，查找f没有找到任何定义，f被认为是模板  </span></span>
<span class="line"><span>    int y = g&lt;N::A&gt;(N::A()); // 编译成功，查找g找到一个函数，g被认为是模板  </span></span>
<span class="line"><span>    int z = h&lt;N::A&gt;(N::A()); // 编译失败  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>f和g都编译成功，因为根据标准要求编译器查找f和g的结果分别是什么都没 找到以及找到一个函数，在这种情况下可以猜测它们都是模板函数，并且尝试匹配到命名空间N的 f和g两个函数模板。而h则不同，编译器可以找到一个int变量h，在这种情况下紧跟h之后的&lt;可以 被认为是小于号，不符合标准要求，所以编译器仍会报错。</p><h2 id="允许非类型模板形参中的字面量类类型" tabindex="-1"><a class="header-anchor" href="#允许非类型模板形参中的字面量类类型"><span>允许非类型模板形参中的字面量类类型</span></a></h2><p>在C++20之前，类类型是无法作为非类型模板形参的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct A {};  </span></span>
<span class="line"><span>template &lt;A a&gt;  </span></span>
<span class="line"><span>struct B {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    A a;  </span></span>
<span class="line"><span>    B&lt;a&gt; b; // 编译失败  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从C++20开始，字面量类类型（literal class）可以作为形参在非类型模板形参列表中使 用了。具体要求如下：</p><ol><li>所有基类和非静态数据成员都是公开且不可变的。</li><li>所有基类和非静态数据成员的类型是标量类型、左值引用或前者的（可能是多维）数组。</li></ol><h2 id="扩展的模板参数匹配规则" tabindex="-1"><a class="header-anchor" href="#扩展的模板参数匹配规则"><span>扩展的模板参数匹配规则</span></a></h2><p>一直以来，模板形参只能精确匹配实参列表，也就是说实参列表里的每一项必须和模板形参 有着相同的类型。虽然这种匹配规则非常严谨且不易出错，但是却排除了很多合理的情况，比如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;template&lt;typename&gt; class T, class U&gt;  </span></span>
<span class="line"><span>void foo() {T&lt;U&gt; n;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class, class = int&gt;  </span></span>
<span class="line"><span>struct bar {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo&lt;bar, double&gt;();  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数模板foo的模板形参列表接受一个模板实参，并且要求这个模板实参只 有一个模板形参，巧的是类模板bar的模板形参列表中正好只有一个形参是需要指定的，而另外一 个形参可以使用默认值。看起来foo()这种写法应该顺利地通过编译，但是事与愿 违，这份代码在C++17之前是无法编译成功的。</p><p>另外，由于在C++17中非类型模板形参可以使用auto作为占位符，因此我们可以写出这样的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;template&lt;auto&gt; class T, auto N&gt;  </span></span>
<span class="line"><span>void foo() {T&lt;N&gt; n;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;auto&gt;  </span></span>
<span class="line"><span>struct bar {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo&lt;bar, 5&gt;();  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型占位符auto最终都会被推导为int类型，于是模板形参和模板实参列表 是匹配的，编译起来没有问题。但是修改一下函数模板foo</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;template&lt;int&gt; class T, int N&gt;  </span></span>
<span class="line"><span>void foo() {  </span></span>
<span class="line"><span>    T&lt;N&gt; n;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数模板foo的模板形参template class T相较于实参template struct bar更加特化。而模板形参template class T相较于template struct bar也更加特化。这两份代码在C++17中都可以顺利地编译成功。</p><p>从推导的角度来看，类模板bar的模板形参中类型占位符auto被推导为int，这样一来整个推导 过程似乎是顺理成章的，但是从匹配规则的角度来看又违反了必须精确匹配的要求，所以为了让 以auto占位符作为非类型模板形参这个特性使用得更为广泛，也是时候对模板参数的匹配规则进 行一些扩展了。 在C++17标准中放宽了对模板参数的匹配规则，它要求模板形参至少和实参列表一样特化。 换句话说，模板形参可以和实参列表精确匹配。另外，模板形参也可以比实参列表更加特化。</p><h1 id="类模板的模板实参推导" tabindex="-1"><a class="header-anchor" href="#类模板的模板实参推导"><span>类模板的模板实参推导</span></a></h1><h2 id="通过初始化构造推导类模板的模板实参" tabindex="-1"><a class="header-anchor" href="#通过初始化构造推导类模板的模板实参"><span>通过初始化构造推导类模板的模板实参</span></a></h2><p>在C++17标准之前，实例化类模板必须显式指定模板实参，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::tuple&lt;int, double, const char*&gt; v{5, 11.7, &quot;hello world&quot;};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>C++17标准支持了类模板的模板实参推导，上面的代码可以进一步简化为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::tuple v{ 5, 11.7, &quot;hello world&quot; };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>实例化类模板也不再需要显式地指定每个模板实参，编译器可以通过对象的初始化构造推导出缺失的模板实参。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::mutex mx;  </span></span>
<span class="line"><span>std::lock_guard lg{ mx };  </span></span>
<span class="line"><span>std::complex c{ 3.5 };  </span></span>
<span class="line"><span>std::vector v{ 5,7,9 };  </span></span>
<span class="line"><span>auto v1 = new std::vector{ 1, 3, 5 };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除 了以类型为模板形参的类模板，实参推导对非类型形参的类模板同样适用，下面的例子就是通过 初始化，同时推导出类型模板实参char和非类型模板实参6的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T, size_t N&gt;  </span></span>
<span class="line"><span>struct MyCountOf {  </span></span>
<span class="line"><span>    MyCountOf(T(&amp;)[N]) {}  </span></span>
<span class="line"><span>    size_t value = N;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    MyCountOf c(&quot;hello&quot;);  </span></span>
<span class="line"><span>    cout &lt;&lt; c.value &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于非类型模板形参为auto占位符的情况也是支持推导的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T, auto N&gt;  </span></span>
<span class="line"><span>struct X {  </span></span>
<span class="line"><span>    X(T(&amp;)[N]) {}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    X x(&quot;hello&quot;);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同于函数模板，类模板的模板实参是不允许部分推导的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T1, class T2&gt;  </span></span>
<span class="line"><span>struct foo {  </span></span>
<span class="line"><span>    foo(T1, T2) {}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo v1(5, 6.8); // 编译成功  </span></span>
<span class="line"><span>    foo&lt;&gt; v2(5, 6.8); // 编译错误  </span></span>
<span class="line"><span>    foo&lt;int&gt; v3(5, 6.8); // 编译错误  </span></span>
<span class="line"><span>    foo&lt;int, double&gt; v4(5, 6.8); // 编译成功  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v1和v4可以顺利通过编译，其中v1符合类模板实参的推导要求，而v4则显式 指定了模板实参。v2和v3就没那么幸运了，它们都没有完整地指定模板实参，这是编译器不能接 受的。</p><h2 id="拷贝初始化优先" tabindex="-1"><a class="header-anchor" href="#拷贝初始化优先"><span>拷贝初始化优先</span></a></h2><p>在类模板的模板实参推导过程中往往会出现这样两难的场景</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::vector v1{ 1, 3, 5 };  </span></span>
<span class="line"><span>std::vector v2{ v1 };  </span></span>
<span class="line"><span>std::tuple t1{ 5, 6.8, &quot;hello&quot; };  </span></span>
<span class="line"><span>std::tuple t2{ t1 };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,84)),l("p",null,[s[3]||(s[3]=n("对于v2和t2的类型这里会优先解释为拷贝初始化。更明确地说，v2的类型为std")),i(a,{provider:"iconify",name:"vector<",extra:"int"}),s[4]||(s[4]=n("tuple<int,double, const char * >。 同理，下面的类模板也都会被实例化为std::vector类型："))]),s[41]||(s[41]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::vector v3(v1);  </span></span>
<span class="line"><span>std::vector v4 = {v1};  </span></span>
<span class="line"><span>auto v5 = std::vector{v1};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用列表初始化的时候，当且仅当初始化列表中只有一个与目标类模板相同的 元素才会触发拷贝初始化，在其他情况下都会创建一个新的类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::vector v1{ 1, 3, 5 };  </span></span>
<span class="line"><span>std::vector v3{ v1, v1 };  </span></span>
<span class="line"><span>std::tuple t1{ 5, 6.8, &quot;hello&quot; };  </span></span>
<span class="line"><span>std::tuple t3{ t1, t1 };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),l("p",null,[s[5]||(s[5]=n("v3的类型为std")),i(a,{provider:"iconify",name:"vector>，t3的类型为std"}),s[6]||(s[6]=n("tuple, std::tuple>。 虽然C++17 标准的编译器现在一致表现为优先拷贝初始化，但是真正在标准中明确的是C++20。"))]),s[42]||(s[42]=e(`<h2 id="lambda类型的用途" tabindex="-1"><a class="header-anchor" href="#lambda类型的用途"><span>lambda类型的用途</span></a></h2><p>在C++17以前将一个lambda表达式作为数据成员存储在某个对象中</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>struct LambdaWarp {  </span></span>
<span class="line"><span>    LambdaWarp(T t) : func(t) {}  </span></span>
<span class="line"><span>    template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>    void operator()(Args &amp;&amp;...arg) {  </span></span>
<span class="line"><span>        func(forward&lt;Args&gt;(arg) ...);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    T func;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    auto l = [](int a, int b) {  </span></span>
<span class="line"><span>        cout &lt;&lt; a + b &lt;&lt; endl;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>    LambdaWarp&lt;decltype(l)&gt; x(l);  </span></span>
<span class="line"><span>    x(11, 7);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>最关键的步骤是使用decltype获取lambda表达式l的类型，只有通过这种方法 才能准确地实例化类模板。在C++支持了类模板的模板实参推导以后，上面的代码可以进行一些优化</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>struct LambdaWarp {  </span></span>
<span class="line"><span>    LambdaWarp(T t) : func(t) {}  </span></span>
<span class="line"><span>    template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>    void operator()(Args &amp;&amp;...arg) {  </span></span>
<span class="line"><span>        func(forward&lt;Args&gt;(arg)...);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    T func;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    LambdaWarp x([](int a, int b) {  </span></span>
<span class="line"><span>        cout &lt;&lt; a + b &lt;&lt; endl;  </span></span>
<span class="line"><span>    });  </span></span>
<span class="line"><span>    x(11, 7);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>上面的代码不再显式指定lambda表达式类型，而是让编译器通过初始化构造自动推导出lambda 表达式类型，简化了代码的同时也更加符合lambda表达式的使用习惯。</p><h2 id="别名模板的类模板实参推导" tabindex="-1"><a class="header-anchor" href="#别名模板的类模板实参推导"><span>别名模板的类模板实参推导</span></a></h2><p>C++20标准支持了别名模板的类模板实参推导,该特性结合了别名模板和类模板实参推导的两种特性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T, class U&gt; struct C {  </span></span>
<span class="line"><span>    C(T, U) {}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>template&lt;class V&gt;  </span></span>
<span class="line"><span>using A = C&lt;V*, V*&gt;;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int i{};  </span></span>
<span class="line"><span>    double d{};  </span></span>
<span class="line"><span>    A a1(&amp;i, &amp;i); // 编译成功，可以推导为A&lt;int&gt;  </span></span>
<span class="line"><span>    A a2(i, i); // 编译失败，i无法推导为V*  </span></span>
<span class="line"><span>    A a3(&amp;i, &amp;d); // 编译失败，(int *, double *)无法推导为(V*, V*)  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>，A是C的别名模板，它约束C的两个模板参数为相同类型的指针V*。在推导过 程中，A a1(&amp;i, &amp;i);可以编译成功，因为构造函数推导出来的两个实参类型都是int <em>符合V</em>，最终推导为A&lt; int&gt;。而对于A a2(i, i);，由于实参推导出来的不是指针类型，因此推导失败无法编译。同样，A a3(&amp;i, &amp;d);虽然符合实参推导结果为指针的要求，但是却违反了两个指针类型必须相同的规则，结果也是无法编译的。</p><h2 id="聚合类型的类模板实参推导" tabindex="-1"><a class="header-anchor" href="#聚合类型的类模板实参推导"><span>聚合类型的类模板实参推导</span></a></h2><p>C++20标准还规定聚合类型也可以进行类模板的实参推导。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T&gt;  </span></span>
<span class="line"><span>struct S {  </span></span>
<span class="line"><span>    T x;  </span></span>
<span class="line"><span>    T y;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>S s1{ 1, 2 }; //编译成功 S&lt;int&gt;S s2{ 1, 2u }; // 编译失败</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会根据初始化列表推导出模板实参 S s1{ 1, 2 };推导出的模板实 参均为int类型，符合单一模板参数T，所以可以顺利编译。相反，S s2{ 1, 2u };由于初始化列表 的两个元素推导出了不同的类型int和unsigned int，无法满足确定的模板参数T，因此编译失败。 除了简单的聚合类型，嵌套聚合类型也可以进行类模板实参推导</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T, class U&gt;  </span></span>
<span class="line"><span>struct X {  </span></span>
<span class="line"><span>    S&lt;T&gt; s;  </span></span>
<span class="line"><span>    U u;  </span></span>
<span class="line"><span>    T t;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>X x{ {1, 2}, 3u, 4 };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板形参T并不是被{1, 2}推导出来的，而是被初始化列表中最后一 个元素4推导而来，S&lt; T&gt; s;不参与到模板实参的推导中。 如果显示指定S&lt; T&gt;的模板实参，则初始化列表的子括号可以忽略</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T, class U&gt;  </span></span>
<span class="line"><span>struct X {  </span></span>
<span class="line"><span>    S&lt;int&gt; s;  </span></span>
<span class="line"><span>    U u;  </span></span>
<span class="line"><span>    T t;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>X x{ 1, 2, 3u, 4 };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C++20标准还规定聚合类型中的数组也可以是推导对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T, std::size_t N&gt;  </span></span>
<span class="line"><span>struct A {  </span></span>
<span class="line"><span>    T array[N];  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>A a{{1, 2, 3}};  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>struct B {  </span></span>
<span class="line"><span>    T array[2];  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    B b = {0, 1};  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类模板A需要推导数组类型和数组大小，根据初始化列表array被推导为int array[3]，注意，这里初始化列表中的子括号是必须存在的。而对于类模板B而言，数组大小是确 定的，编译器只需要推导数组类型，这时候可以省略初始化列表中的子括号。</p><h1 id="sfinae" tabindex="-1"><a class="header-anchor" href="#sfinae"><span>SFINAE</span></a></h1><p>SFINAE（Substitution Failure Is Not An Error，替换失败不是错误） 主要是指在函数模板重 载时，当模板形参替换为指定的实参或由函数实参推导出模板形参的过程中出现了失败，则放弃 这个重载而不是抛出一个编译失败。</p><p>它是模板推导的一个特性，虽然在C++03标准中没有明确禁 止它，但是那时该特性并没有在标准中明确规定哪些符合SFINAE，哪些应该抛出编译错误。这 样，也就很少有编译器会支持它，毕竟这个特性的开发代价可不小。有一些看起来顺理成章的代 码却是无法通过编译的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;int I&gt;  </span></span>
<span class="line"><span>struct X {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>char foo(int);  </span></span>
<span class="line"><span>char foo(float);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>X&lt;sizeof(foo((T) 0))&gt; f(T) {  </span></span>
<span class="line"><span>    return X&lt;sizeof(foo((T) 0))&gt;();  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    f(1);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码在不支持C++11的编译器上很有可能是无法成功编译的 主要原因是编译器无法推导 像sizeof(foo((T)0))这样的表达式。虽然在我们看来这是一个简单的表达式，但是要让编译器处理 它可不容易，何况当时还没有明确的标准。这种情况明显地限制了C++ 模板的推导能力，所以在 C++11标准中明确规范了SFINAE规则，可以发现上面的代码在任何一个支持C++11的编译器中 都能顺利地编译通过</p><h2 id="sfinae规则" tabindex="-1"><a class="header-anchor" href="#sfinae规则"><span>SFINAE规则</span></a></h2><p>在 SFINAE 规则中，模板形参的替换有两个时机，首先是在模板推导的最开始阶段，当明确 地指定替换模板形参的实参时进行替换；其次在模板推导的最后，模板形参会根据实参进行推导 或使用默认的模板实参。这个替换会覆盖到函数模板和模板形参中的所有类型和表达式。</p><p>标准中规定，在直接上下文中使用模板实参替换形参后，类型或者表达式不符合语法，那么 替换失败；而替换后在非直接上下文中产生的副作用导致的错误则被当作编译错误，这其中就包 括以下几种:</p><ol><li>处理表达式外部某些实体时发生的错误，比如实例化某模板或生成某隐式定义的成员函数等。</li><li>由于实现限制导致的错误，关于这一点可以理解为，虽然我们写出的可能是正确的代码， 但是编译器实现上的限制造成了错误甚至编译器崩溃都被认为是编译错误。</li><li>由于访问违规导致的错误。</li><li>由于同一个函数的不同声明的词法顺序不同，导致替换顺序不同或者根本无法替换产生的错误。</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>T foo(T&amp; t){</span></span>
<span class="line"><span>	T tt(t);</span></span>
<span class="line"><span>	return tt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>void foo(…) {}</span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	double x = 7.0;</span></span>
<span class="line"><span>	foo(x);</span></span>
<span class="line"><span>	foo(5);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会将foo(x)调用的函数模板推导为double foo(double&amp;)，而且推导出 来的函数是符合语法的。另外，编译器也会尝试用template T foo(T&amp; t)来推导foo(5)，但 是编译器很快发现无论怎么推导都无法满足语法规则，所以编译器无奈之下只能产生一次替换失 败并将这个调用交给void foo(…)。可以看到，这份代码虽然经历了一次替换失败，但是还是能编 译成功。现在我们在保持foo函数定义不变的情况下，改变foo函数的实参，让代码产生一个编译错误：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class bar{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	 bar() {};</span></span>
<span class="line"><span>	 bar(bar&amp;&amp;) {};</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	 bar b;</span></span>
<span class="line"><span>	 foo(b);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会尝试用template T foo(T&amp; t)来推导foo(b)，其结果为bar foo(bar&amp;)。 这里在直接上下文中最终的替换结果是符合语法规范的，所以它并不会引发 替换失败，更加不会让编译器调用void foo(…)，这个时候的编译器坚信这样替换是准确无误的。 但问题是当替换完成并且进行下一步的编译工作时，编译器发现bar这个类根本无法生成隐式的复 制构造函数，想使用替换失败为时已晚，只能抛出一个编译错误。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>T foo(T *) {return T();}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void foo(...) {}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class bar {bar() {};};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo(static_cast&lt;bar *&gt;(nullptr));  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码会编译报错，原因和上一个例子有些不同，这里的原因是访问违规。不过整体的 推导过程非常相似，首先编译器会尝试用template T foo(T*)来推导foo(static_cast(nullptr))，其结果为bar foo(bar*)，同样，这里的替换结果也符合语法规范，所以编译器顺利 地进行下面的编译。但是由于类bar的构造函数是一个私有函数，以至于foo函数无法构造它，因 此就造成了编译错误。</p><p>下面的例子展示了多个词法顺序不同的声明导致函数替换编译错误 的情况：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;class T&gt; struct A { using X = typename T::X; };  </span></span>
<span class="line"><span>template &lt;class T&gt; typename T::X foo(typename A&lt;T&gt;::X);  </span></span>
<span class="line"><span>template &lt;class T&gt; void foo(...) { }  </span></span>
<span class="line"><span>template &lt;class T&gt; auto bar(typename A&lt;T&gt;::X) -&gt; typename T::X;  </span></span>
<span class="line"><span>template &lt;class T&gt; void bar(...) { }  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo&lt;int&gt;(0);  </span></span>
<span class="line"><span>    bar&lt;int&gt;(0);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)),l("p",null,[s[7]||(s[7]=n("foo(0)可以编译通过，bar(0)则不行。因为在foo (0)中T")),i(a,{provider:"iconify",name:"X",extra:"void late"}),s[8]||(s[8]=n("X实 例化了一个模板，它不是一个直接上下文环境，所以不会产生替换失败，编译器也就不会尝试重 载另外一个bar的声明从而导致编译错误。"))]),s[43]||(s[43]=e(`<p>除了上述会导致编译错误的情况外，其他的错误均 是替换失败。明确了编译错误的条件后，我们就可以自由地使用SFINAE规则了：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct X {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>struct Y {  </span></span>
<span class="line"><span>    Y(X) {}  </span></span>
<span class="line"><span>}; // X 可以转化为 YX foo(Y, Y) { return X(); }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>auto foo(T t1, T t2) -&gt; decltype(t1 + t2) {  </span></span>
<span class="line"><span>    return t1 + t2;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    X x1, x2;  </span></span>
<span class="line"><span>    X x3 = foo(x1, x2);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在这个例子中foo(x1, x2)会优先使用auto foo(T t1, T t2) -&gt; decltype(t1 + t2)来推导，不过很明显，x1 + x2不符合语法规范，所以编译器产生一个替 换失败继而使用重载的版本X foo(Y, Y)，而这个版本形参Y正好能由X转换得到，于是编译成功。</p><p>非类型替换的SFINAE例子：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;int I&gt;  </span></span>
<span class="line"><span>void foo(char(*)[I % 2 == 0] = 0) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;I % 2 == 0&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;int I&gt;  </span></span>
<span class="line"><span>void foo(char(*)[I % 2 == 1] = 0) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;I % 2 == 1&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    char a[1];  </span></span>
<span class="line"><span>    foo&lt;1&gt;(&amp;a);  </span></span>
<span class="line"><span>    foo&lt;2&gt;(&amp;a);  </span></span>
<span class="line"><span>    foo&lt;3&gt;(&amp;a);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>函数模板foo针对int类型模板形参的奇偶性重载了两个声明。当模板实参 满足条件I % 2 == 0或I % 2 == 1时，会替换出一个数量为1的char类型的数组指针char(<em>)[1]，这是 符合语法规范的，相反，不满足条件时替换的形参为char(</em>)[0]，很明显这将产生一个替换失败。 最终我们看到的结果是，编译器根据实参的奇偶性选择替换后语法正确的函数版本进行调用：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>I % 2 == 1</span></span>
<span class="line"><span>I % 2 == 0</span></span>
<span class="line"><span>I % 2 == 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合decltype关键字 来看一看SFINAE是怎么在实际代码中发挥作用的：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class SomeObj1 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    void Dump2File() const {  </span></span>
<span class="line"><span>        cout &lt;&lt; &quot;dump this object to file&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class SomeObj2 {  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>auto DumpObj(const T &amp;t) -&gt; decltype(((void) t.Dump2File()), void()) {  </span></span>
<span class="line"><span>    t.Dump2File();  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void DumpObj(...) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;the object must have a member function Dump2File&quot; &lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    DumpObj(SomeObj1());  </span></span>
<span class="line"><span>    DumpObj(SomeObj2());  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>以上代码的意图是检查对象类型是否有成员函数Dump2File，如果存在，则调用该函数；反之 则输出警告信息。为了完成这样的功能，我们需要用到返回类型后置以及decltype关键字。之所以 要用到返回类型后置的方法是因为这里需要参数先被替换，再根据参数推导返回值类型。而使用 decltype关键字有两个目的，第一个目的当然是设置函数的返回值了，第二个目的是判断实参类型 是否具有Dump2File成员函数。请注意这里的写法decltype(((void)t.Dump2File()), void())，在括号 里利用逗号表达式让编译器从左往右进行替换和推导，逗号右边的是最终我们想设置的函数返回 值类型，而逗号左边则检查了对象t的类型是否具有Dump2File成员函数。如果成员函数存在，即符 合语法规则，可以顺利地调用模板版本的函数；反之则产生替换失败，调用另一个重载版本的 DumpObj函数。于是以上代码的最终输出结果如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>dump this object to file</span></span>
<span class="line"><span>the object must have a member function Dump2File</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法不仅能用在无参数的成员函数上， 对于有参数的成员函数同样适用。</p><h1 id="外部模板" tabindex="-1"><a class="header-anchor" href="#外部模板"><span>外部模板</span></a></h1><p>extern关键字可以在声明变量和函数的时候使用，用于指定目标为外部链接，但其本身并不参与目标的定义，所以对目标的属性没有影响。 extern最常被使用的场景是当一个变量需要在多份源代码中使用的时候，如果每份源代码都定义一个变量，那么在代码链接时会出错，正确的方法是在其中一个源代码中定义该变量，在其他的源代码中使用extern声明该变量为外部变量。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>\\\\ src1.cpp </span></span>
<span class="line"><span>int x = 0;</span></span>
<span class="line"><span>\\\\ src2.cpp </span></span>
<span class="line"><span>extern int x; x = 11;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于在多份源代码中定义同一个变量会让链接报错，因此我们不得不使用extern来声明外部 变量。但是外部模板又是怎么一回事呢？在多份源代码中对同一模板进行相同的实 例化是不会有任何链接问题的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// header.h</span></span>
<span class="line"><span>template&lt;class T&gt; bool foo(T t) { return true; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src1.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>bool b = foo(7);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src2.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>bool b = foo(11);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src1.cpp和src2.cpp都会实例化一份相同的函数代码bool foo(int)。不 过它们并没有在链接的时候产生冲突，这是因为链接器对于模板有特殊待遇。编译器在编译每份 源代码的时候会按照单个源代码的需要生成模板的实例，而链接器对于这些实例会进行一次去重 操作，它将完全相同的实例删除，最后只留下一份实例。 在整个过程中编 译器生成各种模板实例，连接器却删除重复实例，中间的编译和连接时间完全被浪费了。如果只 是一两份源代码中出现这种情况应该不会有太大影响，但是如果源代码数量达到上万的级别，那 么编译和连接的过程将付出大量额外的时间成本。 为了优化编译和连接的性能，C++11标准提出了外部模板的特性，这个特性保留了extern关键字的语义并扩展了关键字的功能，让它能够声明一个外部模板实例。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// header.h</span></span>
<span class="line"><span>template&lt;class T&gt; bool foo(T t) { return true; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src1.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>template bool foo&lt;double&gt;(double);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src2.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>template bool foo&lt;double&gt;(double);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src1.cpp和src2.cpp编译时分别显式实例化了同一份函数bool foo (double)，而在连接时其中的一个副本被删除，这个过程和之前隐式实例化的代码是一样的。如果 想在这里声明一个外部模板，只需要在其中一个显式实例化前加上extern template</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// header.h</span></span>
<span class="line"><span>template&lt;class T&gt; bool foo(T t) { return true; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src1.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>extern template bool foo&lt;double&gt;(double);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src2.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>template bool foo&lt;double&gt;(double);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样编译器将不会对src1.cpp生成foo函数模板的实例，而是在链接的时候使用src2.cpp生成的bool foo&lt; double&gt;(double)函数。如此一来就省去了之前冗余的副本实例的生成和删除的过程，改善了软件构建的性能。另外，外部模板除了可以针对函数模板进行优化，对于类模板也同样适用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// header.h</span></span>
<span class="line"><span>template&lt;class T&gt; class bar {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	void foo(T t) {};</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src1.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>extern template class bar&lt;int&gt;;</span></span>
<span class="line"><span>extern template void bar&lt;int&gt;::foo(int);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src2.cpp</span></span>
<span class="line"><span>#include &lt;header.h&gt;</span></span>
<span class="line"><span>template class bar&lt;int&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>extern template不仅可以声明外部类模板实例extern template class bar，还可以明确具体的外部实例函数extern template void bar::foo(int)。</p><h1 id="连续右尖括号的解析优化" tabindex="-1"><a class="header-anchor" href="#连续右尖括号的解析优化"><span>连续右尖括号的解析优化</span></a></h1><p>从C++引入右尖括号开始直到C++11标准发布，C++一直存在这样一个问题，两个连续的右 尖括号&gt;&gt;一定会被编译器解析为右移，这是因为编译器解析采用的是贪婪原则。但是在很多情况 下，连续两个右尖括号并不是要表示右移，可能实例化模板时模板参数恰好也是一个类模板，又 或者类型转换的目标类型是一个类模板。在这种情况下，过去我们被要求在两个尖括号之间用空格分隔 在C++11标准中，编译器不再一味地使用贪婪原则将连续的两个右尖括号解析为右移，它会 识别左尖括号激活状态并且将右尖括号优先匹配给激活的左尖括号。这样一来，我们就无须在两 个右尖括号中插入空格了</p><p>但由于解析规则的修改会造成在老规则下编写的代码出现问题</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;int N&gt;</span></span>
<span class="line"><span>class X {};</span></span>
<span class="line"><span>X &lt;1 &gt;&gt; 3&gt; x;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码用GCC 4.1可以顺利编译，因为代码里的1 &gt;&gt; 3被优先处理，相当于X &lt;(1 &gt;&gt; 3)&gt; x。但是在新的编译器中，这段代码无法成功编译，因为连续两个右尖括号的第一个括号总是会跟 开始的左尖括号匹配，相当于(X &lt;1 &gt;)&gt; 3&gt; x。无法兼容老代码的问题虽然看似严重，但其实要解 决这个问题非常简单，只要将需要优先解析的内容用小括号包括起来即可，比如X &lt;(1 &gt;&gt; 3)&gt; x。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;int I&gt;  </span></span>
<span class="line"><span>struct X {  </span></span>
<span class="line"><span>    static int const c = 2;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt; struct X&lt;0&gt; {  </span></span>
<span class="line"><span>    typedef int c;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>struct Y {  </span></span>
<span class="line"><span>    static int const c = 3;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>static int const c = 4;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    cout &lt;&lt; (Y&lt;X&lt;1&gt; &gt;::c &gt; ::c &gt; ::c) &lt;&lt; endl;  </span></span>
<span class="line"><span>    cout &lt;&lt; (Y&lt;X&lt;1&gt;&gt;::c &gt; ::c &gt; ::c) &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,30)),l("p",null,[s[9]||(s[9]=n("上面的代码在新老编译器上都可以成功编译，但是输出结果却不相同，用GCC 4.1编译这份 代码，运行后输出为0和3。但是在GCC 8.1或者以上版本的编译器上编译运行，得到的结果却是 0和0。 对于GCC 8.1而言，std")),i(a,{provider:"iconify",name:"cout",extra:""}),s[10]||(s[10]=n("c > ::c > ")),i(a,{provider:"iconify",name:"c)",extra:"std td"}),s[11]||(s[11]=n("endl;和std")),i(a,{provider:"iconify",name:"cout",extra:""}),s[12]||(s[12]=n("c > ::c > ")),i(a,{provider:"iconify",name:"c)",extra:"std td"}),s[13]||(s[13]=n("endl;的解析方式相同，都是先解析X<1>，接着解析 Y>")),i(a,{provider:"iconify",name:"c，最后的代码相当于std"}),s[14]||(s[14]=n("cout << (3 > 4 > 4) << std")),i(a,{provider:"iconify",name:"endl，所以输出都为0。",extra:""}),s[15]||(s[15]=n("cout << (Y >::c > ::c > ")),i(a,{provider:"iconify",name:"c)",extra:"std td"}),s[16]||(s[16]=n("endl;和GCC 8.1的解析顺序相同，所以输出为0。但是std")),i(a,{provider:"iconify",name:"cout",extra:""}),s[17]||(s[17]=n("c > ::c > ")),i(a,{provider:"iconify",name:"c)",extra:"std td"}),s[18]||(s[18]=n("endl;的解析顺序则不同，先解析1>>")),i(a,{provider:"iconify",name:"c得到结果0，接着解析X<0>"}),s[19]||(s[19]=n("c 得到结果为类型int，最后解析Y ::c的结果为3，所以输出结果为3"))]),s[44]||(s[44]=e(`<h1 id="friend声明模板形参" tabindex="-1"><a class="header-anchor" href="#friend声明模板形参"><span>friend声明模板形参</span></a></h1><p>在C++11标准中， 将一个类声明为另外一个类的友元，可以忽略前者的class关键字。当然，忽略class关键字还有一 个大前提，必须提前声明该类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class C;</span></span>
<span class="line"><span>class X1 {</span></span>
<span class="line"><span>	friend class C; // C++11前后都能编译成功</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>class X2 {</span></span>
<span class="line"><span>	friend C; // C++11以前会编译错误，C++11以后编译成功</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入忽略class关键字这个能力后，我们会发现friend多了一些事情可以做，比如用friend声明 基本类型、用friend声明别名、用friend声明模板参数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class C;  </span></span>
<span class="line"><span>typedef C Ct;  </span></span>
<span class="line"><span>class X1 {  </span></span>
<span class="line"><span>    friend C;  </span></span>
<span class="line"><span>    friend Ct;  </span></span>
<span class="line"><span>    friend void;  </span></span>
<span class="line"><span>    friend int;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>template &lt;typename T&gt;  </span></span>
<span class="line"><span>class R {  </span></span>
<span class="line"><span>    friend T;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>R&lt;C&gt; rc;  </span></span>
<span class="line"><span>R&lt;Ct&gt; rct;  </span></span>
<span class="line"><span>R&lt;int&gt; ri;  </span></span>
<span class="line"><span>R&lt;void&gt; rv;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>以上代码中的friend C和friend Ct具有相同的含义，都是指定类C为类X1的友元。对于基本类 型，friend void和friend int虽然也能编译成功，但是实际上编译器不会做任何事情，也就是说它 们会被忽略。这个特性可以延伸到模板参数上，当模板参数为C或者Ct时，C为类R的友元，当模 板参数为int等内置类型时，friend T被忽略，类R不存在友元。 用模板参数结合友元可以让我们在使用友元的代码上进行切换而 不需要多余的代码修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class InnerVisitor { /*访问SomeDatabase内部数据*/ };  </span></span>
<span class="line"><span>template &lt;typename T&gt;  </span></span>
<span class="line"><span>class SomeDatabase {  </span></span>
<span class="line"><span>    friend T;  </span></span>
<span class="line"><span>    // … 内部数据  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    // … 外部接口  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>typedef SomeDatabase&lt;InnerVisitor&gt; DiagDatabase;  </span></span>
<span class="line"><span>typedef SomeDatabase&lt;void&gt; StandardDatabase;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里DiagDatabase是一个对内的诊断数据库类，它设置InnerVisitor为友元，通过InnerVisitor 对数据库数据进行诊断。而对外则使用类StandardDatabase，因为它的友元声明为void，所以不存 在友元，外部需要通过标准方法访问数据库的数据</p><h1 id="变量模板" tabindex="-1"><a class="header-anchor" href="#变量模板"><span>变量模板</span></a></h1><p>根据不同的类型去定义一个变量有很多做法 在类模板定义静态数据成员：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>struct PI {</span></span>
<span class="line"><span>	static constexpr T value = static_cast&lt;T&gt;(3.1415926535897932385);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	cout &lt;&lt; PI&lt;float&gt;::value &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用函数模板返回所需的值：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>constexpr T PI(){</span></span>
<span class="line"><span>	return static_cast&lt;T&gt;(3.1415926535897932385);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	cout &lt;&lt; PI&lt;int&gt;() &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据类型定义变量并不是一件有难度的事情，通过类模板和函数模板可以轻松达到 这个目的。 有了变量模板，我们不再需要冗余地定义类模板和函数模板，只需要专注要定义的变量即可，还是以变量PI 为例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;</span></span>
<span class="line"><span>constexpr T PI = static_cast&lt;T&gt;(3.1415926535897932385L);</span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	cout &lt;&lt; PI&lt;float&gt; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>constexpr T PI = static_cast&lt; T&gt;(3.141592653589 7932385L);是变量的声明和 初始化，template&lt; class T&gt;是变量的模板形参。 虽然这里的变量声明为常量，但是对于变 量模板而言这不是必需的，同其他模板一样，变量模板的模板形参也可以是非类型的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T, int N&gt;</span></span>
<span class="line"><span>T PI = static_cast&lt;T&gt;(3.1415926535897932385L) * N;</span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	PI&lt;float, 2&gt; *= 5;</span></span>
<span class="line"><span>	cout &lt;&lt; PI&lt;float, 2&gt; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量模板PI不再是一个常量，我们可以在任意时候改变它的值。实际上， 在C++14标准中变量模板给我们带来的最大便利是关于模板元编程的。举例来说，当比较两个类 型是否相同时会用到：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>bool b = is_same&lt;int, size_t&gt;::value;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>类模板std::is_same使用常量静态成员变量的方法定义了value的值，直接使用变量模板编写代码要简单得多，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T1, class T2&gt;</span></span>
<span class="line"><span>constexpr bool is_same_v = is_same&lt;T1, T2&gt;::value;</span></span>
<span class="line"><span>bool b = is_same_v&lt;int, std::size_t&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)),l("p",null,[s[20]||(s[20]=n("虽然C++14标准已经支持变量模板的特性并且也证明了可以简化代码的 编写，但是在C++14的标准库中却没有对它的支持。我们不得不继续使用std")),i(a,{provider:"iconify",name:"is_same<int,std"}),s[21]||(s[21]=n("size_t>")),i(a,{provider:"iconify",name:"value的方法来判断两个类型是否相同。这个尴尬的问题一直延续到C++17标准的发布才得到解决，在C++17标准库的type_traits中对类型特征采用了变量模板，比如对于some_trait<",extra:""}),s[22]||(s[22]=n(" value，会增加与它等效的变量模板some_trait_v< T>，这里_v后缀表示该类型是一个变量模板。因此在C++17的环境下，判断两种类型是否相同就只需要编写一行代码即可"))]),s[45]||(s[45]=e('<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>bool b = std::is_same_v;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="可变参数模板" tabindex="-1"><a class="header-anchor" href="#可变参数模板"><span>可变参数模板</span></a></h1><p>是C++11标准引入的一种新特性。类模板或者函数模板的形参个 数是可变的。 这个特性能很大程度上加强模板的能力。</p>',3)),l("p",null,[s[23]||(s[23]=n("例： std")),i(a,{provider:"iconify",name:"bind1st和",extra:"std"}),s[24]||(s[24]=n("bind2nd这两个函数模板能够绑定一个对象到函数或者函数对象，不过它们有一个很大的限制——只能绑定一个对象。 为了解决这个问题，C++标准委员会在2005年的C++技术报告 中(tr1)提出了新的函数模板std")),i(a,{provider:"iconify",name:"bind该函数可以将多个对象绑定到函数或者函数对象上，不过",extra:"studio std"}),s[25]||(s[25]=n("tuple类型，该类型能够存储多种类型的对象，当然这里的多种类型的数量同样有限制，比如 在boost中这个数量最多为10，后来GCC和Visual Studio C++的标准库也沿用了这个设定。"))]),l("p",null,[s[26]||(s[26]=n("于是在C++11标准支持可变参数模板以后，std")),i(a,{provider:"iconify",name:"bind和std"}),s[27]||(s[27]=n("tuple就被改写为可以接受任意多个模板形参的版本了。"))]),s[46]||(s[46]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void foo(Args ...args) {}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class bar {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar(Args ...args) {  </span></span>
<span class="line"><span>        foo(args...);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>class ...Args是类型模板形参包</mark>，可以接受零个或者多个类型的模板实参。 <mark>Args …args叫作函数形参包</mark>，出现在函数的形参列表中，可以接受零个或者多个函数实参。 <mark>args…是形参包展开</mark>，通常简称包展开。它将形参包展开为零个或者多个模式的列表，这个过程称为解包。 这里所谓的模式是实参展开的方法，形参包的名称必须出现在这个方法中作为实参展开 的依据，最简单的情况为解包后就是实参本身。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void foo(Args ...args) {}  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    unsigned int x = 8;  </span></span>
<span class="line"><span>    foo(); // foo()  </span></span>
<span class="line"><span>    foo(1); // foo&lt;int&gt;(int)  </span></span>
<span class="line"><span>    foo(1, 11.7); // foo&lt;int,double&gt;(int,double)  </span></span>
<span class="line"><span>    foo(1, 11.7, x); // foo&lt;int,double,unsigned int&gt;(int,double,unsigned int)  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是一个变参函数模板，它可以接受任意多个实参，编译器会根据实参的类型和个数推导 出形参包的内容。 C++11标准中变参类模板虽然不能通过推导得出形参包的具体内容，但 是我们可以直接指定它</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class bar {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    bar&lt;&gt; b1;  </span></span>
<span class="line"><span>    bar&lt;int&gt; b2;  </span></span>
<span class="line"><span>    bar&lt;int, double&gt; b3;  </span></span>
<span class="line"><span>    bar&lt;int, double, unsigned int&gt; b4;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论是模板形参包还是函数形参包都可以与普通形参结合，但是对于结合的 顺序有一些特殊要求。 在<strong>类模板</strong>中，模板形参包必须是模板形参列表的最后一个形参</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args, class T&gt;  </span></span>
<span class="line"><span>class bar {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T, class ...Args&gt;  </span></span>
<span class="line"><span>class baz {};  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    bar&lt;int, double, unsigned int&gt; b1; // 编译失败，形参包并非最后一个  </span></span>
<span class="line"><span>    baz&lt;int, double, unsigned int&gt; b2; // 编译成功  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是对于<strong>函数模板</strong>而言，模板形参包不必出现在最后，只要保证后续的形参类型能够通过实参推导或者具有默认参数即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args, class T, class U = double&gt;  </span></span>
<span class="line"><span>void foo(T, U, Args ...args) {}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    foo(1, 2, 11.7); // 编译成功  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然以上都是类型模板形参，但是实际上非类型模板形参也可以作为形参包，而且相对于类型形参包，非类型形参包则更加直观</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;int ...Args&gt;  </span></span>
<span class="line"><span>void foo1() {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;int ...Args&gt;  </span></span>
<span class="line"><span>class bar1 {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    foo1&lt;1, 2, 5, 7, 11&gt;();  </span></span>
<span class="line"><span>    bar1&lt;1, 5, 8&gt; b;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="形参包展开" tabindex="-1"><a class="header-anchor" href="#形参包展开"><span>形参包展开</span></a></h1><p>前面介绍的可变参数模板的基本语法并没有实际用途，无论是类还是函数他们的主体都是空的。实际上，它们都 缺少了一个最关键的环节，那就是形参包展开，简称包展开。只有结合了包展开，才能发挥变参模板的能力。 包展开并不是在所有情况下都能够进行的，允许包展开的场景包括 以下几种：</p><ol><li>表达式列表。</li><li>初始化列表。</li><li>基类描述。</li><li>成员初始化列表。</li><li>函数参数列表。</li><li>模板参数列表。</li><li>动态异常列表（C++17已经不再使用）。</li><li>lambda表达式捕获列表。</li><li>Sizeof…运算符。</li><li>对其运算符。</li><li>属性列表。</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T, class U&gt;  </span></span>
<span class="line"><span>T baz(T t, U u) {  </span></span>
<span class="line"><span>    cout &lt;&lt; t &lt;&lt; &quot;:&quot; &lt;&lt; u &lt;&lt; endl;  </span></span>
<span class="line"><span>    return t;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void foo(Args ...args) {}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class bar {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar(Args ...args) {  </span></span>
<span class="line"><span>        foo(baz(&amp;args, args) ...);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    bar&lt;int, double, unsigned int&gt; b(1, 5.0, 8);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在上面的代码中，baz是一个普通的函数模板，它将实参通过std::cout输出到控制台上。foo 是一个可变参数的函数模板，不过这个函数什么也不做。在main函数中，模板bar实例化了一个 bar类型并且构造了对象b，在它的构造函数里对形参包进行了展开， 其中baz(&amp;args, args)…是包展开，而baz(&amp;args, args)就是模式，也可以理解为包展开的方法。所以这段代码相当于：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class bar {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar(int a1, double a2, unsigned int a3) {  </span></span>
<span class="line"><span>        foo(baz(&amp;a1, a1), baz(&amp;a2, a2), baz(&amp;a3, a3));  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在bar的构造函数中分别调用了3个不同的baz函数，然后将它们的计算结果作为参数传入foo函数中。 稍微修改一下这个例子：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...T&gt;  </span></span>
<span class="line"><span>int baz(T ...t) {  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void foo(Args ...args) {}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class bar {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar(Args ...args) {  </span></span>
<span class="line"><span>        foo(baz(&amp;args...) + args...);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    bar&lt;int, double, unsigned int&gt; b(1, 5.0, 8);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>第一个部分是对函数模板baz(&amp;args…)的解包，其中&amp;args…是包展开，&amp;args是模式，这部分会被 展开为baz(&amp;a1, &amp;a2, &amp;a3)； 第二部分是对foo(baz(&amp;args…) + args…)的解包，由于baz(&amp;args…)已 经被解包，因此现在相当于解包的是foo(baz(&amp;a1, &amp;a2, &amp;a3) + args…)，其中baz(&amp;a1, &amp;a2, &amp;a3) + args…是包展开，baz(&amp;a1, &amp;a2, &amp;a3) + args是模式，最后的结果为foo(baz(&amp;a1, &amp;a2, &amp;a3) + a1, baz(&amp;a1, &amp;a2, &amp;a3) + a2, baz(&amp;a1, &amp;a2, &amp;a3) + a3)。 实际上模式还可以更加灵活</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int add(int a, int b) { return a + b; };  </span></span>
<span class="line"><span>int sub(int a, int b) { return a - b; };  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void foo(Args (*...args)(int, int)) {  </span></span>
<span class="line"><span>    int tmp[] = {(cout &lt;&lt; args(7, 11) &lt;&lt; endl, 0) ...};  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo(add, sub);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)),l("p",null,[s[28]||(s[28]=n("函数模板foo的形参包不再是简单的Args…args， 而是Args (* …args)(int, int)，从形式上看这个形参包解包后将是零个或者多个函数指针。 为了让 编译器能自动推导出所有函数的调用，在函数模板foo的函数体里使用了一个小技巧。函数体内定 义了一个int类型的数组tmp，并且借用了逗号表达式的特性，在括号中用逗号分隔的表达式会以 从左往右的顺序执行，最后返回最右表达式的结果。 。在这个过程中std")),i(a,{provider:"iconify",name:"cout",extra:"std d"}),s[29]||(s[29]=n("endl得到了执行。(std")),i(a,{provider:"iconify",name:"cout",extra:"std d"}),s[30]||(s[30]=n("endl, 0)…是一个包展开，而(std")),i(a,{provider:"iconify",name:"cout<<",extra:"std td"}),s[31]||(s[31]=n("endl, 0)是包展开的模式。"))]),s[47]||(s[47]=e(`<h6 id="在类的继承中形参包以及包展开的使用" tabindex="-1"><a class="header-anchor" href="#在类的继承中形参包以及包展开的使用"><span>在类的继承中形参包以及包展开的使用</span></a></h6><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class derived : public Args...{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    derived(const Args &amp; ...args):Args(args)...{}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class base1 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    base1() {}  </span></span>
<span class="line"><span>    base1(const base1 &amp;) {  </span></span>
<span class="line"><span>        cout &lt;&lt; &quot;copy ctor base1&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class base2 {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    base2() {}  </span></span>
<span class="line"><span>    base2(const base2 &amp;) {  </span></span>
<span class="line"><span>        cout &lt;&lt; &quot;copy ctor base2&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    base1 b1;  </span></span>
<span class="line"><span>    base2 b2;  </span></span>
<span class="line"><span>    derived &lt; base1, base2 &gt; d(b1, b2);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>derived是可变参数的类模板它将形参包作为自己的基类并 且在其构造函数的初始化列表中对函数形参包进行了解包，其中Args(args)…是包展 开，Args(args)是模式。</p><p><mark>另一种可变参数模板</mark>，这种可变参数模板拥有一个模板形参包</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;template&lt;class ...&gt; class ...Args&gt;  </span></span>
<span class="line"><span>class bar : public Args&lt;int, double&gt; ... {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar(const Args&lt;int, double&gt; &amp;...args) : Args&lt;int, double&gt;(args) ... {}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class baz1 {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class baz2 {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    baz1&lt;int, double&gt; a1;  </span></span>
<span class="line"><span>    baz2&lt;int, double&gt; a2;  </span></span>
<span class="line"><span>    bar&lt;baz1, baz2&gt; b(a1, a2);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>类模板bar的模板形参是一个模板形参包，也就是说其形参包是可以接受零个或者多 个模板的模板形参。在这个例子中，bar接受了两个类模板baz1和baz2。不过模板缺少 模板实参是无法实例化的，所以bar实际上继承的不是baz1和baz2两个模板，而是它们的实例 baz1和baz2。 template&lt;template &lt;class…&gt;class…Args&gt;似乎存在两个形参包，但并非如此。因为最里面的template只说明模板形参是一个变参模板，它不能在bar中被展开。 但是这并不意味着两个形参包不能同时存在于同一个模式中，要做到这一点，只要满足包展 开后的长度相同即可</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class...&gt;  </span></span>
<span class="line"><span>struct Tuple {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1, class T2&gt;  </span></span>
<span class="line"><span>struct Pair {};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args1&gt;  </span></span>
<span class="line"><span>struct zip {  </span></span>
<span class="line"><span>    template&lt;class ...Args2&gt;  </span></span>
<span class="line"><span>    struct with {  </span></span>
<span class="line"><span>        typedef Tuple&lt;Pair&lt;Args1, Args2&gt;...&gt; type;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    zip&lt;short, int&gt;::with&lt;unsigned short, unsigned&gt;::type t1; // 编译成功  </span></span>
<span class="line"><span>    zip&lt;short&gt;::with&lt;unsigned short, unsigned&gt;::type t2; // 编译失败，形参包长度不同  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>可变参数模板zip的形参包Args1和with的形参包Args2同时出现在模式 Pair中，如果要对Pair…进行解包，就要求Args1和Args2的长度相同。 编译器能够成功编译t1，t1的类型为Tuple, Pair&gt;，但 是编译器在编译t2时会提示编译失败，因为Args1形参包中只有一个实参，而Args2中有两个实参， 它们的长度不同。 例子里包展开的场景基本上涵盖了常用的几种，包括表达式、初始化列表、基类描述、成员初始化列表、函数形参列表和模板形参列表等。在剩下没有涉及的几种场景中，还有一种可能会偶尔用到，那就是lambda表达式的捕获列表：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt; void foo(Args ...args) {}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class bar{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar(Args ...args) {  </span></span>
<span class="line"><span>        auto lm = [args ...]{ foo(&amp;args。。。); };  </span></span>
<span class="line"><span>        lm();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    bar&lt;int, double&gt; b2(5, 8.11);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码的lambda表达式lm的捕获列表里，args…是一个包展开，而args是模式。比较有趣 的是，除了捕获列表里的包展开，在lambda表达式的函数体内foo(&amp;args…)还有一个包展开，而这 里的包展开是&amp;args…，模式为&amp;args。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class F, class ...Args&gt;  </span></span>
<span class="line"><span>auto delay_invoke(F f, Args ...args) {  </span></span>
<span class="line"><span>    return [f, args...]() -&gt; decltype(auto) {  </span></span>
<span class="line"><span>        return std::invoke(f, args...);  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码实现了一个delay_invoke，目的是将函数对象和参数打包到一个lambda表达式中，等到需要的时候直接调用lambda表达式实例，而无须关心参数如何传递。</p><p><strong>lambda表达式初始化捕获的包展开</strong> 对于以上lambda表达式捕获包展开有一个问题：按值捕获的性能问题 假设该delay_ invoke传递的实 参都是复杂的数据结构且数据量很大，那么这种按值捕获显然不是一个理想的解决方案。 但引用捕获更加不对，在delay_invoke的使用场景下很容易造成未定义的结果。</p><p>可以结合初始化捕获和移动语义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class F, class ...Args&gt;  </span></span>
<span class="line"><span>auto delay_invoke(F f, Args ...args) {  </span></span>
<span class="line"><span>    return [f = move(f), tup = make_tuple(move(args)...)]()  </span></span>
<span class="line"><span>            -&gt; decltype(auto) {  </span></span>
<span class="line"><span>        return apply(f, tup);  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)),l("p",null,[s[32]||(s[32]=n("首先使用了std")),i(a,{provider:"iconify",name:"make_tuple和std"}),s[33]||(s[33]=n("move将参数打包到std")),i(a,{provider:"iconify",name:"tuple中，这个过程使用",extra:""}),s[34]||(s[34]=n("tuple中的参数，需要将std")),i(a,{provider:"iconify",name:"invoke修改",extra:""}),s[35]||(s[35]=n("apply。"))]),s[48]||(s[48]=e(`<p>虽然在这个例子中性能问题解决了但还有其他问题尤其是当我们需要用lambda表 达式调用确定的函数时</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>auto delay_invoke_foo(Args ...args) {  </span></span>
<span class="line"><span>    return [args...]() -&gt; decltype(auto) {  </span></span>
<span class="line"><span>        return foo(args...);  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果还是按照刚刚的办法使用std::tuple打包参数，那么代码会变得难以理解:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>auto delay_invoke_foo(Args ...args) {  </span></span>
<span class="line"><span>    return [tup = make_tuple(move(args) ...)]() -&gt; decltype(auto) {  </span></span>
<span class="line"><span>        return apply([](auto const &amp;... args) -&gt; decltype(auto) {  </span></span>
<span class="line"><span>            return foo(args...);  </span></span>
<span class="line"><span>        }, tup);  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在C++20标准中我们有了更好的解决方案，标准支持lambda表达式初始化捕获的 包展开。 以上代码可以修改为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>auto delay_invoke_foo(Args ...args) {  </span></span>
<span class="line"><span>    return [...args = move(args)]()-&gt;decltype(auto){  </span></span>
<span class="line"><span>        return foo(args...);  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>捕获列表中…的位置在args之前，这一点和简单的捕获列表是有区别的。 最初的示例代码，在C++20标准环境下我们可以将其修改为:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class F, class ...Args&gt;  </span></span>
<span class="line"><span>auto delay_invoke(F f, Args ...args) {  </span></span>
<span class="line"><span>    return [f = move(f), ...args = move(args)]() -&gt; decltype(auto) {  </span></span>
<span class="line"><span>        return invoke(f, args...);  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在省略了std::tuple以后代码也变得清晰了不少</p><p>函数模板推导的匹配顺序：在推导的形参同时满足定参函数模板和可 变参数函数模板的时候，编译器将优先选择定参函数模板，因为它比可变参数函数模板更加精确</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class... Args&gt;  </span></span>
<span class="line"><span>void foo(Args... args) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;foo(Args… args)&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1, class... Args&gt;  </span></span>
<span class="line"><span>void foo(T1 a1, Args... args) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;foo(T1 a1, Args… args)&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1, class T2&gt;  </span></span>
<span class="line"><span>void foo(T1 a1, T2 a2) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;foo(T1 a1, T2 a2)&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo();  //foo(Args… args)</span></span>
<span class="line"><span>    foo(1, 2, 3);  // foo(T1 a1, Args… args)</span></span>
<span class="line"><span>    foo(1, 2);  // foo(T1 a1, T2 a2)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>当foo()没有任何实参的时候，编译器使用foo(Args…args)来匹配，因为只有它支 持零参数的情况。当foo(1,2,3)有3个实参的时候，编译器不再使用foo(Args…args)来匹配，虽然 它能够匹配3个实参，但是它不如foo (T1 a1, Args…args)精确，所以编译器采用了foo(T1 a1, Args…args)来匹配3个参数。foo(1,2)有两个参数，编译器再次抛弃了foo(T1 a1, Args…args)，因 为这时候有更加精确的定参函数模板foo(T1 a1, T2 a2)。</p><h1 id="sizeof-运算符" tabindex="-1"><a class="header-anchor" href="#sizeof-运算符"><span>sizeof...运算符</span></a></h1><p>sizeof…是专门针对形参包引入的新运算符，目的是获取形参包中形参的个数，返回的类型是std::size_t</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void foo(Args...args) {cout &lt;&lt; &quot;foo sizeof...(args) = &quot; &lt;&lt; sizeof...(args) &lt;&lt;endl;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class bar {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    bar() {cout &lt;&lt; &quot;bar sizeof...(Args) = &quot; &lt;&lt; sizeof...(Args) &lt;&lt; endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    foo();  //foo sizeof...(args) = 0</span></span>
<span class="line"><span>    foo(1, 2, 3);  //foo sizeof...(args) = 3</span></span>
<span class="line"><span>    bar&lt;&gt; b1;  //bar sizeof...(Args) = 0</span></span>
<span class="line"><span>    bar&lt;int, double&gt; b2;  //bar sizeof...(Args) = 2</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="可变参数模板的递归计算" tabindex="-1"><a class="header-anchor" href="#可变参数模板的递归计算"><span>可变参数模板的递归计算</span></a></h1><p>对可变参数模板型形参包的解包操作也可以使用递归方式 在C++11标准中，要对可变参数模板形参包的包展开进行逐个计算需要用到递归的方法 如求和函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>T sum(T arg) {return arg;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1, class... Args&gt;  </span></span>
<span class="line"><span>auto sum(T1 arg1, Args...args) {return arg1 +sum(args...);}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    cout &lt;&lt; sum(1, 5.0, 11.7) &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当传入的实参数量大于1时，编译器会选择调用auto sum(T1 arg1, Args…args) 当传入函数模板sum的实参数量等于1时，编译器会选择调用T sum(T arg)</p><h1 id="折叠表达式" tabindex="-1"><a class="header-anchor" href="#折叠表达式"><span>折叠表达式</span></a></h1><p>利用数组和递归的方式对形参包进行计算的方法是非常实用的技巧解决了C++11标准中包展开方法并不丰富的问题</p><p>但递归计算的方式过于烦琐，数组和括号表达式的方法技巧性太强也不是很容易想到。为了用更加正规的方法完 成包展开，C++委员会在C++17标准中引入了折叠表达式的新特性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class... Args&gt;  </span></span>
<span class="line"><span>auto sum(Args ...args) {  </span></span>
<span class="line"><span>    return (args + ...);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    cout &lt;&lt; sum(1, 5.0, 11.7) &lt;&lt; endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据折叠表达式的规则，(args +…)会被折叠为arg0 + (arg1 + arg2)，即1 + (5.0 + 11.7)</p><h2 id="折叠表达式的折叠规则" tabindex="-1"><a class="header-anchor" href="#折叠表达式的折叠规则"><span>折叠表达式的折叠规则</span></a></h2><p>在C++17的标准中有4种折叠规则： args表示的是形参包的名称，init表示的是初始化值，而op则代表任意一个二元运算符。在二元折叠中，两个运算符必须相同</p><ol><li><p>一元向右折叠 上面的例子就是经典的一元向右折叠 ( args op … )折叠为(arg0 op (arg1 op … (argN-1 op argN)))</p></li><li><p>一元向左折叠 与一元向右折叠方向相反 ( … op args )折叠为((((arg0 op arg1) op arg2) op …) op argN)</p></li><li><p>二元向右折叠 总体上和一元相同，唯一的区别是多了一个初始值 ( args op … op init )折叠为(arg0 op (arg1 op …(argN-1 op (argN op init))</p></li><li><p>二元向左折叠 也是只有方向上相反 ( init op … op args )折叠为(((((init op arg0) op arg1) op arg2) op …) op argN)</p></li></ol><p><strong>一元折叠需要注意</strong> 在折叠规则中最重要的一点就是操作数之间的结合顺序。如果在使用折叠表达式的时候不能 清楚地区分它们，可能会造成编译失败</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class... Args&gt;  </span></span>
<span class="line"><span>auto sum(Args ...args) {  </span></span>
<span class="line"><span>    return (args + ...);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    cout &lt;&lt; sum(string(&quot;hello &quot;), &quot;c++ &quot;, &quot;world&quot;) &lt;&lt; endl; // 编译错误  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>翻译出来的 实际代码是(std::string(&quot;hello &quot;) + (&quot;c++ &quot; + &quot;world&quot;))。但是两个原生的字符串类型是无法相加的，所以编译一定会报错。 要使这段代码通过编译，只需要修改一下折叠表达式即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>auto sum(Args ...args){  </span></span>
<span class="line"><span>    return (... + args);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样翻译出来的代码将是<code>((std::string(&quot;hello&quot;) + &quot;c++ &quot;) + &quot;world&quot;)</code>。而std::string类型的 字符串可以使用+将两个字符串连接起来，于是可以顺利地通过编译。</p><p><strong>二元折叠需要注意</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>void print(Args ...args) {  </span></span>
<span class="line"><span>    (cout &lt;&lt; ... &lt;&lt; args) &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    print(string(&quot;hello &quot;), &quot;c++ &quot;, &quot;world&quot;);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34)),l("p",null,[s[36]||(s[36]=n("print是一个输出函数，它会将传入的实参输出到控制台上。该函数运用了 二元向左折叠(std")),i(a,{provider:"iconify",name:"cout",extra:""}),s[37]||(s[37]=n("cout是初始化值，编译器会将代码翻译为 (((std")),i(a,{provider:"iconify",name:"cout",extra:"std td"}),s[38]||(s[38]=n('string("hello ")) << "c++ ") << "world") << std::endl;'))]),s[49]||(s[49]=e(`<h1 id="一元折叠表达式中空参数包的特殊处理" tabindex="-1"><a class="header-anchor" href="#一元折叠表达式中空参数包的特殊处理"><span>一元折叠表达式中空参数包的特殊处理</span></a></h1><p>一元折叠表达式对空参数包展开有一些特殊规则，这是因为编译器很难确定折叠表达式最终的求值类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename ...Args&gt;  </span></span>
<span class="line"><span>auto sum(Args ...args) {  </span></span>
<span class="line"><span>    return (args + ...);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果函数模板sum的实参为空，那么表达式args +…是无法确定求值类型的。 当然，二元折叠表达式不会有这种情况，因为它可以指定一个初始化值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename ...Args&gt;  </span></span>
<span class="line"><span>auto sum(Args ...args) {  </span></span>
<span class="line"><span>    return (args + ...+0);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样即使参数包为空，表达式的求值结果类型依然可以确定，编译器可以顺利地执行编译。 为了解决一元折叠表达式中参数包为空的问题，下面的规则是必须遵守的。</p><ol><li>只有&amp;&amp;、||和,运算符能够在空参数包的一元折叠表达式中使用</li><li>&amp;&amp;的求值结果一定为true</li><li>||的求值结果一定为false</li><li>,的求值结果为void()</li><li>其他运算符都是非法的。</li></ol><h1 id="using声明中的包展开" tabindex="-1"><a class="header-anchor" href="#using声明中的包展开"><span>using声明中的包展开</span></a></h1><p>从C++17标准开始，包展开允许出现在using声明的列表内，这对于可变参数类模板派生于形参包的情况很有用</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>class base {  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    T t_;  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    base() {}  </span></span>
<span class="line"><span>    base(T t) : t_(t) {}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class ...Args&gt;  </span></span>
<span class="line"><span>class derived : public base&lt;Args&gt; ... {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    using base&lt;Args&gt;::base...;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    derived&lt;int, string, bool&gt; d1 = 11;  </span></span>
<span class="line"><span>    derived&lt;int, string, bool&gt; d2 = string(&quot;hello&quot;);  </span></span>
<span class="line"><span>    derived&lt;int, string, bool&gt; d3 = true;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>可变参数类模板derived继承了通过它的形参包实例化的base类模板。using base::base…将实例化的base类模板的构造函数引入了派生类derived。 于是derived具有了base、base和base的构造函 数。</p><h1 id="lambda表达式初始化捕获的包展开" tabindex="-1"><a class="header-anchor" href="#lambda表达式初始化捕获的包展开"><span>lambda表达式初始化捕获的包展开</span></a></h1><h1 id="默认模板参数" tabindex="-1"><a class="header-anchor" href="#默认模板参数"><span>默认模板参数</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename T=long,typename U=int&gt;  </span></span>
<span class="line"><span>void fun(T t=&#39;a&#39;,U u=&#39;b&#39;){  </span></span>
<span class="line"><span>    cout&lt;&lt;t&lt;&lt;&#39;,&#39;&lt;&lt;u&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>fun(&#39;a&#39;,&#39;b&#39;); //a,b </span></span>
<span class="line"><span>fun();//97,98</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用函数如果有参数就按照参数的类型进行处理 如果没有参数就按照默认类型转换（fun()运行默认把a和b转换成long和int型）</p>`,15))])}const m=p(c,[["render",v]]),h=JSON.parse('{"path":"/cpp/modern-cpp/11/","title":"11 模板元编程","lang":"zh-CN","frontmatter":{"title":"11 模板元编程","createTime":"2025/06/22 12:12:44","permalink":"/cpp/modern-cpp/11/"},"readingTime":{"minutes":51.07,"words":15322},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/现代C++特性/11 模板元编程.md","headers":[]}');export{m as comp,h as data};
