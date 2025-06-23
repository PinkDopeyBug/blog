import{_ as n,c as a,a as i,o as l}from"./app-CEcM0piI.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<p>将一个类的接口转换成用户希望的另一个接口，使不兼容的对象能够相互配合并一起工作，这种模式就叫适配器模式。 适配器模式就相当于找了一个翻译。</p><p>STL标准模板库有六大组件，其中之一的就是适配器。 六大组件分别是：容器、算法、迭代器、仿函数、适配器、空间适配器。 适配器又可以分为：容器适配器、函数适配器、迭代器适配器</p><p><strong>斜杠型人才</strong> 所谓的斜杠型人才就是多才多艺，适配器也一样，如果它能给多个不相干的对象进行相互之间的适配，这个适配器就是斜杠适配器。</p><p>其中设配器类可以关联要翻译的类也可以继承要翻译的类（多继承），能够简化少许代码 C++是支持多继承的</p><p>![[Pasted image 20240505135616.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 适配器模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 外国人</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class People {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual string speak() = 0;</span></span>
<span class="line"><span>  void listen(string msg) { cout &lt;&lt; &quot;我听到: &quot; &lt;&lt; msg &lt;&lt; endl; }</span></span>
<span class="line"><span>  virtual ~People() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 美国人</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class American : public People {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string speak() override { return &quot;fuck&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 中国人</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class Chinese : public People {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string speak() override { return &quot;八嘎&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象翻译适配器</span></span>
<span class="line"><span>class AbstractTranslator {</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>  People* speaker1;</span></span>
<span class="line"><span>  People* speaker2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractTranslator(People* p1, People* p2) : speaker1(p1), speaker2(p2) {}</span></span>
<span class="line"><span>  virtual void listens2() = 0;</span></span>
<span class="line"><span>  virtual void saytos2() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractTranslator() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 中文翻译适配器</span></span>
<span class="line"><span>class ChineseTranslator : public AbstractTranslator {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractTranslator::AbstractTranslator;</span></span>
<span class="line"><span>  void listens2() override {</span></span>
<span class="line"><span>    string msg = &quot;牢美说:&quot; + speaker2-&gt;speak();</span></span>
<span class="line"><span>    speaker1-&gt;listen(msg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  void saytos2() override {</span></span>
<span class="line"><span>    string msg = &quot;给牢美说:&quot; + speaker1-&gt;speak();</span></span>
<span class="line"><span>    speaker2-&gt;listen(msg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 英文翻译适配器</span></span>
<span class="line"><span>class AmericanTranslator : public AbstractTranslator {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractTranslator::AbstractTranslator;</span></span>
<span class="line"><span>  void listens2() override {</span></span>
<span class="line"><span>    string msg = &quot;Chinese say:&quot; + speaker2-&gt;speak();</span></span>
<span class="line"><span>    speaker1-&gt;listen(msg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  void saytos2() override {</span></span>
<span class="line"><span>    string msg = &quot;say to Chinese:&quot; + speaker1-&gt;speak();</span></span>
<span class="line"><span>    speaker2-&gt;listen(msg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test() {</span></span>
<span class="line"><span>  People* chinese = new Chinese();</span></span>
<span class="line"><span>  People* american = new American();</span></span>
<span class="line"><span>  AbstractTranslator* chineseTranslator =</span></span>
<span class="line"><span>      new ChineseTranslator(chinese, american);</span></span>
<span class="line"><span>  chineseTranslator-&gt;listens2();</span></span>
<span class="line"><span>  chineseTranslator-&gt;saytos2();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  AbstractTranslator* americanTranslator =</span></span>
<span class="line"><span>      new AmericanTranslator(american, chinese);</span></span>
<span class="line"><span>  americanTranslator-&gt;listens2();</span></span>
<span class="line"><span>  americanTranslator-&gt;saytos2();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  delete chinese;</span></span>
<span class="line"><span>  delete american;</span></span>
<span class="line"><span>  delete chineseTranslator;</span></span>
<span class="line"><span>  delete americanTranslator;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式"><span>桥接模式</span></a></h1><h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h3><p>因为每个船员都具有所属海贼团的一些特性，所以可以让每个船员都从对应的海贼团类派生，如下图，它描述的某一个海贼团中类和类之间的关系： ![[Pasted image 20240503205946.png]]</p><h3 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二"><span>方案二</span></a></h3><p>将海贼团的船员和海贼团之间的继承关系，改为聚合关系，如下图： ![[Pasted image 20240503210004.png]] 上面的两种方案你觉得哪个更合理一些呢？很明显，是第二种。</p><p><strong>第一种解决方案</strong></p><ol><li>每个船员都是当前海贼团的子类，这样船员就继承了海贼团的属性，合情合理。</li><li>如果当前海贼团添加了一个成员就需要给当前海贼团类添加一个子类。拿路飞举个例子，他在德雷斯罗萨王国打败多弗朗明哥之后，组成了草帽大船团，小弟一下子扩充了5640人，难道要给草帽团添加五千多个子类吗？如果这样处理，海贼船和船员的耦合度就比较高了。</li></ol><p><strong>第二种解决方案</strong></p><ol><li>海贼团之间是继承关系，但是此时的海贼团也只是一个抽象，因为组成海贼团的人已经被抽离了，船员已经和所属的海贼团没有了继承关系。</li><li>关于海贼世界的船员在船上对应不同的职责担任不同的职务，他们是一个团队，所以可以给船员抽象出一个团队类，用于管理船上的成员。</li><li>抽象的海贼团只有一个空壳子，所以要赋予其灵魂也就是给它添加船员，此时的海贼团和船员团队可以通过聚合的方式组合成为一个整体。</li><li>这种解决方案不仅适用于管理海贼团，用于管理海军的各个舰队也是没有问题的。</li></ol><p>使用第二种解决方案程序猿的工作量会更少一些，且更容易维护和扩展。第二种方式的原则就是将抽象部分和它的实现部分分离，使它们可以独立的变化，这种处理模式就是桥接模式。</p><p>![[Pasted image 20240503211532.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;map&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 桥接模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 团队</span></span>
<span class="line"><span>class AbstractTeam {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractTeam(string name) : name(name) {}</span></span>
<span class="line"><span>  string getTeamName() { return name; }</span></span>
<span class="line"><span>  void addMember(string job, string name) {</span></span>
<span class="line"><span>    m_info.insert(pair&lt;string, string&gt;(job, name));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void show() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;团队名称：&quot; &lt;&lt; name &lt;&lt; endl;</span></span>
<span class="line"><span>    for (map&lt;string, string&gt;::iterator it = m_info.begin(); it != m_info.end();</span></span>
<span class="line"><span>         it++) {</span></span>
<span class="line"><span>      cout &lt;&lt; it-&gt;first &lt;&lt; &quot;:&quot; &lt;&lt; it-&gt;second &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  virtual void Task() = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>  string name;</span></span>
<span class="line"><span>  map&lt;string, string&gt; m_info;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 草帽海贼团</span></span>
<span class="line"><span>class SeaTribe : public AbstractTeam {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractTeam::AbstractTeam;</span></span>
<span class="line"><span>  void Task() { cout &lt;&lt; &quot;成为海贼王&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 斯摩格海军</span></span>
<span class="line"><span>class Navy : public AbstractTeam {</span></span>
<span class="line"><span>  using AbstractTeam::AbstractTeam;</span></span>
<span class="line"><span>  void Task() { cout &lt;&lt; &quot;维护和平&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 船</span></span>
<span class="line"><span>class AbstractShip {</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>  AbstractTeam *team;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractShip(AbstractTeam *team) : team(team) {}</span></span>
<span class="line"><span>  void show() {</span></span>
<span class="line"><span>    team-&gt;show();</span></span>
<span class="line"><span>    team-&gt;Task();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  virtual string getName() = 0;</span></span>
<span class="line"><span>  virtual void feature() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractShip() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Merry : public AbstractShip {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractShip::AbstractShip;</span></span>
<span class="line"><span>  string getName() { return &quot;前进!梅丽号&quot;; }</span></span>
<span class="line"><span>  void feature() { cout &lt;&lt; getName() &lt;&lt; &quot;梅丽号是草帽海贼团的船&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Marine : public AbstractShip {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractShip::AbstractShip;</span></span>
<span class="line"><span>  string getName() { return &quot;前进!海军号&quot;; }</span></span>
<span class="line"><span>  void feature() { cout &lt;&lt; getName() &lt;&lt; &quot;海军号是斯摩格海军的船&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test() {</span></span>
<span class="line"><span>  SeaTribe seaTribe(&quot;草帽海贼团&quot;);</span></span>
<span class="line"><span>  seaTribe.addMember(&quot;船长&quot;, &quot;路飞&quot;);</span></span>
<span class="line"><span>  seaTribe.addMember(&quot;船医&quot;, &quot;乔巴&quot;);</span></span>
<span class="line"><span>  seaTribe.addMember(&quot;航海士&quot;, &quot;娜美&quot;);</span></span>
<span class="line"><span>  Merry merry(&amp;seaTribe);</span></span>
<span class="line"><span>  merry.feature();</span></span>
<span class="line"><span>  merry.show();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Navy navy(&quot;斯摩格海军&quot;);</span></span>
<span class="line"><span>  navy.addMember(&quot;上将&quot;, &quot;赤犬&quot;);</span></span>
<span class="line"><span>  navy.addMember(&quot;中将&quot;, &quot;绿牛&quot;);</span></span>
<span class="line"><span>  navy.addMember(&quot;少将&quot;, &quot;黄猿&quot;);</span></span>
<span class="line"><span>  Marine marine(&amp;navy);</span></span>
<span class="line"><span>  marine.feature();</span></span>
<span class="line"><span>  marine.show();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式"><span>组合模式</span></a></h1><p>能将多个对象组成一个树状结构，用以描述部分—整体的层次关系，使得用户对单个对象和组合对象的使用具有一致性，这样的结构性设计模式叫做组合模式。</p><p>![[Pasted image 20240503220830.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;list&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组合模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象节点类</span></span>
<span class="line"><span>class AbstractNode {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  bool hasChild = false;</span></span>
<span class="line"><span>  string name;</span></span>
<span class="line"><span>  AbstractNode* parent;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  AbstractNode(string name) : name(name) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  virtual void add(AbstractNode* node) {}</span></span>
<span class="line"><span>  virtual void remove(AbstractNode* node) {}</span></span>
<span class="line"><span>  virtual void fight() = 0;</span></span>
<span class="line"><span>  virtual void show() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractNode() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 叶子节点类</span></span>
<span class="line"><span>class LeafNode : public AbstractNode {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractNode::AbstractNode;</span></span>
<span class="line"><span>  void fight() override { cout &lt;&lt; name &lt;&lt; &quot;战斗&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void show() override { cout &lt;&lt; parent-&gt;name &lt;&lt; &quot; &quot; &lt;&lt; name &lt;&lt; endl; }</span></span>
<span class="line"><span>  ~LeafNode() override { cout &lt;&lt; &quot;delete &quot; &lt;&lt; name &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 非叶子节点类</span></span>
<span class="line"><span>class CompositeNode : public AbstractNode {</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  list&lt;AbstractNode*&gt; children;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractNode::AbstractNode;</span></span>
<span class="line"><span>  void add(AbstractNode* node) override {</span></span>
<span class="line"><span>    children.push_back(node);</span></span>
<span class="line"><span>    node-&gt;parent = this;</span></span>
<span class="line"><span>    hasChild = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void fight() override { cout &lt;&lt; name &lt;&lt; &quot;爷们要战斗&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void remove(AbstractNode* node) override {</span></span>
<span class="line"><span>    children.remove(node);</span></span>
<span class="line"><span>    node-&gt;parent = nullptr;</span></span>
<span class="line"><span>    if (children.size() == 0) {</span></span>
<span class="line"><span>      hasChild = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void show() override {</span></span>
<span class="line"><span>    cout &lt;&lt; name &lt;&lt; &quot;的队伍&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    for (auto&amp; child : children) {</span></span>
<span class="line"><span>      child-&gt;show();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ~CompositeNode() override {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;delete- &quot; &lt;&lt; name &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  CompositeNode* root = new CompositeNode(&quot;root&quot;);</span></span>
<span class="line"><span>  CompositeNode* node1 = new CompositeNode(&quot;node1&quot;);</span></span>
<span class="line"><span>  CompositeNode* node2 = new CompositeNode(&quot;node2&quot;);</span></span>
<span class="line"><span>  CompositeNode* node3 = new CompositeNode(&quot;node3&quot;);</span></span>
<span class="line"><span>  LeafNode* leaf1 = new LeafNode(&quot;leaf1&quot;);</span></span>
<span class="line"><span>  LeafNode* leaf2 = new LeafNode(&quot;leaf2&quot;);</span></span>
<span class="line"><span>  LeafNode* leaf3= new LeafNode(&quot;leaf3&quot;);</span></span>
<span class="line"><span>  LeafNode* leaf4 = new LeafNode(&quot;leaf4&quot;);</span></span>
<span class="line"><span>  LeafNode* leaf5 = new LeafNode(&quot;leaf5&quot;);</span></span>
<span class="line"><span>  LeafNode* leaf6 = new LeafNode(&quot;leaf6&quot;);</span></span>
<span class="line"><span>  root-&gt;add(node1);</span></span>
<span class="line"><span>  root-&gt;add(node2);</span></span>
<span class="line"><span>  root-&gt;add(node3);</span></span>
<span class="line"><span>  node1-&gt;add(leaf1);</span></span>
<span class="line"><span>  node1-&gt;add(leaf2);</span></span>
<span class="line"><span>  node2-&gt;add(leaf3);</span></span>
<span class="line"><span>  node2-&gt;add(leaf4);</span></span>
<span class="line"><span>  node3-&gt;add(leaf5);</span></span>
<span class="line"><span>  node3-&gt;add(leaf6);</span></span>
<span class="line"><span>  root-&gt;show();</span></span>
<span class="line"><span>  delete root;</span></span>
<span class="line"><span>  delete node1;</span></span>
<span class="line"><span>  delete node2;</span></span>
<span class="line"><span>  delete node3;</span></span>
<span class="line"><span>  delete leaf1;</span></span>
<span class="line"><span>  delete leaf2;</span></span>
<span class="line"><span>  delete leaf3;</span></span>
<span class="line"><span>  delete leaf4;</span></span>
<span class="line"><span>  delete leaf5;</span></span>
<span class="line"><span>  delete leaf6;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li>继承关系：对节点的操作使用的是抽象类中提供的接口，以保证操作的一致性</li><li>聚合关系：ManagerTeam类型的节点还可以有子节点，父节点和子节点的之间的关系需要具体问题具体分析 子节点跟随父节点一起销毁，二者就是组合关系（UML中的组合关系） 子节点不跟随父节点一起销毁，二者就是聚合关系</li></ul><p>上面的程序中，在父节点的析构函数中没有销毁它管理的子节点，所以在上图中标记的是聚合关系</p><h1 id="装饰模式" tabindex="-1"><a class="header-anchor" href="#装饰模式"><span>装饰模式</span></a></h1><p>装饰模式也可以称之为封装模式，所谓的封装就是在原有行为之上进行拓展，并不会改变该行为 ![[Pasted image 20240504124752.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 装饰模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 战士</span></span>
<span class="line"><span>class Warrior {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual void fight() { cout &lt;&lt; &quot;出拳&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 力道蛊仙</span></span>
<span class="line"><span>class WarriorDecorator : public Warrior {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void fight() {</span></span>
<span class="line"><span>    Warrior::fight();</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;打出力道虚影造成攻击&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 火焰蛊仙</span></span>
<span class="line"><span>class WarriorDecorator2 : public WarriorDecorator {</span></span>
<span class="line"><span>  void fight() {</span></span>
<span class="line"><span>    WarriorDecorator::fight();</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;攻击附带灼烧伤害&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  Warrior *warrior = new Warrior();</span></span>
<span class="line"><span>  warrior-&gt;fight();</span></span>
<span class="line"><span>  cout &lt;&lt; &quot;====================&quot; &lt;&lt; endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Warrior *warrior2 = new WarriorDecorator();</span></span>
<span class="line"><span>  warrior2-&gt;fight();</span></span>
<span class="line"><span>  cout &lt;&lt; &quot;====================&quot; &lt;&lt; endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Warrior *warrior3 = new WarriorDecorator2();</span></span>
<span class="line"><span>  warrior3-&gt;fight();</span></span>
<span class="line"><span>  cout &lt;&lt; &quot;====================&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="外观模式" tabindex="-1"><a class="header-anchor" href="#外观模式"><span>外观模式</span></a></h1><p>外观模式就是给很多复杂的系统封装起来提供一个简单的上层接口，并在这些接口中包含用户真正关心的功能。 因为类之间没有继承关系，也不是整体和部分这种结构，因此排除了聚合和组合，并且它们之间具有包含和被包含的关系，所以确定的关系是关联关系 ![[Pasted image 20240504125731.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 外观模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 乐可系统</span></span>
<span class="line"><span>class CokeSystem {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void immitCoke() { cout &lt;&lt; &quot;狮吼炮原料&lt;可乐&gt;已经注入完毕...&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 能量转换系统</span></span>
<span class="line"><span>class EnergySystem {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void energyConvert() { cout &lt;&lt; &quot;已经将所有的可乐转换为了能量...&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 目标锁定系统</span></span>
<span class="line"><span>class AimLockSystem {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void aimLock() { cout &lt;&lt; &quot;已经瞄准并且锁定了目标...&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加农炮发射系统</span></span>
<span class="line"><span>class Cannon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void cannonFire() { cout &lt;&lt; &quot;狮吼炮正在向目标开火...&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 风来炮稳定系统</span></span>
<span class="line"><span>class WindCannon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void windCannonFire() { cout &lt;&lt; &quot;发射风来炮抵消后坐力稳定船身...&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上层接口</span></span>
<span class="line"><span>class LionCannon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  LionCannon() {</span></span>
<span class="line"><span>    m_coke = new CokeSystem;</span></span>
<span class="line"><span>    m_energy = new EnergySystem;</span></span>
<span class="line"><span>    m_aimLock = new AimLockSystem;</span></span>
<span class="line"><span>    m_cannon = new Cannon;</span></span>
<span class="line"><span>    m_windCannon = new WindCannon;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ~LionCannon() {</span></span>
<span class="line"><span>    delete m_coke;</span></span>
<span class="line"><span>    delete m_energy;</span></span>
<span class="line"><span>    delete m_aimLock;</span></span>
<span class="line"><span>    delete m_cannon;</span></span>
<span class="line"><span>    delete m_windCannon;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 瞄准并锁定目标</span></span>
<span class="line"><span>  void aimAndLock() {</span></span>
<span class="line"><span>    m_coke-&gt;immitCoke();</span></span>
<span class="line"><span>    m_energy-&gt;energyConvert();</span></span>
<span class="line"><span>    m_aimLock-&gt;aimLock();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 开炮</span></span>
<span class="line"><span>  void fire() {</span></span>
<span class="line"><span>    m_cannon-&gt;cannonFire();</span></span>
<span class="line"><span>    m_windCannon-&gt;windCannonFire();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  CokeSystem* m_coke = nullptr;</span></span>
<span class="line"><span>  EnergySystem* m_energy = nullptr;</span></span>
<span class="line"><span>  AimLockSystem* m_aimLock = nullptr;</span></span>
<span class="line"><span>  Cannon* m_cannon = nullptr;</span></span>
<span class="line"><span>  WindCannon* m_windCannon = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test() {</span></span>
<span class="line"><span>  // 发射狮吼炮</span></span>
<span class="line"><span>  LionCannon* lion = new LionCannon;</span></span>
<span class="line"><span>  lion-&gt;aimAndLock();</span></span>
<span class="line"><span>  lion-&gt;fire();</span></span>
<span class="line"><span>  delete lion;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>外观模式是一个很重要、平时也经常使用的设计模式，其核心思想就是化繁为简，封装底层逻辑，将使用者真正关心的功能通过上层接口呈现出来。</p><h1 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式"><span>享元模式</span></a></h1><p>如果想要实现一个发射炮弹的游戏，有一个很现实的亟待解决的问题：内存的消耗问题。</p><ul><li>每个炮弹都是一个对象，每个对象都会占用一块内存</li><li>炮弹越多，占用的内存就越大，如果炮弹足够多可能会出现内存枯竭问题</li><li>假设内存足够大，频繁的创建炮弹对象，会影响游戏的流畅度，性能低</li></ul><p>关于游戏中的炮弹，应该有以下一些需要处理的属性：</p><ol><li>炮弹的坐标</li><li>炮弹的速度</li><li>炮弹的颜色渲染</li><li>炮弹的精灵图（就是一张大图上有很多小的图片，通过进行位置的控制，从大图中取出想要的某一张小的图片） ![[Pasted image 20240504131732.png]] 在这四部分数据中有些属性是动态的，有些属性是静态的：</li></ol><ul><li>静态资源：精灵图和渲染的颜色</li><li>动态属性：坐标和速度 对应的动态资源肯定是不能被复用，所有炮弹可共享的就是这些静态资源，不论有多少炮弹，它们对应的精灵图和渲染颜色数据可以只有一份，这样对于内存的开销就大大降低了。</li></ul><p>享元模式就是摒弃了在每个对象中都保存所有的数据的这种方式，通过数据共享（缓存）让有限的内存可以加载更多的对象。</p><p>对象的常量数据通常被称为内在状态， 其位于对象中， 其他对象只能读取但不能修改其数值。 而对象的其他状态常常能被其他对象 “从外部” 改变， 因此被称为外在状态。使用享元模式一般建议将内在状态和外在状态分离，将内在状态单独放到一个类中，这种类我们可以将其称之为享元类。 ![[Pasted image 20240504202459.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 享元基类</span></span>
<span class="line"><span>class FlyweightBody</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    FlyweightBody(string sprite) : m_sprite(sprite) {}</span></span>
<span class="line"><span>    virtual void move(int x, int y, int speed) = 0;</span></span>
<span class="line"><span>    virtual void draw(int x, int y) = 0;</span></span>
<span class="line"><span>    virtual ~FlyweightBody() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    string m_sprite;    // 精灵图片</span></span>
<span class="line"><span>    string m_color = string(&quot;black&quot;);     // 渲染颜色</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 炸弹弹体</span></span>
<span class="line"><span>class SharedBombBody : public FlyweightBody</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using FlyweightBody::FlyweightBody;</span></span>
<span class="line"><span>    void move(int x, int y, int speed) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;炸弹以每小时&quot; &lt;&lt; speed &lt;&lt; &quot;速度飞到了(&quot; </span></span>
<span class="line"><span>            &lt;&lt; x &lt;&lt; &quot;, &quot; &lt;&lt; y &lt;&lt; &quot;) 的位置...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void draw(int x, int y) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;在 (&quot; &lt;&lt; x &lt;&lt; &quot;, &quot; &lt;&lt; y &lt;&lt; &quot;) 的位置重绘炸弹弹体...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 唯一的炸弹彩蛋</span></span>
<span class="line"><span>class UniqueBomb : public FlyweightBody</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using FlyweightBody::FlyweightBody;</span></span>
<span class="line"><span>    void move(int x, int y, int speed) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // 此处省略对参数 x, y, speed的处理</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;彩蛋在往指定位置移动, 准备爆炸发放奖励...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void draw(int x, int y) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;在 (&quot; &lt;&lt; x &lt;&lt; &quot;, &quot; &lt;&lt; y &lt;&lt; &quot;) 的位置重绘彩蛋运动轨迹...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发射炮弹</span></span>
<span class="line"><span>class LaunchBomb</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LaunchBomb(FlyweightBody* body) : m_bomb(body) {}</span></span>
<span class="line"><span>    int getX()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_x;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int getY()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_y;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setSpeed(int speed)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_speed = speed;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int getSpeed()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_speed;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void move(int x, int y)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_x = x;</span></span>
<span class="line"><span>        m_y = y;</span></span>
<span class="line"><span>        m_bomb-&gt;move(m_x, m_y, m_speed);</span></span>
<span class="line"><span>        draw();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void draw()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_bomb-&gt;draw(m_x, m_y);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_x = 0;</span></span>
<span class="line"><span>    int m_y = 0;</span></span>
<span class="line"><span>    int m_speed = 100;</span></span>
<span class="line"><span>    FlyweightBody* m_bomb = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 享元工厂类</span></span>
<span class="line"><span>class BombBodyFactory</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    SharedBombBody* getSharedData(string name)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        SharedBombBody* data = nullptr;</span></span>
<span class="line"><span>        // 遍历容器</span></span>
<span class="line"><span>        for (auto item : m_bodyMap)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (item.first == name)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                // 找到了</span></span>
<span class="line"><span>                data = item.second;</span></span>
<span class="line"><span>                cout &lt;&lt; &quot;正在复用 &lt;&quot; &lt;&lt; name &lt;&lt; &quot;&gt;...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (data == nullptr)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            data = new SharedBombBody(name);</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;正在创建 &lt;&quot; &lt;&lt; name &lt;&lt; &quot;&gt;...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            m_bodyMap.insert(make_pair(name, data));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return data;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ~BombBodyFactory()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        for (auto item : m_bodyMap)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            delete item.second;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    map&lt;string, SharedBombBody*&gt; m_bodyMap;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 发射炮弹</span></span>
<span class="line"><span>    BombBodyFactory* factory = new BombBodyFactory;</span></span>
<span class="line"><span>    vector&lt;LaunchBomb*&gt; ballList;</span></span>
<span class="line"><span>    vector&lt;string&gt; namelist = { &quot;撒旦-1&quot;, &quot;撒旦-1&quot;, &quot;撒旦-2&quot;, &quot;撒旦-2&quot;, &quot;撒旦-2&quot;, &quot;撒旦-3&quot;};</span></span>
<span class="line"><span>    for (auto name : namelist)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        int x = 0, y = 0;</span></span>
<span class="line"><span>        LaunchBomb* ball = new LaunchBomb(factory-&gt;getSharedData(name));</span></span>
<span class="line"><span>        for (int i = 0; i &lt; 3; ++i)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            x += rand() % 100;</span></span>
<span class="line"><span>            y += rand() % 50;</span></span>
<span class="line"><span>            ball-&gt;move(x, y);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;=========================&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        ballList.push_back(ball);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 彩蛋</span></span>
<span class="line"><span>    UniqueBomb* unique = new UniqueBomb(&quot;大彩蛋&quot;);</span></span>
<span class="line"><span>    LaunchBomb* bomb = new LaunchBomb(unique);</span></span>
<span class="line"><span>    int x = 0, y = 0;</span></span>
<span class="line"><span>    for (int i = 0; i &lt; 3; ++i)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        x += rand() % 100;</span></span>
<span class="line"><span>        y += rand() % 50;</span></span>
<span class="line"><span>        bomb-&gt;move(x, y);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto ball : ballList)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        delete ball;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delete factory;</span></span>
<span class="line"><span>    delete unique;</span></span>
<span class="line"><span>    delete bomb;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ol><li>享元模式中的享元类可以有子类也可以没有</li><li>享元模式中可以添加享元工厂也可以不添加</li><li>享元工厂的作用和单例模式类似，但二者的关注点略有不同 单例模式关注的是类的对象有且只有一个 享元工厂关注的是某个实例对象是否可以共享</li></ol><h1 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式"><span>代理模式</span></a></h1><p>为其他对象提供一种代理，以控制对这个对象的访问。 如果我们想要用代理模式来描述一下电话虫的行为，里边有如下几个细节：</p><ol><li>说话的人是一个对象，电话虫也是一个对象，电话虫模拟的是说话的人</li><li>说话的人和电话虫有相同的行为，所以需要为二者提供一个抽象类</li><li>电话虫是在为说话的人办事，所以电话虫和说话人应该有关联关系 ![[Pasted image 20240504204035.png]]</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 代理模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象通话类</span></span>
<span class="line"><span>class Communication {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual void call() = 0;</span></span>
<span class="line"><span>  virtual ~Communication() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 讲话者</span></span>
<span class="line"><span>class Speaker : public Communication {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void call() { cout &lt;&lt; &quot;讲话者正在讲话...&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 电话</span></span>
<span class="line"><span>class Phone : public Communication {</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  Speaker* speaker;</span></span>
<span class="line"><span>  bool isSpeaker;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  Phone() {</span></span>
<span class="line"><span>    this-&gt;speaker = new Speaker();</span></span>
<span class="line"><span>    this-&gt;isSpeaker = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ~Phone() {</span></span>
<span class="line"><span>    if (this-&gt;isSpeaker) {</span></span>
<span class="line"><span>      delete this-&gt;speaker;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  void call() { cout &lt;&lt; &quot;电话代理讲话者说话&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test() {</span></span>
<span class="line"><span>  Communication* phone = new Phone();</span></span>
<span class="line"><span>  phone-&gt;call();</span></span>
<span class="line"><span>  delete phone;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>我们可以在代理类中有效的管理被代理的对象的工作的时机，但是并没有改变被代理的对象的行为。</p><blockquote><p>[!tip] Title 通过测试程序我们可以得到如下结论：如果使用代理模式，不能改变所代理的类的接口，使用代理模式的目的是为了加强控制。</p></blockquote>`,47)]))}const v=n(e,[["render",p]]),r=JSON.parse('{"path":"/base/dp/3/","title":"3、结构型模式","lang":"zh-CN","frontmatter":{"title":"3、结构型模式","createTime":"2025/06/22 16:16:47","permalink":"/base/dp/3/"},"readingTime":{"minutes":12.69,"words":3806},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/设计模式/3、结构型模式.md","headers":[]}');export{v as comp,r as data};
