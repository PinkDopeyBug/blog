import{_ as p,c as t,a as i,b as e,e as n,d as l,r as d,o as r}from"./app-CEcM0piI.js";const c={};function v(o,s){const a=d("VPIcon");return r(),t("div",null,[s[4]||(s[4]=i(`<p>qt中类可以指定一个父对象，如果不指定父对象那它就是单独的窗口，如果指定父对象该窗口就内嵌到父对象窗口中，父对象析构会连带着子对象一块析构</p><p>QObject类是所有使用元对象系统的类的基类 必须在一个类的开头部分插入宏Q_OBJECT，才可以使用元对象系统的特性。包括开启信号和槽机制，建议所有QObject的子类都加上这个宏，不管用不用到信号和槽 当MOC发现类中定义了Q_OBJECT宏时，会为其生成相应的C++源文件元对象编译器（Meta-Object Compiler，Moc）是一个预处理器，先将Qt的特性程序转换为标准C++程序，再由标准C++编译器进行编译</p><ul><li>元对象（meta object）：每个QObject及其子类的实例都有一个元对象（静态变量staticMetaObject）。函数metaObject()可以返回它的指针。</li><li>类型信息：QObject的inherits()函数可以判断继承关系。 调用inherits()函数时在括号里填上类型名的字符串，然后判断调用者是否是它的子类。返回布尔类型</li><li>动态翻译：函数tr()返回一个字符串的翻译版本。</li><li>对象树：表示对象间从属关系的树状结构。QObject提供了parent()、children()findChildren(等函数。对象树种的某个对象被删除时，它的子对象也将被删除</li><li>信号和槽：对象间的通信机制。</li><li>属性系统：可以使用宏Q_PROPERTY定义属性，QObject的setProperty()会设置属性的值或定义动态属性；property函数会返回属性的值。（多用于把开发的内容与其他语言联系的情况）</li></ul><p>元对象是对类的描述，包含类信息、方法、属性等元数据。 QObject和QMetaObject提供了一些函数接口，可以获取运行时类型信息，类似标准C++中的RTTI(run time type information)</p><h2 id="常用的函数" tabindex="-1"><a class="header-anchor" href="#常用的函数"><span>常用的函数</span></a></h2><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>cick()</td><td>表示是否被点击</td></tr><tr><td>clicked(bool)</td><td>表示是否被选中（点击过）</td></tr><tr><td>setObjectName(&quot;name&quot;)</td><td>用来设置对象名字</td></tr><tr><td>objectName()</td><td>用来查询名字</td></tr><tr><td>deleteLater()</td><td>稍后删除当窗口使用exec()函数阻塞窗口退出时使用这个deleteLater()会在窗口关闭后删除</td></tr><tr><td>exec()</td><td>阻塞函数，消息驱动循环、时间驱动循环，使窗口阻塞一直运行，点击关闭才会跳出循环停止运行</td></tr><tr><td>bool QObject::blockSignals(bool block)</td><td>阻断信号，参数填true就是阻断信号，填false就是不阻断</td></tr></tbody></table><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2><p>在QObject的子类中可以通过Q_PROPERTY宏定义属性 常用于qml [ ]表示可选项 |表示或</p><table><thead><tr><th>关键字</th><th>作用</th></tr></thead><tbody><tr><td>(READ getFunction [WRITE setFunction]lMEMBER memberName[(READ getFunction I WRITE setFunction)]</td><td>red表示读，|或表示没有read就必须要有member指定一个对象与属性关联</td></tr><tr><td>[RESET resetFunction]</td><td>指定一个函数重新设置属性的值</td></tr><tr><td>[NOTIFY notifySignal]</td><td>当属性值变化的时候会发出信号</td></tr><tr><td>[REVISION int [ REVISION(int[,int])]-</td><td>revision表示api的版本，在指定的版本中才会用到</td></tr><tr><td>[DESIGNABLE bool]</td><td>在qtcreate中需要用到的话就把bool改为true</td></tr><tr><td>[SCRIPTABLE bool]</td><td>表示是否可以通过脚本修改</td></tr><tr><td>[STORED bool]</td><td>表示属性是否独立存在，或依赖其他值，在存储对象的状态时是否必须保存属性值</td></tr><tr><td>[USER bool]</td><td>用户是否可编辑</td></tr><tr><td>[BINDABLE bool]</td><td>是否有绑定的情况</td></tr><tr><td>[CONSTANT]</td><td>常量</td></tr><tr><td>[FINAL]</td><td>不可以重写</td></tr><tr><td>[REQUIRED])</td><td>需要的</td></tr></tbody></table><h2 id="对象树" tabindex="-1"><a class="header-anchor" href="#对象树"><span>对象树</span></a></h2><p>QObject以对象树的形式组织自己，其构造函数里有一个parent参数。当用另一个对象作为父对象创建一个QObject时，它会被添加到父对象的children()列表中，而当父对象被删除时是时，它会被删除。这种方法非常适合GUI对象的需求。例如，QShortcut(键盘快捷键)是相关窗口的子对象，因此当用户关闭该窗口时，快捷键也会被删除。</p><p><strong>children()函数</strong> 返回对象的子对象列表 原型：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const QobjectList &amp;Qobject::children()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>函数的返回类型是Qobject类型指针列表（可遍历） typedef QList&lt;Qobject*&gt; QobjectList; 对于界面上的容器类组件，容器内所有的组件（包括布局）都是其子对象</p><p><strong>findChild()函数</strong> 返回此对象的1个具有给定名称的子对象，该子对象可以转换为类型T，如果没有该对象，则返回nullptr。 原型：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template &lt;typename T&gt; T Qobject::findchild(const QString &amp;name = QString(),Qt::Findchildoptions options = Qt::FindchildrenRecursively) const</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>第一个参数是对象的名字，省略name将匹配所有对象。 第二个选项是选项，表示是否往下进行寻找（查找所有子孙节点），搜索是递归执行的，如果options指定为FindDirectChildrenOnly则只查找字节点。 示例： 返回parentWidget的一个子按钮QPushButton，名为&quot;button1&quot;即使这个按钮不是父元素</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QPushButton *button = parentWidget-&gt;findChild&lt;QPushButton *&gt;(&quot;button1&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="qvariant变体" tabindex="-1"><a class="header-anchor" href="#qvariant变体"><span>QVariant变体</span></a></h1><p>类似于Qt常见数据类型的union（类型不确定，某时刻只能为一种类型）。 但在Qt中比union强大很多, QVariant内置支持所有QMetaType::Type里声明的类型如:int，QString，QFont，QColor等，甚至QList，QMap&lt;QString， QVariant&gt;等组成的任意复杂类型。简单的说QVariant可以存储任意数据类型，表现的类似弱语言，如JS中的var如，包括容器类型的值，如QStringlist。Qt的很多功能都是建立在QVariant类的基础之上的，如Qt对象属性及数据库功能等，</p><p>如果要使自定义类型或其他非QMetaType内置类型在QVariant中使用，必须使用宏Q_DECLARE_METATYPE<br> 如果非QMetaType内置类型要在信号与槽中使用，必须使用qRegisterMetaType。</p><p>C++的union不支持具有非默认构造函数或析构函数的类型，所以大多数Qt类不能在union中使用。如果没有QVariant，这对于QObject:property()和库相关等来说将是一个问题。 QObject::property()原型：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QVariant QObject::property(const char* name)const</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>各种属性的数据类型不同，需要使用QVariant类表示可以存储任意类型的数据</p><p>由于QVariant是Qt核心模块的一部分，不能提供到Qt GUI中定义的数据类型的转换函数，因此对于QtGUi模块中的一些类，QVariant没有相应的toT函数，需要通过QVariant:value()函数来得到指定类型的值：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QFont font=this-&gt;font();//窗口的字体</span></span>
<span class="line"><span>QVariant var=font;//赋值给一个QVariant变量</span></span>
<span class="line"><span>QFont font2=var.value&lt;QFont&gt;()；//转换为QFont类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><h3 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据"><span>获取数据</span></a></h3><p>它本身有一种方法toT()，例如：toInt()、toString()等都是const 的函数用于转换为具体的类型。toT()是复制和转换，并不会改变对象本身</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>int n = v1.toInt(); // 将整数转换为int类型</span></span>
<span class="line"><span>QString str = v2.toString(); // 将字符串转换为QString类型</span></span>
<span class="line"><span>QList&lt;int&gt; list = v3.toList(); // 将整数列表转换为QList&lt;int&gt;类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储数据" tabindex="-1"><a class="header-anchor" href="#存储数据"><span>存储数据</span></a></h3><p>可以通过构造函数、赋值操作符、setValue函数等方法将数据存储到QVariant对象中。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QVariant v1 = 10; // 存储整数</span></span>
<span class="line"><span>QVariant v2 = &quot;hello&quot;; // 存储字符串</span></span>
<span class="line"><span>QVariant v3 = QList&lt;int&gt;() &lt;&lt; 1 &lt;&lt; 2 &lt;&lt; 3; // 存储整数列表</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断数据类型" tabindex="-1"><a class="header-anchor" href="#判断数据类型"><span>判断数据类型</span></a></h3><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type()</span></a></h4><p>可以使用type函数判断QVariant对象中存储的数据类型。 type()返回的是一个enum QMeatType的枚举值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>if (v1.type() == QVariant::Int) {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h3><h4 id="canconvert" tabindex="-1"><a class="header-anchor" href="#canconvert"><span>canConvert()</span></a></h4><p>bool QVariant::canConvert(int targetTypeId) const 如果变量的类型可以转换为请求的类型targetTypeId，则返回true。 使用时需要进行模板的判定</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QVariant v=3;</span></span>
<span class="line"><span>v.canCovert&lt;int&gt;();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用指定模板类型对变量进行判定，如果类型相等返回true，否则返回false 判定好后需要把数值转换回来使用value() 函数</p><h4 id="convert" tabindex="-1"><a class="header-anchor" href="#convert"><span>convert()</span></a></h4><p>bool QVariant::convert(int targetTypeId) 将变量转换为请求的类型targetTypeId。如果转换不能完成，则清除变量。如果成功转换了变量的当前类型，则返回true;否则返回false。</p><h4 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value()</span></a></h4><p>T QVariant::value() const 返回转换为模板类型T的存储值。如果不能转换该值，将返回一个默认构造的值。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QVariant v;</span></span>
<span class="line"><span>MyCustomStruct c;</span></span>
<span class="line"><span>if(v.canConvert&lt;MyCustomStruct&gt;()){</span></span>
<span class="line"><span>	c=v.value&lt;MyCustomStruct&gt;();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setvalue" tabindex="-1"><a class="header-anchor" href="#setvalue"><span>setValue()</span></a></h4><p>将参数包装为QVariant类型</p><h4 id="fromvalue" tabindex="-1"><a class="header-anchor" href="#fromvalue"><span>fromValue()</span></a></h4><p>static QVariant QVariant::fromValue(const T &amp;value) 返回一个包含值副本的QVariant。否则，其行为与setValue()完全相同。</p><h3 id="清空数据" tabindex="-1"><a class="header-anchor" href="#清空数据"><span>清空数据</span></a></h3><p>可以使用clear函数清空QVariant对象中存储的数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>v1.clear(); // 清空v1中存储的数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="qvariant存储自定义类型" tabindex="-1"><a class="header-anchor" href="#qvariant存储自定义类型"><span>QVariant存储自定义类型</span></a></h2><p>QVariant可以存储自定义类型，被QVariant存储的数据类型需要包含一个默认构造函数和一个拷贝构造函数，将Q_DECLARE_METATYPE(type)宏放在类声明所在的头文件下为该类型添加元数据 其中type就是用户自定义的类型 将自定义类型包装成QVariant类型就只能使用setValue，和fromValue 使用自定义类型包装的QVariant不能使用type()获取类型，type()返回的是一个enum QMeatType的枚举值，但自定义类型不在这个枚举值内 但可以使用canConvert()</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class MyCustomType {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    MyCustomType() {}</span></span>
<span class="line"><span>    MyCustomType(int i, QString str) : m_i(i), m_str(str) {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int m_i;</span></span>
<span class="line"><span>    QString m_str;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Q_DECLARE_METATYPE(MyCustomType);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QDataStream&amp; operator&lt;&lt;(QDataStream &amp;out, const MyCustomType &amp;val) {</span></span>
<span class="line"><span>    out &lt;&lt; val.m_i &lt;&lt; val.m_str;</span></span>
<span class="line"><span>    return out;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QDataStream&amp; operator&gt;&gt;(QDataStream &amp;in, MyCustomType &amp;val) {</span></span>
<span class="line"><span>    in &gt;&gt; val.m_i &gt;&gt; val.m_str;</span></span>
<span class="line"><span>    return in;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="qvariant实现模板函数" tabindex="-1"><a class="header-anchor" href="#qvariant实现模板函数"><span>QVariant实现模板函数</span></a></h2><p>QVariant还可以使用模板函数，实现任意类型转换:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>template</span></span>
<span class="line"><span>inline QVariant toVariant(const T &amp;value){</span></span>
<span class="line"><span>    return QVariant::fromValue(value);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="qflags" tabindex="-1"><a class="header-anchor" href="#qflags"><span>QFlags</span></a></h1><p>QFlags&lt;Enum&gt;类是一个模板类，其中Enum是枚举类型。QFlags在Qt中用于存储枚举值的组合。</p><p>用于存储或组合枚举值的传统C++方法是使用整型变量。这种方法的不便之处在于根本没有类型检查，任何枚举值都可以与任何其他枚举值进行逻辑运算。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>enum Orientation{</span></span>
<span class="line"><span>    Up = 1,</span></span>
<span class="line"><span>    Down = 2,</span></span>
<span class="line"><span>    Left = 4,</span></span>
<span class="line"><span>    Right = 8,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>enum Direction{</span></span>
<span class="line"><span>	horizontal = 2,</span></span>
<span class="line"><span>    vertical = 3,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>Orientation::Up | Direction::horizontal;</span></span>
<span class="line"><span>Orientation::Up | Orientation::Down;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种操作编译器不会报错 第一种两个不相关的枚举值做逻辑运算没有意义，第二种运算结果是3，但Orientation中没有值是3的标识符。</p><p>QFlags&lt;Enum&gt;是一个模板类，其中Enum是枚举类型，QFlags用于定义枚举值的或运算组合，在Qt中经常用到 QFlags 类。例如，QLabel 有一个alignment 属性，其读写函数分别定义如下:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Qt::Alignment alignment()</span></span>
<span class="line"><span>void setAlignment(Ot::Alignment)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>alignment属性值是Qt:Alignment类型Qt帮助文档中显示的Qt::Alignment信息有如下表示</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>enum Qt::AlignmentFlag  //枚举类型</span></span>
<span class="line"><span>flags Qt::Alignment     //标志类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一行代码翻译一下就是Qt命名空间下的有一个变量名字叫做AlignmentFlag他是枚举类型</p>`,70)),e("p",null,[s[0]||(s[0]=n("这表示Qt")),l(a,{provider:"iconify",name:"Alignment是QFlags<Qt::AlignmentFlag>类型，但是Qt中并没有定义实际的类型Qt"}),s[1]||(s[1]=n("Alignment"))]),e("p",null,[s[2]||(s[2]=n("Qt")),l(a,{provider:"iconify",name:"AlignmentFlag",extra:""}),s[3]||(s[3]=n("Alignment是一个或多个Qt:AlignmentFlag类型枚举值的组合，是一种特性标志。"))]),s[5]||(s[5]=i(`<h2 id="自己定义类型使用qflags" tabindex="-1"><a class="header-anchor" href="#自己定义类型使用qflags"><span>自己定义类型使用QFlags</span></a></h2><p>如果要对自己的枚举类型使用QFlags，应使用Q_DECLARE_FLAGS()和Q_DECLARE_OPERATORS_FOR_FLAGS()。</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="text" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>例：</span></span>
<span class="line"><span>  class MyClass</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>  public:</span></span>
<span class="line"><span>    enum Orientation</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Up = 1,</span></span>
<span class="line"><span>        Down = 2,</span></span>
<span class="line"><span>        Left = 4,</span></span>
<span class="line"><span>        Right = 8,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    Q_DECLARE_FLAGS(Orientations, Orientation)</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  Q_DECLARE_OPERATORS_FOR_FLAGS(MyClass::Orientations)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这样为枚举Orientation创建了一个Flags：Orientations，这个Orientations的类型就是QFlags<a href="MyClass::Orientation">MyClass::Orientation</a>。可以用Orientations对象接收逻辑运算的值了：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Orientations f = Orientation::Up | Orientation::Down;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="qpoint坐标点" tabindex="-1"><a class="header-anchor" href="#qpoint坐标点"><span>QPoint坐标点</span></a></h1><p>QPoint封装了我们常用的坐标点(x,y)，常用API如下</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数  </span></span>
<span class="line"><span>// 构造一个坐标原点, 即(0, 0)  </span></span>
<span class="line"><span>QPoint::QPoint();  </span></span>
<span class="line"><span>// 参数为 x轴坐标, y轴坐标  </span></span>
<span class="line"><span>QPoint::QPoint(int xpos, int ypos);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 设置x轴坐标  </span></span>
<span class="line"><span>void QPoint::setX(int x);  </span></span>
<span class="line"><span>// 设置y轴坐标  </span></span>
<span class="line"><span>void QPoint::setY(int y);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 得到x轴坐标  </span></span>
<span class="line"><span>int QPoint::x() const;  </span></span>
<span class="line"><span>// 得到x轴坐标的引用  </span></span>
<span class="line"><span>int &amp;QPoint::rx();  </span></span>
<span class="line"><span>// 得到y轴坐标  </span></span>
<span class="line"><span>int QPoint::y() const;  </span></span>
<span class="line"><span>// 得到y轴坐标的引用  </span></span>
<span class="line"><span>int &amp;QPoint::ry();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 直接通过坐标对象进行算术运算: 加减乘除  </span></span>
<span class="line"><span>QPoint &amp;QPoint::operator*=(float factor);  </span></span>
<span class="line"><span>QPoint &amp;QPoint::operator*=(double factor);  </span></span>
<span class="line"><span>QPoint &amp;QPoint::operator*=(int factor);  </span></span>
<span class="line"><span>QPoint &amp;QPoint::operator+=(const QPoint &amp;point);  </span></span>
<span class="line"><span>QPoint &amp;QPoint::operator-=(const QPoint &amp;point);  </span></span>
<span class="line"><span>QPoint &amp;QPoint::operator/=(qreal divisor);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 其他API请自行查询Qt帮助文档, 不要犯懒哦哦哦哦哦......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qline直线" tabindex="-1"><a class="header-anchor" href="#qline直线"><span>QLine直线</span></a></h1><p>直线类，封装了两个坐标点（两点确定一条直线）</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>// 构造一个空对象</span></span>
<span class="line"><span>QLine::QLine();</span></span>
<span class="line"><span>// 构造一条直线, 通过两个坐标点</span></span>
<span class="line"><span>QLine::QLine(const QPoint &amp;p1, const QPoint &amp;p2);</span></span>
<span class="line"><span>// 从点 (x1, y1) 到 (x2, y2)</span></span>
<span class="line"><span>QLine::QLine(int x1, int y1, int x2, int y2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 给直线对象设置坐标点</span></span>
<span class="line"><span>void QLine::setPoints(const QPoint &amp;p1, const QPoint &amp;p2);</span></span>
<span class="line"><span>// 起始点(x1, y1), 终点(x2, y2)</span></span>
<span class="line"><span>void QLine::setLine(int x1, int y1, int x2, int y2);</span></span>
<span class="line"><span>// 设置直线的起点坐标</span></span>
<span class="line"><span>void QLine::setP1(const QPoint &amp;p1);</span></span>
<span class="line"><span>// 设置直线的终点坐标</span></span>
<span class="line"><span>void QLine::setP2(const QPoint &amp;p2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回直线的起始点坐标</span></span>
<span class="line"><span>QPoint QLine::p1() const;</span></span>
<span class="line"><span>// 返回直线的终点坐标</span></span>
<span class="line"><span>QPoint QLine::p2() const;</span></span>
<span class="line"><span>// 返回值直线的中心点坐标, (p1() + p2()) / 2</span></span>
<span class="line"><span>QPoint QLine::center() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回值直线起点的 x 坐标</span></span>
<span class="line"><span>int QLine::x1() const;</span></span>
<span class="line"><span>// 返回值直线终点的 x 坐标</span></span>
<span class="line"><span>int QLine::x2() const;</span></span>
<span class="line"><span>// 返回值直线起点的 y 坐标</span></span>
<span class="line"><span>int QLine::y1() const;</span></span>
<span class="line"><span>// 返回值直线终点的 y 坐标</span></span>
<span class="line"><span>int QLine::y2() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 用给定的坐标点平移这条直线（偏移量）</span></span>
<span class="line"><span>void QLine::translate(const QPoint &amp;offset);</span></span>
<span class="line"><span>void QLine::translate(int dx, int dy);</span></span>
<span class="line"><span>// 用给定的坐标点平移这条直线, 返回平移之后的坐标点，有返回值</span></span>
<span class="line"><span>QLine QLine::translated(const QPoint &amp;offset) const;</span></span>
<span class="line"><span>QLine QLine::translated(int dx, int dy) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 直线对象进行比较，比较是否在同一位置</span></span>
<span class="line"><span>bool QLine::operator!=(const QLine &amp;line) const;</span></span>
<span class="line"><span>bool QLine::operator==(const QLine &amp;line) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其他API请自行查询Qt帮助文档, 不要犯懒哦哦哦哦哦......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qsize窗口尺寸" tabindex="-1"><a class="header-anchor" href="#qsize窗口尺寸"><span>QSize窗口尺寸</span></a></h1><p>用来形容长度和宽度</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数  </span></span>
<span class="line"><span>// 构造空对象, 对象中的宽和高都是无效的  </span></span>
<span class="line"><span>QSize::QSize();  </span></span>
<span class="line"><span>// 使用宽和高构造一个有效对象  </span></span>
<span class="line"><span>QSize::QSize(int width, int height);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 设置宽度  </span></span>
<span class="line"><span>void QSize::setWidth(int width)  </span></span>
<span class="line"><span>// 设置高度  </span></span>
<span class="line"><span>void QSize::setHeight(int height);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 得到宽度  </span></span>
<span class="line"><span>int QSize::width() const;  </span></span>
<span class="line"><span>// 得到宽度的引用  </span></span>
<span class="line"><span>int &amp;QSize::rwidth();  </span></span>
<span class="line"><span>// 得到高度  </span></span>
<span class="line"><span>int QSize::height() const;  </span></span>
<span class="line"><span>// 得到高度的引用  </span></span>
<span class="line"><span>int &amp;QSize::rheight();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 交换高度和宽度的值  </span></span>
<span class="line"><span>void QSize::transpose();  </span></span>
<span class="line"><span>// 交换高度和宽度的值, 返回交换之后的尺寸信息  </span></span>
<span class="line"><span>QSize QSize::transposed() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 进行算法运算: 加减乘除  </span></span>
<span class="line"><span>QSize &amp;QSize::operator*=(qreal factor);  </span></span>
<span class="line"><span>QSize &amp;QSize::operator+=(const QSize &amp;size);  </span></span>
<span class="line"><span>QSize &amp;QSize::operator-=(const QSize &amp;size);  </span></span>
<span class="line"><span>QSize &amp;QSize::operator/=(qreal divisor);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qrect矩形" tabindex="-1"><a class="header-anchor" href="#qrect矩形"><span>QRect矩形</span></a></h1><p>它结合了之前的坐标类和尺寸类</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>// 构造一个空对象</span></span>
<span class="line"><span>QRect::QRect();</span></span>
<span class="line"><span>// 基于左上角坐标, 和右下角坐标构造一个矩形对象</span></span>
<span class="line"><span>QRect::QRect(const QPoint &amp;topLeft, const QPoint &amp;bottomRight);</span></span>
<span class="line"><span>// 基于左上角坐标, 和 宽度, 高度构造一个矩形对象</span></span>
<span class="line"><span>QRect::QRect(const QPoint &amp;topLeft, const QSize &amp;size);</span></span>
<span class="line"><span>// 通过 左上角坐标(x, y), 和 矩形尺寸(width, height) 构造一个矩形对象</span></span>
<span class="line"><span>QRect::QRect(int x, int y, int width, int height);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置矩形的尺寸信息, 左上角坐标不变</span></span>
<span class="line"><span>void QRect::setSize(const QSize &amp;size);</span></span>
<span class="line"><span>// 设置矩形左上角坐标为(x,y), 大小为(width, height)</span></span>
<span class="line"><span>void QRect::setRect(int x, int y, int width, int height);</span></span>
<span class="line"><span>// 设置矩形宽度</span></span>
<span class="line"><span>void QRect::setWidth(int width);</span></span>
<span class="line"><span>// 设置矩形高度</span></span>
<span class="line"><span>void QRect::setHeight(int height);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回值矩形左上角坐标</span></span>
<span class="line"><span>QPoint QRect::topLeft() const;</span></span>
<span class="line"><span>// 返回矩形右上角坐标</span></span>
<span class="line"><span>// 该坐标点值为: QPoint(left() + width() -1, top())</span></span>
<span class="line"><span>QPoint QRect::topRight() const;</span></span>
<span class="line"><span>// 返回矩形左下角坐标</span></span>
<span class="line"><span>// 该坐标点值为: QPoint(left(), top() + height() - 1)</span></span>
<span class="line"><span>QPoint QRect::bottomLeft() const;</span></span>
<span class="line"><span>// 返回矩形右下角坐标</span></span>
<span class="line"><span>// 该坐标点值为: QPoint(left() + width() -1, top() + height() - 1)</span></span>
<span class="line"><span>QPoint QRect::bottomRight() const;</span></span>
<span class="line"><span>// 返回矩形中心点坐标</span></span>
<span class="line"><span>QPoint QRect::center() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回矩形上边缘y轴坐标</span></span>
<span class="line"><span>int QRect::top() const;</span></span>
<span class="line"><span>int QRect::y() const;</span></span>
<span class="line"><span>// 返回值矩形下边缘y轴坐标</span></span>
<span class="line"><span>int QRect::bottom() const;</span></span>
<span class="line"><span>// 返回矩形左边缘 x轴坐标</span></span>
<span class="line"><span>int QRect::x() const;</span></span>
<span class="line"><span>int QRect::left() const;</span></span>
<span class="line"><span>// 返回矩形右边缘x轴坐标</span></span>
<span class="line"><span>int QRect::right() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 返回矩形的高度</span></span>
<span class="line"><span>int QRect::width() const;</span></span>
<span class="line"><span>// 返回矩形的宽度</span></span>
<span class="line"><span>int QRect::height() const;</span></span>
<span class="line"><span>// 返回矩形的尺寸信息</span></span>
<span class="line"><span>QSize QRect::size() const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="容器" tabindex="-1"><a class="header-anchor" href="#容器"><span>容器</span></a></h1><p>QSet和标准C++中的set不一样,它不会自动排序,只能存储可比较的数据类型(即标准数据类型) 若想要让其可以存储自定义的类型需要重载该类型的==运算符和qHash全局函数 因为QSet底层是使用QHash哈希表实现的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>bool operator==(const Card&amp; left,const Card&amp; right){</span></span>
<span class="line"><span>    return(left.point()==right.point() &amp;&amp; left.suit()==right.suit());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint qHash(const Card&amp; card){</span></span>
<span class="line"><span>    return card.point()*100+card.suit();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是可以存储指针类型 可以通过存储自定义类型的指针</p>`,21))])}const m=p(c,[["render",v]]),u=JSON.parse('{"path":"/cpp/qt/4/","title":"4 Qt中常用的类","lang":"zh-CN","frontmatter":{"title":"4 Qt中常用的类","createTime":"2025/06/22 10:40:12","permalink":"/cpp/qt/4/"},"readingTime":{"minutes":13.98,"words":4195},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/Qt/4 Qt中常用的类.md","headers":[]}');export{m as comp,u as data};
