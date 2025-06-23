import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>Qt中常用的窗口类, 主要内容包括: 窗口类的基类QWidget, 对话框基类QDialog, 带菜单栏工具栏状态栏的QMainWindow, 消息对话框QMessageBox, 文件对话框QFileDialog, 字体对话框QFontDialog, 颜色对话框QColorDialog, 输入型对话框QInputDialog, 进度条对话框QProgressDialog, 资源文件。</p><p>![[Pasted image 20240315105244.png]]</p><p><strong>setAttribute(Qt::WA_DeleteOnClose)</strong> 虽然qt有对象树机制可以帮助我们进行内存回收,但假设用户在操作页面时在一个父窗口中一直创建子窗口并关闭,但由于父窗口没有关闭,所以子窗口的内存也没有释放,可以调用<code>setAttribute</code> 对窗口进行设置在窗口关闭时就释放, 其参数对应的枚举值还有很多</p><h1 id="qwidget" tabindex="-1"><a class="header-anchor" href="#qwidget"><span>QWidget</span></a></h1><p>QWidget类是所有窗口类的父类(控件类是也属于窗口类), 并且QWidget类的父类的QObject, 也就意味着所有的窗口类对象只要指定了父对象, 都可以实现内存资源的自动回收。 下面来介绍这个类常用的一些API函数。</p><p>QWidget是所有界面组件类的直接或间接父类。 widget组件：所有界面组件的统称，它从操作系统接收鼠标、键盘和其他事件，并在屏幕上显示自己。每个组件都是矩形的，并且按z轴顺序排列（类似图层）。</p><p>window:没有嵌入到父组件中的组件。通常，它有一个frame和一个标题栏，可以使用window flags 创建没有这两个装饰的窗口。在Qt中，QMainWindow和QDialog的各种子类是最常见的window类型。</p><h3 id="设置父对象" tabindex="-1"><a class="header-anchor" href="#设置父对象"><span>设置父对象</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>QWidget::QWidget(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 公共成员函数</span></span>
<span class="line"><span>// 给当前窗口设置父对象</span></span>
<span class="line"><span>void QWidget::setParent(QWidget *parent);</span></span>
<span class="line"><span>//设置父对象时改变窗口属性</span></span>
<span class="line"><span>void QWidget::setParent(QWidget *parent, Qt::WindowFlags f);</span></span>
<span class="line"><span>// 获取当前窗口的父对象, 没有父对象返回 nullptr</span></span>
<span class="line"><span>QWidget *QWidget::parentWidget() const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="窗口位置" tabindex="-1"><a class="header-anchor" href="#窗口位置"><span>窗口位置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//------------- 窗口位置 -------------</span></span>
<span class="line"><span>// 得到相对于当前窗口父窗口的几何信息, 边框也被计算在内</span></span>
<span class="line"><span>QRect QWidget::frameGeometry() const;</span></span>
<span class="line"><span>// 得到相对于当前窗口父窗口的几何信息, 不包括边框</span></span>
<span class="line"><span>const QRect &amp;geometry() const;</span></span>
<span class="line"><span>// 设置当前窗口的几何信息(位置和尺寸信息), 不包括边框</span></span>
<span class="line"><span>//x和y就是两个坐标组合就是QPoint，w和h就是宽度和高度两者组合就是QSize。QPoint和QSize组合就是QRect</span></span>
<span class="line"><span>void setGeometry(int x, int y, int w, int h);</span></span>
<span class="line"><span>void setGeometry(const QRect &amp;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// 移动窗口, 重新设置窗口的位置</span></span>
<span class="line"><span>void move(int x, int y);</span></span>
<span class="line"><span>void move(const QPoint &amp;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 获取当前窗口的位置信息</span></span>
<span class="line"><span>void MainWindow::on_positionBtn_clicked(){</span></span>
<span class="line"><span>    QRect rect = this-&gt;frameGeometry();</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;左上角: &quot; &lt;&lt; rect.topLeft()</span></span>
<span class="line"><span>             &lt;&lt; &quot;右上角: &quot; &lt;&lt; rect.topRight()</span></span>
<span class="line"><span>             &lt;&lt; &quot;左下角: &quot; &lt;&lt; rect.bottomLeft()</span></span>
<span class="line"><span>             &lt;&lt; &quot;右下角: &quot; &lt;&lt; rect.bottomRight()</span></span>
<span class="line"><span>             &lt;&lt; &quot;宽度: &quot; &lt;&lt; rect.width()</span></span>
<span class="line"><span>             &lt;&lt; &quot;高度: &quot; &lt;&lt; rect.height();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重新设置当前窗口的位置以及宽度, 高度</span></span>
<span class="line"><span>void MainWindow::on_geometryBtn_clicked(){</span></span>
<span class="line"><span>    int x = 100 + rand() % 500;</span></span>
<span class="line"><span>    int y = 100 + rand() % 500;</span></span>
<span class="line"><span>    int width = this-&gt;width() + 10;</span></span>
<span class="line"><span>    int height = this-&gt;height() + 10;</span></span>
<span class="line"><span>    setGeometry(x, y, width, height);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过 move() 方法移动窗口</span></span>
<span class="line"><span>void MainWindow::on_moveBtn_clicked(){</span></span>
<span class="line"><span>    QRect rect = this-&gt;frameGeometry();</span></span>
<span class="line"><span>    move(rect.topLeft() + QPoint(10, 20));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="窗口尺寸" tabindex="-1"><a class="header-anchor" href="#窗口尺寸"><span>窗口尺寸</span></a></h3><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//------------- 窗口尺寸 -------------</span></span>
<span class="line"><span>// 获取当前窗口的尺寸信息</span></span>
<span class="line"><span>QSize size() const</span></span>
<span class="line"><span>// 重新设置窗口的尺寸信息</span></span>
<span class="line"><span>void resize(int w, int h);</span></span>
<span class="line"><span>void resize(const QSize &amp;);</span></span>
<span class="line"><span>// 获取当前窗口的最大尺寸信息</span></span>
<span class="line"><span>QSize maximumSize() const;</span></span>
<span class="line"><span>// 获取当前窗口的最小尺寸信息</span></span>
<span class="line"><span>QSize minimumSize() const;</span></span>
<span class="line"><span>// 设置当前窗口固定的尺寸信息</span></span>
<span class="line"><span>void QWidget::setFixedSize(const QSize &amp;s);</span></span>
<span class="line"><span>void QWidget::setFixedSize(int w, int h);</span></span>
<span class="line"><span>// 设置当前窗口的最大尺寸信息</span></span>
<span class="line"><span>void setMaximumSize(const QSize &amp;);</span></span>
<span class="line"><span>void setMaximumSize(int maxw, int maxh);</span></span>
<span class="line"><span>// 设置当前窗口的最小尺寸信息</span></span>
<span class="line"><span>void setMinimumSize(const QSize &amp;);</span></span>
<span class="line"><span>void setMinimumSize(int minw, int minh);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取当前窗口的高度    </span></span>
<span class="line"><span>int height() const;</span></span>
<span class="line"><span>// 获取当前窗口的最小高度</span></span>
<span class="line"><span>int minimumHeight() const;</span></span>
<span class="line"><span>// 获取当前窗口的最大高度</span></span>
<span class="line"><span>int maximumHeight() const;</span></span>
<span class="line"><span>// 给窗口设置固定的高度</span></span>
<span class="line"><span>void QWidget::setFixedHeight(int h);</span></span>
<span class="line"><span>// 给窗口设置最大高度</span></span>
<span class="line"><span>void setMaximumHeight(int maxh);</span></span>
<span class="line"><span>// 给窗口设置最小高度</span></span>
<span class="line"><span>void setMinimumHeight(int minh);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取当前窗口的宽度</span></span>
<span class="line"><span>int width() const;</span></span>
<span class="line"><span>// 获取当前窗口的最小宽度</span></span>
<span class="line"><span>int minimumWidth() const;</span></span>
<span class="line"><span>// 获取当前窗口的最大宽度</span></span>
<span class="line"><span>int maximumWidth() const;</span></span>
<span class="line"><span>// 给窗口设置固定宽度</span></span>
<span class="line"><span>void QWidget::setFixedWidth(int w);</span></span>
<span class="line"><span>// 给窗口设置最大宽度</span></span>
<span class="line"><span>void setMaximumWidth(int maxw);</span></span>
<span class="line"><span>// 给窗口设置最小宽度</span></span>
<span class="line"><span>void setMinimumWidth(int minw);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="窗口标题和图标" tabindex="-1"><a class="header-anchor" href="#窗口标题和图标"><span>窗口标题和图标</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//------------- 窗口图标 -------------</span></span>
<span class="line"><span>// 得到当前窗口的图标</span></span>
<span class="line"><span>QIcon windowIcon() const;</span></span>
<span class="line"><span>// 构造图标对象, 参数为图片的路径</span></span>
<span class="line"><span>QIcon::QIcon(const QString &amp;fileName);</span></span>
<span class="line"><span>// 设置当前窗口的图标</span></span>
<span class="line"><span>void setWindowIcon(const QIcon &amp;icon);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//------------- 窗口标题 -------------</span></span>
<span class="line"><span>// 得到当前窗口的标题</span></span>
<span class="line"><span>QString windowTitle() const;</span></span>
<span class="line"><span>// 设置当前窗口的标题</span></span>
<span class="line"><span>void setWindowTitle(const QString &amp;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="信号" tabindex="-1"><a class="header-anchor" href="#信号"><span>信号</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// QWidget::setContextMenuPolicy(Qt::ContextMenuPolicy policy);</span></span>
<span class="line"><span>// 窗口的右键菜单策略 contextMenuPolicy() 参数设置为 Qt::CustomContextMenu, 按下鼠标右键发射该信号</span></span>
<span class="line"><span>[signal] void QWidget::customContextMenuRequested(const QPoint &amp;pos);</span></span>
<span class="line"><span>// 窗口图标发生变化, 发射此信号</span></span>
<span class="line"><span>[signal] void QWidget::windowIconChanged(const QIcon &amp;icon);</span></span>
<span class="line"><span>// 窗口标题发生变化, 发射此信号</span></span>
<span class="line"><span>[signal] void QWidget::windowTitleChanged(const QString &amp;title);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="槽函数" tabindex="-1"><a class="header-anchor" href="#槽函数"><span>槽函数</span></a></h3><p>窗口显示</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//------------- 窗口显示 -------------</span></span>
<span class="line"><span>// 关闭当前窗口</span></span>
<span class="line"><span>[slot] bool QWidget::close();</span></span>
<span class="line"><span>// 隐藏当前窗口</span></span>
<span class="line"><span>[slot] void QWidget::hide();</span></span>
<span class="line"><span>// 显示当前创建以及其子窗口</span></span>
<span class="line"><span>[slot] void QWidget::show();</span></span>
<span class="line"><span>// 全屏显示当前窗口, 只对windows有效</span></span>
<span class="line"><span>[slot] void QWidget::showFullScreen();</span></span>
<span class="line"><span>// 窗口最大化显示, 只对windows有效</span></span>
<span class="line"><span>[slot] void QWidget::showMaximized();</span></span>
<span class="line"><span>// 窗口最小化显示, 只对windows有效</span></span>
<span class="line"><span>[slot] void QWidget::showMinimized();</span></span>
<span class="line"><span>// 将窗口回复为最大化/最小化之前的状态, 只对windows有效</span></span>
<span class="line"><span>[slot] void QWidget::showNormal();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//------------- 窗口状态 -------------</span></span>
<span class="line"><span>// 判断窗口是否可用</span></span>
<span class="line"><span>bool QWidget::isEnabled() const; // 非槽函数</span></span>
<span class="line"><span>// 设置窗口是否可用, 不可用窗口无法接收和处理窗口事件</span></span>
<span class="line"><span>// 参数true-&gt;可用, false-&gt;不可用</span></span>
<span class="line"><span>[slot] void QWidget::setEnabled(bool);</span></span>
<span class="line"><span>// 设置窗口是否可用, 不可用窗口无法接收和处理窗口事件</span></span>
<span class="line"><span>// 参数true-&gt;不可用, false-&gt;可用</span></span>
<span class="line"><span>[slot] void QWidget::setDisabled(bool disable);</span></span>
<span class="line"><span>// 设置窗口是否可见, 参数为true-&gt;可见, false-&gt;不可见</span></span>
<span class="line"><span>[slot] virtual void QWidget::setVisible(bool visible);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qmenu" tabindex="-1"><a class="header-anchor" href="#qmenu"><span>QMenu</span></a></h1><p>可配合QWidget的[signal] void QWidget::customContextMenuRequested(const QPoint &amp;pos);方法生成右键菜单项，也可以创建菜单</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//往菜单栏内添加选项，名称为QString类型的name</span></span>
<span class="line"><span>QAction* addAction(const QString &amp;text);</span></span>
<span class="line"><span>//对于右键菜单选项常用带参的exec跟踪光标的位置在光标的位置生成菜单</span></span>
<span class="line"><span>QAction* exec(const QPoint &amp;p,QAction *action=nullptr);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="qdialog" tabindex="-1"><a class="header-anchor" href="#qdialog"><span>QDialog</span></a></h1><p>对话框分为<mark>模态和非模态</mark> 在模态对话框中对话框存在时无法与其他窗口操作,非模态对话框可以与其他窗口操作 常用exec使QDialog作为模态对话框展示出来（即焦点在QDialog对话框上面），当模态对话框执行中时焦点不可转移到其他对话框，除非关闭模态对话框 常用show函数使窗口以非模态形式展示出来 accept()和reject()会隐藏模态窗口，并分别发射accepted()和rejected()的信号， 对话框类是QWidget类的子类, 处理继承自父类的属性之外, 还有一些自己所特有的属性, 常用的一些API函数如下：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>QDialog::QDialog(QWidget *parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模态显示窗口</span></span>
<span class="line"><span>[virtual slot] int QDialog::exec();</span></span>
<span class="line"><span>// 隐藏模态窗口, 并且解除模态窗口的阻塞, 将 exec() 的返回值设置为 QDialog::Accepted</span></span>
<span class="line"><span>[virtual slot] void QDialog::accept();</span></span>
<span class="line"><span>// 隐藏模态窗口, 并且解除模态窗口的阻塞, 将 exec() 的返回值设置为 QDialog::Rejected</span></span>
<span class="line"><span>[virtual slot] void QDialog::reject();</span></span>
<span class="line"><span>// 关闭对话框并将其结果代码设置为r。finished()信号将发出r;</span></span>
<span class="line"><span>// 如果r是QDialog::Accepted 或 QDialog::Rejected，则还将分别发出accept()或Rejected()信号。</span></span>
<span class="line"><span>[virtual slot] void QDialog::done(int r);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[signal] void QDialog::accepted();</span></span>
<span class="line"><span>[signal] void QDialog::rejected();</span></span>
<span class="line"><span>[signal] void QDialog::finished(int result);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="常用使用方法" tabindex="-1"><a class="header-anchor" href="#常用使用方法"><span>常用使用方法</span></a></h2><blockquote><p>[!example] 场景介绍</p><ol><li>有两个窗口, 主窗口和一个对话框子窗口</li><li>对话框窗口先显示, 根据用户操作选择是否显示主窗口</li></ol></blockquote><h4 id="关于对话框窗口类的操作" tabindex="-1"><a class="header-anchor" href="#关于对话框窗口类的操作"><span>关于对话框窗口类的操作</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 对话框窗口中三个普通按钮按下之后对应的槽函数</span></span>
<span class="line"><span>void MyDialog::on_acceptBtn_clicked(){</span></span>
<span class="line"><span>    this-&gt;accept();  // exec()函数返回值为QDialog::Accepted</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void MyDialog::on_rejectBtn_clicked(){</span></span>
<span class="line"><span>    this-&gt;reject();  // exec()函数返回值为QDialog::Rejected</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void MyDialog::on_donBtn_clicked(){</span></span>
<span class="line"><span>    // exec()函数返回值为 done() 的参数, 并根据参数发射出对应的信号</span></span>
<span class="line"><span>    this-&gt;done(666);   </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据用户针对对话框窗口的按钮操作-进行相应的逻辑处理。" tabindex="-1"><a class="header-anchor" href="#根据用户针对对话框窗口的按钮操作-进行相应的逻辑处理。"><span>根据用户针对对话框窗口的按钮操作, 进行相应的逻辑处理。</span></a></h4><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 创建对话框对象</span></span>
<span class="line"><span>MyDialog dlg;    </span></span>
<span class="line"><span>int ret = dlg.exec();</span></span>
<span class="line"><span>if(ret == QDialog::Accepted){</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;accept button clicked...&quot;;</span></span>
<span class="line"><span>    // 显示主窗口</span></span>
<span class="line"><span>    MainWindow* w = new MainWindow;</span></span>
<span class="line"><span>    w-&gt;show();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if(ret == QDialog::Rejected){</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;reject button clicked...&quot;;</span></span>
<span class="line"><span>    // 不显示主窗口</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else{</span></span>
<span class="line"><span>    // ret == 666</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;done button clicked...&quot;;</span></span>
<span class="line"><span>    // 根据需求进行逻辑处理</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="qdialog的子类" tabindex="-1"><a class="header-anchor" href="#qdialog的子类"><span>QDialog的子类</span></a></h2><h3 id="qmessagebox" tabindex="-1"><a class="header-anchor" href="#qmessagebox"><span>QMessageBox</span></a></h3><p>![[Clip_2024-03-16_13-19-47.png]] QMessageBox 对话框类是 QDialog 类的子类, 通过这个类可以显示一些简单的提示框, 用于展示警告、错误、问题等信息。关于这个类我们只需要掌握一些静态方法的使用就可以了。 <strong>API - 静态函数</strong></p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 显示一个模态对话框, 将参数 text 的信息展示到窗口中</span></span>
<span class="line"><span>[static] void QMessageBox::about(QWidget *parent, const QString &amp;title, const QString &amp;text);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>- parent: 对话框窗口的父窗口</span></span>
<span class="line"><span>- title: 对话框窗口的标题</span></span>
<span class="line"><span>- text: 对话框窗口中显示的提示信息</span></span>
<span class="line"><span>- buttons: 对话框窗口中显示的按钮(一个或多个)</span></span>
<span class="line"><span>- defaultButton</span></span>
<span class="line"><span>    1. defaultButton指定按下Enter键时使用的按钮。</span></span>
<span class="line"><span>    2. defaultButton必须引用在参数 buttons 中给定的按钮。</span></span>
<span class="line"><span>    3. 如果defaultButton是QMessageBox::NoButton, QMessageBox会自动选择一个合适的默认值。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>// 显示一个信息模态对话框</span></span>
<span class="line"><span>[static] QMessageBox::StandardButton QMessageBox::information(</span></span>
<span class="line"><span>           QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>           const QString &amp;text, </span></span>
<span class="line"><span>           QMessageBox::StandardButtons buttons = Ok,</span></span>
<span class="line"><span>           QMessageBox::StandardButton defaultButton = NoButton);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示一个错误模态对话框默认显示ok选项</span></span>
<span class="line"><span>[static] QMessageBox::StandardButton QMessageBox::critical(</span></span>
<span class="line"><span>           QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>           const QString &amp;text, </span></span>
<span class="line"><span>           QMessageBox::StandardButtons buttons = Ok,</span></span>
<span class="line"><span>           QMessageBox::StandardButton defaultButton = NoButton);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示一个问题模态对话框默认显示Yes和No选项</span></span>
<span class="line"><span>[static] QMessageBox::StandardButton QMessageBox::question(</span></span>
<span class="line"><span>           QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>           const QString &amp;text, </span></span>
<span class="line"><span>           QMessageBox::StandardButtons buttons = StandardButtons(Yes | No), </span></span>
<span class="line"><span>           QMessageBox::StandardButton defaultButton = NoButton);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 显示一个警告模态对话框</span></span>
<span class="line"><span>[static] QMessageBox::StandardButton QMessageBox::warning(</span></span>
<span class="line"><span>           QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>           const QString &amp;text, </span></span>
<span class="line"><span>           QMessageBox::StandardButtons buttons = Ok,</span></span>
<span class="line"><span>           QMessageBox::StandardButton defaultButton = NoButton);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>其中还有enum QMessageBox::StandardButtons枚举值，有很多对话框中显示的选项</p><h3 id="qfiledialog" tabindex="-1"><a class="header-anchor" href="#qfiledialog"><span>QFileDialog</span></a></h3><p>![[Clip_2024-03-16_13-20-24.png]] QFileDialog 对话框类是 QDialog 类的子类, 通过这个类可以选择要打开/保存的文件或者目录。关于这个类我们只需要掌握一些静态方法的使用就可以了。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>通用参数:</span></span>
<span class="line"><span>  - parent: 当前对话框窗口的父对象也就是父窗口</span></span>
<span class="line"><span>  - caption: 当前对话框窗口的标题</span></span>
<span class="line"><span>  - dir: 当前对话框窗口打开的默认目录</span></span>
<span class="line"><span>  - options: 当前对话框窗口的一些可选项,枚举类型, 一般不需要进行设置, 使用默认值即可</span></span>
<span class="line"><span>  - filter: 过滤器, 在对话框中只显示满足条件的文件, 可以指定多个过滤器, 使用 ;; 分隔</span></span>
<span class="line"><span>    - 样式举例: </span></span>
<span class="line"><span>	- Images (*.png *.jpg)</span></span>
<span class="line"><span>	- Images (*.png *.jpg);;Text files (*.txt)</span></span>
<span class="line"><span>  - selectedFilter: 如果指定了多个过滤器, 通过该参数指定默认使用哪一个, 不指定默认使用第一个过滤器</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>// 打开一个目录, 得到这个目录的绝对路径</span></span>
<span class="line"><span>[static] QString QFileDialog::getExistingDirectory(</span></span>
<span class="line"><span>                  QWidget *parent = nullptr, </span></span>
<span class="line"><span>                  const QString &amp;caption = QString(), </span></span>
<span class="line"><span>                  const QString &amp;dir = QString(), </span></span>
<span class="line"><span>                  QFileDialog::Options options = ShowDirsOnly);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打开一个文件, 得到这个文件的绝对路径</span></span>
<span class="line"><span>[static] QString QFileDialog::getOpenFileName(</span></span>
<span class="line"><span>    	          QWidget *parent = nullptr, </span></span>
<span class="line"><span>    		  const QString &amp;caption = QString(), </span></span>
<span class="line"><span>                  const QString &amp;dir = QString(), </span></span>
<span class="line"><span>                  const QString &amp;filter = QString(), </span></span>
<span class="line"><span>                  QString *selectedFilter = nullptr, </span></span>
<span class="line"><span>                  QFileDialog::Options options = Options());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打开多个文件, 得到这多个文件的绝对路径</span></span>
<span class="line"><span>[static] QStringList QFileDialog::getOpenFileNames(</span></span>
<span class="line"><span>    	          QWidget *parent = nullptr, </span></span>
<span class="line"><span>                  const QString &amp;caption = QString(), </span></span>
<span class="line"><span>                  const QString &amp;dir = QString(), </span></span>
<span class="line"><span>                  const QString &amp;filter = QString(), </span></span>
<span class="line"><span>                  QString *selectedFilter = nullptr, </span></span>
<span class="line"><span>                  QFileDialog::Options options = Options());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打开一个目录, 使用这个目录来保存指定的文件</span></span>
<span class="line"><span>[static] QString QFileDialog::getSaveFileName(</span></span>
<span class="line"><span>    		  QWidget *parent = nullptr, </span></span>
<span class="line"><span>                  const QString &amp;caption = QString(), </span></span>
<span class="line"><span>                  const QString &amp;dir = QString(), </span></span>
<span class="line"><span>                  const QString &amp;filter = QString(), </span></span>
<span class="line"><span>                  QString *selectedFilter = nullptr, </span></span>
<span class="line"><span>                  QFileDialog::Options options = Options());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="qfontdialog" tabindex="-1"><a class="header-anchor" href="#qfontdialog"><span>QFontDialog</span></a></h3><p>![[Clip_2024-03-16_13-20-58.png]] QFontDialog类是QDialog的子类, 通过这个类我们可以得到一个进行字体属性设置的对话框窗口, 和前边介绍的对话框类一样, 我们只需要调用这个类的静态成员函数就可以得到想要的窗口了。</p><h4 id="qfont-字体类" tabindex="-1"><a class="header-anchor" href="#qfont-字体类"><span>QFont 字体类</span></a></h4><p>关于字体的属性信息, 在QT框架中被封装到了一个叫QFont的类中, 下边为大家介绍一下这个类的API, 了解一下关于这个类的使用。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>  QFont::QFont();</span></span>
<span class="line"><span>  /*</span></span>
<span class="line"><span>  常用第三个构造方法，前两个方法还需要后面调用函数设置</span></span>
<span class="line"><span>  参数:</span></span>
<span class="line"><span>    - family: 本地字库中的字体名, 通过 office 等文件软件可以查看</span></span>
<span class="line"><span>    - pointSize: 字体的字号，默认是-1并不是说字号是-1，而是12</span></span>
<span class="line"><span>    - weight: 字体的粗细, 有效范围为 0 ~ 99，默认-1是不加粗</span></span>
<span class="line"><span>    - italic: 字体是否倾斜显示, 默认不倾斜</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>  QFont(const QFont &amp;font);</span></span>
<span class="line"><span>  QFont(const QFont &amp;font,const QPaintDevice *pd);</span></span>
<span class="line"><span>  QFont::QFont(const QString &amp;family, int pointSize = -1, int weight = -1, bool italic = false);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 设置字体</span></span>
<span class="line"><span>  void QFont::setFamily(const QString &amp;family);</span></span>
<span class="line"><span>  // 根据字号设置字体大小</span></span>
<span class="line"><span>  void QFont::setPointSize(int pointSize);</span></span>
<span class="line"><span>  // 根据像素设置字体大小</span></span>
<span class="line"><span>  void QFont::setPixelSize(int pixelSize);</span></span>
<span class="line"><span>  // 设置字体的粗细程度, 有效范围: 0 ~ 99</span></span>
<span class="line"><span>  void QFont::setWeight(int weight);</span></span>
<span class="line"><span>  // 设置字体是否加粗显示</span></span>
<span class="line"><span>  void QFont::setBold(bool enable);</span></span>
<span class="line"><span>  // 设置字体是否要倾斜显示</span></span>
<span class="line"><span>  void QFont::setItalic(bool enable);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 获取字体相关属性(一般规律: 去掉设置函数的 set 就是获取相关属性对应的函数名)</span></span>
<span class="line"><span>  QString QFont::family() const;</span></span>
<span class="line"><span>  bool QFont::italic() const;</span></span>
<span class="line"><span>  int QFont::pixelSize() const;</span></span>
<span class="line"><span>  int QFont::pointSize() const;</span></span>
<span class="line"><span>  bool QFont::bold() const;</span></span>
<span class="line"><span>  int QFont::weight() const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="qfontdialog类的静态api" tabindex="-1"><a class="header-anchor" href="#qfontdialog类的静态api"><span>QFontDialog类的静态API</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>  - ok: 传出参数, 用于判断是否获得了有效字体信息, 指定一个布尔类型变量地址</span></span>
<span class="line"><span>  - initial: 字体对话框中默认选中并显示该字体信息, 用于对话框的初始化</span></span>
<span class="line"><span>  - parent: 字体对话框窗口的父对象</span></span>
<span class="line"><span>  - title: 字体对话框的窗口标题</span></span>
<span class="line"><span>  - options: 字体对话框选项, 使用默认属性即可, 一般不设置</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>  [static] QFont QFontDialog::getFont(</span></span>
<span class="line"><span>		bool *ok, const QFont &amp;initial, </span></span>
<span class="line"><span>		QWidget *parent = nullptr, const QString &amp;title = QString(), </span></span>
<span class="line"><span>		QFontDialog::FontDialogOptions options = FontDialogOptions());</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  [static] QFont QFontDialog::getFont(bool *ok, QWidget *parent = nullptr);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void MainWindow::on_fontdlg_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>#if 1</span></span>
<span class="line"><span>    // 方式1</span></span>
<span class="line"><span>    bool ok;</span></span>
<span class="line"><span>    QFont ft = QFontDialog::getFont(</span></span>
<span class="line"><span>                &amp;ok, QFont(&quot;微软雅黑&quot;, 12, QFont::Bold), this, &quot;选择字体&quot;);</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;ok value is: &quot; &lt;&lt; ok;</span></span>
<span class="line"><span>#else</span></span>
<span class="line"><span>    // 方式2</span></span>
<span class="line"><span>    QFont ft = QFontDialog::getFont(NULL);</span></span>
<span class="line"><span>#endif</span></span>
<span class="line"><span>    // 将选择的字体设置给当前窗口对象</span></span>
<span class="line"><span>    this-&gt;setFont(ft);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>QWidget窗口字体设置</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//得到当前窗口使用的字体</span></span>
<span class="line"><span>const QWidget::QFont&amp; font()const;</span></span>
<span class="line"><span>//给当前窗口设置字体（只对当前窗口生效）</span></span>
<span class="line"><span>void QWidget::setFont(const QFont&amp;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>QApplication类字体设置</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>//得到当前应用程序对象使用的字体</span></span>
<span class="line"><span>[static] QFont QApplication::font();</span></span>
<span class="line"><span>//给当前应用程序对象设置字体，作用于当前应用程序的所有窗口</span></span>
<span class="line"><span>[static] void QApplication::setFont(const&amp; font,const char* className=nullptr);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qcolordialog" tabindex="-1"><a class="header-anchor" href="#qcolordialog"><span>QColorDialog</span></a></h3><p>![[Clip_2024-03-16_13-21-37.png]] QColorDialog类是QDialog的子类, 通过这个类我们可以得到一个选择颜色的对话框窗口, 和前边介绍的对话框类一样, 我们只需要调用这个类的静态成员函数就可以得到想要的窗口了。</p><h4 id="qcolor颜色类" tabindex="-1"><a class="header-anchor" href="#qcolor颜色类"><span>QColor颜色类</span></a></h4><p>关于颜色的属性信息, 在QT框架中被封装到了一个叫QColor的类中, 下边为大家介绍一下这个类的API, 了解一下关于这个类的使用。 各种颜色都是基于红, 绿, 蓝这三种颜色调配而成的, 并且颜色还可以进行透明度设置, 默认是不透明的。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>值都是0~255</span></span>
<span class="line"><span>	r：红色</span></span>
<span class="line"><span>	g：绿色</span></span>
<span class="line"><span>	b：蓝色</span></span>
<span class="line"><span>	a：透明度alpha</span></span>
<span class="line"><span>	Qt::GlobalColor是一个枚举值，每个值都对应一个颜色</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>QColor::QColor(Qt::GlobalColor color);</span></span>
<span class="line"><span>QColor::QColor(int r, int g, int b, int a = ...);</span></span>
<span class="line"><span>QColor::QColor();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 参数设置 red, green, blue, alpha, 取值范围都是 0-255</span></span>
<span class="line"><span>void QColor::setRed(int red);		// 红色</span></span>
<span class="line"><span>void QColor::setGreen(int green);	// 绿色</span></span>
<span class="line"><span>void QColor::setBlue(int blue);	// 蓝色</span></span>
<span class="line"><span>void QColor::setAlpha(int alpha);	// 透明度, 默认不透明(255)</span></span>
<span class="line"><span>void QColor::setRgb(int r, int g, int b, int a = 255);//可以一次性把rgba设置进去</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//获取对应rgba的数值</span></span>
<span class="line"><span>int QColor::red() const;</span></span>
<span class="line"><span>int QColor::green() const;</span></span>
<span class="line"><span>int QColor::blue() const;</span></span>
<span class="line"><span>int QColor::alpha() const;</span></span>
<span class="line"><span>//getRgb()函数的参数都是传出参数</span></span>
<span class="line"><span>void QColor::getRgb(int *r, int *g, int *b, int *a = nullptr) const;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="qcolordialog静态api函数" tabindex="-1"><a class="header-anchor" href="#qcolordialog静态api函数"><span>QColorDialog静态API函数</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>  // 弹出颜色选择对话框, 并返回选中的颜色信息</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>    - initial: 对话框中默认选中的颜色, 用于窗口初始化</span></span>
<span class="line"><span>    - parent: 给对话框窗口指定父对象</span></span>
<span class="line"><span>    - title: 对话框窗口的标题</span></span>
<span class="line"><span>    - options: 颜色对话框窗口选项, 使用默认属性即可, 一般不需要设置</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>  [static] QColor QColorDialog::getColor(</span></span>
<span class="line"><span>		const QColor &amp;initial = Qt::white, </span></span>
<span class="line"><span>		QWidget *parent = nullptr, const QString &amp;title = QString(), </span></span>
<span class="line"><span>		QColorDialog::ColorDialogOptions options = ColorDialogOptions());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qinputdialog" tabindex="-1"><a class="header-anchor" href="#qinputdialog"><span>QInputDialog</span></a></h3><p>![[Clip_2024-03-16_13-22-00.png]] QInputDialog类是QDialog的子类, 通过这个类我们可以得到一个输入对话框窗口, 根据实际需求我们可以在这个输入窗口中输入整形, 浮点型, 字符串类型的数据, 并且还可以显示下拉菜单供使用者选择。</p><p>API - 静态函数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>  - parent: 对话框窗口的父窗口</span></span>
<span class="line"><span>  - title: 对话框窗口显示的标题信息</span></span>
<span class="line"><span>  - label: 对话框窗口中显示的文本信息(用于描述对话框的功能)</span></span>
<span class="line"><span>  - value: 对话框窗口中显示的浮点值, 默认为 0</span></span>
<span class="line"><span>  - min: 对话框窗口支持显示的最小数值</span></span>
<span class="line"><span>  - max: 对话框窗口支持显示的最大数值</span></span>
<span class="line"><span>  - decimals: 浮点数的精度, 数值为几就保留浮点数后几位默认保留小数点以后1位</span></span>
<span class="line"><span>  - step: 步长, 通过对话框提供的按钮调节数值每次增长/递减的量</span></span>
<span class="line"><span>  - ok: 传出参数, 用于判断是否得到了有效数据, 一般不会使用该参数</span></span>
<span class="line"><span>  - flags: 对话框窗口的窗口属性, 使用默认值即可</span></span>
<span class="line"><span>  - items: 字符串列表, 用于初始化窗口中的下拉菜单, 每个字符串对应一个菜单项</span></span>
<span class="line"><span>  - current: 通过菜单项的索引指定显示下拉菜单中的哪个菜单项, 默认显示第一个(编号为0)</span></span>
<span class="line"><span>  - editable: 设置菜单项上的文本信息是否可以进行编辑, 默认为true, 即可以编辑</span></span>
<span class="line"><span>  - inputMethodHints: 设置显示模式, 默认没有指定任何特殊显示格式, 显示普通文本字符串</span></span>
<span class="line"><span>    - 如果有特殊需求, 可以参数帮助文档进行相关设置</span></span>
<span class="line"><span>  - text: 指定显示到多行输入框中的文本信息, 默认是空字符串</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>// 得到一个可以输入浮点数的对话框窗口, 返回对话框窗口中输入的浮点数</span></span>
<span class="line"><span>[static] double QInputDialog::getDouble(</span></span>
<span class="line"><span>    		QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>    		const QString &amp;label, double value = 0, </span></span>
<span class="line"><span>    		double min = -2147483647, double max = 2147483647, </span></span>
<span class="line"><span>    		int decimals = 1, bool *ok = nullptr, </span></span>
<span class="line"><span>    		Qt::WindowFlags flags = Qt::WindowFlags());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到一个可以输入整形数的对话框窗口, 返回对话框窗口中输入的整形数</span></span>
<span class="line"><span>[static] int QInputDialog::getInt(</span></span>
<span class="line"><span>    		QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>    		const QString &amp;label, int value = 0, </span></span>
<span class="line"><span>    		int min = -2147483647, int max = 2147483647, </span></span>
<span class="line"><span>    		int step = 1, bool *ok = nullptr, </span></span>
<span class="line"><span>    		Qt::WindowFlags flags = Qt::WindowFlags());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到一个带下来菜单的对话框窗口, 返回选择的菜单项上边的文本信息</span></span>
<span class="line"><span>[static] QString QInputDialog::getItem(</span></span>
<span class="line"><span>    		QWidget *parent, const QString &amp;title, </span></span>
<span class="line"><span>    		const QString &amp;label, const QStringList &amp;items, </span></span>
<span class="line"><span>    		int current = 0, bool editable = true, bool *ok = nullptr, </span></span>
<span class="line"><span>    		Qt::WindowFlags flags = Qt::WindowFlags(), </span></span>
<span class="line"><span>    		Qt::InputMethodHints inputMethodHints = Qt::ImhNone);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到一个可以输入多行数据的对话框窗口, 返回用户在窗口中输入的文本信息</span></span>
<span class="line"><span>[static] QString QInputDialog::getMultiLineText(</span></span>
<span class="line"><span>    		QWidget *parent, const QString &amp;title, const QString &amp;label, </span></span>
<span class="line"><span>    		const QString &amp;text = QString(), bool *ok = nullptr, </span></span>
<span class="line"><span>    		Qt::WindowFlags flags = Qt::WindowFlags(), </span></span>
<span class="line"><span>    		Qt::InputMethodHints inputMethodHints = Qt::ImhNone);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到一个可以输入单行信息的对话框窗口, 返回用户在窗口中输入的文本信息</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>  - mode: 指定单行编辑框中数据的反馈模式, 是一个 QLineEdit::EchoMode 类型的枚举值</span></span>
<span class="line"><span>    - QLineEdit::Normal: 显示输入的字符。这是默认值</span></span>
<span class="line"><span>    - QLineEdit::NoEcho: 不要展示任何东西。这可能适用于连密码长度都应该保密的密码。</span></span>
<span class="line"><span>    - QLineEdit::Password: 显示与平台相关的密码掩码字符，而不是实际输入的字符。</span></span>
<span class="line"><span>    - QLineEdit::PasswordEchoOnEdit: 在编辑时按输入显示字符，否则按密码显示字符。</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>[static] QString QInputDialog::getText(</span></span>
<span class="line"><span>    		QWidget *parent, const QString &amp;title, const QString &amp;label,</span></span>
<span class="line"><span>    		QLineEdit::EchoMode mode = QLineEdit::Normal, </span></span>
<span class="line"><span>    		const QString &amp;text = QString(), bool *ok = nullptr, </span></span>
<span class="line"><span>    		Qt::WindowFlags flags = Qt::WindowFlags(), </span></span>
<span class="line"><span>    		Qt::InputMethodHints inputMethodHints = Qt::ImhNone);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="qprogressdialog进度条对话框" tabindex="-1"><a class="header-anchor" href="#qprogressdialog进度条对话框"><span>QProgressDialog进度条对话框</span></a></h3><p>![[Clip_2024-03-16_13-22-28.png]] QProgressDialog类是QDialog的子类, 通过这个类我们可以得到一个带进度条的对话框窗口, 这种类型的对话框窗口一般常用于文件拷贝、数据传输等实时交互的场景中。</p><p>常用API</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>  - labelText: 对话框中显示的提示信息</span></span>
<span class="line"><span>  - cancelButtonText: 取消按钮上显示的文本信息</span></span>
<span class="line"><span>  - minimum: 进度条最小值</span></span>
<span class="line"><span>  - maximum: 进度条最大值</span></span>
<span class="line"><span>  - parent: 当前窗口的父对象</span></span>
<span class="line"><span>  - f: 当前进度窗口的flag属性, 使用默认属性即可, 无需设置</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>QProgressDialog::QProgressDialog(</span></span>
<span class="line"><span>	QWidget *parent = nullptr, </span></span>
<span class="line"><span>	Qt::WindowFlags f = Qt::WindowFlags());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QProgressDialog::QProgressDialog(</span></span>
<span class="line"><span>	const QString &amp;labelText, const QString &amp;cancelButtonText, </span></span>
<span class="line"><span>	int minimum, int maximum, QWidget *parent = nullptr,</span></span>
<span class="line"><span>	Qt::WindowFlags f = Qt::WindowFlags());</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置取消按钮显示的文本信息</span></span>
<span class="line"><span>[slot] void QProgressDialog::setCancelButtonText(const QString &amp;cancelButtonText);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 公共成员函数和槽函数</span></span>
<span class="line"><span>QString QProgressDialog::labelText() const;</span></span>
<span class="line"><span>void QProgressDialog::setLabelText(const QString &amp;text);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到进度条最小值</span></span>
<span class="line"><span>int QProgressDialog::minimum() const;</span></span>
<span class="line"><span>// 设置进度条最小值</span></span>
<span class="line"><span>void QProgressDialog::setMinimum(int minimum);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到进度条最大值</span></span>
<span class="line"><span>int QProgressDialog::maximum() const;</span></span>
<span class="line"><span>// 设置进度条最大值</span></span>
<span class="line"><span>void QProgressDialog::setMaximum(int maximum);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置进度条范围(最大和最小值)</span></span>
<span class="line"><span>[slot] void QProgressDialog::setRange(int minimum, int maximum);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到进度条当前的值</span></span>
<span class="line"><span>int QProgressDialog::value() const;</span></span>
<span class="line"><span>// 设置进度条当前的值</span></span>
<span class="line"><span>void QProgressDialog::setValue(int progress);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool QProgressDialog::autoReset() const;</span></span>
<span class="line"><span>// 当value() = maximum()时，进程对话框是否调用reset()，此属性默认为true。</span></span>
<span class="line"><span>void QProgressDialog::setAutoReset(bool reset);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool QProgressDialog::autoClose() const;</span></span>
<span class="line"><span>// 当value() = maximum()时，进程对话框是否调用reset()并且隐藏，此属性默认为true。</span></span>
<span class="line"><span>void QProgressDialog::setAutoClose(bool close);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断用户是否按下了取消键, 按下了返回true, 否则返回false</span></span>
<span class="line"><span>bool wasCanceled() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 重置进度条</span></span>
<span class="line"><span>// 重置进度对话框。wascancelled()变为true，直到进程对话框被重置。进度对话框被隐藏。</span></span>
<span class="line"><span>[slot] void QProgressDialog::cancel();</span></span>
<span class="line"><span>// 重置进度对话框。如果autoClose()为真，进程对话框将隐藏。</span></span>
<span class="line"><span>[slot] void QProgressDialog::reset();   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 信号</span></span>
<span class="line"><span>// 当单击cancel按钮时，将发出此信号。默认情况下，它连接到cancel()槽。</span></span>
<span class="line"><span>[signal] void QProgressDialog::canceled();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置窗口的显示状态(模态, 非模态)</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>	Qt::NonModal  -&gt; 非模态</span></span>
<span class="line"><span>	Qt::WindowModal	-&gt; 模态, 阻塞父窗口</span></span>
<span class="line"><span>	Qt::ApplicationModal -&gt; 模态, 阻塞应用程序中的所有窗口</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>void QWidget::setWindowModality(Qt::WindowModality windowModality);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qmainwindow" tabindex="-1"><a class="header-anchor" href="#qmainwindow"><span>QMainWindow</span></a></h1><p>QMainWindow是标准基础窗口中结构最复杂的窗口, 其组成如下:</p><ul><li>提供了菜单栏, 工具栏, 状态栏, 停靠窗口</li><li>菜单栏：只能有一个, 位于窗口的最上方</li><li>工具栏：可以有多个, 默认提供了一个, 窗口的上下左右都可以停靠</li><li>状态栏：只能有一个, 位于窗口最下方</li><li>停靠窗口（浮动窗口）： 可以有多个, 默认没有提供, 窗口的上下左右都可以停靠 ![[Pasted image 20240316131551.png]]</li></ul><h2 id="菜单栏" tabindex="-1"><a class="header-anchor" href="#菜单栏"><span>菜单栏</span></a></h2><p>关于顶级菜单可以直接在UI窗口中双击, 直接输入文本信息即可, 对应子菜单项也可以通过先双击在输入的方式完成添加, 但是这种方式不支持中文的输入。</p><p>一般情况下, 我们都是先在外面创建出QAction对象, 然后再将其拖拽到某个菜单下边, 这样子菜单项的添加就完成了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 给菜单栏添加菜单</span></span>
<span class="line"><span>QAction *QMenuBar::addMenu(QMenu *menu);</span></span>
<span class="line"><span>QMenu *QMenuBar::addMenu(const QString &amp;title);</span></span>
<span class="line"><span>QMenu *QMenuBar::addMenu(const QIcon &amp;icon, const QString &amp;title);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 给菜单对象添加菜单项(QAction)</span></span>
<span class="line"><span>QAction *QMenu::addAction(const QString &amp;text);</span></span>
<span class="line"><span>QAction *QMenu::addAction(const QIcon &amp;icon, const QString &amp;text);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加分割线</span></span>
<span class="line"><span>QAction *QMenu::addSeparator();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 点击QAction对象发出该信号</span></span>
<span class="line"><span>[signal] void QAction::triggered(bool checked = false);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏"><span>工具栏</span></a></h2><p>添加工具按钮 方式1：先创建QAction对象, 然后拖拽到工具栏中, 和添加菜单项的方式相同 方式2：如果不通过UI界面直接操作，那么就需要调用相关的API函数了</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 在QMainWindow窗口中添加工具栏</span></span>
<span class="line"><span>void QMainWindow::addToolBar(Qt::ToolBarArea area, QToolBar *toolbar);</span></span>
<span class="line"><span>void QMainWindow::addToolBar(QToolBar *toolbar);</span></span>
<span class="line"><span>QToolBar *QMainWindow::addToolBar(const QString &amp;title);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将Qt控件放到工具栏中</span></span>
<span class="line"><span>// 工具栏类: QToolBar</span></span>
<span class="line"><span>// 添加的对象只要是QWidget或者启子类都可以被添加</span></span>
<span class="line"><span>QAction *QToolBar::addWidget(QWidget *widget);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加QAction对象</span></span>
<span class="line"><span>QAction *QToolBar::addAction(const QString &amp;text);</span></span>
<span class="line"><span>QAction *QToolBar::addAction(const QIcon &amp;icon, const QString &amp;text);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加分隔线</span></span>
<span class="line"><span>QAction *QToolBar::addSeparator()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="状态栏" tabindex="-1"><a class="header-anchor" href="#状态栏"><span>状态栏</span></a></h2><p>一般情况下, 需要在状态栏中添加某些控件, 显示某些属性, 使用最多的就是添加标签 QLabel</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类型: QStatusBar</span></span>
<span class="line"><span>void QStatusBar::addWidget(QWidget *widget, int stretch = 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[slot] void QStatusBar::clearMessage();</span></span>
<span class="line"><span>[slot] void QStatusBar::showMessage(const QString &amp;message, int timeout = 0);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="停靠窗口" tabindex="-1"><a class="header-anchor" href="#停靠窗口"><span>停靠窗口</span></a></h2><p>停靠窗口可以通过鼠标拖动停靠到窗口的上、下、左、右，或者浮动在窗口上方。如果需要这种类型的窗口必须手动添加，如果在非QMainWindow类型的窗口中添加了停靠窗口, 那么这个窗口是不能移动和浮动的。 浮动窗口在工具栏中， 直接将其拖拽到UI界面上即可。 停靠窗口也有一个属性面板, 我们可以在其对应属性面板中直接进行设置和修改相关属性。 ![[Pasted image 20240316162044.png]]</p>`,85)]))}const t=n(l,[["render",p]]),v=JSON.parse('{"path":"/cpp/qt/9/","title":"9 Widget窗体","lang":"zh-CN","frontmatter":{"title":"9 Widget窗体","createTime":"2025/06/22 10:42:16","permalink":"/cpp/qt/9/"},"readingTime":{"minutes":21.56,"words":6469},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/Qt/9 Widget窗体.md","headers":[]}');export{t as comp,v as data};
