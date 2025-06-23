import{_ as n,c as a,a as l,o as i}from"./app-CEcM0piI.js";const e={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[l(`<p>在项目开发中，日志十分的重要，不管是记录运行情况还是定位线上问题，都离不开对日志的分析。日志记录了系统行为的时间、地点、状态等相关信息，能够帮助我们了解并监控系统状态，在发生错误或者接近某种危险状态时能够及时提醒我们处理，同时在系统产生问题时，能够帮助我们快速的定位、诊断并解决问题。</p><p>ApacheLog4j2是一个开源的日志记录组件，使用非常的广泛。在工程中以易用方便代替了System.out等打印语句，它是JAVA下最流行的日志输入工具。</p><p>Log4j2主要由几个重要的组件构成：</p><ol><li>日志信息的优先级，日志信息的优先级从高到低有 : TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR &lt; FATAL</li></ol><ul><li>TRACE：追踪，是最低的日志级别，相当于追踪程序的执行</li><li>DEBUG：调试，一般在开发中，都将其设置为最低的日志级别</li><li>INFO：信息，输出重要的信息，使用较多I</li><li>WARN：警告，输出警告的信息</li><li>ERROR：错误，输出错误信息</li><li>FATAL：严重错误 这些级别分别用来指定这条日志信息的重要程度；级别高的会自动屏蔽级别低的日志，也就是说，设置了WARN的日志，则INFO、DEBUG的日志级别的日志不会显示</li></ul><ol start="2"><li>日志信息的输出目的地，日志信息的输出目的地指定了日志将打印到控制台还是文件中；</li><li>日志信息的输出格式，而输出格式则控制了日志信息的显示内容。</li></ol><h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖"><span>引入依赖</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.24.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;log4j-slf4j-impl&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.24.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志配置文件" tabindex="-1"><a class="header-anchor" href="#日志配置文件"><span>日志配置文件</span></a></h3><p>在类的根路径下提供log4j2.xml配置文件（文件名固定为：log4j2.xml，文件必须放到类根路径下。）</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;  </span></span>
<span class="line"><span>&lt;configuration&gt;  </span></span>
<span class="line"><span>    &lt;loggers&gt;  </span></span>
<span class="line"><span>        &lt;!--  </span></span>
<span class="line"><span>            level指定日志级别，从低到高的优先级：  </span></span>
<span class="line"><span>                TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR &lt; FATAL                trace：追踪，是最低的日志级别，相当于追踪程序的执行  </span></span>
<span class="line"><span>                debug：调试，一般在开发中，都将其设置为最低的日志级别  </span></span>
<span class="line"><span>                info：信息，输出重要的信息，使用较多  </span></span>
<span class="line"><span>                warn：警告，输出警告的信息  </span></span>
<span class="line"><span>                error：错误，输出错误信息  </span></span>
<span class="line"><span>                fatal：严重错误  </span></span>
<span class="line"><span>        --&gt;  </span></span>
<span class="line"><span>        &lt;root level=&quot;DEBUG&quot;&gt;  </span></span>
<span class="line"><span>            &lt;appender-ref ref=&quot;spring6log&quot; /&gt;  </span></span>
<span class="line"><span>            &lt;appender-ref ref=&quot;RollingFile&quot; /&gt;  </span></span>
<span class="line"><span>            &lt;appender-ref ref=&quot;log&quot; /&gt;  </span></span>
<span class="line"><span>        &lt;/root&gt;  </span></span>
<span class="line"><span>    &lt;/loggers&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    &lt;appenders&gt;        &lt;!--输出日志信息到控制台--&gt;  </span></span>
<span class="line"><span>        &lt;console name=&quot;spring6log&quot; target=&quot;SYSTEM_OUT&quot;&gt;  </span></span>
<span class="line"><span>            &lt;!--控制日志输出的格式--&gt;  </span></span>
<span class="line"><span>            &lt;PatternLayout  </span></span>
<span class="line"><span>                pattern=&quot;%d{yyyy-MM-dd HH:mm:ss SSS} [%t] %-3level %logger{1024} - %msg%n&quot; /&gt;  </span></span>
<span class="line"><span>        &lt;/console&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        &lt;!--文件会打印出所有信息，这个log每次运行程序会自动清空，由append属性决定，适合临时测试用--&gt;  </span></span>
<span class="line"><span>        &lt;File name=&quot;log&quot; fileName=&quot;spring6_log/test.log&quot; append=&quot;false&quot;&gt;  </span></span>
<span class="line"><span>            &lt;PatternLayout pattern=&quot;%d{HH:mm:ss.SSS} %-5level %class{36} %L %M - %msg%xEx%n&quot; /&gt;  </span></span>
<span class="line"><span>        &lt;/File&gt;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>        &lt;!-- 这个会打印出所有的信息，  </span></span>
<span class="line"><span>            每次大小超过size，  </span></span>
<span class="line"><span>            则这size大小的日志会自动存入按年份-月份建立的文件夹下面并进行压缩，  </span></span>
<span class="line"><span>            作为存档--&gt;  </span></span>
<span class="line"><span>        &lt;RollingFile name=&quot;RollingFile&quot; fileName=&quot;spring6_log/app.log&quot;  </span></span>
<span class="line"><span>            filePattern=&quot;log/$\${date:yyyy-MM}/app-%d{MM-dd-yyyy}-%i.log.gz&quot;&gt;  </span></span>
<span class="line"><span>            &lt;PatternLayout  </span></span>
<span class="line"><span>                pattern=&quot;%d{yyyy-MM-dd &#39;at&#39; HH:mm:ss z} %-5level %class{36} %L %M - %msg%xEx%n&quot; /&gt;  </span></span>
<span class="line"><span>            &lt;SizeBasedTriggeringPolicy size=&quot;50MB&quot; /&gt;  </span></span>
<span class="line"><span>            &lt;!-- DefaultRolloverStrategy属性如不设置，  </span></span>
<span class="line"><span>            则默认为最多同一文件夹下7个文件，这里设置了20 --&gt;  </span></span>
<span class="line"><span>            &lt;DefaultRolloverStrategy max=&quot;20&quot; /&gt;  </span></span>
<span class="line"><span>        &lt;/RollingFile&gt;  </span></span>
<span class="line"><span>    &lt;/appenders&gt;  </span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li>Configuration : 根标签</li><li>root : 日志总体设置,通过level属性设置级别 <ul><li>appender-ref : 引入后面的配置,ref属性用于引入配置的name</li></ul></li><li>console : 控制台输出,target指定日志输入的地方 <ul><li>PatternLayout : 配置日志的格式通过pattern属性</li></ul></li><li>File : 日志输入到文件,fileName指定日志写入的文件及路径</li><li>RollingFile : 打印所有信息 <ul><li>SizeBasedTriggeringPolicy : 指定文件的大小,超过此大小会压缩</li></ul></li><li>DefaultRolloverStrategy : 更改同一文件夹下默认日志文件个数,默认为7个</li></ul>`,12)]))}const r=n(e,[["render",p]]),c=JSON.parse('{"path":"/back/log4j2/1/","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","createTime":"2025/06/18 20:59:24","permalink":"/back/log4j2/1/"},"readingTime":{"minutes":3.36,"words":1007},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/后端/log4j2/概述.md","headers":[]}');export{r as comp,c as data};
