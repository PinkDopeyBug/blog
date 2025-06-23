import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>导入坐标</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入坐标后还需要在启动类上面添加EnableCaching注解表示这个程序启动要使用缓存技术 接着要在使用缓存技术的函数上加上Cacheable注解</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Cacheable(value=&quot;cacheSpace&quot;,key=&quot;#id&quot;)</span></span>
<span class="line"><span>public Book getById(Integer id){</span></span>
<span class="line"><span>	return bookDao.selectById(id);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>value表示存储的缓存命名空间,如果没有则创建,key表示存入缓存的键,#id表示将参数id作为键</p><p>SpringBoot提供的缓存技术除了提供默认的缓存方案，，还可以对其他缓存技术进行整合，统一接口，方便缓存技术的开发与管理</p><h2 id="更改缓存技术" tabindex="-1"><a class="header-anchor" href="#更改缓存技术"><span>更改缓存技术</span></a></h2><p>默认使用的simple可以进行更改</p><h3 id="ehcache" tabindex="-1"><a class="header-anchor" href="#ehcache"><span>ehcache</span></a></h3><p>导入坐标</p><div class="language-pom.xml line-numbers-mode" data-highlighter="shiki" data-ext="pom.xml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;net.sf.ehcache&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;ehcache&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改配置</p><div class="language-application.yml line-numbers-mode" data-highlighter="shiki" data-ext="application.yml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>	cache:</span></span>
<span class="line"><span>		type: ehcache</span></span>
<span class="line"><span>		ehcache: </span></span>
<span class="line"><span>			config: ehcache</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要使用缓存的函数上加上注解</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@CachePut(value =&quot;smsCode&quot;,key=&quot;#tele&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h4><p>ehcache要使用自己的配置文件ehcache.xml</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.o&quot;encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;ehcache xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>		xsi:noNamespaceSchemaLocation=&quot;http://ehcache.org/ehcache.xsd&quot;</span></span>
<span class="line"><span>		updatecheck=&quot;false&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;!-- 缓存存放的位置 --&gt;</span></span>
<span class="line"><span>	&lt;diskStore path=&quot;D:\\ehcache&quot;/&gt;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	&lt;!-- 默认缓存策略 --&gt;</span></span>
<span class="line"><span>	&lt;！--external：是否永久存在，设置为true则不会被清除，此时与timeout冲突，通常设置为faLse --&gt;</span></span>
<span class="line"><span>	&lt;!--diskPersistent：是否启用磁盘持久化--&gt;</span></span>
<span class="line"><span>	&lt;!--maxELementsInMemory：最大缓存数量--&gt;</span></span>
<span class="line"><span>	&lt;!--overfLowToDisk：超过最大缓存数量是否持久化到磁盘--&gt;</span></span>
<span class="line"><span>	&lt;！--timeToIdLeSeconds：最大不活动间隔，设置过长缓存容易溢出，设置过短无效果，可用于记录时效性数据，例如验证码--&gt;</span></span>
<span class="line"><span>	&lt;!--timeToLiveSeconds：最大存活时间--&gt;</span></span>
<span class="line"><span>	&lt;!--memoryStoreEvictionPoLicy：缓存清除策略--&gt;</span></span>
<span class="line"><span>	&lt;defaultCache</span></span>
<span class="line"><span>		eternal=&quot;false&quot;</span></span>
<span class="line"><span>		diskPersistent=&quot;false&quot;</span></span>
<span class="line"><span>		maxElementsInMemory=&quot;1000&quot;</span></span>
<span class="line"><span>		overflowToDisk=&quot;false&quot;</span></span>
<span class="line"><span>		timeToIdleSeconds=&quot;60&quot;</span></span>
<span class="line"><span>		timeToLiveSeconds=&quot;60&quot;</span></span>
<span class="line"><span>		memoryStoreEvictionPolicy=&quot;LRU&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&lt;!-- 其他缓存配置 --&gt;</span></span>
<span class="line"><span>	&lt;cache</span></span>
<span class="line"><span>		name=&quot;smsCode&quot;</span></span>
<span class="line"><span>		eternal=&quot;false&quot;</span></span>
<span class="line"><span>		diskPersistent=&quot;false&quot;</span></span>
<span class="line"><span>		maxElementsInMemory=&quot;1000&quot;</span></span>
<span class="line"><span>		overflowToDisk=&quot;false&quot;</span></span>
<span class="line"><span>		timeToIdleSeconds=&quot;60&quot;</span></span>
<span class="line"><span>		timeToLiveSeconds=&quot;60&quot;</span></span>
<span class="line"><span>		memoryStoreEvictionPolicy=&quot;LRU&quot;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>除了默认缓存配置还有其他缓存配置需要指定出name属性表示缓存的命名空间</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@CachePut(value =&quot;smsCode&quot;,key=&quot;#tele&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>中value指定的命名空间就是存储到配置的命名空间中</p><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>redis</span></a></h2><p>导入坐标</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring</span></span>
<span class="line"><span>	cache:</span></span>
<span class="line"><span>		type: redis</span></span>
<span class="line"><span>	redis:</span></span>
<span class="line"><span>		host: localhost</span></span>
<span class="line"><span>		port: 6379</span></span>
<span class="line"><span>		use-key-prefix: false    //是否使用前缀,如果使用,在CachePut注解中指定的value就是作为前缀值存入redis中,如果不指定则直接将值存入redis中</span></span>
<span class="line"><span>		cache-null-values: false    //是否允许空值,如果不允许则值为空时不存入</span></span>
<span class="line"><span>		key-prefix: aa    //键的前缀,需要use-key-prefix使用前缀开启,在前缀的键上拼接该字符串</span></span>
<span class="line"><span>		time-to-live: 10s    //超时时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jetcache" tabindex="-1"><a class="header-anchor" href="#jetcache"><span>jetcache</span></a></h2><p>以上缓存只能只使用本地缓存或者只使用远程缓存</p><p>jetCache对SpringCache进行了封装，在原有功能基础上实现了多级缓存、缓存统计、自动刷新、异步调用、数据报表等功能</p><p>jetCache设定了本地缓存与远程缓存的多级缓存解决方案 本地缓存（local）</p><ul><li>LinkedHashMap</li><li>Caffeine 远程缓存（remote）</li><li>Redis</li><li>Tair</li></ul><p>导入坐标</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;com.alicp.jetcache&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;jetcache-starter-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;version&gt;2.6.2&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程方案" tabindex="-1"><a class="header-anchor" href="#远程方案"><span>远程方案</span></a></h3><p>配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>jetcache:</span></span>
<span class="line"><span>	remote:    //使用本地还是远程,如果是远程就使用local</span></span>
<span class="line"><span>		default:    //默认空间,如果不指定缓存的命名空间默认使用该空间</span></span>
<span class="line"><span>			type: redis</span></span>
<span class="line"><span>			host: localhost</span></span>
<span class="line"><span>			port: 6379</span></span>
<span class="line"><span>			poolConfig:</span></span>
<span class="line"><span>				maxTotal: 50    //最大连接数,必须指定</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在能够被读取的配置类(或引导类)中加上注解@EnableCreateCacheAnnotation</p><p>在要使用缓存的类中添加操作对象 area表示命名空间,不指定默认使用default name表示缓存空间,expire过期时间,timeUnit时间单位默认是秒 cacheType表示使用的缓存方案,可以是远程或本地也可以都用</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@CreateCache(area=&quot;sms&quot;,name=&quot;jetCache&quot;,expire =3600,timeUnit=TimeUnit.SECONDS,catcheType=CacheType.LOCAL)</span></span>
<span class="line"><span>private Cache&lt;String,String&gt; jetCache;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public String sendCodeToSMS(String tele){</span></span>
<span class="line"><span>	String code = codeutils.generator(tele);</span></span>
<span class="line"><span>	jetCache.put(tele,code);    //指定存储的键值</span></span>
<span class="line"><span>	return code;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@override</span></span>
<span class="line"><span>public boolean checkCode(SMSCode smsCode){</span></span>
<span class="line"><span>	String code=jetCache.get(smsCode.getTele());</span></span>
<span class="line"><span>	return smsCode.getCode().equals(code);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="本地方案" tabindex="-1"><a class="header-anchor" href="#本地方案"><span>本地方案</span></a></h3><p>远程方案和本地方案可以共存 keyConvertor用于转换键,通常键是使用字符串存储的,但也可以存储对象类型,如果是对象类型在比对的时候就会更加复杂,一般是将对象类型转换为字符串存储为key jetcache默认携带有fastjson,可以使用fastjson将对象类型转换为json字符串 valueEncode和valueDecode表示值编解码的对象是什么对象,由于使用的是java故为java对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>jetcache:</span></span>
<span class="line"><span>	local:</span></span>
<span class="line"><span>	default:</span></span>
<span class="line"><span>		type: linkedhashmap</span></span>
<span class="line"><span>		keyConvertor:fastjson</span></span>
<span class="line"><span>		valueEncode: java</span></span>
<span class="line"><span>		valueDecode: java</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着在需要缓存的java对象中还需要实现Serializable接口才能真正使用对象序列化,有默认的方法,不需要给出实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Data</span></span>
<span class="line"><span>public class Book implements Serializable{</span></span>
<span class="line"><span>	private Integer id;</span></span>
<span class="line"><span>	private String type;</span></span>
<span class="line"><span>	private String name;</span></span>
<span class="line"><span>	private String description;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法缓存" tabindex="-1"><a class="header-anchor" href="#方法缓存"><span>方法缓存</span></a></h3><p>要在配置类(启动类)上面加上enableMethodCache注解和EnableCreateCacheAnnotation注解搭配使用 要用basePackages指定出要作用的包名,可以以数组的形式指定多个</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@EnableMethodCache(basePackages=&quot;com.itheima&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接着在指定的包中的方法上加上Cached注解并指定参数即可使用</p><h3 id="缓存更新" tabindex="-1"><a class="header-anchor" href="#缓存更新"><span>缓存更新</span></a></h3><p>如果一条数据进入缓存后又在磁盘中更改(或删除)了这个数据那么缓存中的数据就变成了脏数据,可以在更新操作中设置当调用该更新方法时就去缓存中查看是否有记录该数据,如果有就同步更新缓存中的数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//更新</span></span>
<span class="line"><span>@override</span></span>
<span class="line"><span>@CacheUpdate(name=&quot;book_&quot;, key=&quot;#book.id&quot;, value=&quot;#book&quot;)</span></span>
<span class="line"><span>public boolean update(Book book){</span></span>
<span class="line"><span>	return bookDao.updateById(book)&gt;0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>@CacheInvalidate(name=&quot;book_&quot;,key =&quot;#id&quot;)</span></span>
<span class="line"><span>public boolean delete(Integer id){</span></span>
<span class="line"><span>	return bookDao.deleteById(id)&gt;0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有多个系统都可以更改数据库中的数据,此时有一个系统更改了这个数据,自己的缓存也更新 了,但其他的系统却不知道数据库更新了.这种情况可以使用缓存刷新来每隔一段时间查询一次以此更新数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@CacheRefresh(refres=10)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该注解一般加在查询的方法上,这样就设定每隔一段时间查询数据保持数据更新</p><h3 id="缓存统计" tabindex="-1"><a class="header-anchor" href="#缓存统计"><span>缓存统计</span></a></h3><p>jetcache提供了缓存统计的功能,可以查看缓存效率 每隔指定的分钟数就在控制台中输出操作情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>jetcache:</span></span>
<span class="line"><span>	statIntervalMinutes: 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="j2cache" tabindex="-1"><a class="header-anchor" href="#j2cache"><span>j2cache</span></a></h2><p>导入坐标</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;net.oschina.j2cache&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;j2cache-core&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;version&gt;2.8.4-release&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;net.oschina.j2cache&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;j2cache-spring-boot2-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;version&gt;2.8.0-release&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件 在spring的配置文件中只有一个配置选项指定配置文件路径 需要额外添加专门的配置文件</p><div class="language-application.yml line-numbers-mode" data-highlighter="shiki" data-ext="application.yml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>j2cache:</span></span>
<span class="line"><span>	config-location: j2cache.properties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-j2cache.properties line-numbers-mode" data-highlighter="shiki" data-ext="j2cache.properties" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#1级缓存</span></span>
<span class="line"><span>j2cache.L1.provider_class = ehcache    # 一级缓存供应商</span></span>
<span class="line"><span>ehcache.configXml =ehcache.xml   # ehcache的配置文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置是否启用二级缓存</span></span>
<span class="line"><span>j2cache.l2-cache-open=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#2级缓存</span></span>
<span class="line"><span>j2cache.L2.provider_class =net.oschina.j2cache.cache.support.redis.SpringRedisProvider    # 二级缓存供应商为redis,redis要去springboot中找到服务的类的全类名</span></span>
<span class="line"><span>j2cache.L2.config_section = redis1    # 配置属性的前缀(在当前配置文件中)只要前缀匹配都是redis的配置属性</span></span>
<span class="line"><span>redis1.hosts =1ocalhost:6379    # 配置redis的地址与端口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#1级缓存中的数据如何到达二级缓存</span></span>
<span class="line"><span>j2cache.broadcast=net.oschina.j2cache.cache.support.redis.SpringRedisPubSubPolicy    # 使用redis的订阅与发布机制</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着就可以在类中使用了,使用时需要创建一个CacheChannel类自动注入,然后使用其中的set和get方法</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class SMSCodeServiceImpl implements SMSCodeService{</span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private CodeUtils codeUtils;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private CacheChannel cacheChannel;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public String sendCodeToSMS(String tele）{</span></span>
<span class="line"><span>		String code = codeUtils.generator(tele);</span></span>
<span class="line"><span>		cachechannel.set(&quot;sms&quot;,tele,code);</span></span>
<span class="line"><span>		return code;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public boolean checkCode(SMSCode smsCode）{</span></span>
<span class="line"><span>		String code =cacheChanne.get(&quot;sms&quot;,smsCode.getTele()).asString();</span></span>
<span class="line"><span>		return smsCode.getCode().equals(code);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务"><span>定时任务</span></a></h1><p>java中有自动任务的官方库,使用时需要重写run函数,和多线程一样,本质就是当到达指定时间时开启一个线程执行定时任务</p><h2 id="quartz" tabindex="-1"><a class="header-anchor" href="#quartz"><span>Quartz</span></a></h2><p>相关概念</p><ul><li>工作（Job）：用于定义具体执行的工作</li><li>工作明细（JobDetail）：用于描述定时工作相关的信息</li><li>触发器（Trigger）：用于描述触发工作的规则，通常使用cron表达式定义调度规则</li><li>调度器（Scheduler）：描述了工作明细与触发器的对应关系</li></ul><p>触发器绑定工作明细,工作明细指定工作</p><ol><li>导入坐标</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-quartz&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>指定工作 在使用时自定义的定时任务需要继承QuartzJobBean抽象类,并重写其中的executeInternal函数,这个函数就类似于run函数,定时任务就在其中执行 它有一个参数JobExecutionContext表示任务的上下文对象,可以获取许多信息</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public classMyQuartzextends QuartzJobBean{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	protected void executeInternal (JobExecutionContexttcontext) throws JobExecutionException {</span></span>
<span class="line"><span>		System.out.println(&quot;quartz task run...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>工作配置 需要添加一个工作的配置类 使用JobBuilder构造器创建新的工作,将自己定义好的工作传入(工作种类) storeDurably表示当工作没有执行时是否要持久化下来下次再用</li></ol><p>cronSchedule中需要指定时间表达式用来指明工作周期 绑定器中的forJob用来绑定自定义工作类中的什么工作 withSchedule绑定执行周期</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class QuartzConfig{</span></span>
<span class="line"><span>	@Bean</span></span>
<span class="line"><span>	public JobDetail printJobDetail(){</span></span>
<span class="line"><span>		//绑定具体的工作</span></span>
<span class="line"><span>		return JobBuilder.newJob(MyQuartz.class).storeDurably().build();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Bean</span></span>
<span class="line"><span>	public Trigger printJobTrigger(){</span></span>
<span class="line"><span>		//绑定对应的工作明细</span></span>
<span class="line"><span>		ScheduleBuilder schedBuilder=CronScheduleBuilder.cronSchedule(&quot;时间表达式&quot;)</span></span>
<span class="line"><span>		return TriggerBuilder.newTrigger().forJob(printJobDetail().withSchedule(schedBuilder).build();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="spring-task" tabindex="-1"><a class="header-anchor" href="#spring-task"><span>spring task</span></a></h2><p>quartz太过繁琐,spring自己提供了任务框架</p><ol><li><p>配置类 需要在配置类(或启动类)上添加EnableScheduling注解表示开启定时任务功能</p></li><li><p>创建工作类 创建的工作类需要添加@Component注解被ioc容器管控 在需要定时执行的任务上添加Scheduled注解,cron属性指定时间表达式</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyBean {</span></span>
<span class="line"><span>	@Scheduled(cron=&quot;时间表达式&quot;)</span></span>
<span class="line"><span>	public void print(){</span></span>
<span class="line"><span>		System.out.println(&quot;spring task run...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本质也是开启一个新线程执行定时任务,因此可以在任务函数中使用线程相关函数</p><ol start="3"><li>定时任务相关配置</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>	task:</span></span>
<span class="line"><span>		scheduling:</span></span>
<span class="line"><span>			#任务调度线程池大小默认1</span></span>
<span class="line"><span>			pool:</span></span>
<span class="line"><span>				size:1</span></span>
<span class="line"><span>			#调度线程名称前缀默认scheduLing-</span></span>
<span class="line"><span>			thread-name-prefix: ssm_</span></span>
<span class="line"><span>			shutdown:</span></span>
<span class="line"><span>				#线程池关闭时等待所有任务完成</span></span>
<span class="line"><span>				await-termination: false</span></span>
<span class="line"><span>				#调度线程关闭前最大等待时间，确保最后一定关闭</span></span>
<span class="line"><span>				await-termination-period: 10s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="邮件" tabindex="-1"><a class="header-anchor" href="#邮件"><span>邮件</span></a></h1><ul><li>SMTP（Simple Mail Transfer Protocol）：简单邮件传输协议，用于发送电子邮件的传输协议</li><li>POP3（Post Office Protocol - Version 3）：用于接收电子邮件的标准协议</li><li>IMAP（Internet Mail Access Protocol）：互联网消息协议，是POP3的替代协议</li></ul><h2 id="javamail" tabindex="-1"><a class="header-anchor" href="#javamail"><span>JavaMail</span></a></h2><ol><li>导入坐标</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>	mail:</span></span>
<span class="line"><span>		host: smtp.qq.com    # 使用什么协议和哪个邮箱</span></span>
<span class="line"><span>		username: xxx@qq.com    # 邮箱地址</span></span>
<span class="line"><span>		password: ewlrengdrxfxhjde    # 该邮箱对应协议的授权码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>实现类 发送人的邮箱要在配置文件中</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class SendMailServiceImpl implements SendMailService{</span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private JavaMailSender javaMailSender;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	//发送人</span></span>
<span class="line"><span>	private String from =&quot;xxx@qq.com&quot;;</span></span>
<span class="line"><span>	//接收人</span></span>
<span class="line"><span>	private String to =&quot;xxx@xxx.com&quot;;</span></span>
<span class="line"><span>	//标题</span></span>
<span class="line"><span>	private String subject=&quot;测试邮件&quot;;</span></span>
<span class="line"><span>	//正文</span></span>
<span class="line"><span>	private Stringcontext：&quot;测试邮件正文内容&quot;;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void sendMail(){</span></span>
<span class="line"><span>		SimpleMailMessage message = new SimpleMailMessage();    //创建对象(简单邮件)</span></span>
<span class="line"><span>		message.setFrom(from);    //设置发送人</span></span>
<span class="line"><span>		message.setTo(to);   //设置接收人</span></span>
<span class="line"><span>		message.setSubject(subject);    //设置标题</span></span>
<span class="line"><span>		message.setText(context);    //设置正文</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		javaMailSender.send(message);    //发送邮件</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>根据邮箱格式如果在发送人的邮箱后面加上括号备注,那么在接收方接收到的邮件中就不会显示邮箱地址而显示备注名了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>private String from=&quot;xxx.@xxx.com(备注名)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>普通邮件</strong> 普通邮件比简单邮件的区别就是发送的正文可以是html的,这样就可以设置跳转链接了 或图片附件等</p><p>普通邮件发送需要创建一个MimeMessageHelper对象包装MimeMessage对象,在helper对象中设置发送信息 如果要发送的邮件支持html需要在setText设置正文的时候再传入一个布尔参数表示支持html否则发送过去的还只是一个文本</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>	//发送人</span></span>
<span class="line"><span>	private String from =&quot;xxx@qq.com&quot;;</span></span>
<span class="line"><span>	//接收人</span></span>
<span class="line"><span>	private String to =&quot;xxx@xxx.com&quot;;</span></span>
<span class="line"><span>	//标题</span></span>
<span class="line"><span>	private String subject=&quot;测试邮件&quot;;</span></span>
<span class="line"><span>	//正文</span></span>
<span class="line"><span>	private Stringcontext：&quot;&lt;a href=&#39;https://www.baidu.com&#39;&gt;点击跳转到百度&lt;/a&gt;&quot;;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void sendMail(){</span></span>
<span class="line"><span>		try{</span></span>
<span class="line"><span>			MimeMessage message =javaMailSender.createMimeMessage();</span></span>
<span class="line"><span>			MimeMessageHelper helper = new MimeMessageHelper(message);</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>			helper.setFrom（from+&quot;(小甜甜)&quot;);</span></span>
<span class="line"><span>			helper.setTo(to);</span></span>
<span class="line"><span>			helper.setSubject(subject);</span></span>
<span class="line"><span>			helper.setText(context,true);</span></span>
<span class="line"><span>			</span></span>
<span class="line"><span>			javaMailSender.send(message);</span></span>
<span class="line"><span>		}catch（Exception e）{</span></span>
<span class="line"><span>			e.printStackTrace();</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>发送附件 要发送附件需要在创建helper对象时在第二个参数中传入布尔值表示开关多部件功能 再调用addAttachment函数设置给helper,第一个参数为文件名,第二个参数是文件本体 文件名需要带后缀</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>MimeMessageHelper helper=new MimeMessageHelper(message,true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//添加附件</span></span>
<span class="line"><span>File f1=new File(&quot;path&quot;);</span></span>
<span class="line"><span>File f2=new File(&quot;path&quot;);</span></span>
<span class="line"><span>helper.addAttachment(f1.getName(),f1);</span></span>
<span class="line"><span>helper.addAttachment(&quot;文件名&quot;,f2);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="消息" tabindex="-1"><a class="header-anchor" href="#消息"><span>消息</span></a></h1><ul><li>同步消息 : 发送方发送消息,当接收方回复消息后再继续发送</li><li>异步消息 : 发送方发送全部消息无论接收方是否回复</li></ul><p>企业级应用中广泛使用的三种异步消息传递技术</p><ol><li>JMS</li><li>AMQP</li><li>MQTT</li></ol><p>Kafka，一种高吞吐量的分布式发布订阅消息系统，提供实时消息功能。</p><h2 id="jms" tabindex="-1"><a class="header-anchor" href="#jms"><span>JMS</span></a></h2><p>JMS（JavaMessageService）：一个规范，等同于JDBC规范，提供了与消息服务相关的APi接口</p><p>JMS消息模型</p><ul><li>peer-2-peer：点对点模型，消息发送到一个队列中，队列保存消息。队列的消息只能被一个消费者消费，或超时</li><li>publish-subscribe：发布订阅模型，消息可以被多个消费者消费，生产者和消费者完全独立，不需要感知对方的存在</li></ul><p>JMS消息种类</p><ul><li>TextMessage</li><li>MapMessage</li><li>BytesMessage</li><li>StreamMessage</li><li>ObjectMessage</li><li>Message（只有消息头和属性）</li></ul><p>JMS实现：ActiveMQ、Redis、HornetMQ、RabbitMQ、RocketMQ（没有完全遵守JMS规范）</p><h3 id="activemq" tabindex="-1"><a class="header-anchor" href="#activemq"><span>ActiveMQ</span></a></h3><ol><li><p>下载并启动 默认端口是61616</p></li><li><p>导入坐标</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;prg.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-activemq&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring: </span></span>
<span class="line"><span>	activemq:</span></span>
<span class="line"><span>		broker-url: tcp://localhost:61616    # 配置消息队列地址</span></span>
<span class="line"><span>	jms:</span></span>
<span class="line"><span>		template:</span></span>
<span class="line"><span>			default-destination: itheima    # 指定消息发送和存储的空间名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>实现类 需要实现MessqgeService接口 并且使用的时候需要自动注入JmsMessagingTemplate</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class MessageServiceActivemqImpl implements MessageService{</span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private JmsMessagingTemplate messagingTemplate;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void sendMessage(String id）{</span></span>
<span class="line"><span>		System.out.println（&quot;待发送短信的订单已纳入处理队列，id：&quot;+id)；</span></span>
<span class="line"><span>		messagingTemplate.convertAndSend(&quot;order.queue.id&quot;,id);    //将消息转换为可以被识别的类型并发送</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public String doMessage(）{</span></span>
<span class="line"><span>		String id =messagingTemplate.receiveAndConvert(&quot;order.queue.id&quot;,String.class);    //接收时需要转换为对应的数据类型</span></span>
<span class="line"><span>		System.out.println（&quot;已完成短信发送业务，id：&quot;+id)；</span></span>
<span class="line"><span>		return id;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>监听消息</strong> 使用JmsListener注解监听指定目的地的消息,一旦该地方有消息进入立即取出消息执行下面的函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MessageListener{</span></span>
<span class="line"><span>	@JmsListener(destination=&quot;order.queue.id&quot;)</span></span>
<span class="line"><span>	public void receive(String id){</span></span>
<span class="line"><span>		System.out.println(&quot;已完成短信发送业务，id：&quot;+id);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>转发消息</strong> 在接收消息的执行函数上面添加SendTO(&quot;目的地&quot;)注解,可以在处理完消息后将函数的返回值作为消息发送到另一个目的地</p><p><strong>发布-订阅模式</strong> 以上消息处理是点对点的模式,可以更改为发布-订阅的模式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>	jms:</span></span>
<span class="line"><span>		pub-sub-domain: true    # 切换为发布-订阅模式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="amqp" tabindex="-1"><a class="header-anchor" href="#amqp"><span>AMQP</span></a></h2><p>AMQP（advancedmessagequeuingprotocol）：一种协议（高级消息队列协议，也是消息代理规范），规范了网络交换的数据格式，兼容JMS</p><p>优点：具有跨平台性，服务器供应商，生产者，消费者可以使用不同的语言来实现</p><p>AMQP消息模型</p><ul><li>direct exchange</li><li>fanout exchange</li><li>topic exchange</li><li>headers exchange</li><li>system exchange</li></ul><p>AMQP消息种类：byte[] 只有一种字节型的消息,可以跨屏台</p><p>AMQP实现：RabbitMQ、StormMQ、RocketMQ</p><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq"><span>RabbitMQ</span></a></h3><p>是使用Erlang语言开发的,使用时需要有Erlang环境 服务端口：5672，管理后台端口：15672 用户名&amp;密码：guest 程序中使用的是5672,在浏览器中查看消息队列时使用的是15672</p><ol><li>导入坐标</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-starter-amqp&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>rabbitmq:</span></span>
<span class="line"><span>	host: localhost</span></span>
<span class="line"><span>	port: 5672</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置类</li></ol><p>先在配置类中创建好一个消息队列(以及交换机)</p><p>Queue创建消息队列 第一个参数是字符串类型,消息队列的名称 durable:是否持久化 exclusive:是否是当前连接专用,如果是,当前连接关闭消息队列也关闭 autoDelete:是否自动删除,当发送方和接收方都销毁时该消息队列也自动销毁</p><p>DirectExchange创建直连模式的交换机 第一个参数是交换机的名称</p><p>Binding绑定消息队列和交换机 将消息队列绑定到交换机上 with给绑定好的对象起名</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class RabbitConfigDirect{</span></span>
<span class="line"><span>	@Bean</span></span>
<span class="line"><span>	public Queue directQueue(){</span></span>
<span class="line"><span>		return new Queue (&quot;direct_queue&quot;,true,true,true);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	@Bean</span></span>
<span class="line"><span>	public DirectExchange directExchange(){</span></span>
<span class="line"><span>		return new DirectExchange(&quot;directExchange&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	@Bean</span></span>
<span class="line"><span>	public Binding bindingDirect(){</span></span>
<span class="line"><span>		return BindingBuilder.bind(directQueue()).to(directExchange()).with(&quot;direct&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ol start="4"><li>实现类 发送消息发送到的对象交换机和绑定好的消息队列都使用起的名字传入</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class MessageServiceRabbitmqDirectImpl implements MessageService{</span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private AmqpTemplate amqpTemplate;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void sendMessage(String id){</span></span>
<span class="line"><span>	System.out.println(&quot;待发送短信的订单已纳入处理队列（rabbitmq direct），id：&quot;+id);</span></span>
<span class="line"><span>	amqpTemplate.convertAndSend(&quot;directExchange&quot;, &quot;direct&quot;,id);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>监听消息队列</strong> 和activeMQ类似只需要在接收消息的函数上方加上RabbitListener(queues=&quot;direct_queue&quot;)注解指明要监听的消息目的地即可</p><p><strong>主题交换机</strong> 要使用主题模式和创建直连模式类似,只需要将直连模式的direct更改为topic代码就可复用 直连模式只能连接一个制定好的消息队列目的地 主题交换机可以根据匹配规则的不同连接不同的消息队列目的地</p><p>绑定键匹配规则</p><ul><li><ul><li>(星号)：用来表示一个单词，且该单词是必须出现的</li></ul></li><li>#(井号)：用来表示任意数量</li></ul><table><thead><tr><th>匹配键</th><th>topic.*.*</th><th>topic.#</th></tr></thead><tbody><tr><td>topic.order.id</td><td>true</td><td>true</td></tr><tr><td>order.topic.id</td><td>false</td><td>false</td></tr><tr><td>topic.sm.order.id</td><td>false</td><td>true</td></tr><tr><td>topic.sm.id</td><td>false</td><td>true</td></tr><tr><td>topic.id.order</td><td>true</td><td>true</td></tr><tr><td>topic.id</td><td>false</td><td>true</td></tr><tr><td>topic.order</td><td>false</td><td>true</td></tr></tbody></table><h2 id="mqtt" tabindex="-1"><a class="header-anchor" href="#mqtt"><span>MQTT</span></a></h2><p>MQTT（Message Queueing Telemetry Transport）消息队列遥测传输，专为小设备设计，是物联网（IOT）生态系统中主要成分之一</p><h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka"><span>kafka</span></a></h2><p>zookeeper默认端口为2181 kafka默认端口为9092</p><ol><li>导入坐标</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;org.springframework.kafka&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-kafka&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置文件</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring:</span></span>
<span class="line"><span>	kafka:</span></span>
<span class="line"><span>		bootstrap-servers: localhost: 9092</span></span>
<span class="line"><span>		consumer: </span></span>
<span class="line"><span>			group-id: order</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>实现类</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class MessageServiceKafkaImpl implements MessageService{</span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	private KafkaTemplate&lt;String,String&gt; kafkaTemplate;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void sendMessage(String id）{</span></span>
<span class="line"><span>		System.out.println（&quot;待发送短信的订单已纳入处理队列（kafka），id：&quot;+id）；</span></span>
<span class="line"><span>		kafkaTemplate.send(&quot;itheima2022&quot;,id);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public String doMessage(）{</span></span>
<span class="line"><span>		return null;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>只需要使用KafkaTemplate类调用send函数即可,</p><p><strong>监听消息队列</strong> 只需要在要监听的处理函数上添加KafkaListener注解指定topics即可,如果要监听多个队列可以使用KafkaListeners传入多个topics 从消息队列中获取到的消息存储在形参ConsumerRecord中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MessageListener{</span></span>
<span class="line"><span>	@KafkaListener(topics=&quot;itheima2022&quot;)</span></span>
<span class="line"><span>	public void onMessage(ConsumerRecord&lt;String,String&gt; record){</span></span>
<span class="line"><span>		System.out.println（&quot;已完成短信发送业务（kafka），id：&quot;+record.value（））;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="监控" tabindex="-1"><a class="header-anchor" href="#监控"><span>监控</span></a></h1><ul><li>监控服务状态是否岩机</li><li>监控服务运行指标（内存、虚拟机、线程、请求等）</li><li>监控日志</li><li>管理服务（服务下线）</li></ul><p>监控的方式有两种,一种是让被监控的应用程序主动发送信息给监控程序,一种是监控程序主动向被监控的应用程序查询 一般使用后者,当想要查询监控信息时前者无法实现</p><p>SpringBootAdmin，开源社区项目，用于管理和监控SpringBoot应用程序。客户端注册到服务端后，通过HTTP请求方式，服务端定期从客户端获取对应的信息，并通过UI界面展示对应信息。 并不是spring官方开发的</p><ol><li>导入坐标 springbootadmin是有维护的,在创建spring项目时选择它就不用指定版本,有变量定义有版本,但如皋要手动导入坐标在指定版本时版本必须和springboot的版本一致</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;de.codecentric&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;spring-boot-admin-starter-server&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;version&gt;2.5.4&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>添加注解 在配置类(启动类)上面添加EnableAdminServer注解表示开启springbootadmin服务</p></li><li><p>配置被监控的springboot程序</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>spring</span></span>
<span class="line"><span>	boot:</span></span>
<span class="line"><span>	    admin:</span></span>
<span class="line"><span>			client:</span></span>
<span class="line"><span>		        url: http://localhost:8080    # 表示可以被本地的8080程序监控</span></span>
<span class="line"><span></span></span>
<span class="line"><span>management:    # 配置监控程序查看的信息</span></span>
<span class="line"><span>	endpoint:</span></span>
<span class="line"><span>		health:</span></span>
<span class="line"><span>			show-details: always    # 健康的信息总是可以被查看</span></span>
<span class="line"><span>	endpoints:    #开放多个信息给监控程序</span></span>
<span class="line"><span>	    web:</span></span>
<span class="line"><span>		    exposure:</span></span>
<span class="line"><span>		        include: &quot;*&quot;    #开放所有</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要开放多个断点,在endpoints的include的配置中使用逗号间隔</p><p>extend是排除某些端点 include表示包含某些端点</p><p>endpoint表示的是是否对外开放信息 endpoints表示是否在浏览器页面展示信息 如果endpoint对某个端点设置不对外开放信息,那么在endpoints中即使设置了显示在页面上也是看不到的</p><h2 id="监控原理" tabindex="-1"><a class="header-anchor" href="#监控原理"><span>监控原理</span></a></h2><p>Actuator提供了SpringBoot生产就绪功能，通过端点的配置与访问，获取端点信息 端点描述了一组监控信息，SpringBoot提供了多个内置端点，也可以根据需要自定义端点信息 访问当前应用所有端点信息：/actuator 访问端点详细信息：/actuator/端点名称</p><p>也可以不使用提供的网页的方式访问,可以使用jmx查看信息</p><h2 id="信息端点" tabindex="-1"><a class="header-anchor" href="#信息端点"><span>信息端点</span></a></h2><p>在提供的端点中有一个信息端点默认是没有数据的 这个信息端点是用来描述应用程序的信息的,是由程序员写在配置文件中的 在info属性中,里面都是以键值对方式配置的,键和值的取值不做限制</p><div class="language-application.yml line-numbers-mode" data-highlighter="shiki" data-ext="application.yml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>info:</span></span>
<span class="line"><span>	appName: @project.artifactId@</span></span>
<span class="line"><span>	version: @project.version@</span></span>
<span class="line"><span>	company：传智教育</span></span>
<span class="line"><span>	author: itheima</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态信息" tabindex="-1"><a class="header-anchor" href="#动态信息"><span>动态信息</span></a></h3><p>在配置文件中无法显示动态信息</p><p>要实现动态信息需要创建一个类实现InfoContributor接口,并重写其中的contribute方法 withDetail是写入单条的键值对信息 withDetails是写入多个信息传入的map容器中的所有数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class InfoConfig implements InfoContributor{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void contribute(Info.Builder builder）{</span></span>
<span class="line"><span>		builder.withDetail(&quot;runTime&quot;,System.currentTimeMillis());</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="健康端点" tabindex="-1"><a class="header-anchor" href="#健康端点"><span>健康端点</span></a></h2><p>健康端点一般情况下不可以修改 但同样也可以使用配置类的方式动态添加</p><p>要创建一个类继承AbstractHealthIndicator抽象类或者实现InfoContributor接口两种方式 AbstractHealthIndicator本质上也是实现了InfoContributor接口 重写其中的doHealthCheck函数 此后的操作和动态实现信息端点的数据一样了</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class HealthConfigextends AbstractHealthIndicator{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	protected void doHealthCheck(Health.Builder builder） throws Exception {</span></span>
<span class="line"><span>		boolean condition=true;</span></span>
<span class="line"><span>		if(condition){</span></span>
<span class="line"><span>			builder.withDetail(&quot;上线成功,运行时间:&quot;,System.currentTimeMiLLis());</span></span>
<span class="line"><span>			builder.up();</span></span>
<span class="line"><span>		}else{</span></span>
<span class="line"><span>			Map infoMap =new HashMap();</span></span>
<span class="line"><span>			infoMap.put(&quot;上线失败,错误:&quot;,&quot;2006&quot;);</span></span>
<span class="line"><span>			builder.withDetails(infoMap);</span></span>
<span class="line"><span>			builder.down();</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>但健康的信息有一个在线情况的属性,如果不指定默认添加的信息是unknow,可以使用builder中的函数进行修改,如: up , unknow , down 但通常使用status函数传入不同的枚举值进行修改: <code>builder.status(Status.UP)</code></p><h2 id="性能端点" tabindex="-1"><a class="header-anchor" href="#性能端点"><span>性能端点</span></a></h2><p>metrics</p><p>通常在service的实现层添加 使用构造器注入 在该实现类中添加一个构造函数,参数是MeterRegistry 类型,接着就可以将其他的数据传入到MeterRegistry 中了 例如使用了一个计数器,将计数器的数据传入到了其中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>private Conter conter;</span></span>
<span class="line"><span>public BookServiceImpl(MeterRegistry meterRegistry){</span></span>
<span class="line"><span>	counter=meterRegistry.counter（name:&quot;用户付费操作次数：&quot;）；</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义端点" tabindex="-1"><a class="header-anchor" href="#自定义端点"><span>自定义端点</span></a></h2><ol><li><p>在实现类上添加相应注解 在实现类上添加Endpoint注解表示该类是一个端点类 其中的id表示端点的名称,enableByDefault表示默认是否默认被控制,也可以在配置文件中像正常端点一样开启</p></li><li><p>在执行函数上添加注解 在执行函数上添加ReadOperation注解,该注解表示当前端点类的端点被调用时执行一次此函数 函数的返回值将会被传递到监控信息中</p></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>@Endpoint(id=&quot;pay&quot;)</span></span>
<span class="line"><span>public class PayEndPoint{</span></span>
<span class="line"><span>	@ReadOperation</span></span>
<span class="line"><span>	public Object getPay(){</span></span>
<span class="line"><span>		//调用业务操作，获取支付相关信息结果，最终return出去</span></span>
<span class="line"><span>		MappayMapp = new HashMap();</span></span>
<span class="line"><span>		payMap.put(&quot;level 1&quot;,103);</span></span>
<span class="line"><span>		payMap.put(&quot;level 2&quot;,315);</span></span>
<span class="line"><span>		payMap.put(&quot;level 3&quot;,666);</span></span>
<span class="line"><span>		return payMap;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,197)]))}const c=n(l,[["render",p]]),r=JSON.parse('{"path":"/back/springboot/7/","title":"7 常用开发技术","lang":"zh-CN","frontmatter":{"title":"7 常用开发技术","createTime":"2025/06/18 21:00:10","permalink":"/back/springboot/7/"},"readingTime":{"minutes":19.9,"words":5969},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/后端/Spring Boot/7 常用开发技术.md","headers":[]}');export{c as comp,r as data};
