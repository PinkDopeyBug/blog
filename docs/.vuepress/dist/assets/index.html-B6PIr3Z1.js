import{_ as s,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,n){return e(),a("div",null,n[0]||(n[0]=[i(`<p>哈希表 哈希函数 哈希冲突:</p><ul><li>线性探测法解决哈希冲突</li><li>链地址法解决哈希冲突</li></ul><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define SIZE 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 哈希表元素</span></span>
<span class="line"><span>typedef struct Element {</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    struct Element *next;</span></span>
<span class="line"><span>} Element;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 哈希表</span></span>
<span class="line"><span>typedef struct HashMap {</span></span>
<span class="line"><span>    Element *table[SIZE];</span></span>
<span class="line"><span>} HashMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 哈希函数</span></span>
<span class="line"><span>int hash(int key) {</span></span>
<span class="line"><span>    return key % SIZE;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Element *createElement(int data) {</span></span>
<span class="line"><span>    Element *element = (Element *)malloc(sizeof(Element));</span></span>
<span class="line"><span>    element-&gt;data = data;</span></span>
<span class="line"><span>    element-&gt;next = NULL;</span></span>
<span class="line"><span>    return element;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HashMap *createHashMap() {</span></span>
<span class="line"><span>    HashMap *hashMap = (HashMap *)malloc(sizeof(HashMap));</span></span>
<span class="line"><span>    for (int i = 0; i &lt; SIZE; i++)</span></span>
<span class="line"><span>        hashMap-&gt;table[i] = NULL;</span></span>
<span class="line"><span>    return hashMap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 线性探测,当检测一圈发现表中存满后还没有空位就将当前位置的数据覆盖</span></span>
<span class="line"><span>void insert(HashMap *hashMap, int data) {</span></span>
<span class="line"><span>    if (hashMap == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int index = hash(data);</span></span>
<span class="line"><span>    Element *element = createElement(data);</span></span>
<span class="line"><span>    while (hashMap-&gt;table[index] != NULL) {</span></span>
<span class="line"><span>        index = (index + 1) % SIZE;</span></span>
<span class="line"><span>        if (index % SIZE == hash(data)) {</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    hashMap-&gt;table[index] = element;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 链地址法解决哈希冲突</span></span>
<span class="line"><span>void insert2(HashMap *hashMap, int data) {</span></span>
<span class="line"><span>    if (hashMap == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int index = hash(data);</span></span>
<span class="line"><span>    Element *element = createElement(data);</span></span>
<span class="line"><span>    if (hashMap-&gt;table[index] == NULL) {</span></span>
<span class="line"><span>        hashMap-&gt;table[index] = element;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        element-&gt;next = hashMap-&gt;table[index];</span></span>
<span class="line"><span>        while (element-&gt;next-&gt;next != NULL) {</span></span>
<span class="line"><span>            element-&gt;next = element-&gt;next-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        element-&gt;next-&gt;next = element;</span></span>
<span class="line"><span>        element-&gt;next = NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基于线性探测插入的查找</span></span>
<span class="line"><span>int find(HashMap *hashMap, int data) {</span></span>
<span class="line"><span>    if (hashMap == NULL) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int index = hash(data);</span></span>
<span class="line"><span>    for (int i = 0; i &lt; SIZE; ++i) {  // 等循环走完index变回原值也就是走完一圈了</span></span>
<span class="line"><span>        if (hashMap-&gt;table[index]-&gt;data == data) {</span></span>
<span class="line"><span>            return index;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            index = (index + 1) % SIZE;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基于链地址法插入的查找</span></span>
<span class="line"><span>int find2(HashMap *hashMap, int data) {</span></span>
<span class="line"><span>    if (hashMap == NULL) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int index = hash(data);</span></span>
<span class="line"><span>    Element *element = hashMap-&gt;table[index];</span></span>
<span class="line"><span>    while (element != NULL) {</span></span>
<span class="line"><span>        if (element-&gt;data == data) {</span></span>
<span class="line"><span>            return index;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            element = element-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基于线性探测插入的删除</span></span>
<span class="line"><span>void delete(HashMap *hashMap, int data) {</span></span>
<span class="line"><span>    if (hashMap == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int index = find(hashMap, data);</span></span>
<span class="line"><span>    if (index != -1) {</span></span>
<span class="line"><span>        free(hashMap-&gt;table[index]);</span></span>
<span class="line"><span>        hashMap-&gt;table[index] = NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 基于链地址法插入的删除</span></span>
<span class="line"><span>void delete2(HashMap *hashMap, int data) {</span></span>
<span class="line"><span>    if (hashMap == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    int index = find2(hashMap, data);</span></span>
<span class="line"><span>    if (index == -1) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    } else if (hashMap-&gt;table[index]-&gt;data == data) {</span></span>
<span class="line"><span>        free(hashMap-&gt;table[index]);</span></span>
<span class="line"><span>        hashMap-&gt;table[index] = NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Element *temp, *element;</span></span>
<span class="line"><span>    temp = element = hashMap-&gt;table[index];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (element != NULL) {</span></span>
<span class="line"><span>        if (element-&gt;data == data) {</span></span>
<span class="line"><span>            temp-&gt;next = element-&gt;next;</span></span>
<span class="line"><span>            free(element);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            temp = element;</span></span>
<span class="line"><span>            element = element-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    HashMap *hashMap = createHashMap();</span></span>
<span class="line"><span>    insert2(hashMap, 18);</span></span>
<span class="line"><span>    insert2(hashMap, 27);</span></span>
<span class="line"><span>    insert2(hashMap, 63);</span></span>
<span class="line"><span>    insert2(hashMap, 55);</span></span>
<span class="line"><span>    insert2(hashMap, 45);</span></span>
<span class="line"><span>    insert2(hashMap, 36);</span></span>
<span class="line"><span>    insert2(hashMap, 72);</span></span>
<span class="line"><span>    insert2(hashMap, 81);</span></span>
<span class="line"><span>    insert2(hashMap, 9);</span></span>
<span class="line"><span>    insert2(hashMap, 90);</span></span>
<span class="line"><span>    insert2(hashMap, 44);</span></span>
<span class="line"><span>    insert2(hashMap, 184);</span></span>
<span class="line"><span>    insert2(hashMap, 34);</span></span>
<span class="line"><span>    for (int i = 0; i &lt; SIZE; i++) {</span></span>
<span class="line"><span>        if (hashMap-&gt;table[i] != NULL) {</span></span>
<span class="line"><span>            printf(&quot;%d &quot;, hashMap-&gt;table[i]-&gt;data);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;%d\\n&quot;, find2(hashMap, 184));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    delete2(hashMap, 184);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    delete2(hashMap, 45);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,3)]))}const v=s(l,[["render",p]]),t=JSON.parse('{"path":"/base/dsa/4/","title":"4 散列表","lang":"zh-CN","frontmatter":{"title":"4 散列表","createTime":"2025/06/18 21:01:24","permalink":"/base/dsa/4/"},"readingTime":{"minutes":1.89,"words":566},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/数据结构与算法/4 散列表.md","headers":[]}');export{v as comp,t as data};
