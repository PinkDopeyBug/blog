import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>面向对象的三大特性：封装、继承、多态</p><h1 id="意义" tabindex="-1"><a class="header-anchor" href="#意义"><span>意义</span></a></h1><p>将属性和行为作为一个整体 将属性和行为加以权限控制</p><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化"><span>实例化</span></a></h2><p>通过一个类创建一个对象的过程</p><h1 id="访问限制" tabindex="-1"><a class="header-anchor" href="#访问限制"><span>访问限制</span></a></h1><p>一般一个类的属性放到private中，它的方法放到public中</p><h2 id="public公共权限" tabindex="-1"><a class="header-anchor" href="#public公共权限"><span>public公共权限</span></a></h2><p>公开的，任何人都可以访问</p><h4 id="friend友元" tabindex="-1"><a class="header-anchor" href="#friend友元"><span>friend友元</span></a></h4><p>写在public中，friend的授权是在编译的时候检查的</p><p>friend可以声明别人(可以是别的类，别的函数，别的人的某个函数)是class的朋友，这样别人就能访问class的private了</p><p>在运算符重载的时候用的比较多某些运算符的重载需要friend做授权</p><h5 id="全局函数做友元" tabindex="-1"><a class="header-anchor" href="#全局函数做友元"><span>全局函数做友元</span></a></h5><p>friend 函数声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>friend void visit(int a，int b);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="类做友元" tabindex="-1"><a class="header-anchor" href="#类做友元"><span>类做友元</span></a></h5><p>friend 类声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>friend class name;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="成员函数做友元" tabindex="-1"><a class="header-anchor" href="#成员函数做友元"><span>成员函数做友元</span></a></h5><p>friend 类函数声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>friend void Godgay::visit(int a，int b);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="protected保护权限" tabindex="-1"><a class="header-anchor" href="#protected保护权限"><span>protected保护权限</span></a></h2><p>只有这个类自己以及它的子孙可以访问</p><h2 id="private私有权限" tabindex="-1"><a class="header-anchor" href="#private私有权限"><span>private私有权限</span></a></h2><p>私有的，只有这个类的成员函数才可访问这些成员变量或者成员函数</p><h1 id="class与struct" tabindex="-1"><a class="header-anchor" href="#class与struct"><span>class与struct</span></a></h1><p>c++中结构体跟class很相近，也能在结构体中定义函数 struct包含于class</p><p>在数据极其简单的情况下可以使用struct，但绝大多数情况class更方便</p><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别:</span></a></h3><p>class默认权限是private struct默认权限是public（struct只有public）</p><h1 id="初始化列表" tabindex="-1"><a class="header-anchor" href="#初始化列表"><span>初始化列表</span></a></h1><p>定义函数和参数后加:传参</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>//初始化</span></span>
<span class="line"><span>    Person(int a,int b,int c):m_a(a),m_b(b),m_c(c){}</span></span>
<span class="line"><span>//赋值</span></span>
<span class="line"><span>    Person(int a,int b,int c){</span></span>
<span class="line"><span>	    m_a=a;</span></span>
<span class="line"><span>	    m_b=b;</span></span>
<span class="line"><span>	    m_c=c;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int m_a;  </span></span>
<span class="line"><span>    int m_b;  </span></span>
<span class="line"><span>    int m_c;  </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person(1,2,3);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>初始化顺序是声明的顺序，销毁的顺序是相反的顺序</p><p>好处是可以初始化任何类型的数据 这样的初始化会早于构造函数被执行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Student::Student(string s):name(s) {}</span></span>
<span class="line"><span>Student::Student(string s){name=s;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个是初始化 第二个是先初始化再赋值</p><p>初始化效率比赋值快</p><h1 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h1><h1 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h1><p>子类:派生类 父类:基类，超类 class 子类:继承方式 父类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{}</span></span>
<span class="line"><span>class B : public A{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>父类继承过来的是共性，自己新增的是个性</p><p>具有父类的private属性但是无法访问private 父类中所有非静态成员属性都会被子类继承下去 父类中私有成员属性 是被编译器给隐藏了，因此是访问不到，但是确实被继承下去了</p><h1 id="继承方式" tabindex="-1"><a class="header-anchor" href="#继承方式"><span>继承方式</span></a></h1><p>不管哪种继承子类都无法访问到父类的private属性</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//父类  </span></span>
<span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>protected:  </span></span>
<span class="line"><span>    int b;  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    int c;  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公共继承" tabindex="-1"><a class="header-anchor" href="#公共继承"><span>公共继承</span></a></h2><p>父类中的公共权限成员到子类中依然是公共权限，保护权限成员到子类中依然是保护权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class B:public A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>protected:  </span></span>
<span class="line"><span>    int b;  </span></span>
<span class="line"><span>不可访问:  </span></span>
<span class="line"><span>    int c;  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保护继承" tabindex="-1"><a class="header-anchor" href="#保护继承"><span>保护继承</span></a></h2><p>父类中公共成员、保护成员到子类中变为保护权限</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class C:protected A{  </span></span>
<span class="line"><span>protected:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>    int b;  </span></span>
<span class="line"><span>不可访问:  </span></span>
<span class="line"><span>    int c;  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有继承" tabindex="-1"><a class="header-anchor" href="#私有继承"><span>私有继承</span></a></h2><p>父类中公共成员、保护成员到子类中都变为私有成员</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class D:private A{  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>    int b;  </span></span>
<span class="line"><span>不可访问:  </span></span>
<span class="line"><span>    int c;  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="继承的构造和析构" tabindex="-1"><a class="header-anchor" href="#继承的构造和析构"><span>继承的构造和析构</span></a></h1><p>先构造父类再构造子类，先析构子类再析构父类</p><h1 id="名字隐藏" tabindex="-1"><a class="header-anchor" href="#名字隐藏"><span>名字隐藏</span></a></h1><p>当子类和父类中出现了重复的函数(名字相同，参数表一样)就会屏蔽父类中的所有函数，只存在子类自己的函数(只有c++这么做)</p><p>子类出现和父类同名静态成员函数，也会隐藏父类中所有同名成员函数，如果想访问父类中被隐藏同名成员，需要加作用域</p><p>访问子类同名成员 直接访问即可 访问父类同名成员 需要加作用域 访问静态成员时也可以使用调用静态成员的两种方法</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>    static int b;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void func(){cout &lt;&lt;&quot;类A的函数func()调用&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void func(int a){cout &lt;&lt;&quot;类A函数func()的重载函数调用&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void f(){cout &lt;&lt;&quot;类A的函数f()调用&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    static void g(){cout &lt;&lt;&quot;类A的静态函数g()调用&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int A::b=6;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class B:public A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>    static int b;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void func(){cout &lt;&lt;&quot;类B的函数func()调用&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    static void g(){cout &lt;&lt;&quot;类B的静态函数g()调用&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int B::b=7;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    B b;  </span></span>
<span class="line"><span>    b.func();//直接调用，调用的是子类的同名成员  </span></span>
<span class="line"><span>    b.A::func();//通过子类再声明作用域调用父类同名函数  </span></span>
<span class="line"><span>    //b.func(10);//如果子类中出现和父类同名的成员函数，子类同名成员会隐藏掉父类中所有同名函数的成员（包括重载函数）  </span></span>
<span class="line"><span>    b.A::func(10);//r如果想访问父类中被隐藏的同名成员函数，需要加作用域  </span></span>
<span class="line"><span>    b.f();//不同名函数不会隐藏  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //通过对象访问  </span></span>
<span class="line"><span>    cout&lt;&lt;b.b&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;b.A::b&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //通过类名访问  </span></span>
<span class="line"><span>    cout&lt;&lt;B::b&lt;&lt;endl;  </span></span>
<span class="line"><span>    //此方法是直接通过A访问了A的属性  </span></span>
<span class="line"><span>    cout&lt;&lt;A::b&lt;&lt;endl;  </span></span>
<span class="line"><span>    //第一个::代表通过类名方式访问 第二个::代表访问父类作用域下  </span></span>
<span class="line"><span>    cout&lt;&lt;B::A::b&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //访问静态函数  </span></span>
<span class="line"><span>    //通过对象访问  </span></span>
<span class="line"><span>    b.g();  </span></span>
<span class="line"><span>    b.A::g();  </span></span>
<span class="line"><span>    //通过类名访问  </span></span>
<span class="line"><span>    B::g();  </span></span>
<span class="line"><span>    B::A::g();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承"><span>多继承</span></a></h1><p>C++允许一个类继承多个类</p><h2 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h2><p>class 子类 :继承方式 父类1， 继承方式 父类2... 多继承可能会引发父类中有同名成员出现，需要加作用域区分</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=3;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class B{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a=2;  </span></span>
<span class="line"><span>    int b=4;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class C:public A,public B{  </span></span>
<span class="line"><span>    int c;  </span></span>
<span class="line"><span>    int d;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    C c1;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;sizeof(c1)&lt;&lt;endl;  </span></span>
<span class="line"><span>    //当父类中出现同名成员，需要加作用域区分  </span></span>
<span class="line"><span>    cout &lt;&lt;c1.A::a&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout &lt;&lt;c1.B::a&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="菱形继承" tabindex="-1"><a class="header-anchor" href="#菱形继承"><span>菱形继承</span></a></h2><p>两个派生类继承同一个基类 又有某个类同时继承者两个派生类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>                  A(动物)</span></span>
<span class="line"><span>                /   \\</span></span>
<span class="line"><span>               /     \\</span></span>
<span class="line"><span>	          B(羊)   C(骆驼)</span></span>
<span class="line"><span>	           \\     /</span></span>
<span class="line"><span>	            \\   /</span></span>
<span class="line"><span>	              D(羊驼)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因关系图呈现为菱形故这种继承被称为菱形继承，或者钻石继承</p><p>菱形继承问题: 1.B继承了A的数据，C同样继承了A的数据，当D使用数据时，就会产生二义性. 2.D继承自A的数据继承了两份，其实我们应该清楚，这份数据我们只需要一份就可以。</p><h3 id="虚继承与虚函数" tabindex="-1"><a class="header-anchor" href="#虚继承与虚函数"><span>虚继承与虚函数</span></a></h3><p>虚继承解决菱形继承底层继承的不是数据而是两个指针，两个指针会通过偏移量找到唯一的数据</p><p>继承之前加上关键字 virtual 变为虚继承 类中的函数加上virtual后变为虚函数 被虚继承的父类称为虚基类</p><p>virtual关键字用在class里面</p><p>具有virtual的class正常的所占内存大 virtual的内存开头都有一个隐藏的vbptr指针，指向VTable这张表 vtable里面是它所有virtual函数的地址</p><p>virtual base pointer虚基指针</p><p>如果将来子类的里面重新写了virtual声明的函数那么子类里面那个函数就和这个函数是有联系的，子类和父类的函数才有联系</p><p>析构也是virtual<br> 在父类里用virtual声明的函数在子类里同样的函数可加可不加virtual，不加virtual这个函数也是virtual的，它的后代也是virtual的。只要在它的继承树中有一个是virtual，以后它的子子孙孙都是virtual<br> virtual作用:通过指针或引用调用这个函数的时候，不能直接写进来调到到那个函数，不能确定这个函数是什么类型，只能运行的时候才确定<br> 虚函数表</p><h1 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h1><h1 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h1><p>代码组织结构清晰 可读性强 利于前期和后期的扩展和维护</p><p>提倡开闭原则：对扩展进行开放，对修改进行关闭</p><h1 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h1><h2 id="编译期多态" tabindex="-1"><a class="header-anchor" href="#编译期多态"><span>编译期多态</span></a></h2><p>函数重载就是编译期多态，函数在调用前已经知道传入的参数是重载函数中的其中一个类型</p><h2 id="运行期多态" tabindex="-1"><a class="header-anchor" href="#运行期多态"><span>运行期多态</span></a></h2><p>函数调用前编译器并不知道传入的参数是什么类型 本次学习的多态就是运行期多态</p><h2 id="静态多态" tabindex="-1"><a class="header-anchor" href="#静态多态"><span>静态多态</span></a></h2><p>函数重载和运算符重载属于静态多态，复用函数名</p><h2 id="动态多态" tabindex="-1"><a class="header-anchor" href="#动态多态"><span>动态多态</span></a></h2><p>派生类和虚函数实现运行时多态</p><p>静态多态的函数地址早绑定，编译阶段确定函数地址 动态多态的函数地址晚绑定，运行阶段确定函数地址</p><p>C++为了效率默认静态绑定，其他oop语言都是动态绑定</p><p>C++中允许父子的类型转换，不需要做强制类型转换父类的引用或指针 就可以直接指向子类对象</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Animal{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    void speak(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Animal is speak&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Cat:public Animal{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    void speak(){  </span></span>
<span class="line"><span>        cout &lt;&lt;&quot;Cat is speak&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void dospeak(Animal &amp;animal){  </span></span>
<span class="line"><span>    animal.speak();  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Cat cat;  </span></span>
<span class="line"><span>    dospeak(cat);//Animal  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>把子类传入到使用父类的全局函数中调用的是父类的属性，原因是地址早绑定，在编译阶段就确定了函数地址</p><p>如果想执行子类的属性就需要让这个函数地址不能提前绑定，需要在运行阶段绑定</p><p>在父类的成员函数中加virtual关键字 虚函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Animal{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    virtual void speak(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Animal is speak&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态多态满足条件" tabindex="-1"><a class="header-anchor" href="#动态多态满足条件"><span>动态多态满足条件</span></a></h3><p>1、有继承关系 2、子类重写父类的虚函数</p><h4 id="override覆盖-重写" tabindex="-1"><a class="header-anchor" href="#override覆盖-重写"><span>override覆盖（重写）</span></a></h4><p>重写是函数返回值、函数名、形参列表相同</p><h3 id="动态多态的使用" tabindex="-1"><a class="header-anchor" href="#动态多态的使用"><span>动态多态的使用</span></a></h3><p>父类的指针或引用指向子类对象</p><h1 id="多态原理" tabindex="-1"><a class="header-anchor" href="#多态原理"><span>多态原理</span></a></h1><p>加了virtual关键字的类比正常的类大，多出来的内存存的是一个vfptr（virtual function pointer）指针，vfptr指向一个vftable表，存放虚函数表表的内部记录虚函数的地址</p><p>子类重写父类的虚函数时子类中的虚函数表内部会替换成子类的虚函数地址 当父类的引用或指针指向子类对象时发生多态</p><p>虚基指针和虚函数指针统称虚指针</p><p>父类的函数前的函数前加了virtual关键字后子类重写的函数可加可不加virtual 在一个大的继承树中一旦有一个类的函数加了virtual，其后代的该函数都是虚函数</p><h1 id="纯虚函数和抽象类" tabindex="-1"><a class="header-anchor" href="#纯虚函数和抽象类"><span>纯虚函数和抽象类</span></a></h1><p>堕胎中，通常父类中的虚函数的实现是无意义的，主要都是调用子类重写的内容</p><p>因此可以把虚函数改为纯虚函数</p><h5 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法：</span></a></h5><p>virtual 返回值类型 函数名(参数列表)=0; =0是纯说明符，不可以是其他的 当类中有了纯虚函数，这个类也称为抽象类</p><h5 id="抽象类特点" tabindex="-1"><a class="header-anchor" href="#抽象类特点"><span>抽象类特点：</span></a></h5><p>无法实例化对象 子类必须重写抽象类中的纯虚函数，否则也属于抽象类</p><h1 id="虚析构和纯虚析构" tabindex="-1"><a class="header-anchor" href="#虚析构和纯虚析构"><span>虚析构和纯虚析构</span></a></h1><h6 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h6><p>多态使用时，如果子类中有属性开辟到堆区，那么父类指针在释放时无法调用到子类的析构代码</p><h6 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h6><p>将父类中的析构函数改成虚析构或纯虚析构</p><h6 id="虚析构和纯虚析构共性" tabindex="-1"><a class="header-anchor" href="#虚析构和纯虚析构共性"><span>虚析构和纯虚析构共性</span></a></h6><p>可以解决父类指针释放子类对象 都需要有具体的函数实现</p><h6 id="区别-1" tabindex="-1"><a class="header-anchor" href="#区别-1"><span>区别</span></a></h6><p>如果是纯虚析构，该类属于抽象类无法实例化对象</p><p>纯虚析构既要有声明又要有实现，因为父类有可能一些属性开辟到堆区 类内声明，类外实现</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Animal{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    Animal(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Animal 构造函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    virtual void speak()=0;  </span></span>
<span class="line"><span>    ~Animal(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Animal 析构函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Cat:public Animal{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    string *m_name;  </span></span>
<span class="line"><span>    Cat(string name){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Cat 构造函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>        m_name=new string (name);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    virtual void speak(){  </span></span>
<span class="line"><span>        cout&lt;&lt;*m_name&lt;&lt;&quot; Cat is speaking&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    ~Cat(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Cat 析构函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>        if (m_name!=NULL){  </span></span>
<span class="line"><span>            delete m_name;  </span></span>
<span class="line"><span>            m_name=NULL;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>void test1(){  </span></span>
<span class="line"><span>    Animal*animal=new Cat(&quot;tom&quot;);</span></span>
<span class="line"><span>    animal-&gt;speak();</span></span>
<span class="line"><span>    //父类指针在析构时不会调用子类中析构函数，如果子类中有堆区的对象会导致内存泄漏</span></span>
<span class="line"><span>    delete animal;  </span></span>
<span class="line"><span>    animal=NULL;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    test1();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>----------------结果----------------</span></span>
<span class="line"><span>Animal 构造函数调用</span></span>
<span class="line"><span>Cat构造函数调用</span></span>
<span class="line"><span>tom Cat is speaking</span></span>
<span class="line"><span>Animal 析构函数调用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>没有Cat的析构函数调用 堆区内存没有释放干净，导致内存泄漏</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>virtual ~Animal(){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;Animal 析构函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>------------结果------------</span></span>
<span class="line"><span>Animal 构造函数调用</span></span>
<span class="line"><span>Cat 构造函数调用</span></span>
<span class="line"><span>tom Cat is speaking</span></span>
<span class="line"><span>Cat 析构函数调用</span></span>
<span class="line"><span>Animal 析构函数调用</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用虚析构解决问题</p><p>纯虚析构解决</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Animal{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    Animal(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Animal 构造函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    virtual void speak()=0;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//    virtual ~Animal(){  </span></span>
<span class="line"><span>//        cout&lt;&lt;&quot;Animal 析构函数调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>//    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //纯虚析构  </span></span>
<span class="line"><span>    virtual ~Animal()=0;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Animal::~Animal(){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;Animal 纯虚析构调用&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="向上造型upcast" tabindex="-1"><a class="header-anchor" href="#向上造型upcast"><span>向上造型upcast</span></a></h1><p>虽然都是cast但是意义不一样<br> cast本是转换(类型转换)但这种思想被称为造型<br> 类型转换更改了数据，造型没有更改数据只是把这个数据当成另一个数据用</p><p>子类可以当做父类看待，他们数据结构都是一样的，自动忽视子类多出来的数据<br> 把父类当成子类看待是downcast<br> upcast一定是安全的，downcast可能有风险，有可能有些事父类刚好能做也有可能不能做</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class XYPos{...};// x,y point</span></span>
<span class="line"><span>class Shape</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>	Shape();</span></span>
<span class="line"><span>	virtual~Shape();</span></span>
<span class="line"><span>	virtual void render);</span></span>
<span class="line"><span>	void move(const XYPos&amp;);</span></span>
<span class="line"><span>	virtual void resize();</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>	XYPos center;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,141)]))}const r=n(l,[["render",p]]),v=JSON.parse('{"path":"/cpp/cpp/4/","title":"4、面向对象三大概念","lang":"zh-CN","frontmatter":{"title":"4、面向对象三大概念","createTime":"2025/06/22 11:14:30","permalink":"/cpp/cpp/4/"},"readingTime":{"minutes":11.49,"words":3446},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/4、面向对象三大概念.md","headers":[]}');export{r as comp,v as data};
