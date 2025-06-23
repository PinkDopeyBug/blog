import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="内存分区的意义" tabindex="-1"><a class="header-anchor" href="#内存分区的意义"><span>内存分区的意义</span></a></h2><p>不在任何函数里声明的变量就是全局变量，全局变量可被任何函数共享使用</p><h2 id="程序运行前" tabindex="-1"><a class="header-anchor" href="#程序运行前"><span>程序运行前</span></a></h2><p>在程序编译后，生成了exe可执行程序，未执行该程序前分为两个区域 内存分区模型</p><h3 id="代码区" tabindex="-1"><a class="header-anchor" href="#代码区"><span>代码区：</span></a></h3><p>存放函数体的二进制代码，由操作系统进行管理的 代码区是共享的，共享的目的是对于频繁被执行的程序，只需要在内存中有一份代码即可 代码区是只读的，使其只读的原因是防止程序意外地修改了它的指令</p><h3 id="全局区" tabindex="-1"><a class="header-anchor" href="#全局区"><span>全局区：</span></a></h3><p>全局变量和静态变量及常量存放在此 全局区还包含了常量区,字符串常量和其他常量也存放在此 该区域的数据在程序结束后由操作系统释放</p><h2 id="程序运行后" tabindex="-1"><a class="header-anchor" href="#程序运行后"><span>程序运行后</span></a></h2><h3 id="栈区" tabindex="-1"><a class="header-anchor" href="#栈区"><span>栈区:</span></a></h3><p>由编译器自动分配释放,存放函数的参数值,局部变量等 注意事项：不要返回局部变量的地址，栈区开辟的数据由编译器自动释放 第一次可以正确返回局部变量这是因为编译器做了保留，第二次就无法正确返回了</p><h3 id="堆区" tabindex="-1"><a class="header-anchor" href="#堆区"><span>堆区:</span></a></h3><p>由程序员分配释放若程序员不释放,程序结束时由操作系统回收 new关键字开辟的空间是在堆区</p><h4 id="new和delete" tabindex="-1"><a class="header-anchor" href="#new和delete"><span>new和delete</span></a></h4><p>new申请一个空间 delete删除new的空间</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//new</span></span>
<span class="line"><span>new int;</span></span>
<span class="line"><span>new Stash;</span></span>
<span class="line"><span>new int[10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//delete</span></span>
<span class="line"><span>delete p;</span></span>
<span class="line"><span>delete[] p;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int * psome = new int [10];</span></span>
<span class="line"><span>delete[] psome;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>new一个数组的时候delete时也要加方括号，不带方括号的话只会删除第一个 new执行的是第一个元素的地址，加方括号是告诉程序它应该释放整个数组而不仅仅是一个元素</p><p>不要用delete释放不是new分配出来的空间 不要用delete多次释放同一块空间</p><p>如果new之后不用delete释放空间会造成内存泄露</p><h1 id="引用和赋值" tabindex="-1"><a class="header-anchor" href="#引用和赋值"><span>引用和赋值</span></a></h1><p>引用的本质的内部实现就是一个指针常量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//赋值</span></span>
<span class="line"><span>int a;</span></span>
<span class="line"><span>a=10:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//引用</span></span>
<span class="line"><span>int a=10;</span></span>
<span class="line"><span>int &amp;b=a;</span></span>
<span class="line"><span>int c=20;</span></span>
<span class="line"><span>int &amp;b=c;//error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用必须初始化，一旦初始化后就不能更改</p><h2 id="引用传递" tabindex="-1"><a class="header-anchor" href="#引用传递"><span>引用传递</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//1、值传递</span></span>
<span class="line"><span>void swap1(int a,int b){</span></span>
<span class="line"><span>	int temp=a;</span></span>
<span class="line"><span>	a=b;</span></span>
<span class="line"><span>	b=temp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2、地址传递</span></span>
<span class="line"><span>void swap2(int *a,int *b){</span></span>
<span class="line"><span>	int temp=*a;</span></span>
<span class="line"><span>	*a=*b;</span></span>
<span class="line"><span>	*b=temp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3、引用传递</span></span>
<span class="line"><span>void swap3(int &amp;a,int &amp;b){</span></span>
<span class="line"><span>	int temp=a;</span></span>
<span class="line"><span>	a=b;</span></span>
<span class="line"><span>	b=temp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	int a=10;</span></span>
<span class="line"><span>	int b=20;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	swap1(a,b);//a=10,b=20</span></span>
<span class="line"><span>	swap2(&amp;a,&amp;b);//a=20,b=10</span></span>
<span class="line"><span>	swap3(a,b);//a=20,b=10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>值传递形参不会修饰实参 地址传递和引用传递形参会修饰实参</p><h2 id="引用做函数返回值" tabindex="-1"><a class="header-anchor" href="#引用做函数返回值"><span>引用做函数返回值</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int&amp; test() {</span></span>
<span class="line"><span>    int a = 10;</span></span>
<span class="line"><span>    return a;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    int&amp; ref = test();</span></span>
<span class="line"><span>    cout &lt;&lt; ref &lt;&lt; endl;//10</span></span>
<span class="line"><span>    cout &lt;&lt; ref &lt;&lt; endl;//其他数字</span></span>
<span class="line"><span>    cout &lt;&lt; ref &lt;&lt; endl;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>	//函数调用的左值</span></span>
<span class="line"><span>	int &amp;ref2=test();</span></span>
<span class="line"><span>	cout&lt;&lt;ref2&lt;&lt;endl;//10</span></span>
<span class="line"><span>	cout&lt;&lt;ref2&lt;&lt;endl;//10</span></span>
<span class="line"><span>	test()=1000;</span></span>
<span class="line"><span>	cout&lt;&lt;ref2&lt;&lt;endl;//1000</span></span>
<span class="line"><span>	cout&lt;&lt;ref2&lt;&lt;endl;//1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>不要返回局部变量的引用 因为函数内的变量会放在栈区，程序运行完就清除，第一次返回正确结果是因为编译器保留了变量，后续几个返回都是错误，在vs2022依旧会返回正常结果但代码本身就有错误。</p><p>如果函数的返回值是一个引用那么这个函数的调用可以作为左值</p><h1 id="指针" tabindex="-1"><a class="header-anchor" href="#指针"><span>指针</span></a></h1><p>指针常量和常量指针 指针常量：指向的值不变 const int * p1=&amp;a; 常量指针：指针时固定的不可改变指向，但可修改值 int * const p2=&amp;b;</p>`,33)]))}const t=n(l,[["render",p]]),r=JSON.parse('{"path":"/cpp/cpp/1/","title":"1、内存分区","lang":"zh-CN","frontmatter":{"title":"1、内存分区","createTime":"2025/06/22 11:11:38","permalink":"/cpp/cpp/1/"},"readingTime":{"minutes":3.14,"words":941},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/1、内存分区.md","headers":[]}');export{t as comp,r as data};
