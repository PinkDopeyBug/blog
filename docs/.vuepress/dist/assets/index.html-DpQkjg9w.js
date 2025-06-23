import{_ as n,c as a,a as i,o as l}from"./app-CEcM0piI.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<p>定义出的实例对象有且只能有一个</p><p>对类的构造进行限制只需要对默认构造和拷贝构造做限制，这两个构造函数能够创建出新的实例（移动构造不会创建新的实例，只会对资源进行转移） ![[Pasted image 20240505135204.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 单例模式-饿汉</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class SingletonHungry {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  // 删除拷贝构造</span></span>
<span class="line"><span>  SingletonHungry(const SingletonHungry&amp; obj) = delete;</span></span>
<span class="line"><span>  // 删除赋值构造</span></span>
<span class="line"><span>  SingletonHungry&amp; operator=(const SingletonHungry&amp; obj) = delete;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void test(){</span></span>
<span class="line"><span>    cout &lt;&lt; this &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  static SingletonHungry* getInstance() {</span></span>
<span class="line"><span>    return m_sh;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ~SingletonHungry() {</span></span>
<span class="line"><span>    delete m_sh;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  SingletonHungry() = default;</span></span>
<span class="line"><span>  static SingletonHungry* m_sh;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//静态成员的初始化需要在类的外部进行</span></span>
<span class="line"><span>SingletonHungry* SingletonHungry::m_sh = new SingletonHungry();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  SingletonHungry* sh1 = SingletonHungry::getInstance();</span></span>
<span class="line"><span>  SingletonHungry* sh2 = SingletonHungry::getInstance();</span></span>
<span class="line"><span>  sh1-&gt;show();</span></span>
<span class="line"><span>  sh2-&gt;show();</span></span>
<span class="line"><span>  cout &lt;&lt; (sh1 == sh2) &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>default没有对函数进行修改，不过把函数声明写到哪个保护权限内就将其访问权限修改了 若要进行限制就需要把拷贝构造，拷贝赋值函数使用delete显式删除（也可以使用default设置为默认的但需要把这些函数写在private保护权限中进行限制），不删除默认构造是因为默认构造函数只能把它放在private保护权限内使用default修改，如果使用delete删除就再也无无法创建类的实例了（下面的初始化静态对象要使用）</p><p>这样对类进行限制后这个类就无法再构造出实例化对象了，若想要唯一的实例化对象需要在类内创建一个本类的静态成员，且也只能使用类名访问静态属性或方法。如果要对这个修改过的类使用方法也只能使用静态方法 需要在公共权限内设置一个成员函数讲静态成员对象返回给单例对象的使用者</p><p><strong>单例模式也分为饿汉模式和懒汉模式</strong></p><ul><li>饿汉模式：定义类的时候就创建出了单例对象本例就属于饿汉模式</li><li>懒汉模式：什么时候使用这个单例对象就什么时候创建这个类的单例实例，在把静态成员指针指向空指针。当使用getInstance函数是就代表使用了这个类的实例，因此在懒汉模式需要把静态成员指针指向空，在getInstance里面创建实例并返回</li></ul><p>懒汉模式更加节省内存，但在多线程的场景下是有线程安全问题的。所谓线程安全就是多线程可以同时访问这个单例的对象。在多线程下每个线程访问这个类都要创建一个实例。可以加一个互斥锁，让多个线程阻塞，让多个线程依次访问这个单例对象，它就可以避免懒汉模式下多个线程同时访问单例对象创建出多个类的实例的问题。（但一个一个访问也会影响效率）</p><h3 id="饿汉模式" tabindex="-1"><a class="header-anchor" href="#饿汉模式"><span>饿汉模式</span></a></h3><h4 id="可以使用双重检查锁定解决线程安全问题" tabindex="-1"><a class="header-anchor" href="#可以使用双重检查锁定解决线程安全问题"><span>可以使用双重检查锁定解决线程安全问题</span></a></h4><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 单例模式-懒汉</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class SingletonLazy {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  SingletonLazy(const SingletonLazy&amp; obj) = delete;</span></span>
<span class="line"><span>  SingletonLazy&amp; operator=(const SingletonLazy&amp; obj) = delete;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void show() { cout &lt;&lt; this &lt;&lt; endl; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  static SingletonLazy* getInstance() {</span></span>
<span class="line"><span>    if (m_sl == nullptr) {</span></span>
<span class="line"><span>      m_mutex.lock();</span></span>
<span class="line"><span>      if (m_sl == nullptr) {</span></span>
<span class="line"><span>        m_sl = new SingletonLazy();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      m_mutex.unlock();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return m_sl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  SingletonLazy() = default;</span></span>
<span class="line"><span>  static SingletonLazy* m_sl;</span></span>
<span class="line"><span>  static mutex m_mutex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>SingletonLazy* SingletonLazy::m_sl = nullptr;</span></span>
<span class="line"><span>mutex SingletonLazy::m_mutex = mutex();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test() {</span></span>
<span class="line"><span>  SingletonLazy* sl1 = SingletonLazy::getInstance();</span></span>
<span class="line"><span>  SingletonLazy* sl2 = SingletonLazy::getInstance();</span></span>
<span class="line"><span>  sl1-&gt;show();</span></span>
<span class="line"><span>  sl2-&gt;show();</span></span>
<span class="line"><span>  cout &lt;&lt; (sl1 == sl2) &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>双重检查锁定的问题 假设有两个线程A、B，当线程A 执行到第 8 行时在线程A中 TaskQueue 实例对象 被创建，并赋值给 m_taskQ。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>static TaskQueue* getInstance()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (m_taskQ == nullptr)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        m_mutex.lock();</span></span>
<span class="line"><span>        if (m_taskQ == nullptr)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            m_taskQ = new TaskQueue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        m_mutex.unlock();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return m_taskQ;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是实际上 m_taskQ = new TaskQueue; 在执行过程中对应的机器指令可能会被重新排序。正常过程如下：</p><p>第一步：分配内存用于保存 TaskQueue 对象。</p><p>第二步：在分配的内存中构造一个 TaskQueue 对象（初始化内存）。</p><p>第三步：使用 m_taskQ 指针指向分配的内存。</p><p>但是被重新排序以后执行顺序可能会变成这样：</p><p>第一步：分配内存用于保存 TaskQueue 对象。</p><p>第二步：使用 m_taskQ 指针指向分配的内存。</p><p>第三步：在分配的内存中构造一个 TaskQueue 对象（初始化内存）。</p><p>这样重排序并不影响单线程的执行结果，但是在多线程中就会出问题。如果线程A按照第二种顺序执行机器指令，执行完前两步之后失去CPU时间片被挂起了，此时线程B在第3行处进行指针判断的时候m_taskQ 指针是不为空的，但这个指针指向的内存却没有被初始化，最后线程 B 使用了一个没有被初始化的队列对象就出问题了（出现这种情况是概率问题，需要反复的大量测试问题才可能会出现）。</p><h4 id="使用原子变量解决双重检查锁定的问题" tabindex="-1"><a class="header-anchor" href="#使用原子变量解决双重检查锁定的问题"><span>使用原子变量解决双重检查锁定的问题</span></a></h4><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class TaskQueue</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // = delete 代表函数禁用, 也可以将其访问权限设置为私有</span></span>
<span class="line"><span>    TaskQueue(const TaskQueue&amp; obj) = delete;</span></span>
<span class="line"><span>    TaskQueue&amp; operator=(const TaskQueue&amp; obj) = delete;</span></span>
<span class="line"><span>    static TaskQueue* getInstance()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        TaskQueue* queue = m_taskQ.load();  </span></span>
<span class="line"><span>        if (queue == nullptr)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            // m_mutex.lock();</span><span>  // 加锁: 方式1</span></span>
<span class="line"><span>            lock_guard&lt;mutex&gt; locker(m_mutex);  // 加锁: 方式2</span></span>
<span class="line"><span>            queue = m_taskQ.load();</span></span>
<span class="line"><span>            if (queue == nullptr)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                queue = new TaskQueue;</span></span>
<span class="line"><span>                m_taskQ.store(queue);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            // m_mutex.unlock();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return queue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void print()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;hello, world!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    TaskQueue() = default;</span></span>
<span class="line"><span>    static atomic&lt;TaskQueue*&gt; m_taskQ;</span></span>
<span class="line"><span>    static mutex m_mutex;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>atomic&lt;TaskQueue*&gt; TaskQueue::m_taskQ;</span></span>
<span class="line"><span>mutex TaskQueue::m_mutex;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    TaskQueue* queue = TaskQueue::getInstance();</span></span>
<span class="line"><span>    queue-&gt;print();</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="可以使用局部静态对象解决线程安全问题" tabindex="-1"><a class="header-anchor" href="#可以使用局部静态对象解决线程安全问题"><span>可以使用局部静态对象解决线程安全问题</span></a></h4><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class TaskQueue</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // = delete 代表函数禁用, 也可以将其访问权限设置为私有</span></span>
<span class="line"><span>    TaskQueue(const TaskQueue&amp; obj) = delete;</span></span>
<span class="line"><span>    TaskQueue&amp; operator=(const TaskQueue&amp; obj) = delete;</span></span>
<span class="line"><span>    static TaskQueue* getInstance()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        static TaskQueue taskQ;</span></span>
<span class="line"><span>        return &amp;taskQ;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void print()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;hello, world!!!&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    TaskQueue() = default;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    TaskQueue* queue = TaskQueue::getInstance();</span></span>
<span class="line"><span>    queue-&gt;print();</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>懒汉模式的缺点是在创建实例对象的时候有安全问题，但这样可以减少内存的浪费（如果用不到就不去申请内存了）。饿汉模式则相反，在我们不需要这个实例对象的时候，它已经被创建出来，占用了一块内存。对于现在的计算机而言，内存容量都是足够大的，这个缺陷可以被无视。</p><h1 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式"><span>工厂模式</span></a></h1><h1 id="工厂模式-1" tabindex="-1"><a class="header-anchor" href="#工厂模式-1"><span>工厂模式</span></a></h1><p>生产对象的 如果需要频繁地用到一个类，我们就可以给这个对象创造一个工厂类，通过工厂类创造出这个对象，这个类怎么来的里面的细节都不需要我们关心这是封装在工厂类里面的。这样可以简化代码而且更易维护。 工厂类可以生产多种对象，但这些对象之间必须是兄弟关系，也就是他们必须同时继承一个父类。 父类之中的虚函数实际上就是接口，子类继承父类后就可以重写虚函数，这样通过同一个工厂类提供的工厂函数创造出的子类也是不一样的</p><ul><li>在简单工厂模式，工厂类的数量是一个</li><li>在工厂模式，工厂类是n个</li><li>在抽象工厂模式，工厂类是也是m个，m＞n 适用场景复杂度：抽象工厂模式＞工厂模式＞简单工厂模式</li></ul><h2 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式"><span>简单工厂模式</span></a></h2><p>![[Pasted image 20240421171821.png]]</p><p>在定义的抽象类中应该提供虚析构函数。如果对于这个抽象类产生了继承关系，并且在子类中重写了父类的虚函数（实现多态）即用父类指针或引用指向子类的对象，并且用父类指针调用子类里面重写的父类的方法。这样这个子类对象被保存到了父类指针里面。如果不提供父类的虚析构函数，在delete时释放的是父类对象，但父类对象保存的是子类对象的地址。不能完全析构子类对象（在释放时只会释放父类数据的内存，但子类新增的数据没有被释放）所以要把父类析构函数设置成虚析构。这样针对析构函数实现多态就能通过父类指针在释放内存时就能完全释放子类调用的内存</p><p>如果定义类时只有一个类就没必要设置虚函数和虚析构了，如果添加了，编译器在底层还会给这个类的虚函数提供虚函数表，增加了编译器的负担 如果子类继承父类没有实现多态就没必要提供虚析构 工厂类的制造函数返回值类型应该是父类的指针，当接收制造出来的对象是也是使用父类指针接收，通过父类指针控制</p><p>简单工厂模式的特点就是简单，但它也有缺点，当需要新增新的子类这是没有问题是，但工厂类却需要修改代码，根据不同的的需求知道不同的子类，这样就违反了三原则之一的开放封闭原则（封闭：对于已经开发好得类其内部代码是封闭的，不能再对这个类进行修改了。开放：对已经开发好的类的外部是开放的，可以在当前类的外部添加若干个其他的类，对于添加类的功能和数量是没有限制的）。</p><blockquote><p>[!tip] Title 一般一个函数内部的代码量最好不要超过一百行</p></blockquote><p>对于以后不打算扩展的类适合使用简单工厂模式 对于不知道以后在这个类里面需要创建多少个子类的情况适合使用工厂模式</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 简单工厂模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 抽象恶魔果实类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual void transform() = 0;</span></span>
<span class="line"><span>  virtual void ability() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractSmile() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 山羊恶魔果实</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class SheepSmile : public AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void transform() override { cout &lt;&lt; &quot;变身山羊&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void ability() override { cout &lt;&lt; &quot;变为羊角&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 狮子恶魔果实</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class LionSmile : public AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void transform() override { cout &lt;&lt; &quot;变身狮子&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void ability() override { cout &lt;&lt; &quot;豪火球术&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 蝙蝠恶魔果实</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class BatSmile : public AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void transform() override { cout &lt;&lt; &quot;变身蝙蝠&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void ability() override { cout &lt;&lt; &quot;声纳引箭&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 恶魔果实工厂类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class SmileFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  enum class SmileType : char { Sheep, Lion, Bat };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  AbstractSmile* createSmile(SmileType type) {</span></span>
<span class="line"><span>    AbstractSmile* smile = nullptr;</span></span>
<span class="line"><span>    switch (type) {</span></span>
<span class="line"><span>      case SmileType::Sheep:</span></span>
<span class="line"><span>        smile = new SheepSmile();</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case SmileType::Lion:</span></span>
<span class="line"><span>        smile = new LionSmile();</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case SmileType::Bat:</span></span>
<span class="line"><span>        smile = new BatSmile();</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return smile;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  SmileFactory factory;</span></span>
<span class="line"><span>  AbstractSmile* sheep = factory.createSmile(SmileFactory::SmileType::Lion);</span></span>
<span class="line"><span>  sheep-&gt;transform();</span></span>
<span class="line"><span>  sheep-&gt;ability();</span></span>
<span class="line"><span>  delete sheep;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="工厂模式-2" tabindex="-1"><a class="header-anchor" href="#工厂模式-2"><span>工厂模式</span></a></h2><p>在工厂模式一个工厂类只生产一个子类，简单工厂模式是一对多的关系，工厂模式是一对一的关系。工厂模式也就是对简单工厂模式进行了解耦合，削弱了工厂类的功能 工厂模式需要设置一个抽象类作为父类，因为它将要被继承给多个子类因此也需要虚析构函数</p><p>然后制造不同的子类分别实现对应的工厂类继承自抽象工厂类 也是通过父类指针控制子类行为 ![[Pasted image 20240505135332.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 工厂模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 抽象恶魔果实类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual void transform() = 0;</span></span>
<span class="line"><span>  virtual void ability() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractSmile() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 山羊恶魔果实</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class SheepSmile : public AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void transform() override { cout &lt;&lt; &quot;变身山羊&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void ability() override { cout &lt;&lt; &quot;变为羊角&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 狮子恶魔果实</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class LionSmile : public AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void transform() override { cout &lt;&lt; &quot;变身狮子&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void ability() override { cout &lt;&lt; &quot;豪火球术&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 蝙蝠恶魔果实</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class BatSmile : public AbstractSmile {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void transform() override { cout &lt;&lt; &quot;变身蝙蝠&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>  void ability() override { cout &lt;&lt; &quot;声纳引箭&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 抽象工厂类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual AbstractSmile *createSmile() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractFactory() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 山羊恶魔果实工厂</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class SheepFactory : public AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractSmile *createSmile() override { return new SheepSmile(); }</span></span>
<span class="line"><span>  ~SheepFactory() { cout &lt;&lt; &quot;山羊恶魔果实工厂析构&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 狮子恶魔果实工厂</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class LionFactory : public AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractSmile *createSmile() override { return new LionSmile(); }</span></span>
<span class="line"><span>  ~LionFactory() { cout &lt;&lt; &quot;狮子恶魔果实工厂析构&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 蝙蝠恶魔果实工厂</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class BatFactory : public AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  AbstractSmile *createSmile() override { return new BatSmile(); }</span></span>
<span class="line"><span>  ~BatFactory() { cout &lt;&lt; &quot;蝙蝠恶魔果实工厂析构&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  AbstractFactory* factory=new LionFactory();</span></span>
<span class="line"><span>  AbstractSmile* sheep = factory-&gt;createSmile();</span></span>
<span class="line"><span>  sheep-&gt;transform();</span></span>
<span class="line"><span>  sheep-&gt;ability();</span></span>
<span class="line"><span>  delete sheep;</span></span>
<span class="line"><span>  delete factory;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式"><span>抽象工厂模式</span></a></h2><p>适用于复杂类的生产 将一个整体类分为一个个部分分别设置对应的工厂类进行生产，每个部分的类可视情况使用简单工厂模式或工厂模式 即抽象工厂模式是简单工厂模式或工厂模式（也可能两者都有）的耦合 最后再由主工厂类将这些零部件组合起来 ![[Pasted image 20240505135401.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象工厂模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 船体</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class Body {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual string getBody() = 0;</span></span>
<span class="line"><span>  ~Body() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 木头船体</span></span>
<span class="line"><span>class WoodBody : public Body {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getBody() { return &quot;木头船体&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 钢铁船体</span></span>
<span class="line"><span>class IronBody : public Body {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getBody() { return &quot;钢铁船体&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 合金船体</span></span>
<span class="line"><span>class MetalBody : public Body {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getBody() { return &quot;合金船体&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 引擎</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class Engine {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual string getEngine() = 0;</span></span>
<span class="line"><span>  ~Engine() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 人力</span></span>
<span class="line"><span>class HumanEngine : public Engine {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getEngine() { return &quot;人力引擎&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 蒸汽</span></span>
<span class="line"><span>class SteamEngine : public Engine {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getEngine() { return &quot;蒸汽引擎&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 核能</span></span>
<span class="line"><span>class NuclearEngine : public Engine {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getEngine() { return &quot;核能引擎&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 武器</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class Weapon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual string getWeapon() = 0;</span></span>
<span class="line"><span>  ~Weapon() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 枪</span></span>
<span class="line"><span>class Gun : public Weapon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getWeapon() { return &quot;枪&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 炮</span></span>
<span class="line"><span>class Cannon : public Weapon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getWeapon() { return &quot;炮&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 激光</span></span>
<span class="line"><span>class Laser : public Weapon {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  string getWeapon() { return &quot;激光&quot;; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 船</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class Ship {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  Ship(Body *body, Engine *engine, Weapon *weapon)</span></span>
<span class="line"><span>      : m_body(body), m_engine(engine), m_weapon(weapon) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ~Ship() {</span></span>
<span class="line"><span>    delete m_body;</span></span>
<span class="line"><span>    delete m_engine;</span></span>
<span class="line"><span>    delete m_weapon;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  string getProperty() {</span></span>
<span class="line"><span>    return m_body-&gt;getBody() + &quot; &quot; + m_engine-&gt;getEngine() + &quot; &quot; +</span></span>
<span class="line"><span>           m_weapon-&gt;getWeapon();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  Body *m_body;</span></span>
<span class="line"><span>  Engine *m_engine;</span></span>
<span class="line"><span>  Weapon *m_weapon;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 工厂</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>class AbstractFactory {</span></span>
<span class="line"><span>  public:</span></span>
<span class="line"><span>  virtual Ship *createShip() = 0;</span></span>
<span class="line"><span>  virtual ~AbstractFactory() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基础型</span></span>
<span class="line"><span>class BasicFactory : public AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  Ship *createShip() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;创建基础型船&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    return new Ship(new WoodBody(), new HumanEngine(), new Gun());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 标准型</span></span>
<span class="line"><span>class StandardFactory : public AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  Ship *createShip() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;创建标准型船&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    return new Ship(new IronBody(), new SteamEngine(), new Cannon());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 旗舰型</span></span>
<span class="line"><span>class FlagFactory : public AbstractFactory {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  Ship *createShip() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;创建旗舰型船&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    return new Ship(new MetalBody(), new NuclearEngine(), new Laser());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  AbstractFactory *factory = new FlagFactory();</span></span>
<span class="line"><span>  Ship *ship = factory-&gt;createShip();</span></span>
<span class="line"><span>  cout &lt;&lt; ship-&gt;getProperty() &lt;&lt; endl;</span></span>
<span class="line"><span>  delete ship;</span></span>
<span class="line"><span>  delete factory;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="生成器-建造者-模式" tabindex="-1"><a class="header-anchor" href="#生成器-建造者-模式"><span>生成器（建造者）模式</span></a></h1><p>不管是哪种工厂模式在生产对象的时候都不注重细节 生成器模式就是基于工厂模式改良的，它更专注细节</p><p>如果在生产对象的时候内部有比较复杂的流程，这种情况更适合使用生成器模式</p><p>可以进一步将用于创建产品的一系列生成器步骤调用抽取成为单独的主管类。 主管类可定义创建步骤的执行顺序， 而生成器则提供这些步骤的实现。 程序中并不一定需要主管类。 客户端代码可直接以特定顺序调用创建步骤。 不过， 主管类中非常适合放入各种例行构造流程， 以便在程序中反复使用。 对于客户端代码来说， 主管类完全隐藏了产品构造细节。 客户端只需要将一个生成器与主管类关联， 然后使用主管类来构造产 ![[Pasted image 20240505135530.png]]品， 就能从生成器处获得构造结果了。</p><p>示例：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;map&gt;</span></span>
<span class="line"><span>#include &lt;vector&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成器模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 桑尼号船</span></span>
<span class="line"><span>class SunnyShip {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void addParts(string part) { m_parts.emplace_back(part); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void showParts() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;桑尼号的部件&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    for (const auto&amp; part : m_parts) {</span></span>
<span class="line"><span>      cout &lt;&lt; part &lt;&lt; &quot; &quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  vector&lt;string&gt; m_parts;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 梅丽号船</span></span>
<span class="line"><span>class MerryShip {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void assemble(string name, string parts) { m_parts.insert({name, parts}); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void showParts() {</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;梅丽号的部件&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>    for (const auto&amp; item : m_parts) {</span></span>
<span class="line"><span>      cout &lt;&lt; item.first &lt;&lt; &quot;:&quot; &lt;&lt; item.second &lt;&lt; &quot; &quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    cout &lt;&lt; endl;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  map&lt;string, string&gt; m_parts;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成器</span></span>
<span class="line"><span>class ShipBuilder {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual void reset() = 0;</span></span>
<span class="line"><span>  virtual void buildBody() = 0;</span></span>
<span class="line"><span>  virtual void buildEngine() = 0;</span></span>
<span class="line"><span>  virtual void buildWeapon() = 0;</span></span>
<span class="line"><span>  virtual void buildInterior() = 0;</span></span>
<span class="line"><span>  virtual ~ShipBuilder() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 桑尼号生成器</span></span>
<span class="line"><span>class SunnyBuilder :public ShipBuilder {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  SunnyBuilder() { reset(); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ~SunnyBuilder() {</span></span>
<span class="line"><span>    if (m_ship) delete m_ship;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void reset() override { m_ship = new SunnyShip(); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  SunnyShip* getShip() {</span></span>
<span class="line"><span>    SunnyShip* ship = m_ship;</span></span>
<span class="line"><span>    m_ship = nullptr;</span></span>
<span class="line"><span>    return ship;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void buildBody() override { m_ship-&gt;addParts(&quot;神树亚当&quot;); }</span></span>
<span class="line"><span>  void buildEngine() override { m_ship-&gt;addParts(&quot;狮吼炮&quot;); }</span></span>
<span class="line"><span>  void buildWeapon() override { m_ship-&gt;addParts(&quot;可乐内燃机&quot;); }</span></span>
<span class="line"><span>  void buildInterior() override { m_ship-&gt;addParts(&quot;装修豪华&quot;); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  SunnyShip* m_ship;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 梅丽号生成器</span></span>
<span class="line"><span>class MerryBuilder :public  ShipBuilder {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  MerryBuilder() { reset(); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ~MerryBuilder() {</span></span>
<span class="line"><span>    if (m_ship) delete m_ship;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void reset() override { m_ship = new MerryShip(); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  MerryShip* getShip() {</span></span>
<span class="line"><span>    MerryShip* ship = m_ship;</span></span>
<span class="line"><span>    m_ship = nullptr;</span></span>
<span class="line"><span>    return ship;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void buildBody() override { m_ship-&gt;assemble(&quot;船体&quot;, &quot;神树亚当&quot;); }</span></span>
<span class="line"><span>  void buildEngine() override { m_ship-&gt;assemble(&quot;武器&quot;, &quot;狮吼炮&quot;); }</span></span>
<span class="line"><span>  void buildWeapon() override { m_ship-&gt;assemble(&quot;引擎&quot;, &quot;可乐内燃机&quot;); }</span></span>
<span class="line"><span>  void buildInterior() override { m_ship-&gt;assemble(&quot;内饰&quot;, &quot;装修豪华&quot;); }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  MerryShip* m_ship;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 管理者</span></span>
<span class="line"><span>class Director {</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>  ShipBuilder* m_builder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  void setBuilder(ShipBuilder* builder) { m_builder = builder; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //基础型</span></span>
<span class="line"><span>  void buildSimpleShip() {</span></span>
<span class="line"><span>    m_builder-&gt;buildBody();</span></span>
<span class="line"><span>    m_builder-&gt;buildEngine();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  //标准型</span></span>
<span class="line"><span>  void buildStandardShip() {</span></span>
<span class="line"><span>    buildSimpleShip();</span></span>
<span class="line"><span>    m_builder-&gt;buildWeapon();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //豪华型</span></span>
<span class="line"><span>  void buildLuxuryShip() {</span></span>
<span class="line"><span>    buildStandardShip();</span></span>
<span class="line"><span>    m_builder-&gt;buildInterior();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //建造桑尼号</span></span>
<span class="line"><span>void buildSunny(){</span></span>
<span class="line"><span>  Director* director=new  Director();</span></span>
<span class="line"><span>  SunnyBuilder* builder=new SunnyBuilder();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //简约型</span></span>
<span class="line"><span>  director-&gt;setBuilder(builder);</span></span>
<span class="line"><span>  director-&gt;buildSimpleShip();</span></span>
<span class="line"><span>  SunnyShip* ship=builder-&gt;getShip();</span></span>
<span class="line"><span>  ship-&gt;showParts();</span></span>
<span class="line"><span>  delete ship;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //标准型</span></span>
<span class="line"><span>  builder-&gt;reset();</span></span>
<span class="line"><span>  director-&gt;setBuilder(builder);</span></span>
<span class="line"><span>  director-&gt;buildStandardShip();</span></span>
<span class="line"><span>  ship=builder-&gt;getShip();</span></span>
<span class="line"><span>  ship-&gt;showParts();</span></span>
<span class="line"><span>  delete ship;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //豪华型</span></span>
<span class="line"><span>  builder-&gt;reset();</span></span>
<span class="line"><span>  director-&gt;setBuilder(builder);</span></span>
<span class="line"><span>  director-&gt;buildLuxuryShip();</span></span>
<span class="line"><span>  ship=builder-&gt;getShip();</span></span>
<span class="line"><span>  ship-&gt;showParts();</span></span>
<span class="line"><span>  delete ship;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  delete builder;</span></span>
<span class="line"><span>  delete director;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //建造梅丽号</span></span>
<span class="line"><span>void buildMerry(){</span></span>
<span class="line"><span>  Director* director=new  Director();</span></span>
<span class="line"><span>  MerryBuilder* builder=new MerryBuilder();</span></span>
<span class="line"><span>  //简约型</span></span>
<span class="line"><span>  director-&gt;setBuilder(builder);</span></span>
<span class="line"><span>  director-&gt;buildSimpleShip();</span></span>
<span class="line"><span>  MerryShip* ship=builder-&gt;getShip();</span></span>
<span class="line"><span>  ship-&gt;showParts();</span></span>
<span class="line"><span>  delete ship;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //标准型</span></span>
<span class="line"><span>  builder-&gt;reset();</span></span>
<span class="line"><span>  director-&gt;setBuilder(builder);</span></span>
<span class="line"><span>  director-&gt;buildStandardShip();</span></span>
<span class="line"><span>  ship=builder-&gt;getShip();</span></span>
<span class="line"><span>  ship-&gt;showParts();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //豪华型</span></span>
<span class="line"><span>  builder-&gt;reset();</span></span>
<span class="line"><span>  director-&gt;setBuilder(builder);</span></span>
<span class="line"><span>  director-&gt;buildLuxuryShip();</span></span>
<span class="line"><span>  ship=builder-&gt;getShip();</span></span>
<span class="line"><span>  ship-&gt;showParts();</span></span>
<span class="line"><span>  delete ship;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  delete builder;</span></span>
<span class="line"><span>  delete director;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  buildSunny();</span></span>
<span class="line"><span>  buildMerry();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式"><span>原型模式</span></a></h1><p>克隆是一种最直接、最快捷的创建新对象的方式，它不仅隐藏了创建新对象的诸多细节，还保留了源对象的属性信息，保证了这两个对象能够一模一样。</p><p>原型模式就是能够复制已有的对象，而又无需使代码依赖它们所属的类。换种说法，就是通过已有对象克隆出另一个新的对象，并且克隆这个对象不需要使用构造函数。</p><p>通过一个已有对象克隆出一个新的对象。一个拷贝构造函数就能搞定的事情为啥还要搞出一种设计模式呢？ 有时想要<mark>通过父类指针或引用把指向的子类对象克隆出来</mark> 克隆可能会在父类和子类之间进行，并且可能是动态的，很明显通过父类的拷贝构造函数无法实现对子类对象的拷贝，其实这就是一个多态，我们需要给父类提供一个克隆函数并且是一个虚函数。</p><p>![[Pasted image 20240505135551.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 原型模式</span></span>
<span class="line"><span>class GermaSoldier {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  virtual GermaSoldier* clone() = 0;</span></span>
<span class="line"><span>  virtual void show() = 0;</span></span>
<span class="line"><span>  virtual ~GermaSoldier() {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 士兵</span></span>
<span class="line"><span>class Soldier66 : public GermaSoldier {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  GermaSoldier* clone() override { return new Soldier66(*this); }</span></span>
<span class="line"><span>  void show() override { cout &lt;&lt; &quot;我是士兵66&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 士兵</span></span>
<span class="line"><span>class Soldier99 : public GermaSoldier {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>  GermaSoldier* clone() override { return new Soldier99(*this); }</span></span>
<span class="line"><span>  void show() override { cout &lt;&lt; &quot;我是士兵99&quot; &lt;&lt; endl; }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void test(){</span></span>
<span class="line"><span>  GermaSoldier* soldier66 = new Soldier66();</span></span>
<span class="line"><span>  GermaSoldier* soldier = soldier66-&gt;clone();</span></span>
<span class="line"><span>  soldier-&gt;show();</span></span>
<span class="line"><span>  delete soldier66;</span></span>
<span class="line"><span>  delete soldier;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  GermaSoldier* soldier99 = new Soldier99();</span></span>
<span class="line"><span>  soldier = soldier99-&gt;clone();</span></span>
<span class="line"><span>  soldier-&gt;show();</span></span>
<span class="line"><span>  delete soldier99;</span></span>
<span class="line"><span>  delete soldier;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,58)]))}const v=n(e,[["render",p]]),r=JSON.parse('{"path":"/base/dp/2/","title":"2、创建型模式","lang":"zh-CN","frontmatter":{"title":"2、创建型模式","createTime":"2025/06/22 09:53:28","permalink":"/base/dp/2/"},"readingTime":{"minutes":15.58,"words":4673},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/设计模式/2、创建型模式.md","headers":[]}');export{v as comp,r as data};
