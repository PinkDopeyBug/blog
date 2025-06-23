import{_ as s,c as a,a as i,o as l}from"./app-CEcM0piI.js";const e={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[i(`<p><code>TCP</code>是传输层协议数据的传输是基于流的所以发送端和接收端每次处理的数据的量，处理数据的频率可以不是对等的，可以按照自身需求来进行决策。</p><p><code>UDP</code>是报文传输协议, 它的每次接收和发送的数据都是一样的, 不可以拆开 <code>TCP</code>是流式传输协议, 它的接收和发送的数据可以是不用的,可以被拆开多份</p><p>当客户端和服务器之间要进行基于TCP的套接字通信</p><ul><li>通信过程中客户端会每次会不定期给服务器发送一个不定长度的有特定含义的字符串。</li><li>通信的服务器端每次都需要接收到客户端这个不定长度的字符串，并对其进行解析</li></ul><p>服务器在接收数据的时候有如下几种情况：</p><ol><li>一次接收到了客户端发送过来的一个完整的数据包</li><li>一次接收到了客户端发送过来的N个数据包，由于每个包的长度不定，无法将各个数据包拆开</li><li>一次接收到了一个或者N个数据包 + 下一个数据包的一部分，还是无法将数据包拆开</li><li>一次收到了半个数据包，下一次接收数据的时候收到了剩下的一部分+下个数据包的一部分，更悲剧，头大了</li><li>另外，还有一些不可抗拒的因素：比如客户端和服务器端的网速不一样，发送和接收的数据量也会不一致</li></ol><p>以上描述的现象称之为<code>TCP的粘包问题</code> TCP就是面向连接的流式传输协议，特性如此，多个数据包粘连到一起无法拆分是需求过于复杂造成的 服务器端如果想保证每次都能接收到客户端发送过来的这个不定长度的数据包，应该如何解决</p><ol><li>使用标准的应用层协议（比如：http、https）来封装要传输的不定长的数据包</li><li>在每条数据的尾部添加特殊字符, 如果遇到特殊字符, 代表当条数据接收完毕了 <ul><li>有缺陷: 效率低, 需要一个字节一个字节接收, 接收一个字节判断一次, 判断是不是那个特殊字符串</li></ul></li><li>在发送数据块之前, 在数据块最前边添加一个固定大小的数据头, 这时候数据由两部分组成：数据头+数据块 <ul><li><code>数据头：存储当前数据包的总字节数，接收端先接收数据头，然后在根据数据头接收对应大小的字节</code></li><li><code>数据块：当前数据包的内容</code> 通常使用添加包头的方式解决掉这个问题, 数据包的包头大小可以根据自己的实际需求进行设定，用于存储当前数据块的总字节数。</li></ul></li></ol><h2 id="发送端" tabindex="-1"><a class="header-anchor" href="#发送端"><span>发送端</span></a></h2><ol><li>根据待发送的数据长度N动态申请一块固定大小的内存：N+4（4是包头占用的字节数）</li><li>将待发送数据的总长度写入申请的内存的前四个字节中，<code>此处需要将其转换为网络字节序（大端）</code></li><li>将待发送的数据拷贝到包头后边的地址空间中，将完整的数据包发送出去（<code>字符串没有字节序问题</code>）</li><li>释放申请的堆内存。</li></ol><p>由于发送端每次都需要将这个数据包完整的发送出去，因此可以设计一个发送函数，如果当前数据包中的数据没有发送完就让它一直发送</p><blockquote><p>[!info] Title 字符串没有字节序问题，但是数据头不是字符串是整形，因此需要从主机字节序转换为网络字节序再发送。</p></blockquote><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>函数描述: 发送指定的字节数</span></span>
<span class="line"><span>函数参数:</span></span>
<span class="line"><span>    - fd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span>    - msg: 待发送的原始数据</span></span>
<span class="line"><span>    - size: 待发送的原始数据的总字节数</span></span>
<span class="line"><span>函数返回值: 函数调用成功返回发送的字节数, 发送失败返回-1</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>int writen(int fd, const char* msg, int size)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const char* buf = msg;</span></span>
<span class="line"><span>    int count = size;</span></span>
<span class="line"><span>    while (count &gt; 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        int len = send(fd, buf, count, 0);</span></span>
<span class="line"><span>        if (len == -1)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            close(fd);</span></span>
<span class="line"><span>            return -1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (len == 0)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        buf += len;</span></span>
<span class="line"><span>        count -= len;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return size;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有了功能函数后就可以发送带有包头的数据块了，具体处理动作如下：</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>函数描述: 发送带有数据头的数据包</span></span>
<span class="line"><span>函数参数:</span></span>
<span class="line"><span>    - cfd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span>    - msg: 待发送的原始数据</span></span>
<span class="line"><span>    - len: 待发送的原始数据的总字节数</span></span>
<span class="line"><span>函数返回值: 函数调用成功返回发送的字节数, 发送失败返回-1</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>int sendMsg(int cfd, char* msg, int len)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   if(msg == NULL || len &lt;= 0 || cfd &lt;=0)</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>       return -1;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   // 申请内存空间: 数据长度 + 包头4字节(存储数据长度)</span></span>
<span class="line"><span>   char* data = (char*)malloc(len+4);</span></span>
<span class="line"><span>   int bigLen = htonl(len);</span></span>
<span class="line"><span>   memcpy(data, &amp;bigLen, 4);</span></span>
<span class="line"><span>   memcpy(data+4, msg, len);</span></span>
<span class="line"><span>   // 发送数据</span></span>
<span class="line"><span>   int ret = writen(cfd, data, len+4);</span></span>
<span class="line"><span>   // 释放内存</span></span>
<span class="line"><span>   free(data);</span></span>
<span class="line"><span>   return ret;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="接收端" tabindex="-1"><a class="header-anchor" href="#接收端"><span>接收端</span></a></h2><ol><li>首先接收4字节数据，<code>并将其从网络字节序转换为主机字节序</code>，这样就得到了即将要接收的数据的总长度</li><li>根据得到的长度申请固定大小的堆内存，用于存储待接收的数据</li><li>根据得到的数据块长度接收固定数目的数据保存到申请的堆内存中</li><li>处理接收的数据</li><li>释放存储数据的堆内存 从数据包头解析出要接收的数据长度之后，还需要将这个数据块完整的接收到本地才能进行后续的数据处理，因此需要编写一个接收数据的功能函数，保证能够得到一个完整的数据包数据</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>函数描述: 接收指定的字节数</span></span>
<span class="line"><span>函数参数:</span></span>
<span class="line"><span>    - fd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span>    - buf: 存储待接收数据的内存的起始地址</span></span>
<span class="line"><span>    - size: 指定要接收的字节数</span></span>
<span class="line"><span>函数返回值: 函数调用成功返回发送的字节数, 发送失败返回-1</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>int readn(int fd, char* buf, int size)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    char* pt = buf;</span></span>
<span class="line"><span>    int count = size;</span></span>
<span class="line"><span>    while (count &gt; 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        int len = recv(fd, pt, count, 0);</span></span>
<span class="line"><span>        if (len == -1)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return -1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (len == 0)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return size - count;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pt += len;</span></span>
<span class="line"><span>        count -= len;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return size;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有了功能函数后就可以接收带包头的数据块了，接收函数实现如下：</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>函数描述: 接收带数据头的数据包</span></span>
<span class="line"><span>函数参数:</span></span>
<span class="line"><span>    - cfd: 通信的文件描述符(套接字)</span></span>
<span class="line"><span>    - msg: 一级指针的地址，函数内部会给这个指针分配内存，用于存储待接收的数据，这块内存需要使用者释放</span></span>
<span class="line"><span>函数返回值: 函数调用成功返回接收的字节数, 发送失败返回-1</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>int recvMsg(int cfd, char** msg)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 接收数据</span></span>
<span class="line"><span>    // 1. 读数据头</span></span>
<span class="line"><span>    int len = 0;</span></span>
<span class="line"><span>    readn(cfd, (char*)&amp;len, 4);</span></span>
<span class="line"><span>    len = ntohl(len);</span></span>
<span class="line"><span>    printf(&quot;数据块大小: %d\\n&quot;, len);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 根据读出的长度分配内存，+1 -&gt; 这个字节存储\\0</span></span>
<span class="line"><span>    char *buf = (char*)malloc(len+1);</span></span>
<span class="line"><span>    int ret = readn(cfd, buf, len);</span></span>
<span class="line"><span>    if(ret != len)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        close(cfd);</span></span>
<span class="line"><span>        free(buf);</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    buf[len] = &#39;\\0&#39;;</span></span>
<span class="line"><span>    *msg = buf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,16)]))}const v=s(e,[["render",p]]),r=JSON.parse('{"path":"/base/cn/8/","title":"8 TCP粘包的处理","lang":"zh-CN","frontmatter":{"title":"8 TCP粘包的处理","createTime":"2025/06/18 20:54:42","permalink":"/base/cn/8/"},"readingTime":{"minutes":6.28,"words":1884},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/计算机网络/8 TCP粘包的处理.md","headers":[]}');export{v as comp,r as data};
