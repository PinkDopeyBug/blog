import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>泛型编程 模板建立通用的模具，大大提高复用性</p><h2 id="两种模板机制" tabindex="-1"><a class="header-anchor" href="#两种模板机制"><span>两种模板机制</span></a></h2><p>函数模板和类模板 template&lt; typename T&gt; 声明后面跟着写函数就是函数模板，跟着写类就是类模板</p><h1 id="函数模板" tabindex="-1"><a class="header-anchor" href="#函数模板"><span>函数模板</span></a></h1><p>建立一个通用函数，其返回值类型和形参类型可以不具体制定，用一个虚拟类型代表 声明好后紧跟着定义的函数就是函数模板，一个模板只能用于一个函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//反转ab  </span></span>
<span class="line"><span>void myswap(T &amp;a, T &amp;b){  </span></span>
<span class="line"><span>    T temp=a;  </span></span>
<span class="line"><span>    a=b;  </span></span>
<span class="line"><span>    b=temp;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>void pri(T &amp;a,T &amp;b){//error</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法:</span></a></h2><p>声明或定义 template&lt; tapename T&gt; template&lt; class T&gt; tapename和class区别很小，当T包含子类的类时，用class编译器会误认为是对象声明</p><p>告诉编译器T是一个通用的数据类型</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//反转ab  </span></span>
<span class="line"><span>void myswap(T &amp;a, T &amp;b){  </span></span>
<span class="line"><span>    T temp=a;  </span></span>
<span class="line"><span>    a=b;  </span></span>
<span class="line"><span>    b=temp;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    double a1=1.1;  </span></span>
<span class="line"><span>    double b1=2.2;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;a&lt;&lt;b&lt;&lt;endl;  </span></span>
<span class="line"><span>    myswap&lt;int&gt;(a,b);  </span></span>
<span class="line"><span>    cout&lt;&lt;a&lt;&lt;b&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;a1&lt;&lt;b1&lt;&lt;endl;  </span></span>
<span class="line"><span>    myswap&lt;double&gt;(a1,b1);  </span></span>
<span class="line"><span>    cout&lt;&lt;a1&lt;&lt;b1&lt;&lt;endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>myswap&lt; int&gt;(a,b)中的&lt; int&gt;是告诉编译器T的数据类型</p><p>模板必须确定出T的数据类型才能使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void func(){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;hello world&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    func();  //error</span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可把函数模板声明注释也可以显示指定类型进行调用 不用传参指定任意数据类型都行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>func&lt;int&gt;();</span></span>
<span class="line"><span>func&lt;char&gt;();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><h3 id="自动类型推导" tabindex="-1"><a class="header-anchor" href="#自动类型推导"><span>自动类型推导</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;    </span></span>
<span class="line"><span>    myswap(a,b);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不指明T的数据类型，让编译器自己推导出T的数据类型，但要求传入的参数数据类型相同</p><h3 id="显示指定类型" tabindex="-1"><a class="header-anchor" href="#显示指定类型"><span>显示指定类型</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;  </span></span>
<span class="line"><span>    myswap&lt;int&gt;(a,b);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="普通函数和函数模板的区别" tabindex="-1"><a class="header-anchor" href="#普通函数和函数模板的区别"><span>普通函数和函数模板的区别</span></a></h2><p>普通函数调用时可发生自动类型转换（隐式类型转换） 函数模板调用时若使用自动推导类型就不会发生隐式类型转换，若使用显示指定类型就可以发生隐式类型转换</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//普通函数  </span></span>
<span class="line"><span>int add(int a,int b){  </span></span>
<span class="line"><span>    return a+b;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//函数模板  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>T add1(T a,T b){  </span></span>
<span class="line"><span>    return a+b;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;  </span></span>
<span class="line"><span>    char c=&#39;a&#39;;//a对应的ASCII码为97  </span></span>
<span class="line"><span>    cout&lt;&lt;add(a,b)&lt;&lt;endl;//3  </span></span>
<span class="line"><span>    cout&lt;&lt;add(a,c)&lt;&lt;endl;//98  </span></span>
<span class="line"><span>    //自动类型推导  </span></span>
<span class="line"><span>    cout&lt;&lt;add1(a,b)&lt;&lt;endl;//3  </span></span>
<span class="line"><span>    //cout&lt;&lt;add1(a,c)&lt;&lt;endl;//error</span><span>    //显式指定类型  </span></span>
<span class="line"><span>    cout&lt;&lt;add1&lt;int&gt;(a,c)&lt;&lt;endl;//98  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="普通函数与函数模板调用规则" tabindex="-1"><a class="header-anchor" href="#普通函数与函数模板调用规则"><span>普通函数与函数模板调用规则</span></a></h2><h5 id="_1、如果函数模板和普通函数都可以实现优先调用普通函数" tabindex="-1"><a class="header-anchor" href="#_1、如果函数模板和普通函数都可以实现优先调用普通函数"><span>1、如果函数模板和普通函数都可以实现优先调用普通函数</span></a></h5><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//普通函数  </span></span>
<span class="line"><span>void print(int a,int b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用普通函数&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>//函数模板  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void print(T a,T b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用函数模板&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    print(a,b);//调用普通函数  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h5 id="_2、可以通过空模板参数列表来强制调用函数模板" tabindex="-1"><a class="header-anchor" href="#_2、可以通过空模板参数列表来强制调用函数模板"><span>2、可以通过空模板参数列表来强制调用函数模板</span></a></h5><p>报错</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//普通函数  </span></span>
<span class="line"><span>void print(int a,int b);  </span></span>
<span class="line"><span>//函数模板  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void print(T a,T b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用函数模板&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    print(a,b);//调用普通函数  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>使用空模板参数列表</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>print&lt;&gt;(a,b);//调用函数模板</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_3、函数模板也可以发生重载" tabindex="-1"><a class="header-anchor" href="#_3、函数模板也可以发生重载"><span>3、函数模板也可以发生重载</span></a></h5><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//普通函数  </span></span>
<span class="line"><span>void print(int a,int b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用普通函数&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>//函数模板  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void print(T a,T b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用函数模板&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void print(T a,T b,T c){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;函数模板重载&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=2;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    print(a,b,3);//函数模板重载  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h5 id="_4、如果函数模板可以产生更好的匹配有限调用函数模板" tabindex="-1"><a class="header-anchor" href="#_4、如果函数模板可以产生更好的匹配有限调用函数模板"><span>4、如果函数模板可以产生更好的匹配有限调用函数模板</span></a></h5><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//普通函数  </span></span>
<span class="line"><span>void print(int a,int b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用普通函数&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>//函数模板  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void print(T a,T b){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;调用函数模板&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    char c1=&#39;a&#39;;  </span></span>
<span class="line"><span>    char c2=&#39;b&#39;;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    print(c1,c2);//调用函数模板  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>如果调用普通函数需要把char转成int，调用函数模板只需要推导出T就可以调用，函数模板更好匹配，因此调用函数模板</p><h1 id="模板的局限性" tabindex="-1"><a class="header-anchor" href="#模板的局限性"><span>模板的局限性</span></a></h1><p>模板不是万能的，有些特定的数据类型需要用具体化的方法做特殊实现</p><p>对于自定义的数据类型函数模板就不会很好的运行 可以使用运算符重载等方法解决 可以利用具体化自定义类型的版本实现，具体优化调用</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    string m_name;  </span></span>
<span class="line"><span>    int m_age;  </span></span>
<span class="line"><span>    Person(string name,int age){  </span></span>
<span class="line"><span>        m_name=name;  </span></span>
<span class="line"><span>        m_age=age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>bool compare(T a,T b){  </span></span>
<span class="line"><span>    if (a==b){  </span></span>
<span class="line"><span>        return true;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    else{  </span></span>
<span class="line"><span>        return false;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;&gt;bool compare(Person a,Person b){  </span></span>
<span class="line"><span>    if (a.m_name==b.m_name &amp;&amp; a.m_age==b.m_age){  </span></span>
<span class="line"><span>        return true;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    else{  </span></span>
<span class="line"><span>        return false;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    int a=1;  </span></span>
<span class="line"><span>    int b=1;  </span></span>
<span class="line"><span>    int c=2;  </span></span>
<span class="line"><span>    Person p1(&quot;tom&quot;,18);  </span></span>
<span class="line"><span>    Person p2(&quot;tom&quot;,18);  </span></span>
<span class="line"><span>    Person p3(&quot;jerry&quot;,18);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;compare(a,b)&lt;&lt;endl;//1  </span></span>
<span class="line"><span>    cout&lt;&lt;compare(a,c)&lt;&lt;endl;//0  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    cout&lt;&lt;compare(p1,p2)&lt;&lt;endl;//1  </span></span>
<span class="line"><span>    cout&lt;&lt;compare(p1,p3)&lt;&lt;endl;//0  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="类模板" tabindex="-1"><a class="header-anchor" href="#类模板"><span>类模板</span></a></h1><p>类模板中需要几个参数可定义几个通用数据类型</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class Nametype,class Agetype&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    Nametype myname;  </span></span>
<span class="line"><span>    Agetype myage;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    Person(Nametype name,Agetype age){  </span></span>
<span class="line"><span>        myname=name;  </span></span>
<span class="line"><span>        myage=age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void showPerson(){  </span></span>
<span class="line"><span>        cout&lt;&lt;myname&lt;&lt;&quot;\\t&quot;&lt;&lt;myage&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>类模板没有自动推导的使用方式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Person&lt;string,int&gt;p1(&quot;tom&quot;,18);</span></span>
<span class="line"><span>//Person p2(&quot;jerry&quot;,16);//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>类模板在模板参数列表中可以有默认参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class Nametype,class Agetype=int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person&lt;string&gt;p1(&quot;tom&quot;,18);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定Agetype的默认参数类型后调用类模板不指定有默认参数类型的通用类型 也能正常调用</p><h2 id="类模板和普通类的区别" tabindex="-1"><a class="header-anchor" href="#类模板和普通类的区别"><span>类模板和普通类的区别</span></a></h2><p>普通类中的成员函数一开始就可以创建 类模板中的成员函数调用时才创建</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person1{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    void showPerson1(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Person1 is show&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Person2{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    void showPerson2(){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;Person2 is show&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>class Myclass{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T obj;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void func1(){  </span></span>
<span class="line"><span>        obj.showPerson1();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void func2(){  </span></span>
<span class="line"><span>        obj.showPerson2();  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>类模板不调用就无法确定T的参数类型，因此编译可以通过</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Myclass&lt;Person1&gt;m;  </span></span>
<span class="line"><span>m.func1();//Person1 is show  </span></span>
<span class="line"><span>//m.func2();//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为指定T的数据类型是Person1所以可以调用func1不能调用func2</p><h2 id="类模板做函数参数" tabindex="-1"><a class="header-anchor" href="#类模板做函数参数"><span>类模板做函数参数</span></a></h2><p>类模板实例化的对象做函数传入的参数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T1 myname;  </span></span>
<span class="line"><span>    T2 myage;  </span></span>
<span class="line"><span>    Person(T1 name,T2 age){  </span></span>
<span class="line"><span>        myname=name;  </span></span>
<span class="line"><span>        myage=age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    void showPerson(){  </span></span>
<span class="line"><span>        cout&lt;&lt;myname&lt;&lt;&quot;\\t&quot;&lt;&lt;myage&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person&lt;string,int&gt; p(&quot;tom&quot;,18);  </span></span>
<span class="line"><span>    print_person1(p);  </span></span>
<span class="line"><span>    print_person2(p);  </span></span>
<span class="line"><span>    print_person3(p);  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="三种方式" tabindex="-1"><a class="header-anchor" href="#三种方式"><span>三种方式</span></a></h4><p>1、指定传入类型 直接显示对象的数据类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//指定传入类型  </span></span>
<span class="line"><span>void print_person1(Person&lt;string,int&gt;&amp;p){  </span></span>
<span class="line"><span>    p.showPerson();  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、参数模板化 将对象中的参数变为模板进行传递</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//参数模板化  </span></span>
<span class="line"><span>template&lt;typename T1,typename T2&gt;  </span></span>
<span class="line"><span>void print_person2(Person&lt;T1,T2&gt;&amp;p){  </span></span>
<span class="line"><span>    p.showPerson();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    //查看推导出T1和T2的数据类型  </span></span>
<span class="line"><span>    cout&lt;&lt;typeid(T1).name()&lt;&lt;endl;  </span></span>
<span class="line"><span>    cout&lt;&lt;typeid(T2).name()&lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、整个类模板化 将这个对象类型模板化进行传递</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//整个类模板化  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>void print_person3(T &amp;p){  </span></span>
<span class="line"><span>    p.showPerson();  </span></span>
<span class="line"><span>    cout&lt;&lt;typeid(T).name()&lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类模板与继承" tabindex="-1"><a class="header-anchor" href="#类模板与继承"><span>类模板与继承</span></a></h2><p>当子类继承的父类是一个类模板时，子类在声明的时候要指明父类模板中通用类型的数据类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>class Base{  </span></span>
<span class="line"><span>    T m;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>class Son:public Base&lt;int&gt;{};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不指定，编译器无法给子类分配内存 如果想灵活指定出父类中通用类型的数据类型子类也需要变成类模板</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T&gt;  </span></span>
<span class="line"><span>class Base{  </span></span>
<span class="line"><span>    T m;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>class Son:public Base&lt;T2&gt;{  </span></span>
<span class="line"><span>    T1 obj;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Son&lt;int,char&gt;s;  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板子类继承普通父类" tabindex="-1"><a class="header-anchor" href="#模板子类继承普通父类"><span>模板子类继承普通父类</span></a></h2><p>必须要在子类中构造A类否则会报错</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//普通类A  </span></span>
<span class="line"><span>class A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int a;  </span></span>
<span class="line"><span>    A(int a):a(a){cout &lt;&lt; &quot;A构造&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void func1() {cout &lt;&lt; &quot;func1()&quot;&lt;&lt;a&lt;&lt; endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>//模板类B  </span></span>
<span class="line"><span>template&lt;class T1, class T2&gt;  </span></span>
<span class="line"><span>class B:public A{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T1 x;  </span></span>
<span class="line"><span>    T2 y;  </span></span>
<span class="line"><span>    B(const T1 x, const T2 y,int a):A(a),x(x),y(y) {cout &lt;&lt; &quot;B构造&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void func2() const {cout &lt;&lt; &quot;func2()&quot;&lt;&lt;x&lt;&lt;y&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    B&lt;int,string&gt; b(6,&quot;Aeolian&quot;,6);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="类模板成员函数类外实现" tabindex="-1"><a class="header-anchor" href="#类模板成员函数类外实现"><span>类模板成员函数类外实现</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>class Person {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T1 myname;  </span></span>
<span class="line"><span>    T2 myage;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    Person(T1 name, T2 age);  </span></span>
<span class="line"><span>    void showPerson();  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>Person&lt;T1,T2&gt;::Person(T1 name, T2 age){  </span></span>
<span class="line"><span>    myname=name;  </span></span>
<span class="line"><span>    myage=age;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>void Person&lt;T1,T2&gt;::showPerson(){  </span></span>
<span class="line"><span>    cout&lt;&lt;myname&lt;&lt;&quot;\\t&quot;&lt;&lt;myage&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person&lt;string,int&gt;p(&quot;tom&quot;,18);  </span></span>
<span class="line"><span>    p.showPerson();  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="类模板分文件编写" tabindex="-1"><a class="header-anchor" href="#类模板分文件编写"><span>类模板分文件编写</span></a></h2><p>类模板成员函数是在调用时创建的，导致分文件编写时链接不到</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3><p>此时person.h里的代码为</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#pragma once  </span></span>
<span class="line"><span>#include &lt;iostream&gt;  </span></span>
<span class="line"><span>using namespace std;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>class Person {  </span></span>
<span class="line"><span>        public:  </span></span>
<span class="line"><span>        T1 myname;  </span></span>
<span class="line"><span>        T2 myage;  </span></span>
<span class="line"><span>          </span></span>
<span class="line"><span>        Person(T1 name, T2 age){  </span></span>
<span class="line"><span>            myname=name;  </span></span>
<span class="line"><span>            myage=age;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        void showPerson(){  </span></span>
<span class="line"><span>            cout&lt;&lt;myname&lt;&lt;&quot;\\t&quot;&lt;&lt;myage&lt;&lt;endl;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="_1、直接包含-cpp文件" tabindex="-1"><a class="header-anchor" href="#_1、直接包含-cpp文件"><span>1、直接包含.cpp文件</span></a></h4><p>此时链接到person.h的源文件中代码为</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;  </span></span>
<span class="line"><span>using namespace std;  </span></span>
<span class="line"><span>#include &quot;person.h&quot;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person&lt;string,int&gt;p(&quot;tom&quot;,18);//error  </span></span>
<span class="line"><span>    p.showPerson();//error  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在clion中可正常运行，在有些编译器中会报错</p><p>此时只需要把person.h改为person.cpp即可</p><h4 id="_2、将声明和实现写到同一个文件中-并改后缀名为-hpp-hpp是约定的名称不是强制" tabindex="-1"><a class="header-anchor" href="#_2、将声明和实现写到同一个文件中-并改后缀名为-hpp-hpp是约定的名称不是强制"><span>2、将声明和实现写到同一个文件中，并改后缀名为.hpp，.hpp是约定的名称不是强制</span></a></h4><p>person.hpp文件中的代码和person.h一样 此时只需要把person.h改为person.hpp即可</p><h2 id="类模板与友元" tabindex="-1"><a class="header-anchor" href="#类模板与友元"><span>类模板与友元</span></a></h2><h3 id="全局函数类内实现" tabindex="-1"><a class="header-anchor" href="#全局函数类内实现"><span>全局函数类内实现</span></a></h3><p>直接在类内声明友元即可</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>class Person {  </span></span>
<span class="line"><span>    //全局函数，类内实现  </span></span>
<span class="line"><span>    friend void printPerson(Person&lt;T1,T2&gt;p){  </span></span>
<span class="line"><span>        cout&lt;&lt;p.myname&lt;&lt;&quot;\\t&quot;&lt;&lt;p.myage&lt;&lt;endl;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    Person(T1 name, T2 age){  </span></span>
<span class="line"><span>        myname=name;  </span></span>
<span class="line"><span>        myage=age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    T1 myname;  </span></span>
<span class="line"><span>    T2 myage;  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="全局函数类外实现" tabindex="-1"><a class="header-anchor" href="#全局函数类外实现"><span>全局函数类外实现</span></a></h3><p>需要让编译器提前知道全局函数的存在</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>class Person;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//把全局函数放上面让编译器在运行到类内声明的全局函数时知道这个全局函数的存在  </span></span>
<span class="line"><span>//但全局函数中用到了Person类，因此要在上面也声明一下Person类  </span></span>
<span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>void printPerson(Person&lt;T1,T2&gt;p){  </span></span>
<span class="line"><span>    cout&lt;&lt;p.myname&lt;&lt;&quot;\\t&quot;&lt;&lt;p.myage&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T1,class T2&gt;  </span></span>
<span class="line"><span>class Person {  </span></span>
<span class="line"><span>    //全局函数，类外实现  </span></span>
<span class="line"><span>    //加空模板参数列表  </span></span>
<span class="line"><span>    friend void printPerson&lt;&gt;(Person&lt;T1,T2&gt;p);  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    Person(T1 name, T2 age){  </span></span>
<span class="line"><span>        myname=name;  </span></span>
<span class="line"><span>        myage=age;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>private:  </span></span>
<span class="line"><span>    T1 myname;  </span></span>
<span class="line"><span>    T2 myage;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    Person&lt;string,int&gt;p(&quot;tom&quot;,18);//error  </span></span>
<span class="line"><span>    printPerson(p);  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="模板具体化、实例化" tabindex="-1"><a class="header-anchor" href="#模板具体化、实例化"><span>模板具体化、实例化</span></a></h1><h1 id="模板具体化" tabindex="-1"><a class="header-anchor" href="#模板具体化"><span>模板具体化</span></a></h1><h2 id="函数模板具体化" tabindex="-1"><a class="header-anchor" href="#函数模板具体化"><span>函数模板具体化</span></a></h2><p>为某一特定的类型重写函数模板，声明的含义是使用独立的，专门的函数定义显示地为 特定类型生成函数定义。 它能够处理模板函数所不能处理的特殊情况。显式具体化显式具体化也是基于函数模板的，只不过在函数模板的基础上，添加一个专门针对特定类型的、实现方式不同的具体化函数。 编译器只在要调用函数的时候才使用到函数，如果不使用显示实例化，每次调用函数时，模板都会消耗性能去推导使用的是哪个类型的函数，增加了程序运行时的负担；使用了显示实例化，则在编译时就已经处理了函数选择。</p><p>在编写函数模板具体化的函数时其定义必须放在同名函数模板的后面，不然就没有对应名称的模板函数进行匹配 <strong>函数模板具体化的应用</strong> 模板具体化使用模板原型参与重载，优先级低于非模板函数。因此写库的时候可以用具体化，这样用户如果不想用你的具体化，他可以自己写一个非模板函数来取代你的具体化。</p><p>模板函数也可以重载，其操作与常规函数一致。 常规模板，具体化模板，非模板函数的优先调用顺序： 非模板函数（普通函数）&gt; 具体化模板函数 &gt; 常规模板 如果希望使用函数模板可以使用空模板参数强制使用函数模板</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>using std::cout;</span></span>
<span class="line"><span>using std::endl;</span></span>
<span class="line"><span>struct job {</span></span>
<span class="line"><span>    char name[20];</span></span>
<span class="line"><span>    int salary;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//函数模板实现</span></span>
<span class="line"><span>template&lt;class T&gt; void swap(T &amp;a, T &amp;b) {</span></span>
<span class="line"><span>	cout&lt;&lt;&quot;普通模板函数&quot;&lt;&lt;endl;</span></span>
<span class="line"><span>    T temp;</span></span>
<span class="line"><span>    temp = a;</span></span>
<span class="line"><span>    a = b;</span></span>
<span class="line"><span>    b = temp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void showJob(const job &amp;a) {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot; &quot; &lt;&lt; a.name &lt;&lt; &quot; = &quot; &lt;&lt; a.salary;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int a = 4;</span></span>
<span class="line"><span>    int b = 5;</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Before swap a = &quot; &lt;&lt; a &lt;&lt; &quot; b=&quot; &lt;&lt; b &lt;&lt; endl;</span></span>
<span class="line"><span>    swap(a, b);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;After swap a = &quot; &lt;&lt; a &lt;&lt; &quot; b=&quot; &lt;&lt; b &lt;&lt; endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    job jobA = {&quot;coder&quot;, 10000};</span></span>
<span class="line"><span>    job jobB = {&quot;manager&quot;, 1000};</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Before swap&quot;;</span></span>
<span class="line"><span>    showJob(jobA);</span></span>
<span class="line"><span>    showJob(jobB);</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>    swap(jobA, jobB);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;After swap&quot;;</span></span>
<span class="line"><span>    showJob(jobA);</span></span>
<span class="line"><span>    showJob(jobB);</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>如果job类只想互换salary而不互换其他成员变量值就有以下解决方法</p><h4 id="_1-显式具体化" tabindex="-1"><a class="header-anchor" href="#_1-显式具体化"><span>1. 显式具体化</span></a></h4><p>显式具体化也是基于函数模板的，只不过在函数模板的基础上，添加一个专门针对特定类型的、实现方式不同的具体化函数。</p><p>语法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;&gt;返回值类型 函数名&lt;参数类型&gt;(形参列表) {函数体}</span></span>
<span class="line"><span>//或</span></span>
<span class="line"><span>template&lt;&gt;返回值类型 函数名(形参列表) {函数体}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;&gt;void swap&lt;job&gt;(job &amp;a, job &amp;b) {  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;函数模板显式具体化&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>    int temp;  </span></span>
<span class="line"><span>    temp = a.salary;  </span></span>
<span class="line"><span>    a.salary = b.salary;  </span></span>
<span class="line"><span>    b.salary = temp;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-定义同名常规函数" tabindex="-1"><a class="header-anchor" href="#_2-定义同名常规函数"><span>2. 定义同名常规函数</span></a></h4><p>实现：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void swap(job &amp;a, job &amp;b){</span></span>
<span class="line"><span>    cout&lt;&lt;&quot;同名常规函数&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>     int temp;</span></span>
<span class="line"><span>     temp = a.salary;</span></span>
<span class="line"><span>     a.salary = b.salary;</span></span>
<span class="line"><span>     b.salary = temp;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板函数分文件编写" tabindex="-1"><a class="header-anchor" href="#模板函数分文件编写"><span>模板函数分文件编写</span></a></h3><p>函数模板只是函数的描述，没有实体，创建函数模板的代码放在头文件中</p><p>函数模板具体化有实体，编译的原理和普通函数一样，所以声明放在头文件中，定义放在源文件中</p><h2 id="类模板具体化" tabindex="-1"><a class="header-anchor" href="#类模板具体化"><span>类模板具体化</span></a></h2><p>类模板具体化和函数模板具体化一样也都是要把具体化版本放在模板之后 类模板具体化分为部分具体化和全部具体化，函数模板具体化没有这个分类</p><p><strong>普通类模板</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类模板  </span></span>
<span class="line"><span>template&lt;class T1, class T2&gt;  </span></span>
<span class="line"><span>class A {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T1 x;  </span></span>
<span class="line"><span>    T2 y;  </span></span>
<span class="line"><span>    A(const T1 x, const T2 y):x(x), y(y){ cout&lt;&lt;&quot;类模板构造&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void show() const{cout&lt;&lt;&quot;类模板：&quot;&lt;&lt;x&lt;&lt;y&lt;&lt;endl;}  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类模板部分具体化</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类模板部分显示具体化  </span></span>
<span class="line"><span>template&lt;class T1&gt;  </span></span>
<span class="line"><span>class A&lt;T1, string&gt;{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T1 x;  </span></span>
<span class="line"><span>    string y;  </span></span>
<span class="line"><span>    A(const T1 x, const string y) :x(x),y(y){cout &lt;&lt;&quot;部分具体化构造&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void show() const{cout &lt;&lt;&quot;部分具体化：&quot;&lt;&lt; x&lt;&lt; y&lt;&lt; endl;}  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类模板全部具体化</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类模板完全具体化  </span></span>
<span class="line"><span>template&lt;&gt;  </span></span>
<span class="line"><span>class A&lt;int, string&gt; {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    int x;  </span></span>
<span class="line"><span>    string y;  </span></span>
<span class="line"><span>    A(const int x, const string y):x(x), y(y){cout&lt;&lt;&quot;完全具体化构造&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void show() const{ cout &lt;&lt;&quot;完全具体化：&quot;&lt;&lt;x&lt;&lt; y&lt;&lt; endl;}  </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>main函数</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int main() {  </span></span>
<span class="line"><span>    A&lt;int,string&gt; a(6,&quot;Aeolian&quot;);  </span></span>
<span class="line"><span>    a.show();  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类模板函数调用顺序： 类模板全部具体化&gt;类模板部分具体化&gt;普通类模板 具体化程度高的类优先于具体化程度低的类，具体化程度低的类优先于没有具体化的类</p><h1 id="模板实例化" tabindex="-1"><a class="header-anchor" href="#模板实例化"><span>模板实例化</span></a></h1><p>类模板本身不是类型、对象或任何其他实体。仅包含模板定义的源文件不会生成任何代码。为了出现任何代码，必须实例化模板：必须提供模板参数，以便编译器可以生成实际的类（或函数，来自函数模板）。<br> 类模板必须实例化才能作为一个类来声明和定义类对象，类模板实例化成为模板类，同一个类模板不同的实例之间相互独立。</p><h2 id="隐式实例化" tabindex="-1"><a class="header-anchor" href="#隐式实例化"><span>隐式实例化</span></a></h2><p>发生隐式实例化的条件</p><ol><li>当代码使用类模板定义对象时，需要在上下文中引用完全定义类型。（例如，当构造此类型的对象时，而不是在构造指向此类型的指针时。 ）</li><li>当类型的完整性影响代码时，并且该特定类型尚未显式实例化时，就会发生隐式实例化。 此外除非类模板成员在程序中使用，否则它不会被实例化，也不需要定义 ![[Pasted image 20240219203114.png]]</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>class MyClass {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    MyClass(T t) {}  </span></span>
<span class="line"><span>    string getType() const {return typeid(T).name();}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;typename T&gt;  </span></span>
<span class="line"><span>bool isSmaller(T fir, T sec) {return fir &lt; sec;}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    cout &lt;&lt; boolalpha;  </span></span>
<span class="line"><span>    vector vec{1, 2, 3, 4, 5};          // (1)  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;vec.size(): &quot; &lt;&lt; vec.size() &lt;&lt; endl;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    MyClass myClass(5);                      // (2)  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;myClass.getType(): &quot; &lt;&lt; myClass.getType() &lt;&lt; endl;  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;isSmaller(5, 10): &quot;&lt;&lt; isSmaller(5, 10) &lt;&lt; endl;   // (3)  </span></span>
<span class="line"><span>    cout &lt;&lt; &quot;isSmaller&lt;double&gt;(5.5f, 6.5): &quot;&lt;&lt; isSmaller&lt;double&gt;(5.5f, 6.5) &lt;&lt; endl;    // (4)  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这个自动过程非常舒适，但也有一些缺点。</p><ul><li>当你隐式实例化一个模板时，模板的定义通常在头文件中可见。也许，你不想公开这个定义。</li><li>当你需要一个特定的模板实参时，如果它在具体的翻译单元中不可用，编译器就会实例化。一个翻译单元是C预处理器处理后的源文件。通常情况下，链接器会删除所有多余的模板实例并保留一个。这是对时间和空间的浪费。</li></ul><p>这两个问题都可以通过显式模板实例化来解决。</p><h2 id="显式实例化" tabindex="-1"><a class="header-anchor" href="#显式实例化"><span>显式实例化</span></a></h2><p>显式实例化定义的语法：<code>template &lt;template declaration&gt;</code><br> 显式实例化声明的语法：<code>extern template &lt;template declaration&gt;</code></p><h1 id="模板参数" tabindex="-1"><a class="header-anchor" href="#模板参数"><span>模板参数</span></a></h1><h1 id="非类型参数-表达式参数" tabindex="-1"><a class="header-anchor" href="#非类型参数-表达式参数"><span>非类型参数(表达式参数)</span></a></h1><p>模板参数不一定非得是类型，它们还可以是普通的数值（ Nontype Template Parameters） <strong>类型参数用于指定一个类型，非类型参数用于指定一个量。</strong> 可以把错误放在编译期解决或者性能优化在编译期解决</p><p>非类型参数只能是以下类型：</p><ul><li>整型常量</li><li>枚举</li><li>指向对象/函数/成员变量的指针</li><li>对象/函数的左值引用</li><li>std::nullptr_t</li><li>浮点类型（C++20之后）</li><li>String等类（C++20之后）</li></ul><p>因此template&lt; double n&gt;是不合法的，但template&lt; double * p&gt;是合法的。 模板代码中不能修改非类型参数的值，也不能使用其地址，所以n++,&amp;n等操作是不合法的。这也造成了模板类创建数组的一大缺点，数组创建后无法动态改变大小。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;int n&gt;  //n为一个非类型参数，或称为表达式参数  </span></span>
<span class="line"><span>void func(){  </span></span>
<span class="line"><span>    cout&lt;&lt;n&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    func&lt;9&gt;();  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类模板作用于类模板参数" tabindex="-1"><a class="header-anchor" href="#类模板作用于类模板参数"><span>类模板作用于类模板参数</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class T, int len&gt;//链表类模板。  </span></span>
<span class="line"><span>class LinkList {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T *mhead;//链表头结点  </span></span>
<span class="line"><span>    int mlen = len; //表长  </span></span>
<span class="line"><span>    void insert() {cout &lt;&lt; &quot;链表插入&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void ddelete() {cout &lt;&lt; &quot;链表删除&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void update() {cout &lt;&lt; &quot;链表更新&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>template&lt;class T, int len&gt;  </span></span>
<span class="line"><span>// 数组类模板。  </span></span>
<span class="line"><span>class Array {  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T *mdata;// 数组指针  </span></span>
<span class="line"><span>    int mlen = len; //表长  </span></span>
<span class="line"><span>    void insert() {cout &lt;&lt; &quot;数组插入&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void ddelete() {cout &lt;&lt; &quot;数组删除&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>    void update() {cout &lt;&lt; &quot;数组更新&quot;&lt;&lt;endl;}  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//线性表模板类:tabletype-T1线性表类型，datatype-T2线性表的数据类型。  </span></span>
<span class="line"><span>template&lt; template&lt;class, int &gt;class T1 , class T2, int len&gt;  </span></span>
<span class="line"><span>class LinearList{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    T1&lt;T2, len&gt; mtable;// 创建线性表对象。  </span></span>
<span class="line"><span>    void insert() {mtable.insert();}// 线性表插入操作。  </span></span>
<span class="line"><span>    void ddelete() {mtable.ddelete();}// 线性表删除操作。  </span></span>
<span class="line"><span>    void update() {mtable.update();}// 线性表更新操作。  </span></span>
<span class="line"><span>    void oper(){  </span></span>
<span class="line"><span>        cout &lt;&lt; &quot;len=&quot; &lt;&lt;mtable.mlen&lt;&lt;endl;  </span></span>
<span class="line"><span>        mtable.insert();  </span></span>
<span class="line"><span>        mtable.update();  </span></span>
<span class="line"><span>    } //按业务要求操作线性表。  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {  </span></span>
<span class="line"><span>    // 创建线性表对象，容器类型为链表，链表的数据类型为int，表长为20  </span></span>
<span class="line"><span>    LinearList&lt;LinkList, int, 20&gt; a;  </span></span>
<span class="line"><span>    a.insert();  </span></span>
<span class="line"><span>    a.ddelete();  </span></span>
<span class="line"><span>    a.update();  </span></span>
<span class="line"><span>    // 创建线性表对象，容器类型为数组，，数组的数据类型为string，表长为20  </span></span>
<span class="line"><span>    LinearList&lt;Array, string,20&gt; b;  </span></span>
<span class="line"><span>    b.insert();  </span></span>
<span class="line"><span>    b.ddelete();  </span></span>
<span class="line"><span>    b.update();  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="类模板作用于函数参数" tabindex="-1"><a class="header-anchor" href="#类模板作用于函数参数"><span>类模板作用于函数参数</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template&lt;class Q&gt;  </span></span>
<span class="line"><span>void func(Array&lt;Q,56&gt; q){  </span></span>
<span class="line"><span>    cout&lt;&lt;&quot;func&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>普通的函数模板参数可以是未知类型，但是该未知类型的模板功能是受限的。如果将类模板作为函数模板的参数，就进一步扩大了函数模板的功能范围。</p>`,148)]))}const t=n(l,[["render",p]]),v=JSON.parse('{"path":"/cpp/cpp/2/","title":"2、模板","lang":"zh-CN","frontmatter":{"title":"2、模板","createTime":"2025/06/22 11:16:56","permalink":"/cpp/cpp/2/"},"readingTime":{"minutes":16.11,"words":4832},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/2、模板.md","headers":[]}');export{t as comp,v as data};
