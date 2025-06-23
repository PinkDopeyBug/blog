import{_ as p,c as t,a as e,b as l,e as n,d as i,r as d,o as r}from"./app-CEcM0piI.js";const c={};function v(u,s){const a=d("VPIcon");return r(),t("div",null,[s[8]||(s[8]=e(`<p><strong>new、delete和malloc、free的区别： new和delete在申请空间的时候对类对象会自动调用构造函数和析构函数 malloc和delete却不行</strong> 使用智能指针可以减少内存释放的工作量</p><p>智能指针是存储指向动态分配(堆)对象指针的类，用于生存期的控制，能够确保在离开指针所在作用域时，自动地销毁动态分配的对象，防止内存泄露。智能指针的核心实现技术是引用计数，每使用它一次，内部引用计数加1，每析构一次内部的引用计数减1，减为0时，删除所指向的堆内存。</p><p>需要引用头文件&lt; memory &gt;，空指针不需要</p><h1 id="nullptr空指针-指针字面量" tabindex="-1"><a class="header-anchor" href="#nullptr空指针-指针字面量"><span>nullptr空指针（指针字面量）</span></a></h1><h2 id="零值整数字面量" tabindex="-1"><a class="header-anchor" href="#零值整数字面量"><span>零值整数字面量</span></a></h2><p>在C++标准中有一条特殊的规则，即0既是一个整型常量，又是一个空指针常量。0作为空指 针常量还能隐式地转换为各种指针类型。 NULL是一个宏，在C++11标准之前其本质就是0</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#ifndef NULL  </span></span>
<span class="line"><span>    #ifdef __cplusplus  </span></span>
<span class="line"><span>        #define NULL 0</span></span>
<span class="line"><span>    #else</span></span>
<span class="line"><span>        #define NULL ((void *)0)</span></span>
<span class="line"><span>    #endif</span></span>
<span class="line"><span>#endif</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C++将NULL定义为0，而C语言将NULL定义为(void * )0。之所以有所区别， 是因为C++和C的标准定义不同，C++标准中定义空指针常量是评估为0的整数类型的常量表达式右值，而C标准中定义0为整型常量或者类型为void * 的空指针常量。</p><p>使用0代表不同类型的特殊规则给C++带来了二义性，对C++的学习和使用造成了不小的麻 烦</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 例子1  </span></span>
<span class="line"><span>void f(int) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;int&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void f(char *) {  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;char *&quot; &lt;&lt; endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    f(NULL);  </span></span>
<span class="line"><span>    f(reinterpret_cast&lt;char *&gt;(NULL));  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>f(NULL)函数调用的是f(int)函数，因为NULL会被优先解析为整数类型。没有 办法让编译器自动识别传入NULL的意图，除非使用类型转换，将NULL转换到 char*，f(reinterpret_cast(NULL))可以正确地调用f(char * )函数。上面的代码可以在MSVC中编译执行。在GCC中，我们会得到一个NULL有二义性的错误提示。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 例子2  </span></span>
<span class="line"><span>string s1(false);  </span></span>
<span class="line"><span>string s2(true);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码可以用MSVC编译，其中s1可以成功编译，但是s2则会编译失败。原因是false被隐 式转换为0，而0又能作为空指针常量转换为const char * const，所以s1可以编译成功，true则没有 这样的待遇。在GCC中，编译器对这种代码也进行了特殊处理，如果用C++11(-std=c++11)及其之 后的标准来编译，则两条代码均会报错。但是如果用C++03以及之前的标准来编译，则虽然第一 句代码能编译通过，但会给出警告信息，第二句代码依然编译失败。</p><h2 id="nullptr关键字" tabindex="-1"><a class="header-anchor" href="#nullptr关键字"><span>nullptr关键字</span></a></h2><p>nullptr表示空指针的字面量，它是一个std::nullptr_t类型的纯右值。 nullptr无法隐式转换为整形，但可以隐式匹配指针类型 它不允许运用在算术表达式中或者与非指针类型进行比较（除了空指针常量0）。它还可以隐式转换为各种指针类型，但是无法隐式转换到非指针类型。 0依然保留着可以代表整数和空 指针常量的特殊能力，保留这一点是为了让C++11标准兼容以前的C++代码。</p><p>将指针变量初始化为0或者nullptr的效果是一样的，在初始化以后它们也能够与0或者nullptr 进行比较。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>cout&lt;&lt;boolalpha&lt;&lt;( nullptr==0)&lt;&lt;endl;//true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>虽然nullptr可以和0 进行比较，但这并不代表它的类型为整型，同时它也不能隐式转换为整型</p><h2 id="nullptr-t类型" tabindex="-1"><a class="header-anchor" href="#nullptr-t类型"><span>nullptr_t类型</span></a></h2><p>它并不是一个关键字，而是使用decltype将nullptr 的类型定义在代码中，C++标准规定该类型的长度和void * 相同</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>namespace std  </span></span>
<span class="line"><span>{  </span></span>
<span class="line"><span>    using nullptr_t = decltype(nullptr);  </span></span>
<span class="line"><span>    // 等价于  </span></span>
<span class="line"><span>    typedef decltype(nullptr) nullptr_t;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>cout&lt;&lt;boolalpha&lt;&lt;(sizeof(nullptr_t) == sizeof(void *))&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用std::nullptr_t去创建自己的nullptr，并且有与nullptr相同的功能：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>nullptr_t null1, null2;  </span></span>
<span class="line"><span>char* ch = null1;  </span></span>
<span class="line"><span>char* ch2 = null2;  </span></span>
<span class="line"><span>assert(ch == 0);  </span></span>
<span class="line"><span>assert(ch == nullptr);  </span></span>
<span class="line"><span>assert(ch == null2);  </span></span>
<span class="line"><span>assert(null1 == null2);  </span></span>
<span class="line"><span>assert(nullptr == null1);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然这段代码中null1、null2和nullptr的能力相同，但是它们还是有很大区别 nullptr是关键字，而其他两个是声明的变量。nullptr是一个纯右值，而其他两个是左值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>nullptr_t null1, null2;  </span></span>
<span class="line"><span>cout &lt;&lt; &quot;&amp;null1 = &quot; &lt;&lt; &amp;null1 &lt;&lt; endl; // null1和null2是左值，可  </span></span>
<span class="line"><span>// 以成功获取对象指针，  </span></span>
<span class="line"><span>cout &lt;&lt; &quot;&amp;null2 = &quot; &lt;&lt; &amp;null2 &lt;&lt; endl; // 并且指针指向的内存地址不同  </span></span>
<span class="line"><span>cout &lt;&lt; &amp;nullptr &lt;&lt;endl;//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void f(int) {cout &lt;&lt; &quot;int&quot; &lt;&lt; endl;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void f(char *) {cout &lt;&lt; &quot;char *&quot; &lt;&lt; endl;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    f(nullptr);//char *  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>f(nullptr)会调用f(char * )，因为nullptr可以隐式转换为指针类型，而无法隐式转 换为整型，所以编译器会找到形参为指针的函数版本。 不过，如果这份代码中出现多个形参是指 针的函数，则使用nullptr也会产生二义性，因为nullptr可以隐式转换为任何指针类型，所以编译 器无法决定应该调用哪个形参为指针的函数。</p><p>使用nullptr可以为函数模板或者类设计一些空指针类型的特化版本。 在C++11以前这是不可能实现的，因为0的推导类型是int而不是空指针类型。现在可以利用 nullptr的类型为std::nullptr_t写出下面的代码</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>struct widget {  </span></span>
<span class="line"><span>    widget() {cout &lt;&lt; &quot;template&quot; &lt;&lt; endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>struct widget&lt;nullptr_t&gt; {  </span></span>
<span class="line"><span>    widget() {cout &lt;&lt; &quot;nullptr&quot; &lt;&lt; endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>widget&lt;T&gt; *make_widget(T) {  </span></span>
<span class="line"><span>    return new widget&lt;T&gt;();  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    auto w1 = make_widget(0);  </span></span>
<span class="line"><span>    auto w2 = make_widget(nullptr);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="shared-ptr共享指针" tabindex="-1"><a class="header-anchor" href="#shared-ptr共享指针"><span>shared_ptr共享指针</span></a></h1><h6 id="成员函数" tabindex="-1"><a class="header-anchor" href="#成员函数"><span>成员函数</span></a></h6><pre><code>use_count() 查看当前有多少智能指针控制这块内存
get() 返回管理对象的内存地址
</code></pre><h6 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>std::shared_ptr&lt;T&gt; 名字(创建堆内存);//通过构造函数初始化</span></span>
<span class="line"><span>shared_ptr&lt;T&gt; 名字=要拷贝的指针;//通过拷贝初始化</span></span>
<span class="line"><span>shared_ptr&lt;T&gt; 名字=move(要拷贝的指针);//通过移动初始化</span></span>
<span class="line"><span>shared_ptr&lt;T&gt; make_shared(Args&amp;&amp;……args);//通过make_shared初始化</span></span>
<span class="line"><span>//reset操作时直接指定另一块内存（重置指针，让指针指向新的内存）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Args&amp;&amp;……args：要初始化的数据 如果通过make_shared创建对象，需要根据构造函数的参数列表指定</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    int num;  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    A(){cout&lt;&lt;&quot;默认构造函数&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    A(int x):num(x){cout&lt;&lt;&quot;构造函数&quot;&lt;&lt;x&lt;&lt;endl;}  </span></span>
<span class="line"><span>    A(string s){cout&lt;&lt;&quot;构造函数&quot;&lt;&lt;s&lt;&lt;endl;}  </span></span>
<span class="line"><span>    ~A(){cout&lt;&lt;&quot;析构函数&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void setvalue(int x){num=x;}  </span></span>
<span class="line"><span>    void print(){cout&lt;&lt;num&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过构造函数初始化  </span></span>
<span class="line"><span>shared_ptr&lt;int&gt; p1(new int(3));  </span></span>
<span class="line"><span>cout&lt;&lt;p1.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>//通过移动构造函数初始化  </span></span>
<span class="line"><span>shared_ptr&lt;int&gt; p2= move(p1);  </span></span>
<span class="line"><span>cout&lt;&lt;p1.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>cout&lt;&lt;p2.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>//通过拷贝构造函数初始化  </span></span>
<span class="line"><span>shared_ptr&lt;int&gt; p3=p2;//因为p1的数据已经转移，p1本身已经没有数据了  </span></span>
<span class="line"><span>cout&lt;&lt;p3.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>cout&lt;&lt;p2.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>//通过make_shared初始化  </span></span>
<span class="line"><span>shared_ptr&lt;int&gt; p4= make_shared&lt;int&gt;(6);  </span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p5= make_shared&lt;A&gt;(6);//调用带整形参数的构造函数  </span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p6= make_shared&lt;A&gt;(&quot;tom&quot;);//调用带字符串参数的构造函数  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//通过reset初始化  </span></span>
<span class="line"><span> p6.reset();  </span></span>
<span class="line"><span>cout&lt;&lt;p6.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>p5.reset(new A());  </span></span>
<span class="line"><span>cout&lt;&lt;p6.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>//获取原始指针  </span></span>
<span class="line"><span>cout&lt;&lt;p5.get()&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="删除器" tabindex="-1"><a class="header-anchor" href="#删除器"><span>删除器</span></a></h3><p>当智能指针管理的内存计数变为0时，这块内存就会被智能指针释放，调用自带的删除函数。 我们也能自己指定删除器函数（在初始化智能指针时在指向地址后面再传入一个地址）本质是一个回调函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>shared_ptr&lt;A&gt; p1(new A(6),[](A* a){delete a;});  </span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p2(new A[5]);//只析构了一次</span></span>
<span class="line"><span>shared_ptr&lt;A[]&gt; p2(new A[5]);//11标准之后在模板参数中也指定为数组类型也能删除数组了</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自带的删除器函数不能删除数组类型，因此如果是数组类型的需要自己指定删除器函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>shared_ptr&lt;A&gt; p2(new A[5],[](A* a){delete []a;});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在删除数组的时候除了自己编写删除器也可以使用编译器提供的defult_delete&lt; T&gt;()函数作为删除器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>shared_ptr&lt;A&gt; p3(new A[5],default_delete&lt;A[]&gt;());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="unique-ptr独占指针" tabindex="-1"><a class="header-anchor" href="#unique-ptr独占指针"><span>unique_ptr独占指针</span></a></h1><p>独占的智能指针计数永远是1，如果新的独占指针想要管理这块内存就需要使用move进行转移</p><p>初始化</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>unique_ptr&lt;T&gt; 名字(创建堆内存);//通过构造函数初始化</span></span>
<span class="line"><span>unique_ptr&lt;T&gt; 名字=move(要移动的独占指针);//通过移动构造函数初始化，不能通过拷贝构造初始化</span></span>
<span class="line"><span>unique_ptr&lt;T&gt; 名字=func();//函数的返回值类型是一个同类型的独占指针，这个指针即将被销毁所以可以赋值给新的独占指针</span></span>
<span class="line"><span>//通过reset初始化</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//通过构造函数初始化  </span></span>
<span class="line"><span>unique_ptr&lt;int&gt; p1(new int(9));  </span></span>
<span class="line"><span>//通过移动构造函数初始化  </span></span>
<span class="line"><span>unique_ptr&lt;int&gt; p2= move(p1);  </span></span>
<span class="line"><span>//通过reset初始化  </span></span>
<span class="line"><span>p2.reset(new int(8));  </span></span>
<span class="line"><span>//获取原始指针  </span></span>
<span class="line"><span>unique_ptr&lt;A&gt; p3(new A(1));  </span></span>
<span class="line"><span>cout&lt;&lt;&amp;p3&lt;&lt;endl;  </span></span>
<span class="line"><span>cout&lt;&lt;p3.get()&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除器-1" tabindex="-1"><a class="header-anchor" href="#删除器-1"><span>删除器</span></a></h3><p>unique_ptr 指定删除器和 shared_ptr 指定删除器是有区别的，unique_ptr 指定删除器的时候还需要在模板参数里面确定删除器的类型，所以不能像shared_ptr 那样直接指定删除器 删除器一般都是函数，所以在指定函数类型的时候指定的都是函数指针</p><p>匿名函数在C++中默认看成仿函数（如果不对外部变量进行捕捉，可以看作是一个函数指针，如果对外部变量进行捕捉就会看作是个仿函数） 仿函数定义函数指针就不好使了，所以就需要可调用对象包装器对其包装，再把类型指定过去</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef void(*funptr)(A*);  </span></span>
<span class="line"><span>unique_ptr&lt;A,funptr&gt; p1(new A(&quot;tom&quot;),[](A* a){delete a;});  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>unique_ptr&lt; A,function&lt;void(A*)&gt; &gt; p2(new A(&quot;jerry&quot;),[=](A* a){delete a;});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>unique_ptr 可以管理数组类型的地址，能够自动释放</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>unique_ptr&lt;A[]&gt; p1(new A[5]);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="weak-ptr弱引用指针" tabindex="-1"><a class="header-anchor" href="#weak-ptr弱引用指针"><span>weak_ptr弱引用指针</span></a></h1><p>不共享指针，不能操作资源，是用来辅助shared_ptr的，因此这个weak_ptr也能监测shared_ptr指向的地址，因为是监测，所以不影响共享指针的计数</p><p>初始化</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>weak_ptr&lt;int&gt; wp1; //构造了一个空weak_ptr对象</span></span>
<span class="line"><span>weak_ptr&lt;int&gt; wp2(wp1); //通过一个空weak_ptr对象构造了另一个空weak_ptr对象Pweak_ptr&lt;int&gt; wp3(sp); //通过一个shared_ptr对象构造了一个可用的weak_ptr实例对象</span></span>
<span class="line"><span>wp4 = sp;//通过一个shared ptr对象构造了一个可用的weak_ptr实例对象(这是一个隐式类型转换)</span></span>
<span class="line"><span>wp5 = wp3; //通过一个weak_ptr对象构造了一个可用的weak_ptr实例对象</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成员函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>use_count();//返回当前观测资源的引用计数</span></span>
<span class="line"><span>expired();//判断当前观测对象释放被释放，true表示被释放，false表示未被释放</span></span>
<span class="line"><span>lock();//返回管理所监测资源的shared_ptr对象</span></span>
<span class="line"><span>reset();//重置弱引用智能指针对象</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不能使用一个<mark>原始地址</mark>初始化多个共享智能指针</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    A(){cout&lt;&lt;&quot;构造函数&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    shared_ptr&lt;A&gt; get(){return shared_ptr&lt;A&gt;(this);}  </span></span>
<span class="line"><span>    ~A(){cout&lt;&lt;&quot;析构函数&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>A* a=new A;  </span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p1(a);  </span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p2(a);  </span></span>
<span class="line"><span>//shared_ptr&lt;A&gt; p2=p1;//ok</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造只构造一次，但析构两次</p><h3 id="使用的两种场景" tabindex="-1"><a class="header-anchor" href="#使用的两种场景"><span>使用的两种场景</span></a></h3><ol><li>当函数返回值返回的是shared_ptr包装的一个this指针，这个指针就会被释放两次</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>shared_ptr&lt;A&gt; get(){return shared_ptr&lt;A&gt;(this);}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>一个模板类叫做 std::enable_shared_from_this&lt; T &gt;，这个类中有一个方法叫做shared_from_this()，通过这方法可以返回一个共享智能指针法返回一个智能指针。 在函数的内部就是使用 weak ptr 来监测 this 对象，并通过调用weak_ptr 的 lock()方法返回一个shared_ptr 对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A:public enable_shared_from_this&lt;A&gt;{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    A(){cout&lt;&lt;&quot;构造函数&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    shared_ptr&lt;A&gt; get(){return shared_from_this();}  </span></span>
<span class="line"><span>    ~A(){cout&lt;&lt;&quot;析构函数&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p1(new A);  </span></span>
<span class="line"><span>shared_ptr&lt;A&gt; p2=p1-&gt;get();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>循环引用 一个智能指针对象指向另一个智能指针对象，这个智能指针对象又指向原来的智能指针对象，这样导致在释放的时候计数永远不为0</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class B;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    shared_ptr&lt;B&gt; pb;  </span></span>
<span class="line"><span>    A(){cout&lt;&lt;&quot;A struct&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    ~A(){cout&lt;&lt;&quot;A disstruct&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>class B{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    shared_ptr&lt;A&gt; pa;</span></span>
<span class="line"><span>    B(){cout&lt;&lt;&quot;B struct&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    ~B(){cout&lt;&lt;&quot;B disstruct&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>shared_ptr&lt;A&gt; ap(new A);  </span></span>
<span class="line"><span>shared_ptr&lt;B&gt; bp(new B);  </span></span>
<span class="line"><span>cout&lt;&lt;&#39;a&#39;&lt;&lt;ap.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>cout&lt;&lt;&#39;b&#39;&lt;&lt;bp.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>ap-&gt;pb=bp;  </span></span>
<span class="line"><span>bp-&gt;pa=ap;  </span></span>
<span class="line"><span>cout&lt;&lt;&#39;a&#39;&lt;&lt;ap.use_count()&lt;&lt;endl;  </span></span>
<span class="line"><span>cout&lt;&lt;&#39;b&#39;&lt;&lt;bp.use_count()&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>虽然没报错但A和B并没有析构 这种情况类A和B其中一个的shared_ptr改成weak_ptr即可或两个都改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    weak_ptr&lt;B&gt; pb;  </span></span>
<span class="line"><span>    A(){cout&lt;&lt;&quot;A struct&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    ~A(){cout&lt;&lt;&quot;A disstruct&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="默认模板参数" tabindex="-1"><a class="header-anchor" href="#默认模板参数"><span>默认模板参数</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename T=long,typename U=int&gt;  </span></span>
<span class="line"><span>void fun(T t=&#39;a&#39;,U u=&#39;b&#39;){  </span></span>
<span class="line"><span>    cout&lt;&lt;t&lt;&lt;&#39;,&#39;&lt;&lt;u&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>fun(&#39;a&#39;,&#39;b&#39;); //a,b </span></span>
<span class="line"><span>fun();//97,98</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用函数如果有参数就按照参数的类型进行处理 如果没有参数就按照默认类型转换（fun()运行默认把a和b转换成long和int型）</p><h1 id="可调用对象包装器、绑定器" tabindex="-1"><a class="header-anchor" href="#可调用对象包装器、绑定器"><span>可调用对象包装器、绑定器</span></a></h1><h2 id="可调用对象" tabindex="-1"><a class="header-anchor" href="#可调用对象"><span>可调用对象</span></a></h2><p>函数指针、具有operator()的类对象(仿函数)、可被转换为函数指针的类对象、类成员的函数指针或类成员指针</p><h3 id="将类对象转换为函数指针" tabindex="-1"><a class="header-anchor" href="#将类对象转换为函数指针"><span>将类对象转换为函数指针</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef void(*funcptr)(int,string);  </span></span>
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
<span class="line"><span>c.notify(3,&quot;cx&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="可调用对象绑定器" tabindex="-1"><a class="header-anchor" href="#可调用对象绑定器"><span>可调用对象绑定器</span></a></h2>`,94)),l("p",null,[s[0]||(s[0]=n("std")),i(a,{provider:"iconify",name:"bind用来将可调用对象与其参数一起进行绑定。绑定后的结果可以使用std"}),s[1]||(s[1]=n("function进行保存，并延迟调用到任何我们需要的对象 作用 1、将可调用对象与其参数一起绑定成一个")),s[2]||(s[2]=l("mark",null,"仿函数",-1)),s[3]||(s[3]=n(" 2、将多元（参数个数为m,n>1）可调用对象转换为一元或者(n+1)元可调用对向，即只绑定部分参数 语法"))]),s[9]||(s[9]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//绑定非类成员函数/变量</span></span>
<span class="line"><span>auto f=std::bind(可调用对象地址,绑定的参数/占位符);</span></span>
<span class="line"><span>//绑定类成员函数/变量</span></span>
<span class="line"><span>auto f=std::bind(类函数/成员地址,类实例对象地址,绑定的参数/占位符);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态函数不属于类对象，因此应当使用第一种方式 绑定器返回的是一个仿函数类型，得到的返回值可以直接赋值给一个std::function，在使用的时候我们不需要关心绑定器的放回值类型，使用auto进行了自动类型推导即可</p><h3 id="占位符" tabindex="-1"><a class="header-anchor" href="#占位符"><span>占位符</span></a></h3>`,3)),l("p",null,[s[4]||(s[4]=n("placeholders")),i(a,{provider:"iconify",name:"_",extra:""}),s[5]||(s[5]=n("_ 1、placeholders")),i(a,{provider:"iconify",name:"_",extra:""}),s[6]||(s[6]=n("_ 3、placeholders")),i(a,{provider:"iconify",name:"_",extra:""}),s[7]||(s[7]=n("_ 5等 占位符在调用时就转换为后面小括号里传入的参数 占位符后面的数是多少就表示找后面小括号里第几个参数"))]),s[10]||(s[10]=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void test(int a,int s){cout&lt;&lt;&quot;普通函数&quot;&lt;&lt;a&lt;&lt;s&lt;&lt;endl;}</span></span>
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
<span class="line"><span>cout&lt;&lt;f2()&lt;&lt;endl;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const b=p(c,[["render",v]]),m=JSON.parse('{"path":"/cpp/modern-cpp/6/","title":"6 指针","lang":"zh-CN","frontmatter":{"title":"6 指针","createTime":"2025/06/22 12:06:08","permalink":"/cpp/modern-cpp/6/"},"readingTime":{"minutes":15.28,"words":4585},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/现代C++特性/6 指针.md","headers":[]}');export{b as comp,m as data};
