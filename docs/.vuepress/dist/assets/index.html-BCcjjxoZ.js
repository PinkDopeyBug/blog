import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h2 id="打印菱形" tabindex="-1"><a class="header-anchor" href="#打印菱形"><span>打印菱形</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int a=6;  </span></span>
<span class="line"><span>//scanf(&quot;%d&quot;,&amp;a);  </span></span>
<span class="line"><span>for (int i = 0; i &lt;= a; i++) {  </span></span>
<span class="line"><span>    for (int j = 0; j &lt; a-i; j++) {  </span></span>
<span class="line"><span>        printf(&quot; &quot;);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    for (int j = 0; j &lt; 2*i+1; j++) {  </span></span>
<span class="line"><span>        printf(&quot;*&quot;);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>for (int i = 0; i &lt;= a; i++) {  </span></span>
<span class="line"><span>    for (int j = 0; j &lt; i+1; j++) {  </span></span>
<span class="line"><span>        printf(&quot; &quot;);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    for (int j = 0; j &lt; 2*a-(2*i+1); j++) {  </span></span>
<span class="line"><span>        printf(&quot;*&quot;);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="判断素数" tabindex="-1"><a class="header-anchor" href="#判断素数"><span>判断素数</span></a></h2><p>判断素数只需要判断到这个数的一半或它的平方根即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int suuu(int num){  </span></span>
<span class="line"><span>    for (int i = 2; i &lt; num/2+1; i++) {  </span></span>
<span class="line"><span>        if(num%i==0){ return 0;}  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    return 1;  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分解质因数" tabindex="-1"><a class="header-anchor" href="#分解质因数"><span>分解质因数</span></a></h2><p>其中num每次辗转相除都会变小，除到最后变为1即跳出for循环程序结束。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void viybuu(int num){  </span></span>
<span class="line"><span>    for (int i = 2; i &lt;= num; i++) {  </span></span>
<span class="line"><span>        while (num%i==0){  </span></span>
<span class="line"><span>            printf(&quot;%d &quot;,i);  </span></span>
<span class="line"><span>            num/=i;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断分数" tabindex="-1"><a class="header-anchor" href="#判断分数"><span>判断分数</span></a></h2><p>如果分数大于等于90为a等级，大于等于60小于90为b等级，小于60为c等级，使用比较运算符</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int score;  </span></span>
<span class="line"><span>scanf(&quot;%d&quot;, &amp;score);  </span></span>
<span class="line"><span>char str;  </span></span>
<span class="line"><span>str = score &gt;= 90 ? &#39;A&#39; : 60 &lt;= score &amp;&amp; score &lt; 90 ? &#39;B&#39; : &#39;C&#39;;  </span></span>
<span class="line"><span>return 0;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中60&lt;=score &amp;&amp; score&lt;90不能连写为60&lt;=score&lt;90</p><p><strong>c语言中不支持不等式的连写</strong> 上述判断实际执行顺序为先判断（60&lt;=score）返回结果为0或1,再将结果（0或1）与90进行比较</p><h2 id="求两个数的最大公约数和最小公倍数" tabindex="-1"><a class="header-anchor" href="#求两个数的最大公约数和最小公倍数"><span>求两个数的最大公约数和最小公倍数</span></a></h2><h4 id="欧几里得算法" tabindex="-1"><a class="header-anchor" href="#欧几里得算法"><span>欧几里得算法</span></a></h4><p>假如需要求 1997 和 615 两个正整数的最大公约数,过程： b:1997 ÷ a:615 = 3 (余 r:152) a:615 ÷ r:152 = 4(余r:7) 152 ÷ 7 = 21(余5) 7 ÷ 5 = 1 (余2) 5 ÷ 2 = 2 (余1) 2 ÷ 1 = 2 (余0) 至此，最大公约数为1 以除数和余数反复做除法运算，当余数为 0 时，取当前算式除数为最大公约数，所以就得出了 1997 和 615 的最大公约数 1。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void gsytuugsbwuu(int a,int b){  </span></span>
<span class="line"><span>    if(a&gt;b){  </span></span>
<span class="line"><span>        int c=a;  </span></span>
<span class="line"><span>        a=b;  </span></span>
<span class="line"><span>        b=c;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    int r=b%a;  </span></span>
<span class="line"><span>    int c=a*b;//算最小公倍数  </span></span>
<span class="line"><span>    while (r){  </span></span>
<span class="line"><span>        b=a;  </span></span>
<span class="line"><span>        a=r;  </span></span>
<span class="line"><span>        r=b%a;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    printf(&quot;最大公约数为：%d，最小公倍数为：%d&quot;,a,c/a);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="杨辉三角形" tabindex="-1"><a class="header-anchor" href="#杨辉三角形"><span>杨辉三角形</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int a[10][10]={};  </span></span>
<span class="line"><span>for (int i = 0; i &lt; 10; i++) {  </span></span>
<span class="line"><span>    for (int j = 0; j &lt; 10; j++) {  </span></span>
<span class="line"><span>        printf(&quot;%4d&quot;,a[i][j]);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>printf(&quot;----------------------------------------\\n&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>for (int i = 0; i &lt; 10; i++) {  </span></span>
<span class="line"><span>    for (int j = 0; j &lt;= i; j++) {  </span></span>
<span class="line"><span>        if(j==0 || i==j){  </span></span>
<span class="line"><span>            a[i][j]=1;  </span></span>
<span class="line"><span>        } else{  </span></span>
<span class="line"><span>            a[i][j]=a[i-1][j]+a[i-1][j-1];  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>for (int i = 0; i &lt; 10; i++) {  </span></span>
<span class="line"><span>    for (int j = 0; j &lt;= i; j++) {  </span></span>
<span class="line"><span>        printf(&quot;%4d&quot;,a[i][j]);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>printf(&quot;----------------------------------------\\n&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>for (int i = 0; i &lt; 10; i++) {  </span></span>
<span class="line"><span>    for (int j = 0; j &lt; 10; j++) {  </span></span>
<span class="line"><span>        printf(&quot;%4d&quot;,a[i][j]);  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="约瑟夫环" tabindex="-1"><a class="header-anchor" href="#约瑟夫环"><span>约瑟夫环</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void ytsefu(int n) {  </span></span>
<span class="line"><span>    int array[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};  </span></span>
<span class="line"><span>    int m=n;  </span></span>
<span class="line"><span>    int count = 1;  </span></span>
<span class="line"><span>    while (n){  </span></span>
<span class="line"><span>        for (int i = 0; i &lt; m; i++) {  </span></span>
<span class="line"><span>            if(array[i]==0){  </span></span>
<span class="line"><span>                continue;  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>            if(count%3==0){  </span></span>
<span class="line"><span>                printf(&quot;%d\\n&quot;,array[i]);  </span></span>
<span class="line"><span>                array[i]=0;  </span></span>
<span class="line"><span>                n--;  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>            count++;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>用指针</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void ytsefu(int n) {  </span></span>
<span class="line"><span>    int array[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};  </span></span>
<span class="line"><span>    int m=n;  </span></span>
<span class="line"><span>    int count = 1;  </span></span>
<span class="line"><span>    int *p=array;  </span></span>
<span class="line"><span>    while (n){  </span></span>
<span class="line"><span>        while (p!=&amp;array[m]){  </span></span>
<span class="line"><span>            if(*p==0){  </span></span>
<span class="line"><span>                p++;  </span></span>
<span class="line"><span>                continue;  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>            if(count%3==0){  </span></span>
<span class="line"><span>                printf(&quot;%d&quot;,*p);  </span></span>
<span class="line"><span>                *p=0;  </span></span>
<span class="line"><span>                n--;  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>            p++;  </span></span>
<span class="line"><span>            count++;  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>        p=array;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针"><span>双指针</span></a></h1><ol><li>普通双指针:两个指针向同一个方向移动</li><li>对撞双指针:两个指针对向移动</li><li>快慢双指针:慢指针+快指针</li></ol><h1 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口"><span>滑动窗口</span></a></h1><p>在求一个数组从k开始定长字串的大小的情况下适用滑动窗口</p><h1 id="摩尔投票法" tabindex="-1"><a class="header-anchor" href="#摩尔投票法"><span>摩尔投票法</span></a></h1><p>对于要求一个数组中的多数元素(即在此数组中出现次数超过数组元素一般的数)时,如粒扣子169题就适用摩尔投票法.</p><p>首先记录一个元素,遍历每出现一个该元素计数器就加一,如果出现的不是该元素就减一,当计数减到0且下一个元素不是该元素时就切换为下一个元素,直到遍历完整个数组还在记录中的元素就是多数元素</p><h1 id="贪心算法" tabindex="-1"><a class="header-anchor" href="#贪心算法"><span>贪心算法</span></a></h1><p>贪心算法就是在每一步做出当前最优选择(在整体来看可能并不是最优选择,但在每一步都是当时的最优选择)</p>`,32)]))}const r=n(l,[["render",p]]),v=JSON.parse('{"path":"/base/dsa/7/","title":"常见算法","lang":"zh-CN","frontmatter":{"title":"常见算法","createTime":"2025/06/18 21:01:30","permalink":"/base/dsa/7/"},"readingTime":{"minutes":3.32,"words":997},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/数据结构与算法/7 常见算法题.md","headers":[]}');export{r as comp,v as data};
