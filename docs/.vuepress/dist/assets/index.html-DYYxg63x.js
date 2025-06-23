import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function t(p,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>loC是Inversion of Control的简写，译为&quot;控制反转&quot;，它不是一门技术，而是一种设计思想，是一个重要的面向对象编程法则，能够指导我们如何设计出松耦合、更优良的程序。</p><p>控制反转是为了降低程序耦合度，提高程序扩展力。 控制反转，反转的是什么？ 将对象的创建权利交出去，交给第三方容器负责。 将对象和对象之间关系的维护权交出去，交给第三方容器负责。</p><p>通过DI(Dependency Injection)依赖注入实现控制反转</p><p>Spring通过loC容器来管理,所有Java对象的实例化和初始化，控制对象与对象之间的依赖关系。 我们将由loC容器管理的Java对象称为SpringBean，它与使用关键字new创建的Java对象没有任何区别。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//1 根据id获取bean</span></span>
<span class="line"><span>User user1 = (User)context.getBean( name: &quot;user&quot;);</span></span>
<span class="line"><span>System.out.println(&quot;1 根据id获取bean：&quot;+user1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//2 根据类型获取bean</span></span>
<span class="line"><span>User user2 = context.getBean(User.class);</span></span>
<span class="line"><span>System.out.println（&quot;2 根据类型获取bean:&quot;+user2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//3 根据id和类型获取beanl</span></span>
<span class="line"><span>User user3 = context.getBean( name: &quot;user&quot;, User.class);</span></span>
<span class="line"><span>System.out.println(&quot;3 根据类型获取bean：&quot;+user2);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当根据类型获取bean时，要求loc容器中指定类型的bean有且只能有一个 当IOC容器中一共配置了两个：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;bean id=&quot;user&quot; class=&quot;com.atguigu.spring6.bean.User&quot;&gt;&lt;/bean&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;user1&quot; class=&quot;com.atguigu.spring6.bean.User&quot;&gt;&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据类型获取时会抛出异常：</p><p>如果组件类实现了接口，可以根据接口类型获取bean但前提是bean唯一 如果一个接口有多个实现类，这些实现类都配置了bean，就不能根据接口类型获取bean了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>interface UserDao{</span></span>
<span class="line"><span>	void run();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User impliments UserDao{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	void run(){</span></span>
<span class="line"><span>		System.out.println(&quot;run&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>UserDao userDao= context.getBean(UserDao.class);</span></span>
<span class="line"><span>System.out.println(userDao);</span></span>
<span class="line"><span>userDao.run();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入"><span>依赖注入</span></a></h1><h2 id="普通类型注入" tabindex="-1"><a class="header-anchor" href="#普通类型注入"><span>普通类型注入</span></a></h2><h3 id="set方法注入" tabindex="-1"><a class="header-anchor" href="#set方法注入"><span>set方法注入</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Book{</span></span>
<span class="line"><span>	String bname;</span></span>
<span class="line"><span>	String auther;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	setName(String name){</span></span>
<span class="line"><span>		bname=name;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	setAuther(String auther){</span></span>
<span class="line"><span>		this.auther=auther;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;book&quot; class=&quot;com.atguigu.spring6.iocxml.di.Book&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;name&quot; value=&quot;前端开发&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;author&quot; value=&quot;尚硅谷&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>property标签会自动调用set方法给类设置初始值,,其中的name是set方法set后名字的小写 使用这样依赖注入获取到的类具有指定的初始值</p><h3 id="构造器注入" tabindex="-1"><a class="header-anchor" href="#构造器注入"><span>构造器注入</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;bean id=&quot;bookCon&quot; class=&quot;com.atguigu.spring6.iocxml.di.Book&quot;&gt;</span></span>
<span class="line"><span>	&lt;constructor-arg name=&quot;bname&quot; value=&quot;java开发&quot;&gt;&lt;/constructor-arg&gt;</span></span>
<span class="line"><span>	&lt;constructor-arg name=&quot;author&quot; value=&quot;尚硅谷&quot;&gt;&lt;/constructor-arg&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;bookCon&quot;class=&quot;com.atguigu.spring6.iocxml.di.Book&quot;&gt;</span></span>
<span class="line"><span>	&lt;constructor-arg index=&quot;0&quot; value=&quot;java开发&quot;&gt;&lt;/constructor-arg&gt;</span></span>
<span class="line"><span>	&lt;constructor-arg index=&quot;1&quot; value=&quot;尚硅谷&quot;&gt;&lt;/constructor-arg&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两种写法一种是使用参数名注入,一种是使用索引注入,索引0代表第一个参数,1代表第二个参数</p><p>在写特殊符号的时候需要转义 xml提供cdata区用来创建原始字面量 使用<code>&lt;![CDATA[ 内容 ]]&gt;</code>来使用 内容不需要添加引号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;property name=&quot;others&quot;&gt;</span></span>
<span class="line"><span>	&lt;value&gt;&lt;![CDATA[a&lt;b]]&gt;&lt;/value&gt;</span></span>
<span class="line"><span>&lt;/property&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊类型注入" tabindex="-1"><a class="header-anchor" href="#特殊类型注入"><span>特殊类型注入</span></a></h2><h3 id="对象类型注入" tabindex="-1"><a class="header-anchor" href="#对象类型注入"><span>对象类型注入</span></a></h3><p>如果在一个对象中有另一个自定义对象的成员,在该类初始化时也需要对其成员类初始化</p><h4 id="外部bean注入" tabindex="-1"><a class="header-anchor" href="#外部bean注入"><span>外部bean注入</span></a></h4><p>例:员工类中有一个部门类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;bean id=&quot;dept&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Dept&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;dname&quot; value=&quot;安保部&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;emp&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Emp&quot;&gt;</span></span>
<span class="line"><span>	&lt;！--注入对象类型属性private Dept dept;--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;dept&quot; ref=&quot;dept&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;！--普通属性注入--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;ename&quot; value=&quot;lucy&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;age&quot; value=&quot;50&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过property标签的ref属性对当前成员的bean类引入</p><h4 id="内部bean注入" tabindex="-1"><a class="header-anchor" href="#内部bean注入"><span>内部bean注入</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;bean id=&quot;emp2&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Emp&quot;&gt;</span></span>
<span class="line"><span>	&lt;!--普通属性注入--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;ename&quot; value=&quot;mary&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;age&quot; value=&quot;20&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;!--内部bean--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;dept&quot;&gt;</span></span>
<span class="line"><span>		&lt;bean id=&quot;dept2&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Dept&quot;&gt;</span></span>
<span class="line"><span>			&lt;property name=&quot;dname&quot; value=&quot;财务部&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>		&lt;/bean&gt;/</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="级联属性赋值" tabindex="-1"><a class="header-anchor" href="#级联属性赋值"><span>级联属性赋值</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;bean id=&quot;emp3&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Emp&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;ename&quot; value=&quot;tom&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;age&quot; value=&quot;30&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;dept.dname&quot; value=&quot;测试部&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组类型注入" tabindex="-1"><a class="header-anchor" href="#数组类型注入"><span>数组类型注入</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Emp{</span></span>
<span class="line"><span>	String name;</span></span>
<span class="line"><span>	int age;</span></span>
<span class="line"><span>	Dept dept;</span></span>
<span class="line"><span>	String[] loves;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;emp&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Emp&quot;&gt;</span></span>
<span class="line"><span>	&lt;！--普通属性--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;ename&quot; value=&quot;lucy&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;propertyy name=&quot;age&quot; value=&quot;20&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;！--对象类型属性--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;dept&quot; ref=&quot;dept&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;！--数组类型属性--&gt;</span></span>
<span class="line"><span>	&lt;propertyname=&quot;loves&quot;&gt;</span></span>
<span class="line"><span>		&lt;array&gt;</span></span>
<span class="line"><span>			&lt;value&gt;吃饭&lt;/value&gt;</span></span>
<span class="line"><span>			&lt;value&gt;睡觉&lt;/value&gt;</span></span>
<span class="line"><span>			&lt;value&gt;敲代码&lt;/value&gt;</span></span>
<span class="line"><span>		&lt;/array&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="集合类型注入" tabindex="-1"><a class="header-anchor" href="#集合类型注入"><span>集合类型注入</span></a></h3><p>如果是基础数据类型的集合可以之间使用value标签写值 如果是自定义数据类型需要使用ref标签引入已有的bean类</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Dept{</span></span>
<span class="line"><span>	List&lt;Emp&gt; empList;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;empone&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Emp&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;ename&quot; value=&quot;lucy&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;age&quot; value=&quot;20&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span>&lt;bean id=&quot;emptwo&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Emp&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;ename&quot; value=&quot;mary&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;age&quot; value=&quot;30&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;beann id=&quot;dept&quot; class=&quot;com.atguigu.spring6.iocxml.ditest.Dept&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;dname&quot; value=&quot;技术部&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;empList&quot;&gt;</span></span>
<span class="line"><span>	&lt;list&gt;</span></span>
<span class="line"><span>		&lt;ref bean=&quot;empone&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>		&lt;ref bean=&quot;emptwo&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>	&lt;/list&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="map类型注入" tabindex="-1"><a class="header-anchor" href="#map类型注入"><span>Map类型注入</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Student{</span></span>
<span class="line"><span>	Map&lt;String,Teacher&gt; teacherMap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;teacher&quot; class=&quot;com.atguigu.spring6.iocxml.dimap.Teacher&quot;&gt;</span></span>
<span class="line"><span>	&lt;！--注入普通类型属性--&gt;I</span></span>
<span class="line"><span>	&lt;property name=&quot;teacherId&quot; value=&quot;100&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;teacherName&quot; value=&quot;西门讲师&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;student&quot; class=&quot;com.atguigu.spring6.iocxml.dimap.Student&quot;&gt;</span></span>
<span class="line"><span>	&lt;!－-注入普通类型属性--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;sid&quot; value=&quot;2000&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;sname&quot; value=&quot;张三&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;!--在学生bean注入map集合类型属性--&gt;</span></span>
<span class="line"><span>	&lt;propertyy name=&quot;teacherMap&quot;&gt;</span></span>
<span class="line"><span>		&lt;map&gt;</span></span>
<span class="line"><span>			&lt;entry&gt;</span></span>
<span class="line"><span>				&lt;key&gt;</span></span>
<span class="line"><span>				&lt;value&gt;10010&lt;/value&gt;</span></span>
<span class="line"><span>				&lt;/key&gt;</span></span>
<span class="line"><span>				&lt;ref bean=&quot;teacher&quot;&gt;/ref&gt;</span></span>
<span class="line"><span>			&lt;/entry&gt;</span></span>
<span class="line"><span>		&lt;/map&gt;</span></span>
<span class="line"><span>	&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>一个entry标签代表一个键值对,如果要给集合注入若个数据需要在后面添加多个entry</p><h3 id="引用集合类型的bean完成list和map的注入" tabindex="-1"><a class="header-anchor" href="#引用集合类型的bean完成list和map的注入"><span>引用集合类型的bean完成list和map的注入</span></a></h3><p>在使用引用集合类型时需要在xml头部引入util 加上以下代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>xmlns:util=&quot;http://www.springframework.org/schema/util&quot;</span></span>
<span class="line"><span>xsi:schemaLocation=&quot;http:/ /www.springframework.org/schema/util</span></span>
<span class="line"><span>http://www.springframework.org/schema/util/spring-util.xsd&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;!--list集合类型的bean--&gt;</span></span>
<span class="line"><span>&lt;util:list id=&quot;students&quot;&gt;</span></span>
<span class="line"><span>	&lt;ref bean=&quot;studentone&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>	&lt;ref bean=&quot;studentTwo&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>	&lt;ref bean=&quot;studentThree&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>&lt;/util:list&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--map集合类型的bean--&gt;</span></span>
<span class="line"><span>&lt;util:map id=&quot;teacherMap&quot;&gt;</span></span>
<span class="line"><span>	&lt;entry&gt;</span></span>
<span class="line"><span>		&lt;key&gt;</span></span>
<span class="line"><span>			&lt;value&gt;10010&lt;/value&gt;</span></span>
<span class="line"><span>		&lt;/key&gt;</span></span>
<span class="line"><span>	&lt;ref bean=&quot;teacherone&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>	&lt;/entry&gt;</span></span>
<span class="line"><span>	&lt;entry&gt;</span></span>
<span class="line"><span>		&lt;key&gt;</span></span>
<span class="line"><span>			&lt;value&gt;10086&lt;/value&gt;</span></span>
<span class="line"><span>		&lt;/key&gt;</span></span>
<span class="line"><span>		&lt;ref bean=&quot;teacherTwo&quot;&gt;&lt;/ref&gt;</span></span>
<span class="line"><span>	&lt;/entry&gt;</span></span>
<span class="line"><span>&lt;/uti1:map&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;student&quot; class=&quot;com.atguigu.spring6.iocxml.dimap.Student&quot;&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;sid&quot; value=&quot;10000&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;sname&quot; value=&quot;lucy&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;!--注入List、map类型属性--&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;lessonList&quot; ref=&quot;lessonList&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="p命名空间注入" tabindex="-1"><a class="header-anchor" href="#p命名空间注入"><span>p命名空间注入</span></a></h3><p>需要在头部引入p命名空间</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>xmlns:p=&quot;http:/ /www.springframework.org/schema/p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;studentp&quot; class=&quot;com.atguigu.spring6.iocxml.dimap.Student&quot;</span></span>
<span class="line"><span>	p:sid=&quot;100&quot; p:sname=&quot;mary&quot;p:lessonList-ref=&quot;lessonList&quot; p:teacherMap-ref=&quot;teacherMay&quot;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="引入外部属性文件" tabindex="-1"><a class="header-anchor" href="#引入外部属性文件"><span>引入外部属性文件</span></a></h1><p>首先需要在头部引入contex标签,在contex标签中引入文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>xmlns:context=&quot;http: / /www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>xsi:schemaLocation=&quot;http://www.springframework.org/schema/context</span></span>
<span class="line"><span>http://www.springframework.org/schema/context/spring-context.xsd&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;context:property-placeholder location=&quot;classpath:jdbc.properties&quot;&gt;</span></span>
<span class="line"><span>&lt;/context:property--placeholder&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;bean id=&quot;druidDataSource&quot; class=&quot;com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span>	&lt;property name=&quot;url&quot; value=&quot;\${jdbc.url}&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;username&quot; value=&quot;\${jdbc.user}&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;password&quot; value=&quot;\${jdbc.password}&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>	&lt;property name=&quot;driverClassName&quot; value=&quot;\${jdbc.driver}&quot;&gt;&lt;/property&gt;</span></span>
<span class="line"><span>&lt;/bean&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="bean的作用域" tabindex="-1"><a class="header-anchor" href="#bean的作用域"><span>bean的作用域</span></a></h1><p>使用getbean函数获取到的bean对象是object类型的,还需要强转</p><p>在Spring中可以通过配置bean标签的scope属性来指定bean的作用域范围 也可以使用@scope注解设置 各取值含义参加下表：</p><table><thead><tr><th>取值</th><th>含义</th><th>创建对象的时机</th></tr></thead><tbody><tr><td>singleton (默认)</td><td>在lOC容器中，这个bean的对象始终为单实例IOC容器,在spring启动时就创建了</td><td>初始化时</td></tr><tr><td>prototype</td><td>这个bean在lOC容器中有多个实例,每次使用都会创建一个新的</td><td>获取bean时</td></tr><tr><td>request</td><td>每个请求范围内会创建新的实例（web环境中，了解）</td><td></td></tr><tr><td>session</td><td>每个会话范围内会创建新的实例（web环境中，了解）</td><td></td></tr><tr><td>application</td><td>每个应用范围内会创建新的实例（web环境中，了解）<br></td><td></td></tr><tr><td>如果是在WebApplicationContext环境下还会有另外几个作用域（但不常用）</td><td></td><td></td></tr></tbody></table><p>也可以使用@Lazy注解延迟初始化,使用singleton作用域的bean对象在spring启动时就创建了,使用@Lazy注解后它会在第一次使用的时候初始化</p><h2 id="bean的生命周期" tabindex="-1"><a class="header-anchor" href="#bean的生命周期"><span>bean的生命周期</span></a></h2><ol><li>bean对象创建（调用无参数构造）</li><li>给bean对象设置相关属性</li><li>bean后置处理器（初始化之前）</li><li>bean对象初始化（调用指定初始化方法）</li><li>bean后置处理器(初始化之后）</li><li>bean对象创建完成了，可以使用了</li><li>bean对象销毁（配置指定销毁的方法）</li><li>loC容器关闭了</li></ol><p>除了java类默认的生命周期,还可以让bean类实现BeanPostProcessor接口重写<code>postProcessBeforeInitialization</code>函数和<code>postProcessAfterInitialization</code>函数来让bean类具有初始化之前的后置处理器和初始化之后的后置处理器</p><h2 id="获取bean的几种方式" tabindex="-1"><a class="header-anchor" href="#获取bean的几种方式"><span>获取bean的几种方式</span></a></h2><h3 id="_1-根据xml配置获取" tabindex="-1"><a class="header-anchor" href="#_1-根据xml配置获取"><span>1.根据xml配置获取</span></a></h3><h3 id="_2-factorybean获取" tabindex="-1"><a class="header-anchor" href="#_2-factorybean获取"><span>2.FactoryBean获取</span></a></h3><p>FactoryBean是Spring提供的一种整合第三方框架的常用机制。和普通的bean不同，配置一个FactoryBean类型的bean，在获取bean的时候得到的并不是class属性中配置的这个类的对象，而是getObject()方法的返回值。通过 这种机制，Spring可以帮我们把复杂组件创建的详细过程和繁琐细节都屏蔽起来，只把最简洁的使用界面展示给我们。</p><p>要使用FactoryBean需要实现FactoryBean接口,这是一个泛型,传入的类型就是要返回的类型</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class MyFactoryBean implements FactoryBean&lt;User&gt;{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public User getobject()throws Exception {</span></span>
<span class="line"><span>		return new User();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public Class&lt;?&gt;getobjectType(）{</span></span>
<span class="line"><span>		return User.class;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public boolean isSingleton(){</span></span>
<span class="line"><span>		return ture;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>getObject函数返回创建的对象 getObjectType返回创建对象的类型 isSingleton创建的对象是否单例,返回true是单例,返回false不是单例</p><h3 id="_3-使用-bean注解获取" tabindex="-1"><a class="header-anchor" href="#_3-使用-bean注解获取"><span>3.使用@Bean注解获取</span></a></h3><p>如果是自己创建的类只需要在上面加上@Component及其衍生注解即可设置为bean对象,但如果使用第三方包提供的类,第三方包往往是只读的,所以无法使用添加@Component注解的方式将其设置为bean对象</p><p>如果要管理的bean对象来自于第三方（不是自定义的）是无法用及衍生注解声明bean的，就需要用到@Bean注解。 可以定义一个方法,方法的返回值是这个第三方包中的对象,在这个方法上面添加@Bean注解表示这个方法的返回值交由ioc容器管理(这个方法往往是定义在配置类中) 在使用时将这个对象使用@Autowried自动注入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class CommonConfig{</span></span>
<span class="line"><span>	@Bean//将方法返回值交给Ioc容器管理，成为Ioc容器的bean对象</span></span>
<span class="line"><span>	public SAXReadersaxReader(){</span></span>
<span class="line"><span>		return new SAxReader();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Autowired</span></span>
<span class="line"><span>private SAXReader saxReader;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过Bean注解的name或value属性设置第三方bean对象的bean名称,如果未指定则默认是方法名</p><p>如果在这个生成第三方类的函数中需要使用bean对象中的方法可以不使用@Autowired自动注入,只需要将要使用的bean对象声明为方法形参即可自动注入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Bean</span></span>
<span class="line"><span>public SAXReader reader(DeptService deptService){</span></span>
<span class="line"><span>	System.out.println(deptService);</span></span>
<span class="line"><span>	return new SAXReader();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-使用-import注解获取" tabindex="-1"><a class="header-anchor" href="#_4-使用-import注解获取"><span>4.使用@Import注解获取</span></a></h4><p>@lmport导入。使用@lmport导入的类会被Spring加载到loc容器中，导入形式主要有以下几种：</p><ul><li>普通类 : 使用@Import导入的类不需要加任何注解也会被注册为bean对象</li><li>配置类 : 配置类导入后这个配置类中的所有bean对象都会加载到ioc容器中</li><li>ImportSelector接口实现类 : 这个类中有一个selectImports函数需要重写,它的返回值是一个字符串数组,其中存储着要加载到ioc容器中bean对象的全类名,即这个函数返回的全类名都会被注册为bean对象加载到ioc容器中</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class MyImportSelector implements ImportSelector{</span></span>
<span class="line"><span>	public String[] selectImports(AnnotationMetadata importingClassMetadata){</span></span>
<span class="line"><span>		return new String[]{&quot;com.example.HeaderConfig&quot;};</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三方包中支持spring的话往往会提供一个@Enable开头的注解,这个注解封装了@Import注解,可以根据此判断都会导入哪些类能加载到ioc容器中</p><p>在org.springframework.boot.autoconfigure.AutoConfiguration.imports文件中存储着被ioc容器管理类的全类名,他们大多数是不会默认加载到ioc中的,只有在特定条件下才会加载到ioc容器中被使用 其中@Conditional开头的注解就是在达成特定条件才会被加载</p><h3 id="_5-上下文容器对象初始化完成后手动注册bean" tabindex="-1"><a class="header-anchor" href="#_5-上下文容器对象初始化完成后手动注册bean"><span>5.上下文容器对象初始化完成后手动注册bean</span></a></h3><p>手动注册的类不需要spring 的注解是一个普通类就能注册</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class App5 {</span></span>
<span class="line"><span>	public static void main(String[] args){</span></span>
<span class="line"><span>		AnnotationConfigApplicationContext ctx=new AnnotationConfigApplicationContext (SpringConfig4.class);</span></span>
<span class="line"><span>		//上下文容器对象已经初始化完毕后，手工加载bean</span></span>
<span class="line"><span>		ctx.registerBean( beanName: &quot;tom&quot;, Cat.class, ..constructorArgs: 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		ctx.register(Mouse.class);</span></span>
<span class="line"><span>		String[] names = ctx.getBeanDefinitionNames();</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		for (String name : names){</span></span>
<span class="line"><span>			System.out.println(name);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		System.out.println(ctx.getBean(Cat.class));</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>使用registerBean和register都可以注册是两种方法</p><h3 id="_6-importselector接口实现" tabindex="-1"><a class="header-anchor" href="#_6-importselector接口实现"><span>6.ImportSelector接口实现</span></a></h3><p>需要实现ImportSelector接口,在selectImports的返回值列表中返回要注册bean类的全类名 接着把实现类导入到配置类中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class MyImportSelector implements ImportSelector{</span></span>
<span class="line"><span>	@override</span></span>
<span class="line"><span>	public String[] selectImports(AnnotationMetadata importingClassMetadata){</span></span>
<span class="line"><span>		return new String[](&quot;com.itheima.bean.Dog&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Import(MyImportSelector.class)</span></span>
<span class="line"><span>public class SpringConfig6{</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AnnotationMetadata元数据,谁加载了这个类描述的就是谁,该例中importingClassMetadata表示的就是SpringConfig6这个类 同时AnnotationMetadata类还提供了一系列方法用于对元数据的类进行操作或判定 这种方法在源码中大量使用</p><h3 id="_7-importbeandefinitionregistrar接口实现" tabindex="-1"><a class="header-anchor" href="#_7-importbeandefinitionregistrar接口实现"><span>7.ImportBeanDefinitionRegistrar接口实现</span></a></h3><p>相比于ImportSelector接口它功能更加强大,除了具有元数据类外还有一个beanDefinitionRegistry注册用于注册bean对象,因此不需要返回值即可在里面直接创建bean对象 此接口还提供了另一个函数多了bean命名器的类,使用那个类可以给bean对象命名 然后在配置类中导入这个类在ioc容器加载配置类后就能使用了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class MyRegistrar implements ImportBeanDefinitionRegistrar {</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata , BeanDefinitionRegistry registry）{</span></span>
<span class="line"><span>	//1.使用元数据去做判定</span></span>
<span class="line"><span>	BeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition (Dog.class).getBeanDefinition();</span></span>
<span class="line"><span>	registry.registerBeanDefinition(beanName:&quot;yellow&quot;,beanDefinition);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Import(MyRegistrar.class)</span></span>
<span class="line"><span>public class SpringConfig7{</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-postprocessor" tabindex="-1"><a class="header-anchor" href="#_8-postprocessor"><span>8. PostProcessor</span></a></h3><p>后处理器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>public class MyPostProcessor implements BeanDefinitjionRegistryPostProcessor{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException{</span></span>
<span class="line"><span>		BeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition (BookServiceImpl4.class).getBeanDefinition();</span></span>
<span class="line"><span>		registry.registerBeanDefinition(beanName:&quot;bookService&quot;,beanDefinition);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法和ImportBeanDefinitionRegistrar基本一样 如果在配置类上的Import注解导入太多类时一般会使用最后导入的类 使用postprocessor后就可以指定类了,接口函数中使用的是哪个类,配置类中使用的也是哪个</p>`,92)]))}const d=n(l,[["render",t]]),c=JSON.parse('{"path":"/back/springboot/2/","title":"2 基于xml管理bean","lang":"zh-CN","frontmatter":{"title":"2 基于xml管理bean","createTime":"2025/06/18 20:59:30","permalink":"/back/springboot/2/"},"readingTime":{"minutes":11.4,"words":3421},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/后端/Spring Boot/2 基于xml管理bean.md","headers":[]}');export{d as comp,c as data};
