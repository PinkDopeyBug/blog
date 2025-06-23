import{_ as n,c as a,a as i,o as l}from"./app-CEcM0piI.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<p>也就是说对于某个员工的请求可能需要一级一级向上传递，如果有权处理那就将其处理掉，如果无权处理还需继续向上传递该请求。像上面这种将对象连成一条链，并沿着这条链传递请求，直到链上有一个对象将请求处理掉为止，这种处理数据的模式叫做责任链模式。使用这种模式有一个好处：处理者可以决定不再沿着链传递请求， 这可高效地取消所有后续处理步骤。 责任链会将特定行为转换为被称作处理者的独立对象。 在巴洛克工作社这个例子中， 每个审批步骤都可被抽取为仅有单个方法的类， 并执行审批操作，请求及其数据则会被作为参数传递给该方法。 ![[Pasted image 20240504210411.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>enum class RequestType:char {QingJia, ZhangXin, CiZhi};</span></span>
<span class="line"><span>// 抽象的任务节点类</span></span>
<span class="line"><span>class AbstractManager</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void setNext(AbstractManager* manager)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_next = manager;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    virtual void handleRequest(RequestType type) = 0;</span></span>
<span class="line"><span>    virtual ~AbstractManager() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    AbstractManager* m_next = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初级管理者</span></span>
<span class="line"><span>class Manager : public AbstractManager</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void handleRequest(RequestType type)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        switch (type)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        case RequestType::QingJia:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;请假: 同意请假，好好休息~~~&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case RequestType::ZhangXin:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;涨薪: 这个我得请示一下咱们CEO...&quot; &lt;&lt; &quot; ====&gt; &quot;;</span></span>
<span class="line"><span>            m_next-&gt;handleRequest(type);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case RequestType::CiZhi:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;辞职: 我给你向上级反应一下...&quot; &lt;&lt; &quot; ====&gt; &quot;;</span></span>
<span class="line"><span>            m_next-&gt;handleRequest(type);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CEO</span></span>
<span class="line"><span>class CEO : public AbstractManager</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void handleRequest(RequestType type)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        switch (type)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        case RequestType::QingJia:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;请假: 同意请假, 下不为例...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case RequestType::ZhangXin:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;涨薪: 你工资不少了, 给你个购物券吧...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case RequestType::CiZhi:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;辞职: 这个我得问问咱们老板...&quot; &lt;&lt; &quot; ====&gt; &quot;;</span></span>
<span class="line"><span>            m_next-&gt;handleRequest(type);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 老板</span></span>
<span class="line"><span>class Boss : public AbstractManager</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void handleRequest(RequestType type)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        switch (type)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        case RequestType::QingJia:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;请假: 只有工作才能实现人生价值，回去好好坚守岗位！！！&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case RequestType::ZhangXin:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;涨薪: 钱财乃身外之物, 要视其如粪土!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case RequestType::CiZhi:</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;辞职: 巴洛克工作社就是你的家, 这次把你留下, 下次别再提了!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 卑微的大聪明</span></span>
<span class="line"><span>class DaCongMing</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void request(RequestType type, AbstractManager* manager)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        manager-&gt;handleRequest(type);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Manager* manager = new Manager;</span></span>
<span class="line"><span>    CEO* ceo = new CEO;</span></span>
<span class="line"><span>    Boss* boss = new Boss;</span></span>
<span class="line"><span>    // 设置关联关系</span></span>
<span class="line"><span>    manager-&gt;setNext(ceo);</span></span>
<span class="line"><span>    ceo-&gt;setNext(boss);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 卑微的大聪明的请求</span></span>
<span class="line"><span>    DaCongMing* boy = new DaCongMing;</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;========== 大聪明向顶头上司提要求 ==========&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::QingJia, manager);</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::ZhangXin, manager);</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::CiZhi, manager);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;========== 大聪明越级找CEO提要求 ==========&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::QingJia, ceo);</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::ZhangXin, ceo);</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::CiZhi, ceo);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;========== 大聪明直接找BOSS提要求 ==========&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::QingJia, boss);</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::ZhangXin, boss);</span></span>
<span class="line"><span>    boy-&gt;request(RequestType::CiZhi, boss);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    delete boy;</span></span>
<span class="line"><span>    delete manager;</span></span>
<span class="line"><span>    delete ceo;</span></span>
<span class="line"><span>    delete boss;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>责任链模式就是将这些处理者连成一条链。 链上的每个处理者都有一个成员变量来保存下一个处理者。 除了处理请求外， 处理者还负责沿着链传递请求， 请求会在链上移动， 直至所有处理者都有机会对其进行处理。</p><h1 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式"><span>命令模式</span></a></h1><p>我们可以将顾客的点餐列表看作是一个待执行的命令的列表，这样就可以总结出三者之间的关系了：厨师哲普是这些命令的接收者和执行者，路飞是这些命令的调用者。如果没有这张点餐列表，路飞需要非常频繁地穿梭在餐厅与厨房之间，而且哪个顾客点了什么菜也容易弄混，从某种程度上讲这个点餐列表就相当于一个任务队列。</p><p>上面的这种解决问题的思路用到的就是设计模式中的命令模式。命令模式就是将请求转换为一个包含与请求相关的所有信息的独立对象，通过这个转换能够让使用者根据不同的请求将客户参数化、 延迟请求执行或将请求放入队列中或记录请求日志， 且能实现可撤销操作。 ![[Pasted image 20240504213817.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;map&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命令模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 厨师</span></span>
<span class="line"><span>class Cook {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void makeDXY() { cout &lt;&lt; &quot;炼定仙游蛊&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void makeHYQT() { cout &lt;&lt; &quot;炼鸿运齐天蛊&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命令抽象类</span></span>
<span class="line"><span>class AbstractCommand {</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>  Cook* cook;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractCommand(Cook* cook) : cook(cook) {}</span></span>
<span class="line"><span>  virtual ~AbstractCommand() {}</span></span>
<span class="line"><span>  virtual string execute() = 0;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 炼定仙游蛊命令</span></span>
<span class="line"><span>class DXYCommand : public AbstractCommand {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractCommand::AbstractCommand;</span></span>
<span class="line"><span>  string execute() override {</span></span>
<span class="line"><span>    cook-&gt;makeDXY();</span></span>
<span class="line"><span>    return &quot;定仙游蛊&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 炼鸿运齐天蛊命令</span></span>
<span class="line"><span>class HYQTCommand : public AbstractCommand {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  using AbstractCommand::AbstractCommand;</span></span>
<span class="line"><span>  string execute() override {</span></span>
<span class="line"><span>    cook-&gt;makeHYQT();</span></span>
<span class="line"><span>    return &quot;鸿运齐天蛊&quot;;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 服务员</span></span>
<span class="line"><span>class Waiter {</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  map&lt;int, AbstractCommand*&gt; commands;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void order(int id, AbstractCommand* command) {</span></span>
<span class="line"><span>    cout &lt;&lt; id &lt;&lt; &quot;号下单&quot; &lt;&lt; command-&gt;execute() &lt;&lt; endl;</span></span>
<span class="line"><span>    commands.insert(pair&lt;int, AbstractCommand*&gt;(id, command));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test() {</span></span>
<span class="line"><span>  Cook* cook = new Cook();</span></span>
<span class="line"><span>  Waiter* waiter = new Waiter();</span></span>
<span class="line"><span>  waiter-&gt;order(1, new DXYCommand(cook));</span></span>
<span class="line"><span>  waiter-&gt;order(2, new HYQTCommand(cook));</span></span>
<span class="line"><span>  waiter-&gt;order(3, new DXYCommand(cook));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这个厨师类是命令模式中命令的接收者，收不到命令厨师是不能工作的。 顾客下单就是命令模式中的命令，这些命令的接收者是厨师，命令被分离出来实现了和厨师类的解耦合。通过这种方式可以控制命令执行的时机，毕竟厨师都是在顾客点餐完毕之后才开始炒菜的。 在命令模式中，服务员类是命令的调用者，顾客点餐完成之后服务员调用这些命令，命令的接收者也是执行者 – 厨师就开始给顾客做菜了。</p><p>命令模式最大的特点就是松耦合设计，它有以下几个优势：</p><ol><li>使用这种模式可以很容易地设计出一个命令队列（对应路飞类中的点餐列表）</li><li>可以很容易的将命令记录到日志中（对应例子中的账单信息）</li><li>允许接收请求的一方决定是否要否决请求（对应例子中的鱼香肉丝）</li><li>可以很容易的实现对请求的撤销和重做（对应例子中的撤单函数）</li></ol><h1 id="迭代器模式" tabindex="-1"><a class="header-anchor" href="#迭代器模式"><span>迭代器模式</span></a></h1><p>如果按照人员的等级划分来存储这些团员信息，遍历他们有两种方式：深度优先搜索和广度优先搜索；如果存储海贼团成员信息的时候使用的是线性表或者其他结构，现有的遍历算法可能就不再适用了，最优的解决方案就是将集合与它对应的遍历算法解耦。</p><p>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 需要提供一种解决方案使其能够顺序访问一个集合对象中的各个元素，而又不暴露该集合底层的表现形式（列表、栈、树、图等），这种行为设计模式就叫迭代器模式。 ![[Pasted image 20240504222838.png]]</p><div class="language-mylist.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="mylist.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &lt;string&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>// 定义一个链表节点</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node(string n) : name(n) {}</span></span>
<span class="line"><span>    string name = string();</span></span>
<span class="line"><span>    Node* next = nullptr;</span></span>
<span class="line"><span>    Node* prev = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 双向链表</span></span>
<span class="line"><span>class MyList</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    inline int getCount()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    inline Node* head()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_head;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    inline Node* tail()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_tail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Node* insert(Node* item, string data);</span></span>
<span class="line"><span>    Node* pushFront(string data);</span></span>
<span class="line"><span>    Node* pushBack(string data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>    int m_count = 0;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-mylist.cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="mylist.cpp" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &quot;MyList.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* MyList::insert(Node* item, string data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node* node = nullptr;</span></span>
<span class="line"><span>    if (item == m_head)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        node = pushFront(data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        node = new Node(data);</span></span>
<span class="line"><span>        node-&gt;next = item;</span></span>
<span class="line"><span>        node-&gt;prev = item-&gt;prev;</span></span>
<span class="line"><span>        // 重新连接</span></span>
<span class="line"><span>        item-&gt;prev-&gt;next = node;</span></span>
<span class="line"><span>        item-&gt;prev = node;</span></span>
<span class="line"><span>        m_count++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    m_count++;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* MyList::pushFront(string data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node* node = new Node(data);</span></span>
<span class="line"><span>    // 空链表</span></span>
<span class="line"><span>    if (m_head == nullptr)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_head = m_tail = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        node-&gt;next = m_head;</span></span>
<span class="line"><span>        m_head-&gt;prev = node;</span></span>
<span class="line"><span>        m_head = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m_count++;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* MyList::pushBack(string data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node* node = new Node(data);</span></span>
<span class="line"><span>    // 空链表</span></span>
<span class="line"><span>    if (m_tail == nullptr)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_head = m_tail = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_tail-&gt;next = node;</span></span>
<span class="line"><span>        node-&gt;prev = m_tail;</span></span>
<span class="line"><span>        m_tail = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m_count++;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>如果想要遍历上面的链表集合，有两种方式：一种是正向遍历，一种是逆向遍历，不论哪一种遍历方式它们都对应相同的操作接口，所以需要先提供一个抽象的迭代器基类。通过代器接口访问上面的双向链表的时候，我们只知道它是一个容器，至于其内部的数据结构已经全部被隐藏了。</p><div class="language-iterator.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="iterator.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 抽象的迭代器类</span></span>
<span class="line"><span>class Iterator</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Iterator(MyList* mylist) : m_list(mylist) {}</span></span>
<span class="line"><span>    Node* current()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_current;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    virtual Node* first() = 0;</span></span>
<span class="line"><span>    virtual Node* next() = 0;</span></span>
<span class="line"><span>    virtual bool isDone() = 0;</span></span>
<span class="line"><span>    virtual ~Iterator() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    MyList* m_list = nullptr;</span></span>
<span class="line"><span>    Node* m_current = nullptr;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在这个迭代器基类的内部包含一个双向链表的实例对象 m_list，通过迭代器类遍历双向链表的时候： 通过isDone()函数判断遍历是否结束了 通过current()函数得到遍历到的当前节点 在进行正向遍历的时候: 通过first()函数得到链表的头结点 通过next()函数得到当前节点的后继节点 在进行逆向遍历的时候: 通过first()函数得到链表的尾结点 通过next()函数得到当前节点的前驱节点</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 正向迭代器</span></span>
<span class="line"><span>class ForwardIterator : public Iterator</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using Iterator::Iterator;</span></span>
<span class="line"><span>    Node* first() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_current = m_list-&gt;head();</span></span>
<span class="line"><span>        return m_current;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Node* next() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_current = m_current-&gt;next;</span></span>
<span class="line"><span>        return m_current;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    bool isDone() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_current == m_list-&gt;tail()-&gt;next;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 逆向迭代器</span></span>
<span class="line"><span>class ReverseIterator : public Iterator</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using Iterator::Iterator;</span></span>
<span class="line"><span>    Node* first() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_current = m_list-&gt;tail();</span></span>
<span class="line"><span>        return m_current;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Node* next() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_current = m_current-&gt;prev;</span></span>
<span class="line"><span>        return m_current;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    bool isDone() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_current == m_list-&gt;head()-&gt;prev;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>在子类ForwardIterator 和ReverseIterator 中分别重写父类的纯虚函数，实现了对双向链表的正向遍历和逆向遍历。通过编写的代码我们可以非常清晰的看到，其实所谓的迭代器模式就是专门针对某个容器的遍历提供对应的操作类，通过迭代器类的封装使对应的容器的遍历操作变得简单，并且隐藏了容器的内部细节。</p><div class="language-mylist.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="mylist.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &lt;string&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>// 定义一个链表节点</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node(string n) : name(n) {}</span></span>
<span class="line"><span>    string name = string();</span></span>
<span class="line"><span>    Node* next = nullptr;</span></span>
<span class="line"><span>    Node* prev = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Iterator;</span></span>
<span class="line"><span>// 双向链表</span></span>
<span class="line"><span>class MyList</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    inline int getCount()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_count;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    inline Node* head()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_head;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    inline Node* tail()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_tail;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Node* insert(Node* item, string data);</span></span>
<span class="line"><span>    Node* pushFront(string data);</span></span>
<span class="line"><span>    Node* pushBack(string data);</span></span>
<span class="line"><span>    Iterator* getIterator(bool isReverse = false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>    int m_count = 0;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-mylist.cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="mylist.cpp" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &quot;MyList.h&quot;</span></span>
<span class="line"><span>#include &quot;Iterator.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* MyList::insert(Node* item, string data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node* node = nullptr;</span></span>
<span class="line"><span>    if (item == m_head)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        node = pushFront(data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        node = new Node(data);</span></span>
<span class="line"><span>        node-&gt;next = item;</span></span>
<span class="line"><span>        node-&gt;prev = item-&gt;prev;</span></span>
<span class="line"><span>        // 重新连接</span></span>
<span class="line"><span>        item-&gt;prev-&gt;next = node;</span></span>
<span class="line"><span>        item-&gt;prev = node;</span></span>
<span class="line"><span>        m_count++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* MyList::pushFront(string data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node* node = new Node(data);</span></span>
<span class="line"><span>    // 空链表</span></span>
<span class="line"><span>    if (m_head == nullptr)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_head = m_tail = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        node-&gt;next = m_head;</span></span>
<span class="line"><span>        m_head-&gt;prev = node;</span></span>
<span class="line"><span>        m_head = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m_count++;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node* MyList::pushBack(string data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node* node = new Node(data);</span></span>
<span class="line"><span>    // 空链表</span></span>
<span class="line"><span>    if (m_tail == nullptr)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_head = m_tail = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_tail-&gt;next = node;</span></span>
<span class="line"><span>        node-&gt;prev = m_tail;</span></span>
<span class="line"><span>        m_tail = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m_count++;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Iterator* MyList::getIterator(bool isReverse)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Iterator* iterator = nullptr;</span></span>
<span class="line"><span>    if (isReverse)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        iterator = new ReverseIterator(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        iterator = new ForwardIterator(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return iterator;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    vector&lt;string&gt; nameList{ </span></span>
<span class="line"><span>        &quot;烬&quot;, &quot;奎因&quot;, &quot;杰克&quot;, &quot;福兹·弗&quot;, &quot;X·德雷克&quot;,</span></span>
<span class="line"><span>        &quot;黑色玛利亚&quot;, &quot;笹木&quot;, &quot;润媞&quot;, &quot;佩吉万&quot;,</span></span>
<span class="line"><span>        &quot;一美&quot;, &quot;二牙&quot;, &quot;三鬼&quot;, &quot;四鬼&quot;, &quot;五鬼&quot;,</span></span>
<span class="line"><span>        &quot;六鬼&quot;, &quot;七鬼&quot;, &quot;八茶&quot;, &quot;九忍&quot;,&quot;十鬼&quot;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    MyList mylist;</span></span>
<span class="line"><span>    for (int i = 0; i &lt; nameList.size(); ++i)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        mylist.pushBack(nameList.at(i));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 遍历</span></span>
<span class="line"><span>    Iterator* it = mylist.getIterator(true);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;检阅开始, 凯多: 同志们辛苦啦~~~~~&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    for (auto begin = it-&gt;first(); !it-&gt;isDone(); it-&gt;next())</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;   &quot; &lt;&lt; it-&gt;current()-&gt;name &lt;&lt; &quot;say: 为老大服务!!! &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>    delete it;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>迭代器模式是一个很经典的模式。所以没必要重复的去造这个轮子，成型的类库都非常好的实现了迭代器模式，在使用这些类库提供的容器时，并不需要我们亲自去实现对应的迭代器，比如 STL。但是，打铁还需自身硬，对于这些必备技能我们是没有理由不去学习和掌握的。</p><h1 id="中介者模式" tabindex="-1"><a class="header-anchor" href="#中介者模式"><span>中介者模式</span></a></h1><p>中介者模式可以减少对象之间混乱无序的依赖关系，从而使其耦合松散，限制对象之间的直接交互，迫使它们通过一个中介者对象进行合作。</p><p>如果不使用中介者模式，各个国家之间的关系就是一个网状结构，关系错综复杂，这样的系统也很难容易维护。有了中介者对象，可以将系统的网状结构变成以中介者为中心的放射形结构。每个具体的对象不再通过直接的联系与另一对象发生相互作用，而是通过中介者对象与另一个对象发生相互作用。</p><p>![[Pasted image 20240504224545.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 抽象国家类</span></span>
<span class="line"><span>class Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Country(){}</span></span>
<span class="line"><span>    // 发表声明</span></span>
<span class="line"><span>    virtual void declare(string msg, string country) = 0;</span></span>
<span class="line"><span>    virtual void setMessage(string msg) = 0;</span></span>
<span class="line"><span>    virtual string getName() = 0;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象的中介机构</span></span>
<span class="line"><span>class MediatorOrg</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void addMember(Country* country);</span></span>
<span class="line"><span>    virtual void declare(string msg, Country* country, string name = string()) = 0;</span></span>
<span class="line"><span>    virtual ~MediatorOrg() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    map&lt;string, Country*&gt; m_countryMap;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 世界政府</span></span>
<span class="line"><span>class Country;</span></span>
<span class="line"><span>class WorldGovt : public MediatorOrg</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void declare(string msg, Country* country, string name = string()) override;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &quot;Mediator.h&quot;</span></span>
<span class="line"><span>#include &quot;Country.h&quot;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基类的成员添加函数</span></span>
<span class="line"><span>void MediatorOrg::addMember(Country* country)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    m_countryMap.insert(make_pair(country-&gt;getName(), country));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在子类中重写发表声明的函数 </span></span>
<span class="line"><span>void WorldGovt::declare(string msg, Country* country, string name)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (m_countryMap.find(name) != m_countryMap.end())</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        string str = msg + &quot;【来自: &quot; + country-&gt;getName() + &quot;】&quot;;</span></span>
<span class="line"><span>        m_countryMap[name]-&gt;setMessage(str);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 革命军</span></span>
<span class="line"><span>class GeMingArmy : public MediatorOrg</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void declare(string msg, Country* country, string name = string()) override;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在子类中重写发表声明的函数 </span></span>
<span class="line"><span>void GeMingArmy::declare(string msg, Country* country, string name)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    string str = msg + &quot;【来自: &quot; + country-&gt;getName() + &quot;】&quot;;</span></span>
<span class="line"><span>    for (const auto&amp; item : m_countryMap)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (item.second == country)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        item.second-&gt;setMessage(str);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象国家类</span></span>
<span class="line"><span>class Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Country(MediatorOrg* mediator) : m_mediator(mediator) {}</span></span>
<span class="line"><span>    // 发表声明</span></span>
<span class="line"><span>    virtual void declare(string msg, string country) = 0;</span></span>
<span class="line"><span>    virtual void setMessage(string msg) = 0;</span></span>
<span class="line"><span>    virtual string getName() = 0;</span></span>
<span class="line"><span>    virtual ~Country() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    MediatorOrg* m_mediator = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &lt;string&gt;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &quot;Mediator.h&quot;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象国家类</span></span>
<span class="line"><span>class Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Country(MediatorOrg* mediator) : m_mediator(mediator) {}</span></span>
<span class="line"><span>    // 发表声明</span></span>
<span class="line"><span>    virtual void declare(string msg, string country) = 0;</span></span>
<span class="line"><span>    virtual void setMessage(string msg) = 0;</span></span>
<span class="line"><span>    virtual string getName() = 0;</span></span>
<span class="line"><span>    virtual ~Country() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    MediatorOrg* m_mediator = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 阿拉巴斯坦</span></span>
<span class="line"><span>class Alabasta : public Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using Country::Country;</span></span>
<span class="line"><span>    void declare(string msg, string country) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_mediator-&gt;declare(msg, this, country);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setMessage(string msg) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;阿拉巴斯坦得到的消息: &quot; &lt;&lt; msg &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    string getName() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return &quot;阿拉巴斯坦&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 德雷斯罗萨</span></span>
<span class="line"><span>class Dressrosa : public Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using Country::Country;</span></span>
<span class="line"><span>    void declare(string msg, string country) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_mediator-&gt;declare(msg, this, country);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setMessage(string msg) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;德雷斯罗萨得到的消息: &quot; &lt;&lt; msg &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    string getName() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return &quot;德雷斯罗萨&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 露露西亚王国</span></span>
<span class="line"><span>class Lulusia : public Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using Country::Country;</span></span>
<span class="line"><span>    void declare(string msg, string country) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_mediator-&gt;declare(msg, this, country);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setMessage(string msg) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;露露西亚得到的消息: &quot; &lt;&lt; msg &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    string getName() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return &quot;露露西亚&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 卡玛巴卡王国</span></span>
<span class="line"><span>class Kamabaka : public Country</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using Country::Country;</span></span>
<span class="line"><span>    void declare(string msg, string country) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_mediator-&gt;declare(msg, this, country);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setMessage(string msg) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;卡玛巴卡得到的消息: &quot; &lt;&lt; msg &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    string getName() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return &quot;卡玛巴卡&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 世界政府</span></span>
<span class="line"><span>    WorldGovt* world = new WorldGovt;</span></span>
<span class="line"><span>    Alabasta* alaba = new Alabasta(world);</span></span>
<span class="line"><span>    Dressrosa* dresa = new Dressrosa(world);</span></span>
<span class="line"><span>    // 世界政府添加成员</span></span>
<span class="line"><span>    world-&gt;addMember(alaba);</span></span>
<span class="line"><span>    world-&gt;addMember(dresa);</span></span>
<span class="line"><span>    // 世界政府成员发声</span></span>
<span class="line"><span>    alaba-&gt;declare(&quot;德雷斯罗萨倒卖军火, 搞得我国连年打仗, 必须给个说法!!!&quot;, dresa-&gt;getName());</span></span>
<span class="line"><span>    dresa-&gt;declare(&quot;天龙人都和我多弗朗明哥做生意, 你算老几, 呸!!!&quot;, alaba-&gt;getName());</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;======================================&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    // 革命军</span></span>
<span class="line"><span>    GeMingArmy* geming = new GeMingArmy;</span></span>
<span class="line"><span>    Lulusia* lulu = new Lulusia(geming);</span></span>
<span class="line"><span>    Kamabaka* kama = new Kamabaka(geming);</span></span>
<span class="line"><span>    geming-&gt;addMember(lulu);</span></span>
<span class="line"><span>    geming-&gt;addMember(kama);</span></span>
<span class="line"><span>    lulu-&gt;declare(&quot;我草, 我的国家被伊姆毁灭了!!!&quot;, lulu-&gt;getName());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    delete world;</span></span>
<span class="line"><span>    delete alaba;</span></span>
<span class="line"><span>    delete dresa;</span></span>
<span class="line"><span>    delete geming;</span></span>
<span class="line"><span>    delete lulu;</span></span>
<span class="line"><span>    delete kama;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>当一些对象和其他对象紧密耦合以致难以对其进行修改时；当组件因过于依赖其他组件而无法在不同应用中复用时；当为了能在不同情景下复用一些基本行为，导致需要被迫创建大量组件子类时，都可使用中介者模式。</p><h1 id="备忘录模式" tabindex="-1"><a class="header-anchor" href="#备忘录模式"><span>备忘录模式</span></a></h1><p>在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样以后在需要的时候就可以将该对象恢复到原先保存的状态。</p><p>历史的进程有一定的脉络，作为程序猿的我们可以把历史拆分为这么几个部分：</p><ol><li>历史中的亲历者（个人或群体）</li><li>历史中发生的事情的来龙去脉</li><li>记录历史的人 这三部分数据也是备忘录模式中的三要素：事件的主体、事件的内容、事件的记录者。在事件主体上发生的事情就是事件的内容，事件的内容通过事件记录者进行备份。很显然，在备忘录模式中将事件的主体和事件的内容进行解耦合更有利于程序的扩展和维护。根据上面的描述，我们就可以把这三者之间的对应关系通过UML类图描述出来了： ![[Pasted image 20240505103359.png]]</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;map&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 备忘录模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 历史备忘录类</span></span>
<span class="line"><span>class History {</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  string msg;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  History(string msg) : msg(msg) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  string getMsg() { return msg; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 事件亲历者</span></span>
<span class="line"><span>class Person {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  History* saveHistory(string msg) { return new History(msg); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void showHistory(History* history) {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;历史事件：&quot; &lt;&lt; history-&gt;getMsg() &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 记录者</span></span>
<span class="line"><span>class Recorder {</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  map&lt;int, History*&gt; historyMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void addHistory(int id, History* history) {</span></span>
<span class="line"><span>    historyMap.insert(pair&lt;int, History*&gt;(id, history));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  History* getHistory(int id) { return historyMap[id]; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  Person person;</span></span>
<span class="line"><span>  Recorder recorder;</span></span>
<span class="line"><span>  for (int i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>    History* history = person.saveHistory(&quot;事件&quot; + to_string(i));</span></span>
<span class="line"><span>    recorder.addHistory(i, history);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  for (int i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>    History* history = recorder.getHistory(i);</span></span>
<span class="line"><span>    person.showHistory(history);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式"><span>观察者模式</span></a></h1><p>观察者模式允许我们定义一种订阅机制，可在对象事件发生时通知所有的观察者对象，使它们能够自动更新。观察者模式还有另外一个名字叫做“发布-订阅”模式。 ![[Pasted image 20240505111040.png]]</p><div class="language-newsagency.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="newsagency.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;list&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 观察者模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Subject;</span></span>
<span class="line"><span>// 抽象观察者</span></span>
<span class="line"><span>class Observer {</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>  list&lt;Subject*&gt; subjects;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  // 添加订阅者</span></span>
<span class="line"><span>  void addSubject(Subject* subject){</span></span>
<span class="line"><span>    subjects.emplace_back(subject);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 取消订阅者</span></span>
<span class="line"><span>  void removeSubject(Subject* subject){</span></span>
<span class="line"><span>    subjects.remove(subject);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 通知订阅者</span></span>
<span class="line"><span>  virtual void update(string msg) = 0;</span></span>
<span class="line"><span>  virtual ~Observer() = default;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 订阅者</span></span>
<span class="line"><span>class Subject {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  Subject(Observer* observer){</span></span>
<span class="line"><span>    observer-&gt;addSubject(this);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  virtual void revMsg(string msg)=0;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新闻社</span></span>
<span class="line"><span>class NewsAgency : public Observer {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void update(string msg) override {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;新闻社有&quot; &lt;&lt; subjects.size() &lt;&lt; &quot;人订阅&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    for (const auto&amp; subject : subjects) {</span></span>
<span class="line"><span>      subject-&gt;revMsg(msg);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 订阅者</span></span>
<span class="line"><span>class Subscriber : public Subject {</span></span>
<span class="line"><span>  using Subject::Subject;</span></span>
<span class="line"><span>  void revMsg(string msg) override {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;订阅者收到消息：&quot; &lt;&lt; msg &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  NewsAgency newsAgency;</span></span>
<span class="line"><span>  Subscriber subscriber1(&amp;newsAgency);</span></span>
<span class="line"><span>  Subscriber subscriber2(&amp;newsAgency);</span></span>
<span class="line"><span>  Subscriber subscriber3(&amp;newsAgency);</span></span>
<span class="line"><span>  newsAgency.update(&quot;新闻1&quot;);</span></span>
<span class="line"><span>  newsAgency.update(&quot;新闻2&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>当一个对象的状态发生变化，并且需要改变其它对象的时候；或者当应用中一些对象必须观察其它对象的时候可以使用观察者模式。</p><h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式"><span>策略模式</span></a></h1><p>策略模式需要我们定义一系列的算法，并且将每种算法都放入到独立的类中，在实际操作的时候使这些算法对象可以相互替换。 把处理逻辑分散到多个不同的策略类中，这样就可以将复杂的逻辑简化了。 ![[Pasted image 20240505122914.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 抽象的策略类</span></span>
<span class="line"><span>class AbstractStrategy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    virtual void fight(bool isfar = false) = 0;</span></span>
<span class="line"><span>    virtual ~AbstractStrategy() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一档</span></span>
<span class="line"><span>class YiDang : public AbstractStrategy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void fight(bool isfar = false) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;*** 现在使用的是一档: &quot;;</span></span>
<span class="line"><span>        if (isfar)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶机关枪&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶·攻城炮&quot; &lt;&lt;endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 二挡</span></span>
<span class="line"><span>class ErDang : public AbstractStrategy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void fight(bool isfar = false) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;*** 切换成二挡: &quot;;</span></span>
<span class="line"><span>        if (isfar)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶Jet火箭&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶Jet·铳乱打&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 三挡</span></span>
<span class="line"><span>class SanDang : public AbstractStrategy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void fight(bool isfar = false) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;*** 切换成三挡: &quot;;</span></span>
<span class="line"><span>        if (isfar)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶巨人回旋弹&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶巨人战斧&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 四挡</span></span>
<span class="line"><span>class SiDang : public AbstractStrategy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void fight(bool isfar = false) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;*** 切换成四挡: &quot;;</span></span>
<span class="line"><span>        if (isfar)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶狮子火箭炮&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;橡胶犀牛榴弹炮&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 五档</span></span>
<span class="line"><span>class WuDang : public AbstractStrategy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void fight(bool isfar = false) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;*** 切换成五挡: 变成尼卡形态可以把物体变成橡胶, 并任意改变物体的形态对其进行攻击!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 难度级别</span></span>
<span class="line"><span>enum class Level:char {Easy, Normal, Hard, Experts, Professional};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路飞</span></span>
<span class="line"><span>class Luffy</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void fight(Level level, bool isfar = false)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (m_strategy)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            delete m_strategy;</span></span>
<span class="line"><span>            m_strategy = nullptr;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        switch (level)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>        case Level::Easy:</span></span>
<span class="line"><span>            m_strategy = new YiDang;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case Level::Normal:</span></span>
<span class="line"><span>            m_strategy = new ErDang;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case Level::Hard:</span></span>
<span class="line"><span>            m_strategy = new SanDang;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case Level::Experts:</span></span>
<span class="line"><span>            m_strategy = new SiDang;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case Level::Professional:</span></span>
<span class="line"><span>            m_strategy = new WuDang;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        m_strategy-&gt;fight(isfar);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ~Luffy()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        delete m_strategy;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    AbstractStrategy* m_strategy = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Luffy* luffy = new Luffy;</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;--- 在香波地群岛遇到了海军士兵: &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    luffy-&gt;fight(Level::Easy);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;--- 在魔谷镇遇到了贝拉米: &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    luffy-&gt;fight(Level::Normal);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;--- 在司法岛遇到了罗布·路奇: &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    luffy-&gt;fight(Level::Hard);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;--- 在德雷斯罗萨遇到了多弗朗明哥: &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    luffy-&gt;fight(Level::Experts);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;--- 在鬼岛遇到了凯多: &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    luffy-&gt;fight(Level::Professional);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    delete luffy;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>策略模式中的若干个策略对象相互之间是完全独立的， 它们不知道其他对象的存在。当我们想使用对象中各种不同的算法变体，并希望能够在运行的时候切换这些算法时，可以选择使用策略模式来处理这个问题。</p><h1 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式"><span>状态模式</span></a></h1><p>状态模式就是在一个类的内部会有多种状态的变化，因为状态变化从而导致其行为的改变，在类的外部看上去这个类就像是自身发生了改变一样。 状态模式和策略模式比较类似，策略模式中的各个策略是独立的不关联的，但是状态模式下的对象的各种状态可以是独立的也可以是相![[Pasted image 20240505125349.png]]互依赖的，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// State.h</span></span>
<span class="line"><span>// 抽象状态</span></span>
<span class="line"><span>class Sanji;</span></span>
<span class="line"><span>class AbstractState</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    virtual void working(Sanji* sanji) = 0;</span></span>
<span class="line"><span>    virtual ~AbstractState() {}</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-state.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="state.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 上午状态</span></span>
<span class="line"><span>class ForenoonState : public AbstractState</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void working(Sanji* sanji) override;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 中午状态</span></span>
<span class="line"><span>class NoonState : public AbstractState</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void working(Sanji* sanji) override;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 下午状态</span></span>
<span class="line"><span>class AfternoonState : public AbstractState</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void working(Sanji* sanji) override;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 晚上状态</span></span>
<span class="line"><span>class EveningState : public AbstractState</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void working(Sanji* sanji) override;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-state.cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="state.cpp" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &quot;State.h&quot;</span></span>
<span class="line"><span>#include &quot;Sanji.h&quot;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ForenoonState::working(Sanji* sanji)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int time = sanji-&gt;getClock();</span></span>
<span class="line"><span>    if (time &lt; 8)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 准备早餐, 布鲁克得多喝点牛奶...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if (time &gt; 8 &amp;&amp; time &lt; 11)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 去船头钓鱼, 储备食材...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        sanji-&gt;setState(new NoonState);</span></span>
<span class="line"><span>        sanji-&gt;working();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void NoonState::working(Sanji* sanji)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int time = sanji-&gt;getClock();</span></span>
<span class="line"><span>    if (time &lt; 13)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 去厨房做午饭, 给路飞多做点肉...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        sanji-&gt;setState(new AfternoonState);</span></span>
<span class="line"><span>        sanji-&gt;working();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void AfternoonState::working(Sanji* sanji)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int time = sanji-&gt;getClock();</span></span>
<span class="line"><span>    if (time &lt; 15)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 准备下午茶, 给罗宾和娜美制作爱心甜点...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if (time &gt; 15 &amp;&amp; time &lt; 18)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 和乔巴去船尾钓鱼, 储备食材...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        sanji-&gt;setState(new EveningState);</span></span>
<span class="line"><span>        sanji-&gt;working();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void EveningState::working(Sanji* sanji)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int time = sanji-&gt;getClock();</span></span>
<span class="line"><span>    if (time &lt; 19)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 去厨房做晚饭, 让索隆多喝点汤...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;当前时间&lt;&quot; &lt;&lt; time &lt;&lt; &quot;&gt;点, 今天过得很高兴, 累了睡觉了...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>状态模式下各个模式之间是可以有依赖关系的，这一点和策略模式是有区别的，策略模式下各个策略都是独立的，当前策略不知道有其它策略的存在。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// Sanji.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &quot;State.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Sanji</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Sanji()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_state = new ForenoonState;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void working()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_state-&gt;working(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setState(AbstractState* state)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (m_state != nullptr)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            delete m_state;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        m_state = state;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void setClock(int time)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_clock = time;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int getClock()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_clock;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ~Sanji()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        delete m_state;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_clock = 0;    // 时钟</span></span>
<span class="line"><span>    AbstractState* m_state = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Sanji* sanji = new Sanji;</span></span>
<span class="line"><span>    // 时间点</span></span>
<span class="line"><span>    vector&lt;int&gt; data{7, 10, 12, 14, 16, 18, 22};</span></span>
<span class="line"><span>    for (const auto&amp; item : data)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        sanji-&gt;setClock(item);</span></span>
<span class="line"><span>        sanji-&gt;working();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delete sanji;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>如果对象需要根据当前自身状态进行不同的行为， 同时状态的数量非常多且与状态相关的代码会频繁变更或者类对象在改变自身行为时需要使用大量的条件语句时，可使用状态模式。</p><h1 id="模板方法模式" tabindex="-1"><a class="header-anchor" href="#模板方法模式"><span>模板方法模式</span></a></h1><p>模板方法模式就是在基类中定义一个算法的框架，允许子类在不修改结构的情况下重写算法的特定步骤。说的再直白一些就是先定义一个基类，在基类中把与需求相关的所有操作函数全部作为虚函数定义出来，然后在这个基类的各个子类中重写父类的虚函数，这样子类基于父类的架构使自己有了和其他兄弟类不一样的行为。 模板方法这种设计模式是对多态的典型应![[Pasted image 20240505130934.png]]用。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 抽象机器人类</span></span>
<span class="line"><span>class AbstractRobot</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // 武器</span></span>
<span class="line"><span>    virtual void weapon() = 0;</span></span>
<span class="line"><span>    // 外观</span></span>
<span class="line"><span>    virtual void appearance() = 0;</span></span>
<span class="line"><span>    // 战斗能力</span></span>
<span class="line"><span>    virtual void fightAbility() = 0;</span></span>
<span class="line"><span>    // 名字</span></span>
<span class="line"><span>    virtual string getName() = 0;</span></span>
<span class="line"><span>    // 自愈能力</span></span>
<span class="line"><span>    virtual void selfHealing() {};</span></span>
<span class="line"><span>    // 是否能飞</span></span>
<span class="line"><span>    virtual bool canFlying()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 是否是自动控制</span></span>
<span class="line"><span>    virtual bool isAuto()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 得到机器人属性</span></span>
<span class="line"><span>    virtual void getProperty()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;贝加庞克制造的&quot; &lt;&lt; getName() &lt;&lt; &quot;有以下属性: &quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        if (canFlying())</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;有飞行能力!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;没有飞行能力!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (isAuto())</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;可以自动控制, 完全体机器人!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;不能自动控制, 半自动机器人!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        weapon();</span></span>
<span class="line"><span>        appearance();</span></span>
<span class="line"><span>        fightAbility();</span></span>
<span class="line"><span>        selfHealing();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 和平主义者</span></span>
<span class="line"><span>class Pacifist : public AbstractRobot</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // 武器</span></span>
<span class="line"><span>    void weapon() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;可以发射镭射光...&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 外观</span></span>
<span class="line"><span>    void appearance() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;外部和巴索罗米·熊一样, 体型庞大，拥有呈半圆形的耳朵，内部似乎金属。&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 能力</span></span>
<span class="line"><span>    void fightAbility() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;结实抗揍, 可以通过手部或者嘴部发射镭射激光, 可以融化钢铁!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    string getName() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return &quot;和平主义者&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 炽天使</span></span>
<span class="line"><span>class Seraphim : public AbstractRobot</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // 武器</span></span>
<span class="line"><span>    void weapon() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;可以发射镭射激光, 鹰眼外形的炽天使携带者一把巨剑, 可以斩断一切!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 外观</span></span>
<span class="line"><span>    void appearance() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;外观和七武海小时候的外形一样, 并且拥有一对和烬一样的翅膀!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 能力</span></span>
<span class="line"><span>    void fightAbility() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;不仅可以发射镭射激光, 还拥有七武海的能力, 牛逼plus, 无敌了!!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 自愈能力</span></span>
<span class="line"><span>    void selfHealing() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;非常厚实抗揍, 并且拥有非常强的自愈能力, 开挂了!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 是否能飞</span></span>
<span class="line"><span>    bool canFlying() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    string getName() override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return &quot;炽天使&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    AbstractRobot* robot = nullptr;</span></span>
<span class="line"><span>    robot = new Pacifist;</span></span>
<span class="line"><span>    robot-&gt;getProperty();</span></span>
<span class="line"><span>    delete robot;</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;====================================&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    robot = new Seraphim; </span></span>
<span class="line"><span>    robot-&gt;getProperty();</span></span>
<span class="line"><span>    delete robot;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>我们在实现子类的时候，如果发现不变的行为和可变的行为混合在了一起，导致不变的行为在多个子类中重复出现，此时就可以使用模板方法模式把不变的行为搬到基类中，去除子类里边的重复代码，来体现它的优势，模板方法模式就是提供了一个很好的代码复用平台。</p><h1 id="访问者模式" tabindex="-1"><a class="header-anchor" href="#访问者模式"><span>访问者模式</span></a></h1><p>草帽团面对大熊的突如其来的攻击就两个状态：愤怒和恐惧，在这两种状态下的反应就是战斗和求助。所以我们可以把上面的这个场景重构一下：</p><p>如果草帽团的某些成员在面对大熊攻击时的状态反应是一样的，那么在这些子类中就会出现很多相同的冗余代码。有一种更好的处理思路就是将状态和人分开，其中草帽团的各个成员我们可以看做是对象，草帽团成员的反应和状态我们可以将其看做是算法，这种将算法与其所作用的对象隔离开来的设计模式就叫做访问者模式，其实就是通过被分离出的算法来访问对应的对象。 ![[Pasted image 20240505133737.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 抽象的成员类</span></span>
<span class="line"><span>class AbstractMember</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    AbstractMember(string name) : m_name(name){}</span></span>
<span class="line"><span>    string getName()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 接受状态对象的访问</span></span>
<span class="line"><span>    virtual void accept(行为/动作类* action) = 0;</span></span>
<span class="line"><span>    virtual ~AbstractMember() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    string m_name;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 男性成员</span></span>
<span class="line"><span>class MaleMember : public AbstractMember</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    AbstractMember::AbstractMember;</span></span>
<span class="line"><span>    void accept(行为/动作* action) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // do something</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 女性成员</span></span>
<span class="line"><span>class FemaleMember : public AbstractMember</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    AbstractMember::AbstractMember;</span></span>
<span class="line"><span>    void accept(行为/动作* action) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // do something</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-visitor.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="visitor.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类声明</span></span>
<span class="line"><span>class MaleMember;</span></span>
<span class="line"><span>class FemaleMember;</span></span>
<span class="line"><span>// 抽象的动作类</span></span>
<span class="line"><span>class AbstractAction</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // 访问男人</span></span>
<span class="line"><span>    virtual void maleDoing(MaleMember* male) = 0;</span></span>
<span class="line"><span>    // 访问女人</span></span>
<span class="line"><span>    virtual void femalDoing(FemaleMember* female) = 0;</span></span>
<span class="line"><span>    virtual ~AbstractAction() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 愤怒</span></span>
<span class="line"><span>class Anger : public AbstractAction</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void maleDoing(MaleMember* male) override;</span></span>
<span class="line"><span>    void femalDoing(FemaleMember* female) override;</span></span>
<span class="line"><span>    void warning();</span></span>
<span class="line"><span>    void fight();</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 恐惧</span></span>
<span class="line"><span>class Horror : public AbstractAction</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    void maleDoing(MaleMember* male) override;</span></span>
<span class="line"><span>    void femalDoing(FemaleMember* female) override;</span></span>
<span class="line"><span>    void help();</span></span>
<span class="line"><span>    void thinking();</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-visitor.cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="visitor.cpp" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &quot;Visitor.h&quot;</span></span>
<span class="line"><span>#include &quot;Member.h&quot;</span></span>
<span class="line"><span>#include &lt;list&gt;</span></span>
<span class="line"><span>#include &lt;vector&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Anger::maleDoing(MaleMember* male)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;我是草帽海贼团的&quot; &lt;&lt; male-&gt;getName() &lt;&lt; endl;</span></span>
<span class="line"><span>    fight();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Anger::femalDoing(FemaleMember* female)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;我是草帽海贼团的&quot; &lt;&lt; female-&gt;getName() &lt;&lt; endl;</span></span>
<span class="line"><span>    warning();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Anger::warning()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;大家块逃，我快顶不住了, 不要管我!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Anger::fight()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;只要还活着就得跟这家伙血战到底!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Horror::maleDoing(MaleMember* male)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;我是草帽海贼团的&quot; &lt;&lt; male-&gt;getName() &lt;&lt; endl;</span></span>
<span class="line"><span>    thinking();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Horror::femalDoing(FemaleMember* female)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;我是草帽海贼团的&quot; &lt;&lt; female-&gt;getName() &lt;&lt; endl;</span></span>
<span class="line"><span>    help();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Horror::help()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;这个大熊太厉害, 太可怕了, 快救救我。。。&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Horror::thinking()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;得辅助同伴们一块攻击这个家伙, 不然根本打不过呀!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Visitor.cpp</span></span>
<span class="line"><span>// 草帽团</span></span>
<span class="line"><span>class CaoMaoTeam</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    CaoMaoTeam()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_actions.push_back(new Anger);</span></span>
<span class="line"><span>        m_actions.push_back(new Horror);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void add(AbstractMember* member)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_members.push_back(member);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void remove(AbstractMember* member)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_members.remove(member);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void display()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        for (const auto&amp; item : m_members)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            int index = rand() % 2;</span></span>
<span class="line"><span>            item-&gt;accept(m_actions[index]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ~CaoMaoTeam()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        for (const auto&amp; item : m_members)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            delete item;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for (const auto&amp; item : m_actions)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            delete item;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    list&lt;AbstractMember*&gt; m_members;</span></span>
<span class="line"><span>    vector&lt;AbstractAction*&gt; m_actions;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-member.h line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="member.h" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &quot;Visitor.h&quot;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>// 抽象的成员类</span></span>
<span class="line"><span>class AbstractMember</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    AbstractMember(string name) :m_name(name){}</span></span>
<span class="line"><span>    string getName()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        return m_name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 接受状态对象的访问</span></span>
<span class="line"><span>    virtual void accept(AbstractAction* action) = 0;</span></span>
<span class="line"><span>    virtual ~AbstractMember() {}</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    string m_name;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 男性成员</span></span>
<span class="line"><span>class MaleMember : public AbstractMember</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    AbstractMember::AbstractMember;</span></span>
<span class="line"><span>    void accept(AbstractAction* action) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        action-&gt;maleDoing(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 女性成员</span></span>
<span class="line"><span>class FemaleMember : public AbstractMember</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    AbstractMember::AbstractMember;</span></span>
<span class="line"><span>    void accept(AbstractAction* action) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        action-&gt;femalDoing(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    srand(time(NULL));</span></span>
<span class="line"><span>    vector&lt;string&gt; names{</span></span>
<span class="line"><span>        &quot;路飞&quot;, &quot;索隆&quot;,&quot;山治&quot;, &quot;乔巴&quot;, &quot;弗兰奇&quot;, &quot;乌索普&quot;, &quot;布鲁克&quot;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    CaoMaoTeam* caomao = new CaoMaoTeam;</span></span>
<span class="line"><span>    for (const auto&amp; item : names)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        caomao-&gt;add(new MaleMember(item));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    caomao-&gt;add(new FemaleMember(&quot;娜美&quot;));</span></span>
<span class="line"><span>    caomao-&gt;add(new FemaleMember(&quot;罗宾&quot;));</span></span>
<span class="line"><span>    caomao-&gt;display();</span></span>
<span class="line"><span>    delete caomao;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>访问者模式适用于数据结构比较稳定的系统，对于上面的例子而言就是指草帽团成员：只有男性和女性（不会再出现其它性别）。在剥离出的行为状态类中针对男性和女性提供了相对应的 doing 方法。这种模式的优势就是可以方便的给对象添加新的状态和处理动作，也就是添加新的 AbstractAction 子类（算法类），在需要的时候让这个子类去访问某个成员对象，访问者模式的最大优势就是使算法的增加变得更加容易维护。</p><p>如果不按照性别进行划分，草帽团一共9个成员就需要在行为状态类中给每个成员提供一个 doing 方法，当草帽团又添加了新的成员，状态类中也需要给新成员再添加一个对应的 doing 方法，这就破坏了设计模式的开放 – 封闭原则。</p>`,65)]))}const v=n(e,[["render",p]]),r=JSON.parse('{"path":"/base/dp/4/","title":"4、行为型模式","lang":"zh-CN","frontmatter":{"title":"4、行为型模式","createTime":"2025/06/22 16:17:10","permalink":"/base/dp/4/"},"readingTime":{"minutes":25.2,"words":7560},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/设计模式/4、行为型模式.md","headers":[]}');export{v as comp,r as data};
