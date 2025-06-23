import{_ as i,c as l,a,b as p,e as n,d as t,w as d,r as c,o as r}from"./app-CEcM0piI.js";const v={};function m(h,s){const e=c("optional");return r(),l("div",null,[s[3]||(s[3]=a(`<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><p>需要在有pom.xml文件夹下对该文件执行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mvn compile    #编译,生成的字节码放在target文件夹中</span></span>
<span class="line"><span>mvn clean      #清理编译出的字节码文件,就是清理target文件夹</span></span>
<span class="line"><span>mvn test       #测试</span></span>
<span class="line"><span>mvn package    #打包(打包前会先自动执行编译和测试)</span></span>
<span class="line"><span>mvn install    #将打包的内容安装到本地仓库(会先自动执行打包)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="maven插件创建工程" tabindex="-1"><a class="header-anchor" href="#maven插件创建工程"><span>maven插件创建工程</span></a></h4><p>自动创建maven结构的工程</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mvn archetype:generate</span></span>
<span class="line"><span>	-DgroupId={project-packaging}</span></span>
<span class="line"><span>	-DartifactId={project-name}</span></span>
<span class="line"><span>	-DarchetypeArtifactId=maven-archetype-quickstart</span></span>
<span class="line"><span>	-DinteractiveMode=false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自动创建java工程" tabindex="-1"><a class="header-anchor" href="#自动创建java工程"><span>自动创建java工程</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span> mvn archetype:generate -DgroupId=com.itheima -DartifactId=java-projectDarchetypeArtifactId=maven-archetype-quickstart -Dversion=0.0.1-snapshotDinteractiveMode=false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="自动创建web工程" tabindex="-1"><a class="header-anchor" href="#自动创建web工程"><span>自动创建web工程</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mvn archetype:generate -DgroupId=com.itheima -DartifactId=web-projectDarchetypeArtifactId=maven-archetype-webapp-Dversion=0.0.1-snapshotDinteractiveMode=false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="maven的文件结构" tabindex="-1"><a class="header-anchor" href="#maven的文件结构"><span>maven的文件结构</span></a></h2><h3 id="java工程" tabindex="-1"><a class="header-anchor" href="#java工程"><span>java工程</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>my-java-project/</span></span>
<span class="line"><span>├── pom.xml</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── main/</span></span>
<span class="line"><span>│   │   ├── java/</span></span>
<span class="line"><span>│   │   │   └── com/</span></span>
<span class="line"><span>│   │   │       └── example/</span></span>
<span class="line"><span>│   │   │           └── HelloWorld.java</span></span>
<span class="line"><span>│   │   └── resources/</span></span>
<span class="line"><span>│   │       └── application.properties</span></span>
<span class="line"><span>│   └── test/</span></span>
<span class="line"><span>│       ├── java/</span></span>
<span class="line"><span>│       │   └── com/</span></span>
<span class="line"><span>│       │       └── example/</span></span>
<span class="line"><span>│       │           └── HelloWorldTest.java</span></span>
<span class="line"><span>│       └── resources/</span></span>
<span class="line"><span>│           └── test.properties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="web工程" tabindex="-1"><a class="header-anchor" href="#web工程"><span>web工程</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>my-web-project/</span></span>
<span class="line"><span>├── pom.xml</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── main/</span></span>
<span class="line"><span>│   │   ├── java/</span></span>
<span class="line"><span>│   │   │   └── com/</span></span>
<span class="line"><span>│   │   │       └── example/</span></span>
<span class="line"><span>│   │   │           └── HelloServlet.java</span></span>
<span class="line"><span>│   │   ├── resources/</span></span>
<span class="line"><span>│   │   │   └── log4j.properties</span></span>
<span class="line"><span>│   │   └── webapp/</span></span>
<span class="line"><span>│   │       ├── WEB-INF/</span></span>
<span class="line"><span>│   │       │   ├── web.xml</span></span>
<span class="line"><span>│   │       │   ├── classes/</span></span>
<span class="line"><span>│   │       │   └── lib/</span></span>
<span class="line"><span>│   │       └── index.html</span></span>
<span class="line"><span>│   └── test/</span></span>
<span class="line"><span>│       ├── java/</span></span>
<span class="line"><span>│       │   └── com/</span></span>
<span class="line"><span>│       │       └── example/</span></span>
<span class="line"><span>│       │           └── HelloServletTest.java</span></span>
<span class="line"><span>│       └── resources/</span></span>
<span class="line"><span>│           └── test.properties</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>pom.xml配置</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/poM/4.0.0&quot;</span></span>
<span class="line"><span>    xmlns:xsi=&quot;http://www.w3.org/2001/xMLSchema-instance&quot;</span></span>
<span class="line"><span>    xsi:schemaLoaction=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.orgmaven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 指定pom版本--&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 组织id--&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.itheima&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;!-- 项目id--&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;maven&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;!-- 项目版本--&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;!-- 打包方式--&gt;</span></span>
<span class="line"><span>    &lt;packaging&gt;jar&lt;/packaging&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 当前项目的依赖项 --&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;!-- 具体依赖项--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;4.12&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--构建--&gt;</span></span>
<span class="line"><span>    &lt;build&gt;</span></span>
<span class="line"><span>        &lt;!--表明要设置插件--&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span>            &lt;!--具体的插件配置--&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;2.1&lt;/version&gt;</span></span>
<span class="line"><span>                &lt;configuration&gt;</span></span>
<span class="line"><span>	                &lt;!--对插件的设置--&gt;</span></span>
<span class="line"><span>		            &lt;port&gt;80&lt;/port&gt;</span></span>
<span class="line"><span>		            &lt;path&gt;/&lt;/path&gt;</span></span>
<span class="line"><span>	            &lt;/configuration&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="依赖传递" tabindex="-1"><a class="header-anchor" href="#依赖传递"><span>依赖传递</span></a></h4><p>如果在一个自己做的项目中需要用到另一个自己做的项目,可以向引入依赖的方式引入自己的被依赖的项目</p><p>项目project02中导入项目project01的依赖</p><div class="language-pom.xml line-numbers-mode" data-highlighter="shiki" data-ext="pom.xml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;com.itheima&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;project01&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在project01中有依赖,那么project02也会导入project01的依赖</p><h5 id="依赖传递冲突问题" tabindex="-1"><a class="header-anchor" href="#依赖传递冲突问题"><span>依赖传递冲突问题</span></a></h5><ul><li>路径优先：当依赖中出现相同的资源时，层级越深，优先级越低，层级越浅，优先级越高</li><li>声明优先：当资源在相同层级被依赖时，配置顺序靠前的覆盖配置顺序靠后的</li><li>特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的 ![[Clip_2024-10-01_14-42-54.png]]</li></ul><h4 id="可选依赖" tabindex="-1"><a class="header-anchor" href="#可选依赖"><span>可选依赖</span></a></h4>`,25)),p("p",null,[s[1]||(s[1]=n("如果一个项目导入另一个项目作为依赖时,被依赖的项目不想被知道自己使用的依赖可以在自己的pom.xml中对需要隐藏的依赖添加`")),t(e,null,{default:d(()=>s[0]||(s[0]=[n("true")])),_:1,__:[0]}),s[2]||(s[2]=n(" 如project02导入project01 project01中的pom.xml"))]),s[4]||(s[4]=a(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;junit&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;junit&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;4.12&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;optional&gt;true&lt;/optional&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排除依赖" tabindex="-1"><a class="header-anchor" href="#排除依赖"><span>排除依赖</span></a></h4><p>如果一个项目在导入另一个项目时不需要依赖项目的依赖可以将不需要的依赖排除,排除的依赖不需要写版本号 如project02需要导入project01 在project02的pom.xml文件中修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.itheima&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;project03&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;exclusions&gt;</span></span>
<span class="line"><span>            &lt;exclusion&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;log4j&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;log4j&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;/exclusion&gt;</span></span>
<span class="line"><span>        &lt;/exclusions&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖范围" tabindex="-1"><a class="header-anchor" href="#依赖范围"><span>依赖范围</span></a></h3><p>设置依赖使用的范围,需要在指定的依赖中设置scope标签 依赖的jar默认情况可以在任何地方使用，可以通过scope标签设定其作用范围</p><p>作用范围:</p><ul><li>主程序范围有效(main文件夹范围内）</li><li>测试程序范围有效(test文件夹范围内）</li><li>是否参与打包(package指令范围内)</li></ul><table><thead><tr><th>scope</th><th>主代码</th><th>测试代码</th><th>打包</th><th>范例</th></tr></thead><tbody><tr><td>compile (默认)</td><td>y</td><td>y</td><td>y</td><td>log4j</td></tr><tr><td>test</td><td></td><td>y</td><td></td><td>junit</td></tr><tr><td>provided</td><td>y</td><td>y</td><td></td><td>servlet-apir</td></tr><tr><td>untime</td><td></td><td></td><td>y</td><td>jdbc</td></tr></tbody></table><h4 id="依赖范围传递性" tabindex="-1"><a class="header-anchor" href="#依赖范围传递性"><span>依赖范围传递性</span></a></h4><p>带有依赖范围的资源在进行传递时，作用范围将受到影响</p><p>横行表示直接依赖设置 竖列表示间接依赖设置</p><table><thead><tr><th></th><th>compile</th><th>test</th><th>provided</th><th>runtime</th></tr></thead><tbody><tr><td>compile</td><td>compile</td><td>test</td><td>provided</td><td>runtime</td></tr><tr><td>test</td><td></td><td></td><td></td><td></td></tr><tr><td>provided</td><td></td><td></td><td></td><td></td></tr><tr><td>runtime</td><td>runtime</td><td>test</td><td>provided</td><td>runtime</td></tr></tbody></table>`,13))])}const u=i(v,[["render",m]]),g=JSON.parse('{"path":"/back/maven/1/","title":"1 概述","lang":"zh-CN","frontmatter":{"title":"1 概述","createTime":"2025/06/18 20:59:26","permalink":"/back/maven/1/"},"readingTime":{"minutes":3.18,"words":953},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/后端/Maven/1 概述.md","headers":[]}');export{u as comp,g as data};
