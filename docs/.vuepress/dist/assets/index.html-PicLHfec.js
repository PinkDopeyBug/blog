import{_ as n,c as a,a as i,o as e}from"./app-CEcM0piI.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<p>递归实现</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 二分查找(递归)</span></span>
<span class="line"><span> * @param nums 待查找的数组</span></span>
<span class="line"><span> * @param target 目标值</span></span>
<span class="line"><span> * @param left 左边界</span></span>
<span class="line"><span> * @param right 右边界</span></span>
<span class="line"><span> * @return 目标值在数组中的索引，若不存在，则返回-1</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>int binarySearchRecursive(const vector&lt;int&gt;&amp; nums, int left, int right, int target) {</span></span>
<span class="line"><span>    int mid = (right - left) / 2 + left;</span></span>
<span class="line"><span>    if (nums[mid] == target) {</span></span>
<span class="line"><span>        return mid;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (left &gt; right) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (nums[mid] &gt; target) {</span></span>
<span class="line"><span>        return binarySearchRecursive(nums, left, mid - 1, target);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return binarySearchRecursive(nums, mid + 1, right, target);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>非递归实现</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 二分查找(非递归)</span></span>
<span class="line"><span> * @param nums 待查找的数组</span></span>
<span class="line"><span> * @param target 目标值</span></span>
<span class="line"><span> * @return 目标值在数组中的索引，若不存在，则返回-1</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>int binarySearchIterative(const vector&lt;int&gt;&amp; nums, int target) {</span></span>
<span class="line"><span>    int left = 0, right = nums.size() - 1;</span></span>
<span class="line"><span>    while (left &lt;= right) {</span></span>
<span class="line"><span>        int mid = (right - left) / 2 + left;</span></span>
<span class="line"><span>        if (nums[mid] == target) {</span></span>
<span class="line"><span>            return mid;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (nums[mid] &gt; target) {</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int search(int* nums, int numsSize, int target) {</span></span>
<span class="line"><span>    if (nums == NULL || numsSize == 0)</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int left = 0, right = numsSize - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (left &lt;= right) {</span></span>
<span class="line"><span>        int mid = left + (right - left) / 2;</span></span>
<span class="line"><span>        if (nums[mid] == target)</span></span>
<span class="line"><span>            return mid;</span></span>
<span class="line"><span>        else if (nums[mid] &lt; target) {</span></span>
<span class="line"><span>            left = mid + 1;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            right = mid - 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,4)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/base/dsa/5/","title":"5 查找算法","lang":"zh-CN","frontmatter":{"title":"5 查找算法","createTime":"2025/06/22 16:54:32","permalink":"/base/dsa/5/"},"readingTime":{"minutes":0.87,"words":260},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/数据结构与算法/5 查找算法.md","headers":[]}');export{r as comp,t as data};
