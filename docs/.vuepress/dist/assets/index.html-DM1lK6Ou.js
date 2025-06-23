import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>qt中基本数据类型定义在&lt;QtGlobal&gt;中 qt自己实现基本数据类型是为了确保在各个平台上个数据类型都有统一确定的长度</p><table><thead><tr><th>类型名称</th><th>注释</th><th>备注</th></tr></thead><tbody><tr><td>qint8</td><td>signed char</td><td>有符号8位数据</td></tr><tr><td>qint16</td><td>signed short</td><td>16位数据类型</td></tr><tr><td>qint32</td><td>signed short</td><td>32位有符号数据类型</td></tr><tr><td>qint64</td><td>long long int 或(__ int64)</td><td>64位有符号数据类型，Windows中定义为__ int64</td></tr><tr><td>qintptr</td><td>qint32 或 qint64</td><td>指针类型 根据系统类型不同而不同，32位系统为qint32、64位系统为qint64</td></tr><tr><td>qlonglong</td><td>long long int 或(__ int64)</td><td>Windows中定义为__int64</td></tr><tr><td>qptrdiff</td><td>qint32 或 qint64</td><td>根据系统类型不同而不同，32位系统为qint32、64位系统为qint64</td></tr><tr><td>qreal</td><td>（实数）double 或 float</td><td>除非配置了-qreal float选项，否则默认为double</td></tr><tr><td>quint8</td><td>unsigned char</td><td>无符号8位数据类型</td></tr><tr><td>quint16</td><td>unsigned short</td><td>无符号16位数据类型</td></tr><tr><td>quint32</td><td>unsigned int</td><td>无符号32位数据类型</td></tr><tr><td>quint64</td><td>unsigned long long int 或 (unsigned __ int64)</td><td>无符号64比特数据类型，Windows中定义为unsigned __ int64</td></tr><tr><td>quintptr</td><td>quint32 或 quint64</td><td>根据系统类型不同而不同，32位系统为quint32、64位系统为quint64</td></tr><tr><td>qulonglong</td><td>unsigned long long int 或 (unsigned __ int64)</td><td>Windows中定义为__int64</td></tr><tr><td>uchar</td><td>unsigned char</td><td>无符号字符类型</td></tr><tr><td>uint</td><td>unsigned int</td><td>无符号整型</td></tr><tr><td>ulong</td><td>unsigned long</td><td>无符号长整型</td></tr><tr><td>ushort</td><td>unsigned short</td><td>无符号短整型</td></tr><tr><td>虽然在Qt中有属于自己的整形或者浮点型, 但是在变成过程中这些一般不用, 常用的类型关键字还是 C/C++中的 int, float, double 等。</td><td></td><td></td></tr></tbody></table><h1 id="宏定义" tabindex="-1"><a class="header-anchor" href="#宏定义"><span>宏定义</span></a></h1><table><thead><tr><th>宏</th><th>作用</th></tr></thead><tbody><tr><td>qDebug(const char* message,……)</td><td>debugger窗体显示信息。类似的宏还有qWarning、qCritical、qFatal、qlnfo等，也是用于在 debugger窗体显示信息。</td></tr><tr><td>QT_VERSION</td><td>展开为数值形式 OxMMNNPP(MM= major, NN = minor, PP = patch)表示Qt 编译器版本。</td></tr><tr><td>QT_VERSION_STR</td><td>展开为Qt版本号的字符串</td></tr><tr><td>Q_BYTE_ORDER</td><td>示系统内存中数据的字节序。在需要判断系统字节序时会用到</td></tr><tr><td>Q_BIG_ENDIAN</td><td>表示大端字节序</td></tr><tr><td>Q_LITTLE_ENDIAN</td><td>表示小端字节序。</td></tr><tr><td>Q_DECL_IMPORT</td><td>在使用或设计共享库时，用于导入库的内容</td></tr><tr><td>QDECL_EXPORT</td><td>用于导出库的内容</td></tr><tr><td>Q_UNUSED(name)</td><td>于在函数中定义不在函数体里使用的参数（定义参数后不使用编译器会给出警告，使用这个宏可以消除警告）</td></tr><tr><td>foreach(variable,container)</td><td>用于容器类的遍历</td></tr></tbody></table><h1 id="容器类" tabindex="-1"><a class="header-anchor" href="#容器类"><span>容器类</span></a></h1><p>Qt库提供了一组通用的基于模板的容器类。可用于存储指定类型的项。 例如，如果需要一个大小可变的QString数组，可以使用<code>QList&lt;QString&gt;</code>或<code>QStringList</code>。两者是一个东西 Qt容器类成比STL容器更轻巧（速度和存储优化）、更安全（线程安全）Qt容器提供了用于遍历的选代器。STL风格的选代器是最高效的迭代器，可以与Qt和STL的泛型算法一起使用。提供java风格的迭代器是为了向后兼容。</p><h1 id="log输出" tabindex="-1"><a class="header-anchor" href="#log输出"><span>log输出</span></a></h1><p>在Qt中进行log输出, 一般不使用c中的<code>printf</code>, 也不是使用C++中的<code>cout</code>, Qt框架提供了专门用于日志输出的类, 头文件名为 <code>QDebug</code>, 使用方法如下:</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 包含了QDebug头文件, 直接通过全局函数 qDebug() 就可以进行日志输出了  </span></span>
<span class="line"><span>qDebug() &lt;&lt; &quot;Date:&quot; &lt;&lt; QDate::currentDate();  </span></span>
<span class="line"><span>qDebug() &lt;&lt; &quot;Types:&quot; &lt;&lt; QString(&quot;String&quot;) &lt;&lt; QChar(&#39;x&#39;) &lt;&lt; QRect(0, 10, 50, 40);  </span></span>
<span class="line"><span>qDebug() &lt;&lt; &quot;Custom coordinate type:&quot; &lt;&lt; coordinate;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 和全局函数 qDebug() 类似的日志函数还有: qWarning(), qInfo(), qCritical()  </span></span>
<span class="line"><span>int number = 666;  </span></span>
<span class="line"><span>float i = 11.11;  </span></span>
<span class="line"><span>qWarning() &lt;&lt; &quot;Number:&quot; &lt;&lt; number &lt;&lt; &quot;Other value:&quot; &lt;&lt; i;  </span></span>
<span class="line"><span>qInfo() &lt;&lt; &quot;Number:&quot; &lt;&lt; number &lt;&lt; &quot;Other value:&quot; &lt;&lt; i;  </span></span>
<span class="line"><span>qCritical() &lt;&lt; &quot;Number:&quot; &lt;&lt; number &lt;&lt; &quot;Other value:&quot; &lt;&lt; i;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>qDebug() &lt;&lt; &quot;我是要成为海贼王的男人!!!&quot;;  </span></span>
<span class="line"><span>qDebug() &lt;&lt; &quot;我是隔壁的二柱子...&quot;;  </span></span>
<span class="line"><span>qDebug() &lt;&lt; &quot;我是鸣人, 我擅长嘴遁!!!&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>使用上面的方法只能在项目调试过程中进行日志输出, 如果不是通过<code>IDE</code>进行程序调试, 而是直接执行<code>可执行程序</code>在这种情况下是没有日志输出窗口的, 因此也就看不到任何的日志输出。</p><p>默认情况下日志信息是不会打印到终端窗口的, 如果想要实现这样的效果, 必须在项目文件中添加相关的属性信息 打开项目文件（* .pro）找到配置项 config, 添加 console 控制台属性:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>CONFIG += c++11 console</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>属性信息添加完毕, <code>重新编译项目</code> 日志信息就可以打印到终端窗口了</p><h1 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型"><span>字符串类型</span></a></h1><table><thead><tr><th>语言类型</th><th>字符串类型</th></tr></thead><tbody><tr><td>C</td><td><code>char*</code></td></tr><tr><td>C++</td><td><code>std::string</code>, <code>char*</code></td></tr><tr><td>Qt</td><td><code>QByteArray</code>, <code>QString</code> 等</td></tr><tr><td>qt的两种字符串类型没太大差距</td><td></td></tr></tbody></table><h2 id="qbytearray" tabindex="-1"><a class="header-anchor" href="#qbytearray"><span>QByteArray</span></a></h2><p>在Qt中<code>QByteArray</code>可以看做是c语言中 <code>char*</code>的升级版本。我们在使用这种类型的时候可通过这个类的构造函数申请一块动态内存，用于存储我们需要处理的字符串数据。</p><ul><li>构造函数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>QByteArray::QByteArray();  // 构造空对象, 里边没有数据  </span></span>
<span class="line"><span>QByteArray::QByteArray(const char *data, int size = -1);  // 将data中的size个字符进行构造, 得到一个字节数组对象,如果 size==-1 函数内部自动计算字符串长度, 计算方式为: strlen(data)  </span></span>
<span class="line"><span>QByteArray::QByteArray(int size, char ch);// 构造一个长度为size个字节, 并且每个字节值都为ch的字节数组</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据操作 每个操作都有相同效果的两个函数，一个为qt风格，一个为stl风格</li></ul><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 在尾部追加数据  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::append(const QByteArray &amp;ba);  </span></span>
<span class="line"><span>void QByteArray::push_back(const QByteArray &amp;other);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 头部添加数据  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::prepend(const QByteArray &amp;ba);  </span></span>
<span class="line"><span>void QByteArray::push_front(const QByteArray &amp;other);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 插入数据, 将ba插入到数组第 i 个字节的位置(从0开始)  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::insert(int i, const QByteArray &amp;ba);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 删除数据  </span></span>
<span class="line"><span>// 从大字符串中删除len个字符, 从第pos个字符的位置开始删除  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::remove(int pos, int len);  </span></span>
<span class="line"><span>// 从字符数组的尾部删除 n 个字节  </span></span>
<span class="line"><span>void QByteArray::chop(int n);  </span></span>
<span class="line"><span>// 从字节数组的 pos 位置将数组截断 (前边部分留下, 后边部分被删除)  </span></span>
<span class="line"><span>void QByteArray::truncate(int pos);  </span></span>
<span class="line"><span>// 将对象中的数据清空, 使其为null  </span></span>
<span class="line"><span>void QByteArray::clear();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 字符串替换  </span></span>
<span class="line"><span>// 将字节数组中的 子字符串 before 替换为 after  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::replace(const QByteArray &amp;before, const QByteArray &amp;after);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li>子字符串查找和判断 重载的同名函数分别是C++风格的和C语言风格的</li></ul><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 判断字节数组中是否包含子字符串 ba, 包含返回true, 否则返回false  </span></span>
<span class="line"><span>bool QByteArray::contains(const QByteArray &amp;ba) const;  </span></span>
<span class="line"><span>bool QByteArray::contains(const char *ba) const;  </span></span>
<span class="line"><span>// 判断字节数组中是否包含子字符 ch, 包含返回true, 否则返回false  </span></span>
<span class="line"><span>bool QByteArray::contains(char ch) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 判断字节数组是否以字符串 ba 开始, 是返回true, 不是返回false  </span></span>
<span class="line"><span>bool QByteArray::startsWith(const QByteArray &amp;ba) const;  </span></span>
<span class="line"><span>bool QByteArray::startsWith(const char *ba) const;  </span></span>
<span class="line"><span>// 判断字节数组是否以字符 ch 开始, 是返回true, 不是返回false  </span></span>
<span class="line"><span>bool QByteArray::startsWith(char ch) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 判断字节数组是否以字符串 ba 结尾, 是返回true, 不是返回false  </span></span>
<span class="line"><span>bool QByteArray::endsWith(const QByteArray &amp;ba) const;  </span></span>
<span class="line"><span>bool QByteArray::endsWith(const char *ba) const;  </span></span>
<span class="line"><span>// 判断字节数组是否以字符 ch 结尾, 是返回true, 不是返回false  </span></span>
<span class="line"><span>bool QByteArray::endsWith(char ch) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li>遍历</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 使用迭代器  </span></span>
<span class="line"><span>iterator QByteArray::begin();  </span></span>
<span class="line"><span>iterator QByteArray::end();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用数组的方式进行遍历  </span></span>
<span class="line"><span>// i的取值范围 0 &lt;= i &lt; size()  </span></span>
<span class="line"><span>char QByteArray::at(int i) const;  </span></span>
<span class="line"><span>char QByteArray::operator[](int i) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看字节数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 返回字节数组对象中字符的个数  </span></span>
<span class="line"><span>int QByteArray::length() const;  </span></span>
<span class="line"><span>int QByteArray::size() const;  </span></span>
<span class="line"><span>int QByteArray::count() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 返回字节数组对象中 子字符串ba 出现的次数  </span></span>
<span class="line"><span>int QByteArray::count(const QByteArray &amp;ba) const;  </span></span>
<span class="line"><span>int QByteArray::count(const char *ba) const;  </span></span>
<span class="line"><span>// 返回字节数组对象中 字符串ch 出现的次数  </span></span>
<span class="line"><span>int QByteArray::count(char ch) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>类型转换 base表示要传入的数是几进制，默认为十进制 f=‘g&#39;表示使用科学计数法 prec表示精度</li></ul><p>ok用来判断转换是否成功</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 将QByteArray类型的字符串 转换为 char* 类型  </span></span>
<span class="line"><span>char *QByteArray::data();  </span></span>
<span class="line"><span>const char *QByteArray::data() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// int, short, long, float, double -&gt; QByteArray  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::setNum(int n, int base = 10);  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::setNum(short n, int base = 10);  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::setNum(qlonglong n, int base = 10);  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::setNum(float n, char f = &#39;g&#39;, int prec = 6);  </span></span>
<span class="line"><span>QByteArray &amp;QByteArray::setNum(double n, char f = &#39;g&#39;, int prec = 6);  </span></span>
<span class="line"><span>[static] QByteArray QByteArray::number(int n, int base = 10);  </span></span>
<span class="line"><span>[static] QByteArray QByteArray::number(qlonglong n, int base = 10);  </span></span>
<span class="line"><span>[static] QByteArray QByteArray::number(double n, char f = &#39;g&#39;, int prec = 6);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// QByteArray -&gt; int, short, long, float, double  </span></span>
<span class="line"><span>int QByteArray::toInt(bool *ok = Q_NULLPTR, int base = 10) const;  </span></span>
<span class="line"><span>short QByteArray::toShort(bool *ok = Q_NULLPTR, int base = 10) const;  </span></span>
<span class="line"><span>long QByteArray::toLong(bool *ok = Q_NULLPTR, int base = 10) const;  </span></span>
<span class="line"><span>float QByteArray::toFloat(bool *ok = Q_NULLPTR) const;  </span></span>
<span class="line"><span>double QByteArray::toDouble(bool *ok = Q_NULLPTR) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// std::string -&gt; QByteArray  </span></span>
<span class="line"><span>[static] QByteArray QByteArray::fromStdString(const std::string &amp;str);  </span></span>
<span class="line"><span>// QByteArray -&gt; std::string  </span></span>
<span class="line"><span>std::string QByteArray::toStdString() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 所有字符转换为大写  </span></span>
<span class="line"><span>QByteArray QByteArray::toUpper() const;  </span></span>
<span class="line"><span>// 所有字符转换为小写  </span></span>
<span class="line"><span>QByteArray QByteArray::toLower() const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="qstring" tabindex="-1"><a class="header-anchor" href="#qstring"><span>QString</span></a></h2><p>QString也是封装了字符串, 但是内部的编码为<code>utf8</code>, UTF-8属于Unicode字符集, <code>它固定使用多个字节（window为2字节, linux为3字节）来表示一个字符</code>，这样可以将世界上几乎所有语言的常用字符收录其中。</p><ul><li>构造函数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造一个空字符串对象  </span></span>
<span class="line"><span>QString::QString();  </span></span>
<span class="line"><span>// 将 char* 字符串 转换为 QString 类型  </span></span>
<span class="line"><span>QString::QString(const char *str);  </span></span>
<span class="line"><span>// 将 QByteArray 转换为 QString 类型  </span></span>
<span class="line"><span>QString::QString(const QByteArray &amp;ba);  </span></span>
<span class="line"><span>// 其他重载的同名构造函数可参考Qt帮助文档, 此处略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>QByteArray里面就是char* 类型，但QString虽然提供的构造函数可以对char* 进行封装，但里面不是普通的char* 而是被处理过的char*</p><ul><li>数据操作</li></ul><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 尾部追加数据  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QString &amp;QString::append(const QString &amp;str);  </span></span>
<span class="line"><span>QString &amp;QString::append(const char *str);  </span></span>
<span class="line"><span>QString &amp;QString::append(const QByteArray &amp;ba);  </span></span>
<span class="line"><span>void QString::push_back(const QString &amp;other);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 头部添加数据  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QString &amp;QString::prepend(const QString &amp;str);  </span></span>
<span class="line"><span>QString &amp;QString::prepend(const char *str);  </span></span>
<span class="line"><span>QString &amp;QString::prepend(const QByteArray &amp;ba);  </span></span>
<span class="line"><span>void QString::push_front(const QString &amp;other);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 插入数据, 将 str 插入到字符串第 position 个字符的位置(从0开始)  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QString &amp;QString::insert(int position, const QString &amp;str);  </span></span>
<span class="line"><span>QString &amp;QString::insert(int position, const char *str);  </span></span>
<span class="line"><span>QString &amp;QString::insert(int position, const QByteArray &amp;str);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 删除数据  </span></span>
<span class="line"><span>// 从大字符串中删除len个字符, 从第pos个字符的位置开始删除  </span></span>
<span class="line"><span>QString &amp;QString::remove(int position, int n);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 从字符串的尾部删除 n 个字符  </span></span>
<span class="line"><span>void QString::chop(int n);  </span></span>
<span class="line"><span>// 从字节串的 position 位置将字符串截断 (前边部分留下, 后边部分被删除)  </span></span>
<span class="line"><span>void QString::truncate(int position);  </span></span>
<span class="line"><span>// 将对象中的数据清空, 使其为null  </span></span>
<span class="line"><span>void QString::clear();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 字符串替换  </span></span>
<span class="line"><span>// 将字节数组中的 子字符串 before 替换为 after  </span></span>
<span class="line"><span>// 参数 cs 为是否区分大小写, 默认区分大小写  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QString &amp;QString::replace(const QString &amp;before, const QString &amp;after, Qt::CaseSensitivity cs = Qt::CaseSensitive);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li>子字符串查找和判断 QString在进行字符串处理的时候多了cs参数用来区分大小写，QByteArray虽然有同名函数但不区分大小写</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 参数 cs 为是否区分大小写, 默认区分大小写  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 判断字符串中是否包含子字符串 str, 包含返回true, 否则返回false  </span></span>
<span class="line"><span>bool QString::contains(const QString &amp;str, Qt::CaseSensitivity cs = Qt::CaseSensitive) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 判断字符串是否以字符串 ba 开始, 是返回true, 不是返回false  </span></span>
<span class="line"><span>bool QString::startsWith(const QString &amp;s, Qt::CaseSensitivity cs = Qt::CaseSensitive) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 判断字符串是否以字符串 ba 结尾, 是返回true, 不是返回false  </span></span>
<span class="line"><span>bool QString::endsWith(const QString &amp;s, Qt::CaseSensitivity cs = Qt::CaseSensitive) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>遍历</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 使用迭代器  </span></span>
<span class="line"><span>iterator QString::begin();  </span></span>
<span class="line"><span>iterator QString::end();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 使用数组的方式进行遍历  </span></span>
<span class="line"><span>// i的取值范围 0 &lt;= position &lt; size()  </span></span>
<span class="line"><span>const QChar QString::at(int position) const  </span></span>
<span class="line"><span>const QChar QString::operator[](int position) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看字节数 QString中所有的字都算一个字符，中文也算一个字符 QByteArray中一个汉字占三字节</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 返回字节数组对象中字符的个数 (字符个数和字节个数是不同的概念)  </span></span>
<span class="line"><span>int QString::length() const;  </span></span>
<span class="line"><span>int QString::size() const;  </span></span>
<span class="line"><span>int QString::count() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 返回字节串对象中 子字符串 str 出现的次数  </span></span>
<span class="line"><span>// 参数 cs 为是否区分大小写, 默认区分大小写  </span></span>
<span class="line"><span>int QString::count(const QStringRef &amp;str, Qt::CaseSensitivity cs = Qt::CaseSensitive) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>类型转换</li></ul><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 将int, short, long, float, double 转换为 QString 类型  </span></span>
<span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QString &amp;QString::setNum(int n, int base = 10);  </span></span>
<span class="line"><span>QString &amp;QString::setNum(short n, int base = 10);  </span></span>
<span class="line"><span>QString &amp;QString::setNum(long n, int base = 10);  </span></span>
<span class="line"><span>QString &amp;QString::setNum(float n, char format = &#39;g&#39;, int precision = 6);  </span></span>
<span class="line"><span>QString &amp;QString::setNum(double n, char format = &#39;g&#39;, int precision = 6);  </span></span>
<span class="line"><span>[static] QString QString::number(long n, int base = 10);  </span></span>
<span class="line"><span>[static] QString QString::number(int n, int base = 10);  </span></span>
<span class="line"><span>[static] QString QString::number(double n, char format = &#39;g&#39;, int precision = 6);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 将 QString 转换为 int, short, long, float, double 类型  </span></span>
<span class="line"><span>int QString::toInt(bool *ok = Q_NULLPTR, int base = 10) const;  </span></span>
<span class="line"><span>short QString::toShort(bool *ok = Q_NULLPTR, int base = 10) const;  </span></span>
<span class="line"><span>long QString::toLong(bool *ok = Q_NULLPTR, int base = 10) const  </span></span>
<span class="line"><span>float QString::toFloat(bool *ok = Q_NULLPTR) const;  </span></span>
<span class="line"><span>double QString::toDouble(bool *ok = Q_NULLPTR) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 将标准C++中的 std::string 类型 转换为 QString 类型  </span></span>
<span class="line"><span>[static] QString QString::fromStdString(const std::string &amp;str);  </span></span>
<span class="line"><span>// 将 QString 转换为 标准C++中的 std::string 类型  </span></span>
<span class="line"><span>std::string QString::toStdString() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// QString -&gt; QByteArray  </span></span>
<span class="line"><span>// 转换为本地编码, 跟随操作系统  </span></span>
<span class="line"><span>QByteArray QString::toLocal8Bit() const;  </span></span>
<span class="line"><span>// 转换为 Latin-1 编码的字符串 不支持中文  </span></span>
<span class="line"><span>QByteArray QString::toLatin1() const;  </span></span>
<span class="line"><span>// 转换为 utf8 编码格式的字符串 (常用)  </span></span>
<span class="line"><span>QByteArray QString::toUtf8() const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 所有字符转换为大写  </span></span>
<span class="line"><span>QString QString::toUpper() const;  </span></span>
<span class="line"><span>// 所有字符转换为小写  </span></span>
<span class="line"><span>QString QString::toLower() const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li>字符串格式</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 其他重载的同名函数可参考Qt帮助文档, 此处略  </span></span>
<span class="line"><span>QString QString::arg(const QString &amp;a,   int fieldWidth = 0,   QChar fillChar = QLatin1Char( &#39; &#39; )) const;  </span></span>
<span class="line"><span>QString QString::arg(int a, int fieldWidth = 0,   int base = 10,   QChar fillChar = QLatin1Char( &#39; &#39; )) const;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 示例程序  </span></span>
<span class="line"><span>int i;                // 假设该变量表示当前文件的编号  </span></span>
<span class="line"><span>int total;            // 假设该变量表示文件的总个数  </span></span>
<span class="line"><span>QString fileName;     // 假设该变量表示当前文件的名字  </span></span>
<span class="line"><span>// 使用以上三个变量拼接一个动态字符串  </span></span>
<span class="line"><span>QString status = QString(&quot;Processing file %1 of %2: %3&quot;)  </span></span>
<span class="line"><span>.arg(i).arg(total).arg(fileName);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47)]))}const r=n(l,[["render",t]]),c=JSON.parse('{"path":"/cpp/qt/3/","title":"3 Qt中的基础数据类型","lang":"zh-CN","frontmatter":{"title":"3 Qt中的基础数据类型","createTime":"2025/06/22 10:39:02","permalink":"/cpp/qt/3/"},"readingTime":{"minutes":12.33,"words":3699},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/Qt/3 Qt中的基础数据类型.md","headers":[]}');export{r as comp,c as data};
