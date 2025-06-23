import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>jedis方法操作和redis中的命令一样,但线程不安全</p><p>引入依赖</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;redis.clients&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jedis&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.3.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class JedisTest {</span></span>
<span class="line"><span>  private Jedis jedis;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//建立连接</span></span>
<span class="line"><span>  @BeforeEach</span></span>
<span class="line"><span>  void setUp() {</span></span>
<span class="line"><span>    // 建立连接</span></span>
<span class="line"><span>    jedis = new Jedis(&quot;localhost&quot;, 6379);</span></span>
<span class="line"><span>    // 验证密码</span></span>
<span class="line"><span>    jedis.auth(&quot;030604&quot;);</span></span>
<span class="line"><span>    // 选择数据库</span></span>
<span class="line"><span>    jedis.select(0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//操作数据库</span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  void testString() {</span></span>
<span class="line"><span>    System.out.println(jedis.set(&quot;name&quot;, &quot;zhangsan&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    System.out.println(jedis.get(&quot;name&quot;));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @Test</span></span>
<span class="line"><span>  void testHash(){</span></span>
<span class="line"><span>    System.out.println(jedis.hset(&quot;user:1&quot;, &quot;name&quot;, &quot;zhangsan&quot;));</span></span>
<span class="line"><span>    System.out.println(jedis.hset(&quot;user:1&quot;, &quot;age&quot;,&quot;21&quot;));</span></span>
<span class="line"><span>    Map&lt;String, String&gt; map = jedis.hgetAll(&quot;user:1&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    System.out.println(map);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//释放连接</span></span>
<span class="line"><span>  @AfterEach</span></span>
<span class="line"><span>  void tearDown() {</span></span>
<span class="line"><span>    // 关闭连接</span></span>
<span class="line"><span>    if (jedis != null) {</span></span>
<span class="line"><span>      jedis.close();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池"><span>数据库连接池</span></a></h3><p>因为jedis是线程不安全的所以推荐使用数据库连接池 jedis提供了自带的数据库连接池,JedisPool</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class JedisConnefctionFactory {</span></span>
<span class="line"><span>  private static final JedisPool jedisPool;</span></span>
<span class="line"><span>  static {</span></span>
<span class="line"><span>    JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();// 最大连接</span></span>
<span class="line"><span>    jedisPoolConfig.setMaxTotal(8);</span></span>
<span class="line"><span>    // 最大空闲连接</span></span>
<span class="line"><span>    jedisPoolConfig.setMaxIdle(8);</span></span>
<span class="line"><span>    // 最小空闲连接</span></span>
<span class="line"><span>    jedisPoolConfig.setMinIdle(0);</span></span>
<span class="line"><span>    // 设置最长等待时间,ms</span></span>
<span class="line"><span>    jedisPoolConfig.setMaxWaitMillis(200);</span></span>
<span class="line"><span>    jedisPool = new JedisPool(jedisPoolConfig, &quot;localhost&quot;, 6379, 1000, &quot;123321&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取Jedis对象</span></span>
<span class="line"><span>  public static Jedis getJedis() {</span></span>
<span class="line"><span>    return jedisPool.getResource();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,8)]))}const t=n(l,[["render",p]]),v=JSON.parse('{"path":"/tools/redis/2/","title":"2 Jedis","lang":"zh-CN","frontmatter":{"title":"2 Jedis","createTime":"2025/04/05 12:12:26","permalink":"/tools/redis/2/"},"readingTime":{"minutes":0.85,"words":254},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/工具/Redis/2 Jedis.md","headers":[]}');export{t as comp,v as data};
