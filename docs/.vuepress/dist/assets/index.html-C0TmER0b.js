import{_ as l,c as p,a as e,b as t,e as n,d as i,r as d,o as c}from"./app-CEcM0piI.js";const r={};function v(m,s){const a=d("VPIcon");return c(),p("div",null,[s[3]||(s[3]=e(`<p>表示日期时间数据的类有：</p><ul><li>QTime：时间数据类型，如15:23:13。![[Clip_2024-03-12_22-06-57.png]]</li><li>QDate：日期数据类型，如2017-4-5。![[Clip_2024-03-12_22-07-16.png]]</li><li>QDateTime：日期时间数据类型，如2017-03-23 08:12:43![[Clip_2024-03-12_22-07-31.png]]</li><li>QCalendarWidget：一个用日历形式选择日期的组件。![[Clip_2024-03-12_22-07-49.png]] 相应的编辑器有QTimeEdit，QDateEdit，QDateTimeEdit。</li></ul><p>格式字符的意义</p><table><thead><tr><th>格式字符</th><th>意义</th></tr></thead><tbody><tr><td>d</td><td>天，不补零显示，1-31</td></tr><tr><td>dd</td><td>天,补零显示，01-31M</td></tr><tr><td>M</td><td>月，不补零显示，1-12</td></tr><tr><td>MM</td><td>月，补零显示，01-12</td></tr><tr><td>yy</td><td>年，两位显示，00-99</td></tr><tr><td>yyyy</td><td>年，4位数字显示，如2016</td></tr><tr><td>h</td><td>小时，不补零，0-23或1-12(如果显示AM/PM)</td></tr><tr><td>hh</td><td>小时，补零2位显示，00-23或01-12(如果显示AM/PM)</td></tr><tr><td>H</td><td>小时，不补零，0-23 (即使显示 AM/PM)</td></tr><tr><td>HH</td><td>小时，补零显示，00-23(即使显示 AM/PM)</td></tr><tr><td>m</td><td>分钟，不补零，0-59</td></tr><tr><td>mm</td><td>分钟，补零显示，00-59</td></tr><tr><td>s</td><td>秒，不补零显示，0-59</td></tr><tr><td>ss</td><td>秒，补零显示，00-59</td></tr><tr><td>z</td><td>毫秒，不补零，0-999</td></tr><tr><td>zzz</td><td>毫秒，补零3位显示，000-999</td></tr><tr><td>AP或A</td><td>使用AM/PM显示</td></tr><tr><td>ap或a</td><td>使用am/pm 显示</td></tr></tbody></table><h1 id="qdate日期" tabindex="-1"><a class="header-anchor" href="#qdate日期"><span>QDate日期</span></a></h1><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>QDate::QDate();</span></span>
<span class="line"><span>QDate::QDate(int y, int m, int d);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 公共成员函数</span></span>
<span class="line"><span>// 重新设置日期对象中的日期</span></span>
<span class="line"><span>bool QDate::setDate(int year, int month, int day);</span></span>
<span class="line"><span>//添加日期的值也可以负数（实现时间回溯操作）</span></span>
<span class="line"><span>// 给日期对象添加 ndays 天</span></span>
<span class="line"><span>QDate QDate::addDays(qint64 ndays) const;</span></span>
<span class="line"><span>// 给日期对象添加 nmonths 月</span></span>
<span class="line"><span>QDate QDate::addMonths(int nmonths) const;</span></span>
<span class="line"><span>// 给日期对象添加 nyears 月</span></span>
<span class="line"><span>QDate QDate::addYears(int nyears) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到日期对象中的年/月/日</span></span>
<span class="line"><span>int QDate::year() const;</span></span>
<span class="line"><span>int QDate::month() const;</span></span>
<span class="line"><span>int QDate::day() const;</span></span>
<span class="line"><span>void QDate::getDate(int *year, int *month, int *day) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 日期对象格式化</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    d    - The day as a number without a leading zero (1 to 31)</span></span>
<span class="line"><span>    dd   - The day as a number with a leading zero (01 to 31)</span></span>
<span class="line"><span>    ddd	 - The abbreviated localized day name (e.g. &#39;Mon&#39; to &#39;Sun&#39;). Uses the system locale to localize the name, i.e. QLocale::system().</span></span>
<span class="line"><span>    dddd - The long localized day name (e.g. &#39;Monday&#39; to &#39;Sunday&#39;). Uses the system locale to localize the name, i.e. QLocale::system().</span></span>
<span class="line"><span>    M    - The month as a number without a leading zero (1 to 12)</span></span>
<span class="line"><span>    MM   - The month as a number with a leading zero (01 to 12)</span></span>
<span class="line"><span>    MMM	 - The abbreviated localized month name (e.g. &#39;Jan&#39; to &#39;Dec&#39;). Uses the system locale to localize the name, i.e. QLocale::system().</span></span>
<span class="line"><span>    MMMM - The long localized month name (e.g. &#39;January&#39; to &#39;December&#39;). Uses the system locale to localize the name, i.e. QLocale::system().</span></span>
<span class="line"><span>    yy   - The year as a two digit number (00 to 99)</span></span>
<span class="line"><span>    yyyy - The year as a four digit number. If the year is negative, a minus sign is prepended, making five characters.</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>//输入格式化字符将日期按照格式转换为字符串类型（QString）</span></span>
<span class="line"><span>QString QDate::toString(const QString &amp;format) const;</span></span>
<span class="line"><span>//如：date.toString(&quot;yyyy-MM-dd&quot;);将日期指定为特定格式其中-也是可以更改的，更改的什么格式化出的日期字符串就是以什么为间隔</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 操作符重载 ==&gt; 日期比较</span></span>
<span class="line"><span>bool QDate::operator!=(const QDate &amp;d) const;</span></span>
<span class="line"><span>bool QDate::operator&lt;(const QDate &amp;d) const;</span></span>
<span class="line"><span>bool QDate::operator&lt;=(const QDate &amp;d) const;</span></span>
<span class="line"><span>bool QDate::operator==(const QDate &amp;d) const;</span></span>
<span class="line"><span>bool QDate::operator&gt;(const QDate &amp;d) const;</span></span>
<span class="line"><span>bool QDate::operator&gt;=(const QDate &amp;d) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 静态函数 -&gt; 得到本地的当前日期</span></span>
<span class="line"><span>static QDate QDate::currentDate();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qtime时间" tabindex="-1"><a class="header-anchor" href="#qtime时间"><span>QTime时间</span></a></h1><p>QTime类可以封装时间信息也可以通过这个类得到时间相关的信息, 包括:时, 分, 秒, 毫秒。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>QTime::QTime();</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    h 		==&gt; 取值范围： 0 ~ 23</span></span>
<span class="line"><span>    m and s 	==&gt; 取值范围： 0 ~ 59</span></span>
<span class="line"><span>    ms 		==&gt; 取值范围： 0 ~ 999</span></span>
<span class="line"><span>*/ </span></span>
<span class="line"><span>QTime::QTime(int h, int m, int s = 0, int ms = 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 公共成员函数</span></span>
<span class="line"><span>// Returns true if the set time is valid; otherwise returns false.</span></span>
<span class="line"><span>bool QTime::setHMS(int h, int m, int s, int ms = 0);</span></span>
<span class="line"><span>QTime QTime::addSecs(int s) const;</span></span>
<span class="line"><span>QTime QTime::addMSecs(int ms) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 示例代码</span></span>
<span class="line"><span>  QTime n(14, 0, 0);                // n == 14:00:00</span></span>
<span class="line"><span>  QTime t;</span></span>
<span class="line"><span>  t = n.addSecs(70);                // t == 14:01:10</span></span>
<span class="line"><span>  t = n.addSecs(-70);               // t == 13:58:50</span></span>
<span class="line"><span>  t = n.addSecs(10 * 60 * 60 + 5);  // t == 00:00:05</span></span>
<span class="line"><span>  t = n.addSecs(-15 * 60 * 60);     // t == 23:00:00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 从时间对象中取出 时/分/秒/毫秒</span></span>
<span class="line"><span>// Returns the hour part (0 to 23) of the time. Returns -1 if the time is invalid.</span></span>
<span class="line"><span>int QTime::hour() const;</span></span>
<span class="line"><span>// Returns the minute part (0 to 59) of the time. Returns -1 if the time is invalid.</span></span>
<span class="line"><span>int QTime::minute() const;</span></span>
<span class="line"><span>// Returns the second part (0 to 59) of the time. Returns -1 if the time is invalid.</span></span>
<span class="line"><span>int QTime::second() const;</span></span>
<span class="line"><span>// Returns the millisecond part (0 to 999) of the time. Returns -1 if the time is invalid.</span></span>
<span class="line"><span>int QTime::msec() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 时间格式化</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>    -- 时 --</span></span>
<span class="line"><span>    h	==&gt;	The hour without a leading zero (0 to 23 or 1 to 12 if AM/PM display)</span></span>
<span class="line"><span>    hh	==&gt;	The hour with a leading zero (00 to 23 or 01 to 12 if AM/PM display)</span></span>
<span class="line"><span>    H	==&gt;	The hour without a leading zero (0 to 23, even with AM/PM display)</span></span>
<span class="line"><span>    HH	==&gt;	The hour with a leading zero (00 to 23, even with AM/PM display)</span></span>
<span class="line"><span>    -- 分 --</span></span>
<span class="line"><span>    m	==&gt;	The minute without a leading zero (0 to 59)</span></span>
<span class="line"><span>    mm	==&gt;	The minute with a leading zero (00 to 59)</span></span>
<span class="line"><span>    -- 秒 --</span></span>
<span class="line"><span>    s	==&gt;	The whole second, without any leading zero (0 to 59)</span></span>
<span class="line"><span>    ss	==&gt;	The whole second, with a leading zero where applicable (00 to 59)</span></span>
<span class="line"><span>    -- 毫秒 --</span></span>
<span class="line"><span>    zzz	==&gt;	The fractional part of the second, to millisecond precision, </span></span>
<span class="line"><span>			including trailing zeroes where applicable (000 to 999).</span></span>
<span class="line"><span>    -- 上午或者下午</span></span>
<span class="line"><span>    AP or A	==&gt;	使用AM/PM(大写) 描述上下午, 中文系统显示汉字</span></span>
<span class="line"><span>    ap or a	==&gt;	使用am/pm(小写) 描述上下午, 中文系统显示汉字</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>QString QTime::toString(const QString &amp;format) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 阶段性计时</span></span>
<span class="line"><span>// 过时的API函数</span></span>
<span class="line"><span>// 开始计时</span></span>
<span class="line"><span>void QTime::start();</span></span>
<span class="line"><span>// 计时结束</span></span>
<span class="line"><span>int QTime::elapsed() const;</span></span>
<span class="line"><span>// 重新计时</span></span>
<span class="line"><span>int QTime::restart();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 推荐使用的API函数</span></span>
<span class="line"><span>// QElapsedTimer 类</span></span>
<span class="line"><span>void QElapsedTimer::start();</span></span>
<span class="line"><span>qint64 QElapsedTimer::restart();</span></span>
<span class="line"><span>qint64 QElapsedTimer::elapsed() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 操作符重载 ==&gt; 时间比较</span></span>
<span class="line"><span>bool QTime::operator!=(const QTime &amp;t) const;</span></span>
<span class="line"><span>bool QTime::operator&lt;(const QTime &amp;t) const;</span></span>
<span class="line"><span>bool QTime::operator&lt;=(const QTime &amp;t) const;</span></span>
<span class="line"><span>bool QTime::operator==(const QTime &amp;t) const;</span></span>
<span class="line"><span>bool QTime::operator&gt;(const QTime &amp;t) const;</span></span>
<span class="line"><span>bool QTime::operator&gt;=(const QTime &amp;t) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 静态函数 -&gt; 得到当前时间</span></span>
<span class="line"><span>static QTime QTime::currentTime();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="qtimer和qelapsedtimer" tabindex="-1"><a class="header-anchor" href="#qtimer和qelapsedtimer"><span>QTimer和QElapsedTimer</span></a></h1>`,10)),t("p",null,[s[0]||(s[0]=n("QTimer是软件定时器，QTimer的主要功能是设置一个以毫秒为单位的定时周期，然后进行连续定时或单次定时。 active：激活状态，bool值 singleShot：bool linterval：周期，int值 remainingTime：还剩多少时间，const int值 timer Type：Qt")),i(a,{provider:"iconify",name:`Timer，有三种类型精度依次上升
	enum`,extra:"qt"}),s[1]||(s[1]=n("PreciseTimer：value为O，精度保持在毫秒级别 Qt:CoarseTimer：value为1，精度保持在所需间隔的5%以内 Qt")),i(a,{provider:"iconify",name:`VeryCoarseTimer：value为2，非常粗糙的定时器，精度保持在秒级
QTimer`}),s[2]||(s[2]=n("singleShot静态函数，可以方便的调用一次slot函数。 QElapsedTimer用于快速计算两个事件之间的间隔时间，是软件计时器。"))]),s[4]||(s[4]=e(`<p>在进行窗口程序的处理过程中, 经常要周期性的执行某些操作, 或者制作一些动画效果，看似比较复杂的问题使用定时器就可以完美的解决这些问题， Qt中提供了两种定时器方式一种是使用Qt中的事件处理函数这个在后续章节会给大家做细致的讲解，本节主要给大家介绍一下Qt中的定时器类 QTimer的使用方法。</p><h2 id="qtimer" tabindex="-1"><a class="header-anchor" href="#qtimer"><span>QTimer</span></a></h2><p>要使用它，只需创建一个QTimer类对象，然后调用其 start() 函数开启定时器，此后QTimer对象就会周期性的发出 timeout() 信号。</p><h3 id="常用api" tabindex="-1"><a class="header-anchor" href="#常用api"><span>常用API</span></a></h3><p><strong>public/slot function</strong></p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>// 如果指定了父对象, 创建的堆内存可以自动析构</span></span>
<span class="line"><span>QTimer::QTimer(QObject *parent = nullptr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置定时器时间间隔为 msec 毫秒</span></span>
<span class="line"><span>// 默认值是0，一旦窗口系统事件队列中的所有事件都已经被处理完，一个时间间隔为0的QTimer就会触发</span></span>
<span class="line"><span>void QTimer::setInterval(int msec);</span></span>
<span class="line"><span>// 获取定时器的时间间隔, 返回值单位: 毫秒</span></span>
<span class="line"><span>int QTimer::interval() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据指定的时间间隔启动或者重启定时器, 需要调用 setInterval() 设置时间间隔</span></span>
<span class="line"><span>[slot] void QTimer::start();</span></span>
<span class="line"><span>// 启动或重新启动定时器，超时间隔为msec毫秒。</span></span>
<span class="line"><span>[slot] void QTimer::start(int msec);</span></span>
<span class="line"><span>// 停止定时器。</span></span>
<span class="line"><span>[slot] void QTimer::stop();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置定时器精度</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>参数: </span></span>
<span class="line"><span>    - Qt::PreciseTimer -&gt; 精确的精度, 毫秒级</span></span>
<span class="line"><span>    - Qt::CoarseTimer  -&gt; 粗糙的精度, 和1毫秒的误差在5%的范围内, 默认精度</span></span>
<span class="line"><span>    - Qt::VeryCoarseTimer -&gt; 非常粗糙的精度, 精度在1秒左右</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>void QTimer::setTimerType(Qt::TimerType atype);</span></span>
<span class="line"><span>Qt::TimerType QTimer::timerType() const;	// 获取当前定时器的精度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 如果定时器正在运行，返回true; 否则返回false。</span></span>
<span class="line"><span>bool QTimer::isActive() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断定时器是否只触发一次</span></span>
<span class="line"><span>bool QTimer::isSingleShot() const;</span></span>
<span class="line"><span>// 设置定时器是否只触发一次, 参数为true定时器只触发一次, 为false定时器重复触发, 默认为false</span></span>
<span class="line"><span>void QTimer::setSingleShot(bool singleShot);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>signals</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>[signal] void QTimer::timeout();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>static public function</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 其他同名重载函数可以自己查阅帮助文档</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>功能: 在msec毫秒后发射一次信号, 并且只发射一次</span></span>
<span class="line"><span>参数:</span></span>
<span class="line"><span>	- msec:     在msec毫秒后发射信号</span></span>
<span class="line"><span>	- receiver: 接收信号的对象地址</span></span>
<span class="line"><span>	- method:   槽函数地址</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>[static] void QTimer::singleShot(</span></span>
<span class="line"><span>        int msec, const QObject *receiver, </span></span>
<span class="line"><span>        PointerToMemberFunction method);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="qdatetime" tabindex="-1"><a class="header-anchor" href="#qdatetime"><span>QDateTime</span></a></h1><p>QDateTime类可以封装日期和时间信息也可以通过这个类得到日期和时间相关的信息, 包括:年, 月, 日, 时, 分, 秒, 毫秒。其实这个类就是QDate 和 QTime 这两个类的结合体。</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 构造函数</span></span>
<span class="line"><span>QDateTime::QDateTime();</span></span>
<span class="line"><span>QDateTime::QDateTime(const QDate &amp;date, const QTime &amp;time, Qt::TimeSpec spec = Qt::LocalTime);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 公共成员函数</span></span>
<span class="line"><span>// 设置日期</span></span>
<span class="line"><span>void QDateTime::setDate(const QDate &amp;date);</span></span>
<span class="line"><span>// 设置时间</span></span>
<span class="line"><span>void QDateTime::setTime(const QTime &amp;time);</span></span>
<span class="line"><span>// 给当前日期对象追加 年/月/日/秒/毫秒, 参数可以是负数</span></span>
<span class="line"><span>QDateTime QDateTime::addYears(int nyears) const;</span></span>
<span class="line"><span>QDateTime QDateTime::addMonths(int nmonths) const;</span></span>
<span class="line"><span>QDateTime QDateTime::addDays(qint64 ndays) const;</span></span>
<span class="line"><span>QDateTime QDateTime::addSecs(qint64 s) const;</span></span>
<span class="line"><span>QDateTime QDateTime::addMSecs(qint64 msecs) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 得到对象中的日期</span></span>
<span class="line"><span>QDate QDateTime::date() const;</span></span>
<span class="line"><span>// 得到对象中的时间</span></span>
<span class="line"><span>QTime QDateTime::time() const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 日期和时间格式, 格式字符参考QDate 和 QTime 类的 toString() 函数</span></span>
<span class="line"><span>QString QDateTime::toString(const QString &amp;format) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 操作符重载 ==&gt; 日期时间对象的比较</span></span>
<span class="line"><span>bool QDateTime::operator!=(const QDateTime &amp;other) const;</span></span>
<span class="line"><span>bool QDateTime::operator&lt;(const QDateTime &amp;other) const;</span></span>
<span class="line"><span>bool QDateTime::operator&lt;=(const QDateTime &amp;other) const;</span></span>
<span class="line"><span>bool QDateTime::operator==(const QDateTime &amp;other) const;</span></span>
<span class="line"><span>bool QDateTime::operator&gt;(const QDateTime &amp;other) const;</span></span>
<span class="line"><span>bool QDateTime::operator&gt;=(const QDateTime &amp;other) const;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 静态函数</span></span>
<span class="line"><span>// 得到当前时区的日期和时间(本地设置的时区对应的日期和时间)</span></span>
<span class="line"><span>static QDateTime QDateTime::currentDateTime();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,13))])}const u=l(r,[["render",v]]),b=JSON.parse('{"path":"/cpp/qt/5/","title":"5 时间和日期","lang":"zh-CN","frontmatter":{"title":"5 时间和日期","createTime":"2025/06/22 10:39:10","permalink":"/cpp/qt/5/"},"readingTime":{"minutes":8.39,"words":2517},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/C++/Qt/5 时间和日期.md","headers":[]}');export{u as comp,b as data};
