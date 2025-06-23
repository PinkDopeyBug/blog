import{_ as l,c as p,a as e,b as d,e as n,d as i,r as c,o as r}from"./app-CEcM0piI.js";const t={};function v(u,s){const a=c("VPIcon");return r(),p("div",null,[s[4]||(s[4]=e('<p>需要包含头文件&lt; fstream&gt;</p><h1 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h1><h5 id="文本文件" tabindex="-1"><a class="header-anchor" href="#文本文件"><span>文本文件</span></a></h5><p>文件以文本的ASCII码形式存储在计算机中</p><h5 id="二进制文件" tabindex="-1"><a class="header-anchor" href="#二进制文件"><span>二进制文件</span></a></h5><p>文本以二进制形式存储在计算机中，用户不能直接读懂它们</p><h1 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h1><h2 id="打开方式" tabindex="-1"><a class="header-anchor" href="#打开方式"><span>打开方式</span></a></h2>',8)),d("p",null,[s[0]||(s[0]=n("ios")),i(a,{provider:"iconify",name:`in只读方式打开
ios`}),s[1]||(s[1]=n("out只写方式打开 ios")),i(a,{provider:"iconify",name:`ate初始位置：文件尾
ios`}),s[2]||(s[2]=n("app追加方式写文件 ios")),i(a,{provider:"iconify",name:`trunc如果文件存在，先删除再创建新的
ios`}),s[3]||(s[3]=n("binary二进制方式打开"))]),s[5]||(s[5]=e(`<h3 id="打开方式可以用-操作符配合使用" tabindex="-1"><a class="header-anchor" href="#打开方式可以用-操作符配合使用"><span>打开方式可以用|操作符配合使用</span></a></h3><p>如</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ios::binary|ios::out</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="操作方式" tabindex="-1"><a class="header-anchor" href="#操作方式"><span>操作方式</span></a></h1><p>输入输出是相对内存而言的 从控制台输出到文件（output），从文件输入到控制台（input） 内存为内，文件为外；向内输入，向外输出；读为入，写为出；</p><p>ofstream写操作 ifstream读操作 fstream读写操作</p><p>打开后可以使用is_open()函数判断是否打开成功，返回值为布尔类型</p><h2 id="以写文件为例" tabindex="-1"><a class="header-anchor" href="#以写文件为例"><span>以写文件为例</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//包含头文件  </span></span>
<span class="line"><span>#include &lt;fstream&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//创建流对象  </span></span>
<span class="line"><span>ofstream ofs;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//也可以直接初始化流对象</span></span>
<span class="line"><span>ofstream ofs(&quot;文件路径&quot;,打开方式);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//打开文件  </span></span>
<span class="line"><span>ofs.open(&quot;文件路径&quot;,打开方式);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//写数据  </span></span>
<span class="line"><span>ofs&lt;&lt;&quot;写入的数据&quot;;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//关闭文件  </span></span>
<span class="line"><span>ofs.close();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="读取文件的四种方式" tabindex="-1"><a class="header-anchor" href="#读取文件的四种方式"><span>读取文件的四种方式</span></a></h2><p>ifs的getline一行一行获取,两个参数的含义是存放的空间以及目标空间的大小 全局函数getline()</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>char buf1[1024];  </span></span>
<span class="line"><span>while (ifs&gt;&gt;buf1){//while运行到数组末尾会有NULL  </span></span>
<span class="line"><span>    cout&lt;&lt;buf1&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>//getline一行一行获取,两个参数的含义是存放的空间以及目标空间的大小  </span></span>
<span class="line"><span>char buf2[1024];  </span></span>
<span class="line"><span>while(ifs.getline(buf2, sizeof(buf2))){//一行一行地获取  </span></span>
<span class="line"><span>    cout&lt;&lt;buf2&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>string buf3;  </span></span>
<span class="line"><span>//全局函数getline()  </span></span>
<span class="line"><span>while (getline(ifs,buf3)){  </span></span>
<span class="line"><span>    cout&lt;&lt;buf3&lt;&lt;endl;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>char c;  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>//~(c=ifs.get())  </span></span>
<span class="line"><span>//!(ifs.eof())  </span></span>
<span class="line"><span>//(c=ifs.get())!=EOF//end of file  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>while ((c=ifs.get())!=EOF){  </span></span>
<span class="line"><span>    cout&lt;&lt;c;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="二进制方式" tabindex="-1"><a class="header-anchor" href="#二进制方式"><span>二进制方式</span></a></h2><p>打开方式指定ios::binary</p><p>写文件主要利用流对象调用成员函数write</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ofstream&amp; write(const char*buffer,int len);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>字符指针buffer指向内存中一段存储空间，len是读写的字节数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    char name[10];  </span></span>
<span class="line"><span>    int age;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    ofstream ofs(&quot;person.txt&quot;,ios::binary|ios::out);  </span></span>
<span class="line"><span>    Person p{&quot;tom&quot;,18};  </span></span>
<span class="line"><span>    //强制转换字符指针，否则返回的是p的类指针  </span></span>
<span class="line"><span>    ofs.write((const char *)&amp;p,sizeof(Person));  </span></span>
<span class="line"><span>    ofs.close();  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写文件主要利用流对象调用成员函数read</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ifstream&amp; read(char*buffer,int len);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之所以用char* 指针是因为需要字节的替换，常量指针用于不对引用参数做改变 字符指针buffer指向内存中一段存储空间，len是读写的字节数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Person{  </span></span>
<span class="line"><span>public:  </span></span>
<span class="line"><span>    char name[10];  </span></span>
<span class="line"><span>    int age;  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>int main(){  </span></span>
<span class="line"><span>    ifstream ifs(&quot;D:\\\\垃圾\\\\person.txt&quot;,ios::binary|ios::in);  </span></span>
<span class="line"><span>    if (!ifs.is_open()){  </span></span>
<span class="line"><span>        cout&lt;&lt;&quot;cnm&quot;&lt;&lt;endl;  </span></span>
<span class="line"><span>        return -1;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    Person p;  </span></span>
<span class="line"><span>    ifs.read((char*)&amp;p, sizeof(Person));  </span></span>
<span class="line"><span>    cout&lt;&lt;p.name&lt;&lt;p.age&lt;&lt;endl;  </span></span>
<span class="line"><span>    ifs.close();  </span></span>
<span class="line"><span>    return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,22))])}const o=l(t,[["render",v]]),m=JSON.parse('{"path":"/cpp/cpp/7/","title":"7、文件操作","lang":"zh-CN","frontmatter":{"title":"7、文件操作","createTime":"2025/06/22 11:11:04","permalink":"/cpp/cpp/7/"},"readingTime":{"minutes":2.36,"words":709},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/C++/7、文件操作.md","headers":[]}');export{o as comp,m as data};
