import{_ as n,c as e,a,o as i}from"./app-CEcM0piI.js";const l={};function p(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>Spring默认不使用注解装配Bean，因此我们需要在Spring的XML配置中，通过context:component-scan 元素开启SpringBeans的自动扫描功能。开启此功能后，Spring会自动从扫描指定的包（base-package属性设置)及其子包下的所有类，如果类上使用了@Component注解，就将该类装配到容器中。</p><p>开启组件扫描表示要扫描的包名,这样在这个包中的注解都能被识别了</p><h2 id="基础扫描" tabindex="-1"><a class="header-anchor" href="#基础扫描"><span>基础扫描</span></a></h2><p>只对指定的包开启全部扫描</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>xmlns: context=&quot;http: / /www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span>xsi:schemaLocation=&quot;http://www.springframework.org/schema/context</span></span>
<span class="line"><span>http:/ /www.springframework.org/schema/context/spring-context.xsd&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;context:nent-scan base-package=&quot;com.atguigu&quot;&gt;&lt;/context:component-scan&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤扫描" tabindex="-1"><a class="header-anchor" href="#过滤扫描"><span>过滤扫描</span></a></h2><p>context:exclude-filter标签：指定排除规则 type：设置排除或包含的依据 type=&quot;annotation&quot;，根据注解排除，expression中设置要排除的注解的全类名 type=&quot;assignable&quot;，根据类型排除，expression中设置要排除的类型的全类名</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;context:component-scan base-package=&quot;com.atguigu.spring6&quot;&gt;</span></span>
<span class="line"><span>	&lt;context:exclude-filter type=&quot;annotation&quot; expression=&quot;org.springframework.stereotype.Controller&quot;/&gt;</span></span>
<span class="line"><span>	&lt;context:exclude-filter type=&quot;assignable&quot;</span></span>
<span class="line"><span>	expression=&quot;com.atguigu.spring6.controller.UserController&quot;/&gt;</span></span>
<span class="line"><span>&lt;/context:component-scan&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示Controller这个注解不被扫描 和UserController这个类上面的注解不被扫描</p><h1 id="使用注解定义bean" tabindex="-1"><a class="header-anchor" href="#使用注解定义bean"><span>使用注解定义Bean</span></a></h1><p>Spring 提供了以下多个注解，这些注解可以直接标注在Java类上，将它们定义成SpringBean。</p><table><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td>@Component</td><td>该注解用于描述Spring中的Bean，它是一个泛化的概念，仅仅表示容器中的一个组件（Bean），并且可以作用在应用的任何层次，例如 Service层、Dao 层等。使用时只需将<br>该注解标注在相应类上即可。</td></tr><tr><td>@Repository</td><td>该注解用于将数据访问层（Dao层）的类标识为Spring 中的Bean，其功能与@Component 相同。</td></tr><tr><td>@Service</td><td>该注解通常作用在业务层（Service层），用于将业务层的类标识为Spring中的Bean，其功能与 @Component 相同。</td></tr><tr><td>@Controller</td><td>该注解通常作用在控制层（如SpringMVC的Controller），用于将控制层的类标识为相同</td></tr></tbody></table><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component(value=&quot;user&quot;)</span></span>
<span class="line"><span>class User{};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>value可以不写,默认是类名小写</p><h1 id="autowired注入" tabindex="-1"><a class="header-anchor" href="#autowired注入"><span>@Autowired注入</span></a></h1><p>单独使用@Autowired注解，默认根据类型装配【默认是byType】</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@TargetC{ElementType.CONSTRUCTOR, ElementType.METHoD， ElementType.PARAMETER,ElementType.FIELD, ElementType.ANNOTATION_TYPE})</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>public @interface Autowired {</span></span>
<span class="line"><span>	boolean required() default true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动注入" tabindex="-1"><a class="header-anchor" href="#自动注入"><span>自动注入</span></a></h3><p>在成员变量中设置@Autowired注解自动注入</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>	@Autowired//根据类型找到对应对象，完成注入</span></span>
<span class="line"><span>	private UserService userService;</span></span>
<span class="line"><span>	public void add() {</span></span>
<span class="line"><span>		System.out.println(&quot;controller...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Applicationcontext context = new ClassPathXmlApplicationContext( configLocation: &quot;bean.xml&quot;);</span></span>
<span class="line"><span>UserController controller = context.getBean(UserController.class);</span></span>
<span class="line"><span>controller.add();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set方法注入" tabindex="-1"><a class="header-anchor" href="#set方法注入"><span>set方法注入</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>	private UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	public void setUserService(UserService userService) {</span></span>
<span class="line"><span>		this.userService = userService;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	public void add() {</span></span>
<span class="line"><span>		System.out.println(&quot;controller...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置set函数,在set函数上面添加@Autowired注解</p><h3 id="构造方法注入" tabindex="-1"><a class="header-anchor" href="#构造方法注入"><span>构造方法注入</span></a></h3><p>在构造方法上添加@Autowired注解</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>	private UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	public UserController(UserService userService){</span></span>
<span class="line"><span>		this.userServicee = userService;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void add() {</span></span>
<span class="line"><span>		System.out.println(&quot;controller...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="形参注入" tabindex="-1"><a class="header-anchor" href="#形参注入"><span>形参注入</span></a></h3><p>在函数的形参上添加@Autowired注解</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>	private UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public UserController(@Autowired UserService userService) {</span></span>
<span class="line"><span>		this.userService = userService;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void add() {</span></span>
<span class="line"><span>		System.out.println(&quot;controller...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无注解注入" tabindex="-1"><a class="header-anchor" href="#无注解注入"><span>无注解注入</span></a></h3><p>当这个类只有一个有参构造时不需要@Autowired注解也能注入</p><h3 id="通过两个注解根据名称注入" tabindex="-1"><a class="header-anchor" href="#通过两个注解根据名称注入"><span>通过两个注解根据名称注入</span></a></h3><p>当一个接口有多个实现类的时候就无法只使用@Autowried注解注入了,可以搭配@Qualifier注解根据名称注入,名称是类名首字母小写</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>	private UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Autowired</span></span>
<span class="line"><span>	@Qualifier(value=&quot;userRedisDaoImpl&quot;)</span></span>
<span class="line"><span>	privatee UserDaouserDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public void add() {</span></span>
<span class="line"><span>		System.out.println(&quot;controller...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过-recource注入" tabindex="-1"><a class="header-anchor" href="#通过-recource注入"><span>通过@Recource注入</span></a></h3><p>@Resource注解也可以完成属性注入。 @Resource注解是JDK扩展包中的，也就是说属于JDK的一部分。所以该注解是标准注解，更加具有通用性。</p><p>默认根据名称装配byName，未指定name时，使用属性名作为name。通过name找不到 的话会自动启动通过类型byType装配 @Autowired注解默认根据类型装配byType，如果想根据名称装配，需要配合@Qualifier注解一起用</p><ul><li>@Resource注解用在属性上、setter方法上。</li><li>@Autowired注解用在属性上、setter方法上、构造方法上、构造方法参数上</li></ul><p>@Resource注解属于JDk扩展包，所以不在JDK当中，需要额外引I入以下依赖：( 如果是JDK8的话不需要额外引入依赖。高于JDK11或低于JDK8需要引入以下依赖。)</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>	&lt;groupId&gt;jakarta.annotation&lt;/groupId&gt;</span></span>
<span class="line"><span>	&lt;artifactId&gt;jakarta.annotation-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>	&lt;version&gt;2.1.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据名称注入" tabindex="-1"><a class="header-anchor" href="#根据名称注入"><span>根据名称注入</span></a></h4><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Service(&quot;myUserService&quot;)</span></span>
<span class="line"><span>public class UserServiceImplimplementss UserService{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void add(){</span></span>
<span class="line"><span>		System.out.println(&quot;service....&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Controller</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span>	@Resource(name = &quot;myUserService&quot;)</span></span>
<span class="line"><span>	private UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public voidd add(){</span></span>
<span class="line"><span>		System.out.println(&quot;controller...);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="根据属性名注入" tabindex="-1"><a class="header-anchor" href="#根据属性名注入"><span>根据属性名注入</span></a></h4><p>属性名要和@Repository注解中的值保持一致</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Repository(&quot;myUserDao&quot;)</span></span>
<span class="line"><span>public class UserDaoImpl implements UserDao{</span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void add() {</span></span>
<span class="line"><span>		System.out.println(&quot;dao...&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service(&quot;myUserService&quot;)</span></span>
<span class="line"><span>public class UserServiceImpl implements UserService {</span></span>
<span class="line"><span>	@Resource</span></span>
<span class="line"><span>	private UserDao myUserDao;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void add(){</span></span>
<span class="line"><span>		System.out.println(&quot;service....&quot;);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>当@Resource没有指定名字,属性名也没有和@Repository中的一致,这是时就会根据类型注入</p><h2 id="全注解开发" tabindex="-1"><a class="header-anchor" href="#全注解开发"><span>全注解开发</span></a></h2><p>使用@Configuration注解的类是配置类 @ComponentScan注解表示开去组件扫描相当于context:exclude-filter标签,里面的值表示扫描的包 这样在加载配置类的时候就不用加载xml文件了,直接加载配置类即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Configuration//配置类</span></span>
<span class="line"><span>@ComponentScan(&quot;com.atguigu·spring6&quot;)//开启组件扫描</span></span>
<span class="line"><span>public class SpringConfig{</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ApplicationContext context =new AnnotationConfigApplicationContext(SpringConfig.class);</span></span>
<span class="line"><span>UserController controller = context.getBean(UserController.class);</span></span>
<span class="line"><span>controller.add();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49)]))}const d=n(l,[["render",p]]),c=JSON.parse('{"path":"/back/springboot/3/","title":"3 基于注解管理bean","lang":"zh-CN","frontmatter":{"title":"3 基于注解管理bean","createTime":"2025/06/18 20:59:32","permalink":"/back/springboot/3/"},"readingTime":{"minutes":4.32,"words":1295},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/后端/Spring Boot/3 基于注解管理bean.md","headers":[]}');export{d as comp,c as data};
