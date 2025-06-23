import{_ as a,c as e,a as n,o as i}from"./app-CEcM0piI.js";const t={};function l(d,s){return i(),e("div",null,s[0]||(s[0]=[n(`<h3 id="inetaddress" tabindex="-1"><a class="header-anchor" href="#inetaddress"><span>InetAddress</span></a></h3><table><thead><tr><th>成员函数</th><th>说明</th></tr></thead><tbody><tr><td>static InetAddress getByName(String host)</td><td>确定主机名称的IP地址。主机名称可以是机器名称，也可以是IP地址</td></tr><tr><td>String getHostName()</td><td>获取此IP地址的主机名,如果局域网没有这个主机名则返回ip</td></tr><tr><td>String getHostAddress()</td><td>返回文本显示中的IP地址字符串</td></tr></tbody></table><h2 id="datagramsocket" tabindex="-1"><a class="header-anchor" href="#datagramsocket"><span>DatagramSocket</span></a></h2><p>此类用于udp通信</p><p>发送数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>DatagramSocket ds = new DatagramSocket();</span></span>
<span class="line"><span>//2.打包数据</span></span>
<span class="line"><span>Stringstr=&quot;你好威啊！！！</span></span>
<span class="line"><span>byte[] bytes = str.getBytes();</span></span>
<span class="line"><span>InetAddress address = InetAddress.getByName(&quot;127.0.0.1&quot;);</span></span>
<span class="line"><span>int port = 10086;</span></span>
<span class="line"><span>DatagramPacket dp = new DatagramPacket(bytes,bytes.length,address,port);</span></span>
<span class="line"><span>//3.发送数据</span></span>
<span class="line"><span>ds.send(dp);</span></span>
<span class="line"><span>7/4.释放资源</span></span>
<span class="line"><span>ds.close();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>DatagramSocket ds = new DatagramSocket(port:10086);</span></span>
<span class="line"><span>//2.接收数据包</span></span>
<span class="line"><span>byte[] bytes = new byte[1024];</span></span>
<span class="line"><span>DatagramPacket dp = new DatagramPacket(bytes,bytes.length);</span></span>
<span class="line"><span>ds.receive(dp);</span></span>
<span class="line"><span>//3.解析数据包</span></span>
<span class="line"><span>byte[] data = dp.getData();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用DatagramSocket套接字发送的数据都是单播</p><p>使用MulticastSocket套接字发送的数据是组播 使用方式和DatagramSocket是一致的,但在指定端口的时候要使用组播地址 接收方需要将本主机加入到组播地址组中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ms.joinGroup(address);//address就是组播地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="socket" tabindex="-1"><a class="header-anchor" href="#socket"><span>Socket</span></a></h2><p>此类用于tcp通信</p><p>发送数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Socket socket = new Socket(&quot;127.0.0.1&quot;,10000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2.可以从连接通道中获取输出流</span></span>
<span class="line"><span>OutputStream os = socket.getoutputStream();</span></span>
<span class="line"><span>7/写出数据</span></span>
<span class="line"><span>os.write(&quot;你好你好&quot;·getBytes())；</span></span>
<span class="line"><span>//3.释放资源</span></span>
<span class="line"><span>os.close();</span></span>
<span class="line"><span>socket.close();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//1.创建对象ServerSocker</span></span>
<span class="line"><span>ServerSocket ss = new ServerSocket(10000);</span></span>
<span class="line"><span>//2.监听客户端的链接</span></span>
<span class="line"><span>Socket socket = ss.accept();</span></span>
<span class="line"><span>//3.从连接通道中获取输入流读取数据</span></span>
<span class="line"><span>InputStream is = socket.getInputStream();</span></span>
<span class="line"><span>int b;</span></span>
<span class="line"><span>while ((b = is.read())!=-1){</span></span>
<span class="line"><span>	System.out.println((char) b);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>7/4.释放资源</span></span>
<span class="line"><span>socket.close();</span></span>
<span class="line"><span>ss.close();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收数据使用字节流可能会导致乱码,可以使用转换流</p>`,18)]))}const r=a(t,[["render",l]]),c=JSON.parse('{"path":"/back/java/7/","title":"7 网络编程","lang":"zh-CN","frontmatter":{"title":"7 网络编程","createTime":"2025/04/05 12:12:26","permalink":"/back/java/7/"},"readingTime":{"minutes":1.37,"words":412},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/后端/Java/7 网络编程.md","headers":[]}');export{r as comp,c as data};
