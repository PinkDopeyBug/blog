import{_ as n,c as a,a as i,o as l}from"./app-CEcM0piI.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>对已有的运算符重新进行定义，赋予另一种功能，以适用不同的数据类型</p><p>运算符重载分为两类，一个是成员函数重载运算符，一个是全局函数重载运算符 两种运算符重载不能同时存在</p><h1 id="加号运算符重载" tabindex="-1"><a class="header-anchor" href="#加号运算符重载"><span>加号运算符重载</span></a></h1><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int m_a;  </span></span>
<span class="line"><span>    int m_b;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //成员函数重载+运算符  </span></span>
<span class="line"><span>//    Person operator+(Person &amp;p){  </span></span>
<span class="line"><span>//        Person temp;  </span></span>
<span class="line"><span>//        temp.m_a= this-&gt;m_a+p.m_a;  </span></span>
<span class="line"><span>//        temp.m_b= this-&gt;m_b+p.m_b;  </span></span>
<span class="line"><span>//        return temp;  </span></span>
<span class="line"><span>//    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//全局函数重载+运算符  </span></span>
<span class="line"><span>Person operator+(Person &amp;p1,Person &amp;p2){  </span></span>
<span class="line"><span>    Person temp;  </span></span>
<span class="line"><span>    temp.m_a=p1.m_a+p2.m_a;  </span></span>
<span class="line"><span>    temp.m_b=p1.m_b+p2.m_b;  </span></span>
<span class="line"><span>    return temp;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//运算符重载构成函数重载  </span></span>
<span class="line"><span>Person operator+(Person &amp;p,int num){  </span></span>
<span class="line"><span>    Person temp;  </span></span>
<span class="line"><span>    temp.m_a=p.m_a+num;  </span></span>
<span class="line"><span>    temp.m_b=p.m_b+num;  </span></span>
<span class="line"><span>    return temp;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person p1;  </span></span>
<span class="line"><span>    p1.m_a=10;  </span></span>
<span class="line"><span>    p1.m_b=10;  </span></span>
<span class="line"><span>    Person p2;  </span></span>
<span class="line"><span>    p2.m_a=10;  </span></span>
<span class="line"><span>    p2.m_b=10;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //Person p3=p1.operator+(p2);//成员函数重载的本质  </span></span>
<span class="line"><span>    //Person p3= operator+(p1,p2);//全局函数重载的本质  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //重载运算符简化运用  </span></span>
<span class="line"><span>    Person p3=p1+p2;//不定义运算符重载（Person operator+）会报错，因为编译器不知道这个加号怎怎么操作  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    Person p4=p1+100;  </span></span>
<span class="line"><span>    cout&lt;&lt;p3.m_a&lt;&lt;&quot;\\t&quot;&lt;&lt;p3.m_b&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;p4.m_a&lt;&lt;&quot;\\t&quot;&lt;&lt;p4.m_b&lt;&lt;endl;  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="运算符重载也能发生函数重载" tabindex="-1"><a class="header-anchor" href="#运算符重载也能发生函数重载"><span>运算符重载也能发生函数重载</span></a></h2><h1 id="左移运算符重载" tabindex="-1"><a class="header-anchor" href="#左移运算符重载"><span>左移运算符重载</span></a></h1><h2 id="利用成员函数重载左移运算符" tabindex="-1"><a class="header-anchor" href="#利用成员函数重载左移运算符"><span>利用成员函数重载左移运算符</span></a></h2><p>p.operator&lt;&lt;(cout)简化版本为p&lt;&lt; cout cout在右边，所以一般不会利用成员函数重载左移运算符，因为无法实现cout在左边</p><p>cout在iostream头文件里定义是属于ostream类的因此重载左移运算符时带数据类型传入cout时应为ostream cout</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int m_a;</span></span>
<span class="line"><span>    int m_b;</span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//利用全局函数重载左移运算符  </span></span>
<span class="line"><span>ostream &amp; operator&lt;&lt;(ostream &amp;cout,Person &amp;p){//本质cout&lt;&lt;p  </span></span>
<span class="line"><span>    cout &lt;&lt;p.m_a&lt;&lt;&quot;\\t&quot;&lt;&lt;p.m_b;  </span></span>
<span class="line"><span>    return cout;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person p;  </span></span>
<span class="line"><span>    p.m_a=10;  </span></span>
<span class="line"><span>    p.m_b=10;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;p&lt;&lt;endl;  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在不知道返回类型时可以先写void，但此时使用左移运算符重载不能在后边输入endl</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ostream &amp; operator&lt;&lt;(ostream &amp;cout,Person &amp;p){//本质cout&lt;&lt;p  </span></span>
<span class="line"><span>    cout &lt;&lt;p.m_a&lt;&lt;&quot;\\t&quot;&lt;&lt;p.m_b;  </span></span>
<span class="line"><span>    return cout;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加入endl后第二个&lt;&lt;后不为Person类型，所以使用iostream中定义的&lt;&lt; 此处是一个函数重载，执行完第一个&lt;&lt;之后语句为cout&lt;&lt; endl</p><h1 id="递增运算符重载" tabindex="-1"><a class="header-anchor" href="#递增运算符重载"><span>递增运算符重载</span></a></h1><p>成员函数重置递增运算符返回值返回引用，如果不返回引用直接返回值也正确，但返回引用不会调用拷贝构造函数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Myinter{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int num;  </span></span>
<span class="line"><span>    Myinter(){  </span></span>
<span class="line"><span>        num=0;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //重置前置递增运算符  </span></span>
<span class="line"><span>    //返回引用是为了对一个数据进行递增操作，如果不返回引用返回的是一个新的值  </span></span>
<span class="line"><span>    Myinter &amp; operator++(){  </span></span>
<span class="line"><span>        ++num;  </span></span>
<span class="line"><span>        //自身返回  </span></span>
<span class="line"><span>        return *this;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //重置后置递增运算符  </span></span>
<span class="line"><span>    //加int占位参数这样就能和前置递增重置构成函数重载，用以区分前置和后置  </span></span>
<span class="line"><span>    //返回 值，因为temp是一个局部变量，不能返回引用  </span></span>
<span class="line"><span>    Myinter operator++(int){  </span></span>
<span class="line"><span>        //先记录当前结果  </span></span>
<span class="line"><span>        Myinter temp=*this;  </span></span>
<span class="line"><span>        //后递增  </span></span>
<span class="line"><span>        num++;  </span></span>
<span class="line"><span>        return temp;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//利用全局函数重载左移运算符  </span></span>
<span class="line"><span>//用于输出前置递增运算符重载  </span></span>
<span class="line"><span>ostream &amp; operator&lt;&lt;(ostream &amp;cout,Myinter &amp;p){//本质cout&lt;&lt;p  </span></span>
<span class="line"><span>    cout &lt;&lt;p.num;  </span></span>
<span class="line"><span>    return cout;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//利用全局函数重载左移运算符  </span></span>
<span class="line"><span>//用于数据后置递增运算符重载，虽然构成函数重载但不能和前置的同时存在，同时存在时使用重载后的前置运算符会不知道该调用哪个函数而报错  </span></span>
<span class="line"><span>ostream &amp; operator&lt;&lt;(ostream &amp;cout,Myinter p){//本质cout&lt;&lt;p  </span></span>
<span class="line"><span>    cout &lt;&lt;p.num;  </span></span>
<span class="line"><span>    return cout;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Myinter myinte;  </span></span>
<span class="line"><span>    //cout&lt;&lt;++(++myinte)&lt;&lt;endl;//2  </span></span>
<span class="line"><span>    //cout&lt;&lt;myinte&lt;&lt;endl;//重置递增运算符如果返回引用会是正常的2，如果返回值 会是1，因为第一次递增返回的是一个新值不会进行第二次递增操作  </span></span>
<span class="line"><span>    cout&lt;&lt;myinte++&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;myinte++&lt;&lt;endl;  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>前置运算符重载返回引用，后置运算符重载返回值</p><h2 id="递减运算符重载" tabindex="-1"><a class="header-anchor" href="#递减运算符重载"><span>递减运算符重载</span></a></h2><p>和递增运算符重载类似</p><h1 id="赋值运算符重载" tabindex="-1"><a class="header-anchor" href="#赋值运算符重载"><span>赋值运算符重载</span></a></h1><p>C++编译器至少给一个类添加5个函数 1.默认构造函数（无参，函数体为空) 2.默认析构函数（无参，函数体为空) 3.默认拷贝构造函数，对属性进行值拷贝 4.赋值运算符operator=，对属性进行值拷贝 5.移动构造，移动赋值 如果类中有属性指向堆区，做赋值操作时也会出现深浅拷贝问题 浅拷贝只拷贝，深拷贝在堆区开辟内存进行拷贝</p><p>解决浅拷贝问题</p><p>赋值运算符的运算顺序时从右往左（向左赋值）</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
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
<span class="line"><span>  </span></span>
<span class="line"><span>    Person &amp; operator=(Person &amp;p){  </span></span>
<span class="line"><span>        //先判断是否有属性在堆区，如果有先释放然后再深拷贝  </span></span>
<span class="line"><span>        if (m_age!=NULL){  </span></span>
<span class="line"><span>            delete m_age;  </span></span>
<span class="line"><span>            m_age=NULL;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        //深拷贝  </span></span>
<span class="line"><span>        m_age=new int(*p.m_age);  </span></span>
<span class="line"><span>        //浅拷贝  </span></span>
<span class="line"><span>        //p1.m_age=p2.m_age;  </span></span>
<span class="line"><span>        //返回自身为了能让连续使用如p3=p2=p1  </span></span>
<span class="line"><span>        return *this;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person p1(18);  </span></span>
<span class="line"><span>    Person p2(20);  </span></span>
<span class="line"><span>    Person p3(30);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    p2=p1;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p1.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p2.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;-------------------&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    int a=10;  </span></span>
<span class="line"><span>    int b=20;  </span></span>
<span class="line"><span>    int c=30;  </span></span>
<span class="line"><span>    c=b=a;  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;a=&quot;&lt;&lt;a&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;b=&quot;&lt;&lt;b&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;c=&quot;&lt;&lt;c&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;-------------------&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    p3=p2=p1;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p1.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p2.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;*p3.m_age&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="关系运算符重载" tabindex="-1"><a class="header-anchor" href="#关系运算符重载"><span>关系运算符重载</span></a></h1><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    Person(string name,int age){  </span></span>
<span class="line"><span>        m_name=name;  </span></span>
<span class="line"><span>        m_age=age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    string m_name;  </span></span>
<span class="line"><span>    int m_age;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    bool operator==(Person &amp;p){  </span></span>
<span class="line"><span>        if (m_name==p.m_name &amp;&amp; m_age==p.m_age){  </span></span>
<span class="line"><span>            return true;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        else{  </span></span>
<span class="line"><span>            return false;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person p1(&quot;tom&quot;,18);  </span></span>
<span class="line"><span>    Person p2(&quot;jerry&quot;,18);  </span></span>
<span class="line"><span>    if (p1==p2){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;==&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    else{  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;!=&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>其他关系运算符类似</p><h1 id="函数调用运算符重载" tabindex="-1"><a class="header-anchor" href="#函数调用运算符重载"><span>函数调用运算符重载</span></a></h1><p>函数调用运算符() 也可以重载由于重载后使用的方式非常像函数的调用，因此称为仿函数 仿函数没有固定写法，非常灵活，其对象称为函数对象</p><p>函数对象（仿函数）是一个类，不是一个函数 分类：如果冲在最的operator()要求获取一个参数，这个类就被称为一元仿函数，如果要求获取两个参数就被称为二元仿函数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//实现字符型和整形相乘  </span></span>
<span class="line"><span>class Mymultiplication{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    void operator()(string str,int num){  </span></span>
<span class="line"><span>        for (int i = 0; i &lt; num; i++) {  </span></span>
<span class="line"><span>            cout&lt;&lt;str;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Mymultiplication mymultiplication;  </span></span>
<span class="line"><span>    mymultiplication(&quot;hello world   &quot;,10);  </span></span>
<span class="line"><span>    //匿名函数对象，与上面实例化一个类后再调用重载函数调用运算符效果一样</span></span>
<span class="line"><span>    Mymultiplication()(&quot;hello world   &quot;,10); </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="谓词" tabindex="-1"><a class="header-anchor" href="#谓词"><span>谓词</span></a></h2><p>返回bool类型的仿函数被称为谓词 如果operator接收一个参数就叫一元谓词 如果operator接收两个参数就叫二元谓词</p><h2 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数"><span>匿名函数</span></a></h2><p>语法：类名()(参数列表) 匿名函数当前行执行完立即被释放</p><h1 id="类型操作符重载" tabindex="-1"><a class="header-anchor" href="#类型操作符重载"><span>类型操作符重载</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>operator int()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不用写返回类型 operator加类型 的重载方式是将此类型转化成指定类型。</p>`,39)]))}const r=n(e,[["render",p]]),v=JSON.parse('{"path":"/cpp/cpp/3/","title":"3、运算符重载","lang":"zh-CN","frontmatter":{"title":"3、运算符重载","createTime":"2025/06/22 10:20:38","permalink":"/cpp/cpp/3/"},"readingTime":{"minutes":5.67,"words":1702},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/3、运算符重载.md","headers":[]}');export{r as comp,v as data};
