import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>常用的数据库类：</p><ul><li><mark>QSqlDatabase</mark> ：通过这个类添加/删除/复制/关闭数据库实例</li><li><mark>QSqlQuery</mark> ：数据库查询类</li><li><mark>QSqlRecord</mark> ：数据库记录（通常是数据库中表或视图中的一行）的功能和特征。</li><li><mark>QSqlField</mark> ：数据库表或视图中单个列的特征，例如数据类型和列名。</li><li><mark>QSqlQueryModel</mark> ：执行SQL语句和遍历结果集的高级接口。它构建在底层QSqlQuery之上，可以用来为视图类(如QTableView)提供数据。</li><li><mark>QSqlError</mark> ：数据操作失败可以通过这个类获取相关的错误信息。</li></ul><p>在Qt中不论我们连接的何种类型的关系型数据库，在我们使用的时候其操作流程是一致的：</p><ol><li>创建数据库实例并初始化</li><li>连接数据库</li><li>对数据库进行一系列的添、删、查、改操作（编写并执行SQL语句）</li><li>关闭数据库</li></ol><h1 id="qsqldatabase" tabindex="-1"><a class="header-anchor" href="#qsqldatabase"><span>QSqlDatabase</span></a></h1><h3 id="静态公共成员" tabindex="-1"><a class="header-anchor" href="#静态公共成员"><span>静态公共成员</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//添加数据库示例并不是使用构造函数，而是使用addDatabase静态成员添加</span></span>
<span class="line"><span>//type：连接数据库的驱动</span></span>
<span class="line"><span>//connectionName：数据库实例的名字，如果只连接一个数据库使用默认名即可，如果有多个数据库就通过这个名字区分开来</span></span>
<span class="line"><span>QSqlDatabase addDatabase(const QString &amp;type,const QString &amp;connectionName = QLatin1String(defaultConnection))</span></span>
<span class="line"><span>QSqlDatabase addDatabase(QSqlDriver *driver,const QString &amp;connectionName=QLatin1String(defaultConnection))</span></span>
<span class="line"><span>//复制数据库实例</span></span>
<span class="line"><span>//other就是指定的数据库实例，connectionName需要给这个克隆的实例指定一个名字</span></span>
<span class="line"><span>QSqlDatabase cloneDatabase(const QSqlDatabase &amp;other,const QString &amp;connectionName)</span></span>
<span class="line"><span>//根据数据库实例的名字克隆，第一个参数是已有的数据库实例的名字，第二个是克隆出来的数据库实例的名字</span></span>
<span class="line"><span>QSqlDatabase cloneDatabase(const QString &amp;other,const QString &amp;cornectionName)</span></span>
<span class="line"><span>//获取所有的数据库实例的连接名</span></span>
<span class="line"><span>QStringList connectionNames()</span></span>
<span class="line"><span>//判断数据库实例是否存在，参数是实例连接名</span></span>
<span class="line"><span>bool contains(const QString &amp;connectionName=QLatin1String(defaultConnection))</span></span>
<span class="line"><span>//根据连接名得到数据库实例连接对象，第一个参数是要得到的连接名，第二个参数是得到这个实例后是打开的还是关闭的，如果是true就是打开的，如果是false就是关闭的，关闭了就连接不上了</span></span>
<span class="line"><span>QSqlDatabase database(const QString &amp;connectionName = QLatin1String(defaultConnection),bool open = true)</span></span>
<span class="line"><span>//获取当前设备支持的数据库，返回的是数据库驱动的名字</span></span>
<span class="line"><span>QStringList drivers()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool isDriverAvailable(const QString &amp;name)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void registerSqlDriver(const QString &amp;name, QSqlDriverCreatorBase *creator)</span></span>
<span class="line"><span>//根据连接名删除数据库实例</span></span>
<span class="line"><span>void removeDatabase(const QString &amp;connectionName)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="公共成员函数" tabindex="-1"><a class="header-anchor" href="#公共成员函数"><span>公共成员函数</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>//设置要连接的数据库的名字</span></span>
<span class="line"><span>void setDatabaseName(const QString &amp;name)</span></span>
<span class="line"><span>//设置要连接的主机名,localhost是本地的域名，对应的ip是127.0.0.1，如果是远程服务器指定的是远程服务器的ip地址</span></span>
<span class="line"><span>//如果是在本主机上连接有三种写法，一种是localhost，一种是127.0.0.1，一种是主机的ip地址</span></span>
<span class="line"><span>void setHostName(const QString &amp;host)</span></span>
<span class="line"><span>//指定用户名</span></span>
<span class="line"><span>void setUserName(const QString &amp;name)</span></span>
<span class="line"><span>//指定密码。如果是mysql数据库要访问数据库需要的是数据库名和该数据库名对应的密码，如果是orcal数据库需要的是用户名加上该用户的密码</span></span>
<span class="line"><span>void setPassword(const QString &amp;password)</span></span>
<span class="line"><span>//设置端口号，是数据库服务器在启动时绑定的端口，如果时mysql默认绑定的端口是3306，如果是orcal绑定的默认端口是1521</span></span>
<span class="line"><span>void setPort(int port)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//在设置好属性后就可以调用open方法进行连接了，连接成功返回true，连接失败返回false</span></span>
<span class="line"><span>bool open()</span></span>
<span class="line"><span>//判断qdatabase对象是否连接到数据库上，如果连接上返回true，没连接返回false</span></span>
<span class="line"><span>bool isOpen()</span></span>
<span class="line"><span>//数据库操作时最后的错误信息，但并不是一个文本信息，可以使用内置的text函数转化为文本信息</span></span>
<span class="line"><span>QSqlError lastError()const</span></span>
<span class="line"><span>//关闭连接</span></span>
<span class="line"><span>void QSqlDatabase::close()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="事务操作" tabindex="-1"><a class="header-anchor" href="#事务操作"><span>事务操作</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//创建事务</span></span>
<span class="line"><span>bool QSqlDatabase::transaction()</span></span>
<span class="line"><span>//提交事务</span></span>
<span class="line"><span>bool QSqlDatabase::commit();</span></span>
<span class="line"><span>//事务回滚</span></span>
<span class="line"><span>vool QSqlDatabase::rollback();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="qsqlquery" tabindex="-1"><a class="header-anchor" href="#qsqlquery"><span>QSqlQuery</span></a></h1><p><code>QSqlQuery</code>封装了从<code>QSqlDatabase</code>上执行的SQL查询中创建、导航和检索数据所涉及的功能。既可以执行<code>SELECT</code>、<code>INSERT</code>、<code>UPDATE</code>、<code>DELETE</code>等DML(数据操作语言)语句，也可以执行<code>CREATE TABLE</code>等DDL(数据定义语言)语句。</p><h2 id="常用成员函数" tabindex="-1"><a class="header-anchor" href="#常用成员函数"><span>常用成员函数</span></a></h2><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//query：要执行的sql语句，如果没有指定可以使用exec函数传入进来。db：数据库实例对象，如果没有指定db，或者是无效的，则使用应用程序的默认数据库。</span></span>
<span class="line"><span>QSqlQuery(const QString &amp;query = QString(),QSqlDatabase db= QSqlDatabase())</span></span>
<span class="line"><span>QSqlQuery(const QSqlQuery&amp;other)</span></span>
<span class="line"><span>QSqlQuery(QSqIDatabase db)</span></span>
<span class="line"><span>QSqlQuery(QSqlResult *result)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他函数" tabindex="-1"><a class="header-anchor" href="#其他函数"><span>其他函数</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//执行seql语句，如果在实例化对象时指定了sql语句就可以调用第一个重载函数执行，如果实例化时没有指定sql语句就需要调用第二个重载函数指定sql语句</span></span>
<span class="line"><span>//如果sql语句执行成功返回true，执行失败返回false</span></span>
<span class="line"><span>bool exec()</span></span>
<span class="line"><span>bool exec(const QStrting &amp;query)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果执行的是查询语句，在这个类里面就会把结果集保存起来，要获取其中的数据就需要遍历结果集，得到的结果集是一个多行多列的表结构，可以使用next方法获取，使用next方法遍历每次获取其中的一条记录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//如果指针的下一条数据存在就返回true，不存在就返回false（结果集遍历完或没有查询到相关信息，这样第一次调用就返回的是false）</span></span>
<span class="line"><span>bool next()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//返回结果集里的第一条记录</span></span>
<span class="line"><span>bool first()</span></span>
<span class="line"><span>//返回结果集里的最后一条记录</span></span>
<span class="line"><span>bool last()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//要取出结果集里的字段数据可以使用value方法</span></span>
<span class="line"><span>//通过value方法就可以取出字段对应的数据的值了</span></span>
<span class="line"><span>//索引从0开始，按照字段排</span></span>
<span class="line"><span>QVariant value(int index)const</span></span>
<span class="line"><span>//按照字段名获取</span></span>
<span class="line"><span>QVariant value(const QString &amp;name)const</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/cpp/qt/7/","title":"7 数据库","lang":"zh-CN","frontmatter":{"title":"7 数据库","createTime":"2025/06/22 10:39:26","permalink":"/cpp/qt/7/"},"readingTime":{"minutes":5.07,"words":1520},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/Qt/7 数据库.md","headers":[]}');export{r as comp,t as data};
