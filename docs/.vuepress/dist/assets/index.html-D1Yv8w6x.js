import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>结构体是一种构造数据类型 前面学过一种构造类型一一数</p><p>结构体是一种构造类型的数据结构，是一种或多种基本类型或构造类型的数据的集合。</p><p>构造类型: 不是基本类型的数据结构也不是指针类型，它是若干个相同或不同类型的数据构成的集合</p><p>描述一组具有相同类型数据的有序集合，用于处理大量相同类型的数据运算--数组</p><h1 id="_2、定义结构体类型" tabindex="-1"><a class="header-anchor" href="#_2、定义结构体类型"><span>2、定义结构体类型</span></a></h1><h2 id="_1、先定义结构体类型-再去定义结构体变量" tabindex="-1"><a class="header-anchor" href="#_1、先定义结构体类型-再去定义结构体变量"><span>1、先定义结构体类型，再去定义结构体变量</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct 结构体类型名{</span></span>
<span class="line"><span>	成员列表</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char namer[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//有了结构体类型后，就可以用类型定义变量了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu lucy,bob,lilei;//定义了三个 struct stu 类型的变量每个变量都有三个成员，分别是 num name sex</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构体变量的大小是它所有成员之和</p><h2 id="_2、在定义结构体类型的时候顺便定义结构体变量-以后还可以定义结构体变量" tabindex="-1"><a class="header-anchor" href="#_2、在定义结构体类型的时候顺便定义结构体变量-以后还可以定义结构体变量"><span>2、在定义结构体类型的时候顺便定义结构体变量，以后还可以定义结构体变量</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct 结构体类型名{</span></span>
<span class="line"><span>	成员列表;</span></span>
<span class="line"><span>}结构体变量 1,变量2;</span></span>
<span class="line"><span>struct 结构体类型名 变量3，变量4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>}lucy,bob,lilei;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu xiaohong,xiaoming;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-在定义结构体类型的时候-没有结构体类型名-顺便定义结构体变量" tabindex="-1"><a class="header-anchor" href="#_3-在定义结构体类型的时候-没有结构体类型名-顺便定义结构体变量"><span>3.在定义结构体类型的时候，没有结构体类型名，顺便定义结构体变量</span></a></h2><p>因为没有类型名，所以以后不能再定义相关类型的数据了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct{</span></span>
<span class="line"><span>	成员列表;</span></span>
<span class="line"><span>}变量 1,变量 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct {</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>}lucy,bob;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3、通常将一个结构体类型重新起个类型名-用新的类型名替代原先的类型" tabindex="-1"><a class="header-anchor" href="#_3、通常将一个结构体类型重新起个类型名-用新的类型名替代原先的类型"><span>3、通常将一个结构体类型重新起个类型名，用新的类型名替代原先的类型</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef struct stu {</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>}STU;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以后 STU 就相当干 struct stu</p><h1 id="_1、结构体变量的定义和初始化" tabindex="-1"><a class="header-anchor" href="#_1、结构体变量的定义和初始化"><span>1、结构体变量的定义和初始化</span></a></h1><p>变量是若干个相同或不同数据构成的集合</p><p>在定义结构体变量之前首先得有结构体类型，然后再定义变量 在定义结构体变量的时候，可以顺便给结构体变量赋初值，被称为结构体的初始化 结构体变量初始化的时候，必须按各个成员顺序初始化</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu boy;</span></span>
<span class="line"><span>struct stu lucy={</span></span>
<span class="line"><span>	101,</span></span>
<span class="line"><span>	&quot;lucy&quot;,</span></span>
<span class="line"><span>	&#39;f&#39;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2、结构体变量的使用" tabindex="-1"><a class="header-anchor" href="#_2、结构体变量的使用"><span>2、结构体变量的使用</span></a></h1><p>结构体变量成员的引用方法: 结构体变量.成员名</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>struct stu bob;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bob.num=101;//bob 是个结构体变量，但是 bob.num 是个 int 类型的变量</span></span>
<span class="line"><span>bob.name 是个字符数组，是个字符数组的名字，代表字符数组的地址，是个常量</span></span>
<span class="line"><span>bob.name =&quot;bob&quot;://是不可行，是个常量</span></span>
<span class="line"><span>strcpy(bob.name,&quot;bob&quot;);</span></span>
<span class="line"><span>print(&quot;%s\\n&quot;,bob.name);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3、结构体成员多级引用" tabindex="-1"><a class="header-anchor" href="#_3、结构体成员多级引用"><span>3、结构体成员多级引用</span></a></h1><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct date{</span></span>
<span class="line"><span>	int year;</span></span>
<span class="line"><span>	int month;</span></span>
<span class="line"><span>	int day;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>	struct date birthday;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu boy ={</span></span>
<span class="line"><span>	 101,</span></span>
<span class="line"><span>	 &quot;lucy&quot;,</span></span>
<span class="line"><span>	 &#39;f&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>boy.birthday.yea r= 2000;</span></span>
<span class="line"><span>boy.birthday.month = 3;</span></span>
<span class="line"><span>boy.birthday.day = 1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="结构体变量相互赋值" tabindex="-1"><a class="header-anchor" href="#结构体变量相互赋值"><span>结构体变量相互赋值</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]){</span></span>
<span class="line"><span>	struct stu bob=(101,&quot;bob&quot;,&#39;m&#39;);</span></span>
<span class="line"><span>	struct stu lilei;</span></span>
<span class="line"><span>	lilei=bob;</span></span>
<span class="line"><span>	printf(&quot;%d %s %c\\n&quot;,lilei.num,lilei.name,lilei.sex);</span></span>
<span class="line"><span>	return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>必须是相同的结构体变量才能相互赋值</p><h1 id="结构体数组" tabindex="-1"><a class="header-anchor" href="#结构体数组"><span>结构体数组</span></a></h1><p>结构体数组是个数组，由若干个相同类型的结构体变量构成的集合</p><h2 id="_1、结构体数组的定义方法" tabindex="-1"><a class="header-anchor" href="#_1、结构体数组的定义方法"><span>1、结构体数组的定义方法</span></a></h2><p>struct 结构体类型名 数组名[元素个数];</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu edu[3];//定义了一个 struct stu :类型的结构体数组 edu</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、结构体数组元素的引用" tabindex="-1"><a class="header-anchor" href="#_2、结构体数组元素的引用"><span>2、结构体数组元素的引用</span></a></h2><p>数组名[下标]</p><h2 id="_3、数组元素的使用" tabindex="-1"><a class="header-anchor" href="#_3、数组元素的使用"><span>3、数组元素的使用</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>edu[0].num =101;//用 101 给 edu 数组的第0个结构体变量的 num 赋值strcpy(edu[1].name,&quot;lucy&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="结构体指针" tabindex="-1"><a class="header-anchor" href="#结构体指针"><span>结构体指针</span></a></h1><p>即结构体的地址，结构体变量存放内存中也有起始地址 定义一个变量来存放这个地址，这个变量就是结构体指针变量。 结构体指针变量也是个指针，在 32 位环境下，指针变量的占4 个字节，存放一个地址</p><h2 id="定义方法" tabindex="-1"><a class="header-anchor" href="#定义方法"><span>定义方法</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct 结构体类型名 * 结构体指针变量名;</span></span>
<span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu *p;//定义了一个struct stu *类型的指针变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu boy;</span></span>
<span class="line"><span>p=&amp;boy；</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问结构体变量的成员方法" tabindex="-1"><a class="header-anchor" href="#访问结构体变量的成员方法"><span>访问结构体变量的成员方法</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>boy.num=101;//可以，通过 结构体变量名.成员名</span></span>
<span class="line"><span>(*p).num=101;//可以，*p 相当于 p 指向的变量boy</span></span>
<span class="line"><span>p-&gt;num=101;//可以，指针-&gt;成员名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过结构体指针来引用指针指向的结构体的成员，前提是指针必须先指向一个结构体变量。</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><h3 id="_1、保存结构体变量的地址" tabindex="-1"><a class="header-anchor" href="#_1、保存结构体变量的地址"><span>1、保存结构体变量的地址</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	float score;</span></span>
<span class="line"><span>}STU;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	STU *p,lucy;</span></span>
<span class="line"><span>	p=&amp;lucy;</span></span>
<span class="line"><span>	p-&gt;num=101;</span></span>
<span class="line"><span>	strcpy(p-&gt;name,&quot;baby&quot;);</span></span>
<span class="line"><span>	//p-&gt;name=&quot;baby”://错误，因为 p-&gt;name 相当于lucy.name 是个字符数组的名字是个常量不能用等号赋值</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、传结构体变量的地址" tabindex="-1"><a class="header-anchor" href="#_2、传结构体变量的地址"><span>2、传结构体变量的地址</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void fun(STU*p){</span></span>
<span class="line"><span>	p-&gt;num=101;</span></span>
<span class="line"><span>	(*p).score=87.6:</span></span>
<span class="line"><span>	strcpy(p-&gt;name,&quot;lucy&quot;);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	STU girl;</span></span>
<span class="line"><span>	fun(&amp;girl);</span></span>
<span class="line"><span>	printf(&quot;%d %s %fn&quot;,girl.num,girl.name,girl.score);</span></span>
<span class="line"><span>	return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、传结构体数组的地址" tabindex="-1"><a class="header-anchor" href="#_3、传结构体数组的地址"><span>3、传结构体数组的地址</span></a></h3><p>结构体数组，是由若干个相同类型的结构体变量构成的集合。存放在内存里，也有起始地址，其实就是第 0 个结构体 的地址。</p><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2><h5 id="结构体变量的地址编号和结构体第一个成员的地址编号相同-但指针类型不同" tabindex="-1"><a class="header-anchor" href="#结构体变量的地址编号和结构体第一个成员的地址编号相同-但指针类型不同"><span>结构体变量的地址编号和结构体第一个成员的地址编号相同，但指针类型不同</span></a></h5><h5 id="结构体数组的地址就是结构体数组中第0个元素的地址" tabindex="-1"><a class="header-anchor" href="#结构体数组的地址就是结构体数组中第0个元素的地址"><span>结构体数组的地址就是结构体数组中第0个元素的地址</span></a></h5><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	char name[20];</span></span>
<span class="line"><span>	float score;</span></span>
<span class="line"><span>}STU;</span></span>
<span class="line"><span>int main{</span></span>
<span class="line"><span>	STU boy;</span></span>
<span class="line"><span>	printf(&quot;&amp;boy-%pin&quot;&amp;boy);//STU *</span></span>
<span class="line"><span>	printf(&amp;(boy.num)=%p\\n&quot;, &amp;(boy.num));//int *</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	STU edu[3];</span></span>
<span class="line"><span>	printf(&quot;edu=%p\\n&quot;, edu);//STU *</span></span>
<span class="line"><span>	printf(&amp;edu[0]=%p\\n&quot;， &amp;edu[o]);//STU *</span></span>
<span class="line"><span>	printf(&amp;(edu[o].num)=%p\\n&quot;,&amp;(edu[o].num));//int *</span></span>
<span class="line"><span>	return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="结构体内存分配" tabindex="-1"><a class="header-anchor" href="#结构体内存分配"><span>结构体内存分配</span></a></h1><p>结构体变量大小是它所有成员的大小之和</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct stu{</span></span>
<span class="line"><span>	int num;</span></span>
<span class="line"><span>	int age;</span></span>
<span class="line"><span>}boy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct stu1{</span></span>
<span class="line"><span>	char sex;</span></span>
<span class="line"><span>	int age;</span></span>
<span class="line"><span>}lucy;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(){</span></span>
<span class="line"><span>	printf(&quot;%d\\n&quot;,sizeof(boy));//结果为 8</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	printf(&quot;sizeof(lucy)=%d\\n&quot;,sizeof(lucy));//预期结果为5=1+4，实际结果为</span></span>
<span class="line"><span>	printf(&amp;lucy=%p\\n&quot; &amp;lucy);//第一个成员的地址</span></span>
<span class="line"><span>	printf(&quot;&amp;(lucy.sex)=%p\\n&quot;， &amp;(lucy.sex));//第一个成员的地址</span></span>
<span class="line"><span>	printf(&quot;&amp;(lucy.age)=%p\\n&quot;，&amp;(lucy.age));//与第一个成员的地址编号差4</span></span>
<span class="line"><span>	return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>给结构体变量分配内存的时候是有规则的 例子中的第一个元素的地址中间有三个字节空间没用，为了提高存取数据的速度32平台是4字节寻址的，如果挨着存可能要取两次才能取到数据，如果四字节四字节存一次就能取出，能够提高存取数据的速度</p><h2 id="规则" tabindex="-1"><a class="header-anchor" href="#规则"><span>规则</span></a></h2><h3 id="规则1、以多少个字节为单位开辟内存" tabindex="-1"><a class="header-anchor" href="#规则1、以多少个字节为单位开辟内存"><span>规则1、以多少个字节为单位开辟内存</span></a></h3><p>给结构体变量分配内存的时候，会去结构体变量中找基本类型的成员中哪个基本类型的成员占字节数多，就以它大大小为单位开辟内存</p><p>在 gcc中出现了 double 类型的例外</p><p>（1）成员中只有 char 型数据 ，以1字节为单位开辟内存。 （2）成员中出现了 short int 类型数据，没有更大字节数的基本类型数据以 2 字节为单位开辟内存 （3）出现了 int float 没有更大字节的基本类型数据的时候以 4 字节为单位开内存 （4）出现了 double 类型的数据 情况 1: 在 vc6.0 和 Visual Studio 中里，以8 字节为单位开辟内存。 情况 2: 在 Linux 环境 gcc.里，以4 字节为单位开辟内存 无论是那种环境，double 型变量，占8 字节（linux）开辟两次四字节</p><p>如果在结构体中出现了数组，数组可以看成多个变量的集合。如果出现指针的话，没有占字节数更大的类型的，以4 字节为单位开辟内存 在内存中存储结构体成员的时候，按定义的结构体成员的顺序存储。</p><h3 id="规则-2-字节对齐" tabindex="-1"><a class="header-anchor" href="#规则-2-字节对齐"><span>规则 2:字节对齐</span></a></h3><p>(1) char 1 字节对齐 ，即存放 char 型的变量，内存单元的编号是 1的倍数即可。 (2) short int2 字节对齐 ，即存放 short int 型的变量，起始内存单元的编号是 2 的倍数即可。 (3) int4 字节对齐 ，即存放 int 型的变量，起始内存单元的编号是 4 的倍数即可 (4) long int 在 32 位平台下，4 字节对齐 ，即存放long int 型的变量，起始内存单元的编号是4的倍数即可 (5) float 4 字节对齐 ，即存放 float 型的变量，起始内存单元的编号是 4 的倍数即可(6) double a.vc6.0 和Visual Studio 环境下 8 字节对齐，即存放 double 型变量的起始地址，必须是 8 的倍数，double 变量占8 字节 b.gcc 环境下</p><p>4 字节对齐，即存放 double 型变量的起始地址，必须是 4 的倍数，double 变量占8 字节。</p><p>当结构体成员中出现数组的时候，可以看成多个变量 开辟内存的时候，从上向下依次按成员在结构体中的位置顺序开辟空间</p><h4 id="为什么要有字节对齐" tabindex="-1"><a class="header-anchor" href="#为什么要有字节对齐"><span>为什么要有字节对齐</span></a></h4><p>用空间来换时间，提高 cpu 读取数据的效率</p><h2 id="指定对齐原则" tabindex="-1"><a class="header-anchor" href="#指定对齐原则"><span>指定对齐原则:</span></a></h2><p>使用#pragma pack改变默认对齐原则格式:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#pragma pack (value)时的指定对齐值value。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>value只能是 1 2 4 8等 结构体成员中，占字节数最大的类型长度和value比较取较小值，为单位开辟内存</p><h1 id="位段" tabindex="-1"><a class="header-anchor" href="#位段"><span>位段</span></a></h1><p>在结构体中，以位为单位的成员，咱们称之为位段(位域)。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct stu{</span></span>
<span class="line"><span>	unsigned int a:2;</span></span>
<span class="line"><span>	unsigned int b:6;</span></span>
<span class="line"><span>	unsigned int c:4;</span></span>
<span class="line"><span>	unsigned int d:4;</span></span>
<span class="line"><span>	unsigned int i;</span></span>
<span class="line"><span>}data;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data所占内存 ![[Pasted image 20230922210427.png]] 不能对位段成员取地址，因为位段成员可能不够一个字节</p><h1 id="共用体" tabindex="-1"><a class="header-anchor" href="#共用体"><span>共用体</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>在进行某些算法的时候，需要使几种不同类型的变量存到同一段内存单元中，几个变量所使用空间相互重叠 这种几个不同的变量共同占用一段内存的结构，在C语言中，被称作“共用体”类型结构</p><p>共用体和结构体类似，也是一种构造类型的数据结构 定义共用体类型的方法和结构体非常相似，把 stuct 改成union 就可以了。</p><p>共用体所有成员占有同一段地址空间 共用体的大小是其占内存长度最大的成员的大小 共用体的各个成员占用同一块内存。</p><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><p>同一内存段可以用来存放几种不同类型的成员，但每一瞬时只有一种起作用 共用体变量中起作用的成员是最后一次存放的成员，在存入一个新的成员后原有的成员的值会被覆盖 共用体变量的地址和它的各成员的地址都是同一地址 共用体变量的初始化union data a={123};初始化共用体只能为第一个成员赋值，不能给所有成员都赋初值</p><h1 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举"><span>枚举</span></a></h1><p>将变量的值一一列举出来，变量的值只限于列举出来的值的范围内 枚举类型也是个构造类型的，类型定义类似结构体类型的定义使用枚举的时候，得先定义枚举类型，再定义枚举变量</p><h2 id="定义方法-1" tabindex="-1"><a class="header-anchor" href="#定义方法-1"><span>定义方法</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>enum 枚举类型名{</span></span>
<span class="line"><span>	枚举值列表;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在枚举值表中应列出所有可用值,也称为枚举元素枚举元素是常量，默认是从 0 开始编号的。</p><p>枚举变量仅能取枚举值所列元素</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//定义枚举类型 week</span></span>
<span class="line"><span>enum week{//枚举类型</span></span>
<span class="line"><span>	mon , tue , wed , thu , fri , sat,sun</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>enum week workday,weekday;//枚举变量workday 与 weekday 只能取 sun....sat 中的一个</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>workday = mon;//正确 weekday = tue;//正确 workday =abc; //错误，枚举值中没有 abc</p><p>枚举值是常量不能在程序中用赋值语句再对它赋值例如: sun-5;mon=2; sun-mon; 都是错误的 枚举元素本身由系统定义了一个表示序号的数值默认是从0开始顺序定义为0，1，2…… 如在week中，mon值为0，tue值为1，…… ,sun值为6</p><p>可以改变枚举值的默认值: 如enum week//枚举类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>enum week{</span></span>
<span class="line"><span>	mon=3， tue， wed, thu, fri=4， sat,sun</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mon=3,tue=4,以此类推fri=4 以此类推 在定义枚举类型的时候枚举元素可以用等号给它赋值，用来代表元素从几开始编号 在程序中，不能再次对枚举元素赋值，因为枚举元素是常量。</p>`,98)]))}const t=n(l,[["render",p]]),r=JSON.parse('{"path":"/cpp/c/6/","title":"6 结构体","lang":"zh-CN","frontmatter":{"title":"6 结构体","createTime":"2025/04/05 12:12:26","permalink":"/cpp/c/6/"},"readingTime":{"minutes":10.81,"words":3243},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C/6 结构体.md","headers":[]}');export{t as comp,r as data};
