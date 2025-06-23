import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h2 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数"><span>默认参数</span></a></h2><p>C++中函数的形参列表可以有默认值 有默认值的形参后面的形参也必须有默认值 如果函数声明有默认参数，函数实现就不能有默认参数(声明和实现只能有一个有默认参数)</p><h2 id="占位参数" tabindex="-1"><a class="header-anchor" href="#占位参数"><span>占位参数</span></a></h2><p>形参列表中只写数据类型不写形参名占位参数用来占位，调用函数时必须填补该位置 函数重载能用到 可以有默认值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void func(int a,int){</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void func(int a,int=10){</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数重载function-overload" tabindex="-1"><a class="header-anchor" href="#函数重载function-overload"><span>函数重载function overload</span></a></h2><p>在同一作用域下，函数名称相同，函数的形参列表不同（类型，个数，顺序）即可构成函数重载(const、引用也可以作为函数重载的条件) 调用函数的时候传入不同的参数就决定了编译器会选择哪一个函数 函数的返回值不可作为函数重载的条件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void func() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;func()调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void func(int a) {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;func(int a)调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    func();</span></span>
<span class="line"><span>    func(2);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>const加在后面可以与非const构成overload关系</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void f() { cout &lt;&lt; &quot;f()&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>void f() const { cout . &lt;&lt; &quot;f() const&quot; &lt;&lt; endl; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数表不同</p><h3 id="函数重载遇到默认参数" tabindex="-1"><a class="header-anchor" href="#函数重载遇到默认参数"><span>函数重载遇到默认参数</span></a></h3><p>会出现二义性（歧义）报错，尽量避免这种情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void func(int a,int b=10) {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;func()调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void func(int a) {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;func(int a)调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    func(2);//error</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="成员指针" tabindex="-1"><a class="header-anchor" href="#成员指针"><span>成员指针</span></a></h1><p>成员指针分为成员函数指针和数据成员指针 数据成员指针和虚函数成员指针并没有真正的指向一个地址，它表示的是在当前类中那个字段的位置。类似于偏移量 成员函数指针则是真正存储了一个地址</p><p>const修饰的对象只能调用const修饰的函数 其const修饰的函数是这样的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void func()const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="类对象作为类的成员" tabindex="-1"><a class="header-anchor" href="#类对象作为类的成员"><span>类对象作为类的成员</span></a></h1><p>C++中的成员可以是另一个类的对象，我们称该成员为对象成员 当其他类的对象作为本类的成员的时候会先调用其他类的构造，后调用本类的构造</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{}</span></span>
<span class="line"><span>class B{</span></span>
<span class="line"><span>	A a;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员"><span>静态成员</span></a></h1><p>在成员变量和成员函数前加关键字static，称为静态成员</p><h2 id="静态成员变量" tabindex="-1"><a class="header-anchor" href="#静态成员变量"><span>静态成员变量</span></a></h2><h4 id="所有对象共享同一份数据" tabindex="-1"><a class="header-anchor" href="#所有对象共享同一份数据"><span>所有对象共享同一份数据</span></a></h4><p>另外一个变量把它改了所有这个属性的变量也都发生更改</p><h4 id="在编译阶段分配内存" tabindex="-1"><a class="header-anchor" href="#在编译阶段分配内存"><span>在编译阶段分配内存</span></a></h4><h4 id="类内声明-类外初始化-必须要的操作" tabindex="-1"><a class="header-anchor" href="#类内声明-类外初始化-必须要的操作"><span>类内声明，类外初始化（必须要的操作）</span></a></h4><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	static int m_a;//类内声明</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>	static int m_b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int Person::m_a=100;//类外初始化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//共享数据</span></span>
<span class="line"><span>Person p;</span></span>
<span class="line"><span>cout&lt;&lt;p.m-a&lt;&lt;endl;//100</span></span>
<span class="line"><span>Person p2;</span></span>
<span class="line"><span>p2.m_a=200;</span></span>
<span class="line"><span>cout&lt;&lt;p.m_a&lt;&lt;endl;//200</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过类名访问</span></span>
<span class="line"><span>cout&lt;&lt;Person::m_a&lt;&lt;endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cout&lt;&lt; Person::m_b&lt;&lt;endl;//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="可以直接通过类名进行访问" tabindex="-1"><a class="header-anchor" href="#可以直接通过类名进行访问"><span>可以直接通过类名进行访问</span></a></h4><h4 id="静态成员变量也是有访问权限的-类外访问不到私有的静态成员变量" tabindex="-1"><a class="header-anchor" href="#静态成员变量也是有访问权限的-类外访问不到私有的静态成员变量"><span>静态成员变量也是有访问权限的，类外访问不到私有的静态成员变量</span></a></h4><h2 id="静态成员函数" tabindex="-1"><a class="header-anchor" href="#静态成员函数"><span>静态成员函数</span></a></h2><h4 id="所有对象共享同一个函数" tabindex="-1"><a class="header-anchor" href="#所有对象共享同一个函数"><span>所有对象共享同一个函数</span></a></h4><h4 id="静态成员函数只能访问静态成员变量" tabindex="-1"><a class="header-anchor" href="#静态成员函数只能访问静态成员变量"><span>静态成员函数只能访问静态成员变量</span></a></h4><p>无法区分到底是哪个对象的非静态成员变量</p><h4 id="也可以通过对象访问和通过类名访问" tabindex="-1"><a class="header-anchor" href="#也可以通过对象访问和通过类名访问"><span>也可以通过对象访问和通过类名访问</span></a></h4><h2 id="静态成员函数也有访问权限" tabindex="-1"><a class="header-anchor" href="#静态成员函数也有访问权限"><span>静态成员函数也有访问权限</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	static void func(){</span></span>
<span class="line"><span>		m_a=100;//静态成员函数可以访问静态成员变量</span></span>
<span class="line"><span>		m_b=200;//error    静态函数不能访问非静态的成员变量</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	static int m_a;</span></span>
<span class="line"><span>	int m_b;</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int Person::m_a;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过对象访问</span></span>
<span class="line"><span>Person p;</span></span>
<span class="line"><span>p.func();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//通过类名访问</span></span>
<span class="line"><span>Person::func;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="成员变量和成员函数分开存储" tabindex="-1"><a class="header-anchor" href="#成员变量和成员函数分开存储"><span>成员变量和成员函数分开存储</span></a></h1><p>空对象占用的内存空间为1 编译器会给每个空对象也分配一个字节空间，是为了区分空对象占内存的位置 每个对象都有独一无二的内存地址</p><p>非静态成员变量属于类对象上 静态成员变量不属于类对象上 非静态成员函数不属于类对象上 静态成员函数不属于类对象上</p><h2 id="this指针" tabindex="-1"><a class="header-anchor" href="#this指针"><span>this指针</span></a></h2><p>相当于 classname * const this；</p><p>指向本类的非静态成员变量</p><p>使用场景 形参和成员变量同名时，可以用this指针区分 在类的非静态成员函数中返回对象本身，可使用return * this</p><p>this指针本质上是一个指针常量，指向不可修改，但指向的对象可以修改 常量（的）指针指向可以修改，指向的对象不可修改</p><h1 id="空指针访问成员函数" tabindex="-1"><a class="header-anchor" href="#空指针访问成员函数"><span>空指针访问成员函数</span></a></h1><p>C++中允许空指针调用成员函数，但要注意有没有用到this指针</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int m_age=18;  </span></span>
<span class="line"><span>    void show_name(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;name is showed&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void show_age(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;age is&quot;&lt;&lt;m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person*p=NULL;  </span></span>
<span class="line"><span>    p-&gt;show_name();  //ok</span></span>
<span class="line"><span>    p-&gt;show_age();  //error</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>class中的属性都默认加了this指针，即 this-&gt;m_age 使用空指针调用类函数并没有创建对象并没有实体因此没有指向确切的数据，有的ide会报错有的不会输出m_age</p><h1 id="const与mutable修饰成员" tabindex="-1"><a class="header-anchor" href="#const与mutable修饰成员"><span>const与mutable修饰成员</span></a></h1><h2 id="常-成员-函数" tabindex="-1"><a class="header-anchor" href="#常-成员-函数"><span>常（成员）函数</span></a></h2><p>成员函数后加const就是常函数 常函数不可修改成员属性 成员属性声明时加关键字mutable后在常函数中依旧可以修改</p><p>在成员函数后面加const修饰的是this的指向让this指向的值不可修改，相当于把原来classname * const this;改为const classname * const this;</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int m_a;  </span></span>
<span class="line"><span>    mutable int m_b;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void show() const  </span></span>
<span class="line"><span>    {  </span></span>
<span class="line"><span>        this-&gt;m_a=100;//error  </span></span>
<span class="line"><span>        this-&gt;m_b=100;//ok  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void func(){}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    const Person p;  </span></span>
<span class="line"><span>    p.m_a=100;//error  </span></span>
<span class="line"><span>    p.m_b=100;//ok  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    p.func();//error  </span></span>
<span class="line"><span>    p.show();//ok  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="常-成员-对象" tabindex="-1"><a class="header-anchor" href="#常-成员-对象"><span>常（成员）对象</span></a></h2><p>声明对象前加const就是常对象 常对象只能调用常函数 mutable修饰的变量在常对象下也能修改</p><p>都是由编译器自动调用的 构造函数和析构函数不需要定义返回值，是跟类名同名的函数，析构函数前面加~ 构造函数和析构函数不能私有 构造和析构都是必须有的实现，如果我们自己不提供，编译器会提供一个空实现的构造和析构</p><h1 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h1><p>使用类构建的时候自动调用该函数 主要用在创建对象时为对象的成员属性赋值 可以有参数，因此可以构成函数重载</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h2><p>按参数分：有参构造、无参构造（默认构造）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person(){}//无参构造</span></span>
<span class="line"><span>Person(int a){}//有参构造</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>按类型分：普通构造、拷贝构造</p><h3 id="拷贝构造" tabindex="-1"><a class="header-anchor" href="#拷贝构造"><span>拷贝构造</span></a></h3><p>把传入函数的所有属性拷贝到本函数身上</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person(int a) {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person(const Person&amp; p) {</span></span>
<span class="line"><span>	age=p.age;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person p1(20);</span></span>
<span class="line"><span>Person p2(p1);//拷贝构造</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h4><p>1、使用一个已经创建完毕的对象初始化一个新对象</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Person() {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;无参构造构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Person(int age) {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;有参构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        m_age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Person(const Person&amp; p) {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;拷贝构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        m_age = p.m_age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~Person() {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;默认析构函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int m_age;</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test1() {</span></span>
<span class="line"><span>    Person p1(20);</span></span>
<span class="line"><span>    Person p2(p1);</span></span>
<span class="line"><span>    cout &lt;&lt; p2.m_age &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>2、值传递的方式给函数参数传值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void dowork(Person &amp;p) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test2() {</span></span>
<span class="line"><span>    Person p;</span></span>
<span class="line"><span>    dowork(p);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、以值方式返回局部对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person dowork2() {</span></span>
<span class="line"><span>    Person p1;</span></span>
<span class="line"><span>    return p1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test3() {</span></span>
<span class="line"><span>    Person p = dowork2();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝"><span>浅拷贝</span></a></h4><p>简单的赋值拷贝操作 编译器默认提供的拷贝构造函数就是浅拷贝</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int *m_age;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    Person(int age){  </span></span>
<span class="line"><span>        m_age=new int(age);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    ~Person(){  </span></span>
<span class="line"><span>        if(m_age!=NULL){  </span></span>
<span class="line"><span>            delete m_age;  </span></span>
<span class="line"><span>            m_age=NULL;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person p1(18);  </span></span>
<span class="line"><span>    Person p2(20);  </span></span>
<span class="line"><span>    p2=p1;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p1.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p2.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>会造成堆区的内存重复释放 在拷贝时会把数据不动的拷贝过来（只拷贝了指针，没有拷贝指针指向地址上的数据），当析构函数释放内存时第一个变量的析构函数释放了指针指向的内存，第二个变量的指针也指向同样的内存，当第二个变量的析构函数释放指针指向的内存时该内存已经释放过了</p><p>浅拷贝的问题要利用深拷贝解决</p><h4 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝"><span>深拷贝</span></a></h4><p>在堆区重新申请空间，进行拷贝操作 拷贝指针的同时也把指针指向的数据拷贝了放到一个新的地址</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Person() {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;无参构造构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Person(int age,int hight) {</span></span>
<span class="line"><span>        m_age = age;</span></span>
<span class="line"><span>        m_hight = new int(hight);</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;有参构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Person(const Person &amp;p) {</span></span>
<span class="line"><span>        m_age = p.m_age;</span></span>
<span class="line"><span>        //浅拷贝</span></span>
<span class="line"><span>        m_hight = p.m_hight;//编译器默认实现的代码</span></span>
<span class="line"><span>        //深拷贝</span></span>
<span class="line"><span>        m_hight = new int(*p.m_hight);</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;拷贝构造函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~Person() {</span></span>
<span class="line"><span>        if (m_hight != NULL) {</span></span>
<span class="line"><span>            delete m_hight;</span></span>
<span class="line"><span>            m_hight = NULL;//防止野指针出现</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;默认析构函数调用&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int m_age;</span></span>
<span class="line"><span>    int* m_hight;</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test1() {</span></span>
<span class="line"><span>    Person p1(18, 170);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;p1的年龄和身高为：&quot; &lt;&lt; p1.m_age&lt;&lt;*p1.m_hight&lt;&lt; endl;</span></span>
<span class="line"><span>    Person p2(p1);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;p2的年龄和身高为：&quot; &lt;&lt; p2.m_age&lt;&lt;*p2.m_hight&lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="调用方法" tabindex="-1"><a class="header-anchor" href="#调用方法"><span>调用方法</span></a></h2><h4 id="括号法" tabindex="-1"><a class="header-anchor" href="#括号法"><span>括号法</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person p1;</span></span>
<span class="line"><span>Person p2(10);</span></span>
<span class="line"><span>Person p3(p2);</span></span>
<span class="line"><span>Person p12();//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用默认构造函数时候，不要加(),编译器会认为是一个函数的声明,不会认为在创建对象</p><h4 id="显示法" tabindex="-1"><a class="header-anchor" href="#显示法"><span>显示法</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person p1;</span></span>
<span class="line"><span>Person p2 = Person(10);</span></span>
<span class="line"><span>Person p3 = Person(p2); </span></span>
<span class="line"><span>Person(10); // 匿名对象 特点: 当前行执行结束后，系统会立即回收掉匿名对象</span></span>
<span class="line"><span>Person(p3);//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不要利用拷贝构造函数 初始化匿名对象 编译器会认为 Person (p3) == Person p3:对像</p><h4 id="隐式转换法" tabindex="-1"><a class="header-anchor" href="#隐式转换法"><span>隐式转换法</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person p4 = 10://相当于写了 Person p4 = Person(10);</span></span>
<span class="line"><span>Person p5 = p4;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用规则" tabindex="-1"><a class="header-anchor" href="#调用规则"><span>调用规则</span></a></h2><p>默认情况下C++编译器至少给一个类添加三个函数 1、默认构造函数 2、默认析构函数 3、默认拷贝函数，对属性值进行值拷贝</p><p>如果用户定义有参构造函数，C++不再提供默认无参构造函数，但会提供默认拷贝构造函数 如果用户定义拷贝构造函数，C++不会再提供其他构造函数</p><h1 id="析构函数" tabindex="-1"><a class="header-anchor" href="#析构函数"><span>析构函数</span></a></h1><p>类销毁时自动调用该函数 主要作用于一些清理工作 没有参数，因此无法构成函数重载 通常将开辟的堆区数据做释放操作</p>`,96)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/cpp/cpp/5/","title":"5、类和对象","lang":"zh-CN","frontmatter":{"title":"5、类和对象","createTime":"2025/06/22 11:15:08","permalink":"/cpp/cpp/5/"},"readingTime":{"minutes":8.53,"words":2559},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/5、类和对象.md","headers":[]}');export{r as comp,t as data};
