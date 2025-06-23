import{_ as n,c as a,a as i,o as l}from"./app-CEcM0piI.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h2 id="顺序表" tabindex="-1"><a class="header-anchor" href="#顺序表"><span>顺序表</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>template &lt;typename T&gt;</span></span>
<span class="line"><span>class Array</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    Array(int size = 64);</span></span>
<span class="line"><span>    ~Array();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 在尾部添加元素</span></span>
<span class="line"><span>    void append(T val);</span></span>
<span class="line"><span>    // 尾部删除元素</span></span>
<span class="line"><span>    void popBack();</span></span>
<span class="line"><span>    // 插入元素</span></span>
<span class="line"><span>    void insert(int pos, T val);</span></span>
<span class="line"><span>    // 删除元素</span></span>
<span class="line"><span>    void remove(int pos);</span></span>
<span class="line"><span>    // 查询元素-&gt; 返回位置</span></span>
<span class="line"><span>    int find(T val);</span></span>
<span class="line"><span>    // 得到指定位置的元素的值</span></span>
<span class="line"><span>    int value(int pos);</span></span>
<span class="line"><span>    // 获取数组元素数量</span></span>
<span class="line"><span>    int size();</span></span>
<span class="line"><span>    // 打印数据</span></span>
<span class="line"><span>    void show();</span></span>
<span class="line"><span>    //元素逆序</span></span>
<span class="line"><span>    void reverse();</span></span>
<span class="line"><span>    //奇偶调整:将奇数放在线性表左侧,将偶数放在线性表右侧</span></span>
<span class="line"><span>    void adjust();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>	//扩容</span></span>
<span class="line"><span>    void expand(int size);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    T* m_arry;           // 数组的起始地址</span></span>
<span class="line"><span>    int m_capacity;      // 数组容量</span></span>
<span class="line"><span>    int m_count;         // 数组中的元素数量</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表"><span>链表</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    int next; </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 静态链表列</span></span>
<span class="line"><span>class SLinkList</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    SLinkList(int size);</span></span>
<span class="line"><span>    ~SLinkList();</span></span>
<span class="line"><span>    // 插入元素, 把数据放到某个元素之前</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 删除元素</span></span>
<span class="line"><span>    void remove(int pos);</span></span>
<span class="line"><span>    // 查找元素, 返回位置</span></span>
<span class="line"><span>    int find(int data);</span></span>
<span class="line"><span>    // 遍历元素</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_list = nullptr;</span></span>
<span class="line"><span>    int m_size;      // 链表的容量</span></span>
<span class="line"><span>    int m_length;    // 元素数量</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>带头节点的单向链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// SLinkList.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data = 0;</span></span>
<span class="line"><span>    Node* next = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义单向链表类</span></span>
<span class="line"><span>class LinkList</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LinkList();</span></span>
<span class="line"><span>    ~LinkList();</span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 获取链表节点数量</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span>    // 返回头结点</span></span>
<span class="line"><span>    inline Node* head() { return m_head; }</span></span>
<span class="line"><span>    // 返回指定位置的节点的值</span></span>
<span class="line"><span>    int value(int pos);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_length = 0;</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>不带头节点的单项链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// SLinkList1.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义节点</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data = 0;</span></span>
<span class="line"><span>    Node* next = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LinkList1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LinkList1();</span></span>
<span class="line"><span>    ~LinkList1();</span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_length = 0;</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="单向循环链表" tabindex="-1"><a class="header-anchor" href="#单向循环链表"><span>单向循环链表</span></a></h2><p>带头节点的单向循环链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// CircularLinkList.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data = 0;</span></span>
<span class="line"><span>    Node* next = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 单向循环链表</span></span>
<span class="line"><span>class LoopLinkList</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LoopLinkList();</span></span>
<span class="line"><span>    ~LoopLinkList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>    int m_length = 0;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>不带头节点的单向循环链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// CircularLinkList1.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node(int value) : data(value) {}</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    Node* next = nullptr;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 单向循环链表</span></span>
<span class="line"><span>class LoopLinkList1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LoopLinkList1();</span></span>
<span class="line"><span>    ~LoopLinkList1();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>    int m_length = 0;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表"><span>双向链表</span></a></h2><p>带头节点的双向链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// DoubleLinkList.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node(int value) : data(value) {}</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    Node* next = nullptr;  </span></span>
<span class="line"><span>    Node* prior = nullptr; </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 双向链表</span></span>
<span class="line"><span>class DLinkList</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    DLinkList();</span></span>
<span class="line"><span>    ~DLinkList();</span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_length = 0;</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>不带头节点的双向链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// DoubleLinkList1.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Node(int value) : data(value) {}</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    Node* next; </span></span>
<span class="line"><span>    Node* prior;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DLinkList1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    DLinkList1();</span></span>
<span class="line"><span>    ~DLinkList1();</span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_length = 0;</span></span>
<span class="line"><span>    Node* m_head = nullptr;</span></span>
<span class="line"><span>    Node* m_tail = nullptr;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="双向循环链表" tabindex="-1"><a class="header-anchor" href="#双向循环链表"><span>双向循环链表</span></a></h2><p>带头节点的双向循环链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// DoubleCircularLinkList.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct Node </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    Node* prev;</span></span>
<span class="line"><span>    Node* next;</span></span>
<span class="line"><span>    Node(int d) : data(d), prev(nullptr), next(nullptr) {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LoopDLinkList </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LoopDLinkList();</span></span>
<span class="line"><span>    ~LoopDLinkList();</span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_head;</span></span>
<span class="line"><span>    Node* m_tail;</span></span>
<span class="line"><span>    int m_length;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>不带头节点的双向循环链表</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// DoubleCircularLinkList1.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    Node* prev;</span></span>
<span class="line"><span>    Node* next;</span></span>
<span class="line"><span>    Node(int d) : data(d), prev(nullptr), next(nullptr) {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LoopDLinkList1</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LoopDLinkList1();</span></span>
<span class="line"><span>    ~LoopDLinkList1();</span></span>
<span class="line"><span>    // 判断链表是否为空</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    // 得到链表长度</span></span>
<span class="line"><span>    int length();</span></span>
<span class="line"><span>    // 数据添加到链表头部</span></span>
<span class="line"><span>    void prepend(int data);</span></span>
<span class="line"><span>    // 数据添加到链表尾部</span></span>
<span class="line"><span>    void append(int data);</span></span>
<span class="line"><span>    // 数据插入到链表任意位置, 第一个数据元素 pos=1</span></span>
<span class="line"><span>    bool insert(int pos, int data);</span></span>
<span class="line"><span>    // 搜索数值, 返回节点和位置, 没找到返回nullptr</span></span>
<span class="line"><span>    Node* find(int data, int&amp; pos);</span></span>
<span class="line"><span>    // 删除节点</span></span>
<span class="line"><span>    bool remove(int pos);</span></span>
<span class="line"><span>    // 遍历链表</span></span>
<span class="line"><span>    void display();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    // 添加节点</span></span>
<span class="line"><span>    void addNode(int data, bool isHead = true);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_head;</span></span>
<span class="line"><span>    Node* m_tail;</span></span>
<span class="line"><span>    int m_length;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="索引表" tabindex="-1"><a class="header-anchor" href="#索引表"><span>索引表</span></a></h2><h2 id="约瑟夫问题" tabindex="-1"><a class="header-anchor" href="#约瑟夫问题"><span>约瑟夫问题</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>struct Node</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    int pos;</span></span>
<span class="line"><span>    Node* next;</span></span>
<span class="line"><span>    Node(int value, int index) : </span></span>
<span class="line"><span>        data(value), next(nullptr), pos(index) {}</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="特殊线性表" tabindex="-1"><a class="header-anchor" href="#特殊线性表"><span>特殊线性表</span></a></h1><h2 id="顺序栈" tabindex="-1"><a class="header-anchor" href="#顺序栈"><span>顺序栈</span></a></h2><p>后进先出 抽象数据类型：</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Stack:  </span></span>
<span class="line"><span>    &quot;&quot;&quot;定义栈类&quot;&quot;&quot;  </span></span>
<span class="line"><span>    def __init__(self):  </span></span>
<span class="line"><span>        self.data=[]  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    def __del__(self):  </span></span>
<span class="line"><span>        while self.data:  </span></span>
<span class="line"><span>            del self.data[-1]  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    def isempty(self):  </span></span>
<span class="line"><span>        return not self.data  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    def push(self,value):  </span></span>
<span class="line"><span>        self.data.append(value)  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    def pop(self):  </span></span>
<span class="line"><span>        if not self.isempty():  </span></span>
<span class="line"><span>            return self.data.pop()  </span></span>
<span class="line"><span>        else:  </span></span>
<span class="line"><span>            print(&#39;栈空&#39;)  </span></span>
<span class="line"><span>            return None  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    def top(self):  </span></span>
<span class="line"><span>        if not self.isempty():  </span></span>
<span class="line"><span>            return self.data[-1]  </span></span>
<span class="line"><span>        else:  </span></span>
<span class="line"><span>            print(&#39;栈空&#39;)  </span></span>
<span class="line"><span>            return None  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    def size(self):  </span></span>
<span class="line"><span>        return len(self.data)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><em>栈常用于函数的调用</em></p><p><strong>深度优先搜索算法DFS</strong></p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// ArrayStack.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>const int MAX_SIZE = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ArrayStack </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ArrayStack();</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    bool isFull();</span></span>
<span class="line"><span>    // 压栈</span></span>
<span class="line"><span>    void push(int x); </span></span>
<span class="line"><span>    // 出栈</span></span>
<span class="line"><span>    int pop();</span></span>
<span class="line"><span>    // 得到栈顶元素</span></span>
<span class="line"><span>    int top();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_data[MAX_SIZE];</span></span>
<span class="line"><span>    int m_top;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="链式栈" tabindex="-1"><a class="header-anchor" href="#链式栈"><span>链式栈</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// LinkedStack.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>struct Node </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    Node* next;</span></span>
<span class="line"><span>    Node(int d) : data(d), next(nullptr) {}</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LinkedStack </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    LinkedStack();</span></span>
<span class="line"><span>    ~LinkedStack();</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    void push(int x);</span></span>
<span class="line"><span>    int pop();</span></span>
<span class="line"><span>    int top();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Node* m_top;  // 栈顶指针，指向链表的头部</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="顺序非循环队列" tabindex="-1"><a class="header-anchor" href="#顺序非循环队列"><span>顺序非循环队列</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// ArrayQueue.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const int MAX_SIZE = 100;</span></span>
<span class="line"><span>class ArrayQueue </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ArrayQueue();</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    bool isFull();</span></span>
<span class="line"><span>    void enqueue(int x);</span></span>
<span class="line"><span>    int dequeue();</span></span>
<span class="line"><span>    // 获取队列头部元素的值</span></span>
<span class="line"><span>    int peek();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int m_data[MAX_SIZE];</span></span>
<span class="line"><span>    int m_front; </span></span>
<span class="line"><span>    int m_rear; </span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="顺序循环队列" tabindex="-1"><a class="header-anchor" href="#顺序循环队列"><span>顺序循环队列</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// CircularQueue.h</span></span>
<span class="line"><span>#pragma once</span></span>
<span class="line"><span>class CircularQueue </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    CircularQueue(int capacity);</span></span>
<span class="line"><span>    ~CircularQueue();</span></span>
<span class="line"><span>    bool isEmpty();</span></span>
<span class="line"><span>    bool isFull();</span></span>
<span class="line"><span>    void enqueue(int x);</span></span>
<span class="line"><span>    int dequeue();</span></span>
<span class="line"><span>    // 获取队头元素的值</span></span>
<span class="line"><span>    int peek();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    int *m_data;</span></span>
<span class="line"><span>    int m_front;</span></span>
<span class="line"><span>    int m_rear;</span></span>
<span class="line"><span>    int m_size;</span></span>
<span class="line"><span>    int m_capacity;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>定义一个数组</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef struct Queue{</span></span>
<span class="line"><span>	int capacity=10;</span></span>
<span class="line"><span>	int size=0;</span></span>
<span class="line"><span>	int front=0;</span></span>
<span class="line"><span>	int rear=0;</span></span>
<span class="line"><span>	int que[capacity];</span></span>
<span class="line"><span>}Queue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//添加元素</span></span>
<span class="line"><span>void add(Queue* queue, int num){</span></span>
<span class="line"><span>	if(queue.size==queue.capacity){</span></span>
<span class="line"><span>		printf(&quot;队列已满,无法添加元素&quot;);</span></span>
<span class="line"><span>		return;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	queue.que[queue.rear]=num;</span></span>
<span class="line"><span>	queue.rear=(queue.rear+1) % queue.capacity;</span></span>
<span class="line"><span>	queue.size++;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//取出元素</span></span>
<span class="line"><span>void del(Queue* queue){</span></span>
<span class="line"><span>	if(queue.size==0){</span></span>
<span class="line"><span>		printf(&quot;队列为空,无法取出元素&quot;);</span></span>
<span class="line"><span>		return;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	int num = queue.que[queue.front];</span></span>
<span class="line"><span>	queue.front=(queue.front+1)%queue.capacity;</span></span>
<span class="line"><span>	queue.size--;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这样的队列由于是循环队列,头指针的索引不必比尾指针的索引小.</p><h2 id="链式队列" tabindex="-1"><a class="header-anchor" href="#链式队列"><span>链式队列</span></a></h2><p>先进先出 可使用线性表或者链表实现</p><p>抽象数据类型： 队列：</p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="python" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> queue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">队列</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=[]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> enqueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">往队列中添加一个元素</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> dequeue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">从队列头部删除一个元素</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> is_empty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">判断队列是否为空</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">返回队列的大小</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> len</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>双端队列：</p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="python" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> deque</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">object</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">    &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">双端队列</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add_front</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">往头部中添加一个元素</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">insert</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add_rear</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">往尾部添加一个元素</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">append</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> pop_front</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">删除头部元素</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> pop_rear</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">删除尾部元素</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">pop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> is_empty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">判断队列是否为空</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">        &quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;返回队列的大小</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> len</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><em>队列常用于作业的调度</em></p><p><strong>宽度（广度）优先搜索算法BFS</strong></p><p>若为线性表每次出队元素的时间复杂度为O(n)，使用链表的话时间复杂度为O(1)，出队列也可以将队首往后移来使时间复杂度达到O(1)，但这样操作出队的元素并没有删除，依旧存在队列中 ![](file:///C:\\Users\\weiyufan\\AppData\\Roaming\\Tencent\\Users\\1084152852\\QQ\\WinTemp\\RichOle\\IZ5IQ65[~}(BKQE@4HE67TW.png)</p><div class="language-c line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="c" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// LinkedQueue.h</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">pragma</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> once</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">struct</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Node </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Node</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    Node</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> : </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nullptr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class LinkedQueue </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">public:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    LinkedQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    ~</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">LinkedQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    bool</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> isEmpty</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> enqueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> x</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> dequeue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> peek</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">private:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Node</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> m_front</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    Node</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> m_rear</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   // 队尾指针，指向链表的尾部</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="栈和队列的转换" tabindex="-1"><a class="header-anchor" href="#栈和队列的转换"><span>栈和队列的转换</span></a></h2><h1 id="朴素匹配算法" tabindex="-1"><a class="header-anchor" href="#朴素匹配算法"><span>朴素匹配算法</span></a></h1>`,54)]))}const t=n(e,[["render",p]]),v=JSON.parse('{"path":"/base/dsa/1/","title":"1 线性结构","lang":"zh-CN","frontmatter":{"title":"1 线性结构","createTime":"2025/06/22 16:21:28","permalink":"/base/dsa/1/"},"readingTime":{"minutes":8.16,"words":2447},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/数据结构与算法/1 线性结构.md","headers":[]}');export{t as comp,v as data};
