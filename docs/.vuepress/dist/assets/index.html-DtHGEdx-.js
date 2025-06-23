import{_ as s,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h2 id="树和森林的转换" tabindex="-1"><a class="header-anchor" href="#树和森林的转换"><span>树和森林的转换</span></a></h2><h2 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h2><h3 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历"><span>二叉树的遍历</span></a></h3><p>先序遍历,中序遍历,后序遍历的方法差不多只需要把printf和递归左右节点交换位置即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 先序遍历</span></span>
<span class="line"><span>void preOrder(TreeNode *root) {</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    printf(&quot;%c &quot;, root-&gt;data);</span></span>
<span class="line"><span>    preOrder(root-&gt;left);</span></span>
<span class="line"><span>    preOrder(root-&gt;right);</span></span>
<span class="line"><span>    free(root);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非递归的实现需要借助栈(递归实现本质也是依靠栈)</p><p>层序遍历则需要借助一个队列来实现</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 二叉树节点</span></span>
<span class="line"><span>typedef struct TreeNode {</span></span>
<span class="line"><span>    char data;</span></span>
<span class="line"><span>    struct TreeNode *left;</span></span>
<span class="line"><span>    struct TreeNode *right;</span></span>
<span class="line"><span>    int lflag;</span></span>
<span class="line"><span>    int rflag;</span></span>
<span class="line"><span>} TreeNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode *create_Node(char data) {</span></span>
<span class="line"><span>    TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));</span></span>
<span class="line"><span>    node-&gt;data = data;</span></span>
<span class="line"><span>    node-&gt;left = node-&gt;right = NULL;</span></span>
<span class="line"><span>    node-&gt;lflag = 0;</span></span>
<span class="line"><span>    node-&gt;rflag = 0;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 队列节点</span></span>
<span class="line"><span>typedef struct QueueNode {</span></span>
<span class="line"><span>    TreeNode *element;</span></span>
<span class="line"><span>    struct QueueNode *next;</span></span>
<span class="line"><span>} QueueNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 队列</span></span>
<span class="line"><span>typedef struct Queue {</span></span>
<span class="line"><span>    QueueNode *front;</span></span>
<span class="line"><span>    QueueNode *rear;</span></span>
<span class="line"><span>} Queue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool initQueue(Queue *queue) {</span></span>
<span class="line"><span>    queue-&gt;front = queue-&gt;rear = NULL;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool enqueue(Queue *queue, TreeNode *tnode) {</span></span>
<span class="line"><span>    if (tnode == NULL)</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    QueueNode *node = (QueueNode *)malloc(sizeof(QueueNode));</span></span>
<span class="line"><span>    node-&gt;element = tnode;</span></span>
<span class="line"><span>    node-&gt;next = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (queue-&gt;front == NULL)</span></span>
<span class="line"><span>        queue-&gt;front = queue-&gt;rear = node;</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        queue-&gt;rear-&gt;next = node;</span></span>
<span class="line"><span>        queue-&gt;rear = node;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool isEmpty(Queue *queue) {</span></span>
<span class="line"><span>    return queue-&gt;front == NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QueueNode *dequeue(Queue *queue) {</span></span>
<span class="line"><span>    // 检查队列是否为空，为空则返回NULL</span></span>
<span class="line"><span>    if (queue-&gt;front == NULL)</span></span>
<span class="line"><span>        return NULL;</span></span>
<span class="line"><span>    QueueNode *node = queue-&gt;front;</span></span>
<span class="line"><span>    queue-&gt;front = queue-&gt;front-&gt;next;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 先序遍历</span></span>
<span class="line"><span>void preOrder(TreeNode *root) {</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    printf(&quot;%c &quot;, root-&gt;data);</span></span>
<span class="line"><span>    preOrder(root-&gt;left);</span></span>
<span class="line"><span>    preOrder(root-&gt;right);</span></span>
<span class="line"><span>    free(root);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void levelOrder(TreeNode *root) {</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    Queue queue;</span></span>
<span class="line"><span>    initQueue(&amp;queue);</span></span>
<span class="line"><span>    enqueue(&amp;queue, root);</span></span>
<span class="line"><span>    QueueNode *node;</span></span>
<span class="line"><span>    while (!isEmpty(&amp;queue)) {</span></span>
<span class="line"><span>        node = dequeue(&amp;queue);</span></span>
<span class="line"><span>        printf(&quot;%c &quot;, node-&gt;element-&gt;data);</span></span>
<span class="line"><span>        if (node-&gt;element-&gt;left != NULL)</span></span>
<span class="line"><span>            enqueue(&amp;queue, node-&gt;element-&gt;left);</span></span>
<span class="line"><span>        if (node-&gt;element-&gt;right != NULL)</span></span>
<span class="line"><span>            enqueue(&amp;queue, node-&gt;element-&gt;right);</span></span>
<span class="line"><span>        free(node);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="线索化二叉树" tabindex="-1"><a class="header-anchor" href="#线索化二叉树"><span>线索化二叉树</span></a></h4><p>线索化:即将叶子节点上空的左右节点分别指向自己的上一个元素和下一个元素 ![[Pasted image 20240908205858.png]] 在二叉树节点中设置两个标志位分别指示左右节点,如果标志位为0则表示该节点有元素,若为1表示该节点被线索化,其指向它的下一个元素 先序线索化</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 先序遍历 - 线索化二叉树</span></span>
<span class="line"><span>TreeNode *pre = NULL;</span></span>
<span class="line"><span>// 这里我们需要一个pre来保存后续结点的指向</span></span>
<span class="line"><span>void preOrderThreaded(TreeNode *root) {  // 前序遍历线索化函数</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;left == NULL) {  // 首先判断当前结点左边是否为NULL，如果是，那么指向上一个结点</span></span>
<span class="line"><span>        root-&gt;left = pre;</span></span>
<span class="line"><span>        root-&gt;lflag = 1;  // 记得修改标记</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (pre &amp;&amp; pre-&gt;right == NULL) {  // 然后是判断上一个结点的右边是否为NULL，如果是那么进行线索化，指向当前结点</span></span>
<span class="line"><span>        pre-&gt;right = root;</span></span>
<span class="line"><span>        pre-&gt;rflag = 1;  // 记得修改标记</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pre = root;            // 每遍历完一个，需要更新一下pre，表示上一个遍历的结点</span></span>
<span class="line"><span>    if (root-&gt;lflag == 0)  // 注意只有标志位是0才可以继续向下，否则就是线索了</span></span>
<span class="line"><span>        preOrderThreaded(root-&gt;left);</span></span>
<span class="line"><span>    if (root-&gt;rflag == 0)</span></span>
<span class="line"><span>        preOrderThreaded(root-&gt;right);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>遍历先序线索化二叉树</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 遍历先序线索化二叉树</span></span>
<span class="line"><span> * @param root 根节点</span></span>
<span class="line"><span> * @note 只能适用于先序线索化的二叉树</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>void preOrderThreaded(TreeNode *root) {</span></span>
<span class="line"><span>    while (root != NULL) {</span></span>
<span class="line"><span>        printf(&quot;%c &quot;, root-&gt;data);</span></span>
<span class="line"><span>        if (root-&gt;lflag == 0)</span></span>
<span class="line"><span>            root = root-&gt;left;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            root = root-&gt;right;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序线索化二叉树 ![[Clip_2024-09-09_21-23-47.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 中序遍历 - 线索化二叉树</span></span>
<span class="line"><span>TreeNode *pre = NULL;</span></span>
<span class="line"><span>void midOrderThreaded(TreeNode *root) {</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;lflag == 0)</span></span>
<span class="line"><span>        midOrderThreaded(root-&gt;left);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;left == NULL) {</span></span>
<span class="line"><span>        root-&gt;lflag = 1;</span></span>
<span class="line"><span>        root-&gt;left = pre;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pre &amp;&amp; pre-&gt;right == NULL) {</span></span>
<span class="line"><span>        pre-&gt;rflag = 1;</span></span>
<span class="line"><span>        pre-&gt;right = root;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pre = root;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;rflag == 0)</span></span>
<span class="line"><span>        midOrderThreaded(root-&gt;right);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>遍历中序线索化的二叉树</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 中序遍历 - 线索化二叉树</span></span>
<span class="line"><span> * @param root 根节点</span></span>
<span class="line"><span> * @note 只适用于中序线索化的二叉树</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>void inmidOrderThreaded(TreeNode *root) {</span></span>
<span class="line"><span>    while (root) {</span></span>
<span class="line"><span>        while (root-&gt;lflag == 0) {</span></span>
<span class="line"><span>            root = root-&gt;left;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        printf(&quot;%c &quot;, root-&gt;data);</span></span>
<span class="line"><span>        while (root-&gt;rflag == 1) {</span></span>
<span class="line"><span>            root = root-&gt;right;</span></span>
<span class="line"><span>            printf(&quot;%c &quot;, root-&gt;data);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        root = root-&gt;right;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>后序线索化二叉树 ![[Clip_2024-09-10_17-25-40.png]]</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 后序遍历 - 线索化二叉树</span></span>
<span class="line"><span>TreeNode *pre = NULL;</span></span>
<span class="line"><span>void postOrderThreaded(TreeNode *root) {</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;left == NULL) {</span></span>
<span class="line"><span>        root-&gt;left = pre;</span></span>
<span class="line"><span>        root-&gt;lflag = 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;lflag == 0)</span></span>
<span class="line"><span>        postOrderThreaded(root-&gt;left);</span></span>
<span class="line"><span>    if (root-&gt;rflag == 0)</span></span>
<span class="line"><span>        postOrderThreaded(root-&gt;right);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pre &amp;&amp; pre-&gt;right == NULL) {</span></span>
<span class="line"><span>        pre-&gt;right = root;</span></span>
<span class="line"><span>        pre-&gt;rflag = 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pre = root;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>遍历后序线索化的二叉树需要节点中有指向其父节点的指针</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef struct TreeNode {</span></span>
<span class="line"><span>    E element;</span></span>
<span class="line"><span>    struct TreeNode * left;</span></span>
<span class="line"><span>    struct TreeNode * right;</span></span>
<span class="line"><span>    struct TreeNode * parent;   //指向双亲（父）结点</span></span>
<span class="line"><span>    int leftTag, rightTag;</span></span>
<span class="line"><span>} * Node;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void postOrder(Node root){</span></span>
<span class="line"><span>    Node last = NULL, node = root;  //这里需要两个暂存指针，一个记录上一次遍历的结点，还有一个从root开始</span></span>
<span class="line"><span>    while (node) {</span></span>
<span class="line"><span>        while (node-&gt;left != last &amp;&amp; node-&gt;leftTag == 0)    //依然是从整棵树最左边结点开始，和前面一样，只不过这里加入了防无限循环机制，看到下面就知道了</span></span>
<span class="line"><span>            node = node-&gt;left;</span></span>
<span class="line"><span>        while (node &amp;&amp; node-&gt;rightTag == 1) {   //左边完了还有右边，如果右边是线索，那么直接一路向前，也是跟前面一样的</span></span>
<span class="line"><span>            printf(&quot;%c&quot;, node-&gt;element);   //沿途打印</span></span>
<span class="line"><span>            last = node;</span></span>
<span class="line"><span>            node = node-&gt;right;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (node == root &amp;&amp; node-&gt;right == last) {</span></span>
<span class="line"><span>            //上面的操作完成之后，那么当前结点左右就结束了，此时就要去寻找其兄弟结点了，我们可以</span></span>
<span class="line"><span>            //直接通过parent拿到兄弟结点，但是如果当前结点是根结点，需要特殊处理，因为根结点没有父结点了</span></span>
<span class="line"><span>            printf(&quot;%c&quot;, node-&gt;element);</span></span>
<span class="line"><span>            return;   //根节点一定是最后一个，所以说直接返回就完事</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        while (node &amp;&amp; node-&gt;right == last) {    //如果当前结点的右孩子就是上一个遍历的结点，那么一直向前就行</span></span>
<span class="line"><span>            printf(&quot;%c&quot;, node-&gt;element);   //直接打印当前结点</span></span>
<span class="line"><span>            last = node;</span></span>
<span class="line"><span>            node = node-&gt;parent;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //到这里只有一种情况了，是从左子树上来的，那么当前结点的右边要么是线索要么是右子树，所以直接向右就完事</span></span>
<span class="line"><span>        if(node &amp;&amp; node-&gt;rightTag == 0) {  //如果不是线索，那就先走右边，如果是，等到下一轮再说</span></span>
<span class="line"><span>            node = node-&gt;right;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="高级树结构" tabindex="-1"><a class="header-anchor" href="#高级树结构"><span>高级树结构</span></a></h1><h2 id="线索化二叉树-1" tabindex="-1"><a class="header-anchor" href="#线索化二叉树-1"><span>线索化二叉树</span></a></h2><h2 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树"><span>二叉查找树</span></a></h2><p>要删除二叉搜索树上的节点需要尽量保证它的性质不丢失,高度不增加</p><ol><li>删除叶子节点: 直接删除即可</li><li>被删除节点只有一个子树: 将节点对应的指针连到被删除节点的孩子再删除即可</li><li>左右都有孩子: 将要删除节点的前驱(左子树中最大的元素)或后继(右子树中最小的元素)放到被删除节点的位置</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>TreeNode *insert1(TreeNode *root, int data) {</span></span>
<span class="line"><span>    if (root) {</span></span>
<span class="line"><span>        if (data &lt; root-&gt;data) {</span></span>
<span class="line"><span>            root-&gt;left = insert1(root-&gt;left, data);</span></span>
<span class="line"><span>        } else if (data &gt; root-&gt;data) {</span></span>
<span class="line"><span>            root-&gt;right = insert1(root-&gt;right, data);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            printf(&quot;重复插入\\n&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        root = create_Node(data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return root;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode *find(TreeNode *root, int data) {</span></span>
<span class="line"><span>    while (root) {</span></span>
<span class="line"><span>        if (data &lt; root-&gt;data)</span></span>
<span class="line"><span>            root = root-&gt;left;</span></span>
<span class="line"><span>        else if (data &gt; root-&gt;data)</span></span>
<span class="line"><span>            root = root-&gt;right;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            return root;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode* delete(Node root, E target){</span></span>
<span class="line"><span>    if(root == NULL) return NULL;   //都走到底了还是没有找到要删除的结点，说明没有，直接返回空</span></span>
<span class="line"><span>    if(root-&gt;element &gt; target)   //这里的判断跟之前插入是一样的，继续往后找就完事，直到找到为止</span></span>
<span class="line"><span>        root-&gt;left = delete(root-&gt;left, target);</span></span>
<span class="line"><span>    else if(root-&gt;element &lt; target)</span></span>
<span class="line"><span>        root-&gt;right = delete(root-&gt;right, target);</span></span>
<span class="line"><span>    else {   //这种情况就是找到了</span></span>
<span class="line"><span>        if(root-&gt;left &amp;&amp; root-&gt;right) {   //先处理最麻烦的左右孩子都有的情况</span></span>
<span class="line"><span>            TreeNode* max = findMax(root-&gt;left);  //寻找左子树中最大的元素</span></span>
<span class="line"><span>            root-&gt;element = max-&gt;element;  //找到后将值替换</span></span>
<span class="line"><span>            root-&gt;left = delete(root-&gt;left, root-&gt;element);  //替换好后，以同样的方式去删除那个替换上来的结点</span></span>
<span class="line"><span>        } else {   //其他两种情况可以一起处理，只需要删除这个结点就行，然后将root指定为其中一个孩子，最后返回就完事</span></span>
<span class="line"><span>            TreeNode* tmp = root;</span></span>
<span class="line"><span>            if(root-&gt;right) {   //不是左边就是右边</span></span>
<span class="line"><span>                root = root-&gt;right;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                root = root-&gt;left;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            free(tmp);   //开删</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return root;   //返回最终的结点</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 二叉树节点</span></span>
<span class="line"><span>typedef struct TreeNode {</span></span>
<span class="line"><span>    int data;</span></span>
<span class="line"><span>    struct TreeNode *left;</span></span>
<span class="line"><span>    struct TreeNode *right;</span></span>
<span class="line"><span>    int height;</span></span>
<span class="line"><span>} TreeNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode *create_Node(int data) {</span></span>
<span class="line"><span>    TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));</span></span>
<span class="line"><span>    node-&gt;data = data;</span></span>
<span class="line"><span>    node-&gt;left = node-&gt;right = NULL;</span></span>
<span class="line"><span>    node-&gt;height = 1;</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int max(int a, int b) {</span></span>
<span class="line"><span>    return a &gt; b ? a : b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int getHeight(TreeNode *root) {</span></span>
<span class="line"><span>    if (root == NULL)</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>    return root-&gt;height;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 右旋</span></span>
<span class="line"><span>TreeNode *rightRotate(TreeNode *root) {</span></span>
<span class="line"><span>    TreeNode *tmp = root-&gt;left;</span></span>
<span class="line"><span>    root-&gt;left = tmp-&gt;right;</span></span>
<span class="line"><span>    tmp-&gt;right = root;</span></span>
<span class="line"><span>    root-&gt;height = max(getHeight(root-&gt;left), getHeight(root-&gt;right)) + 1;</span></span>
<span class="line"><span>    tmp-&gt;height = max(getHeight(tmp-&gt;left), getHeight(tmp-&gt;right)) + 1;</span></span>
<span class="line"><span>    return tmp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 左旋</span></span>
<span class="line"><span>TreeNode *leftRotate(TreeNode *root) {</span></span>
<span class="line"><span>    TreeNode *tmp = root-&gt;right;</span></span>
<span class="line"><span>    root-&gt;right = tmp-&gt;left;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tmp-&gt;left = root;</span></span>
<span class="line"><span>    root-&gt;height = max(getHeight(root-&gt;left), getHeight(root-&gt;right)) + 1;</span></span>
<span class="line"><span>    tmp-&gt;height = max(getHeight(tmp-&gt;left), getHeight(tmp-&gt;right)) + 1;</span></span>
<span class="line"><span>    return tmp;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 左右旋</span></span>
<span class="line"><span>TreeNode *leftRightRotate(TreeNode *root) {</span></span>
<span class="line"><span>    root-&gt;left = leftRotate(root-&gt;left);</span></span>
<span class="line"><span>    return rightRotate(root);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 右左旋</span></span>
<span class="line"><span>TreeNode *rightLeftRotate(TreeNode *root) {</span></span>
<span class="line"><span>    root-&gt;right = rightRotate(root-&gt;right);</span></span>
<span class="line"><span>    return leftRotate(root);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode *insert(TreeNode *root, int data) {</span></span>
<span class="line"><span>    if (root == NULL) {</span></span>
<span class="line"><span>        return create_Node(data);</span></span>
<span class="line"><span>    } else if (data &lt; root-&gt;data) {</span></span>
<span class="line"><span>        root-&gt;left = insert(root-&gt;left, data);</span></span>
<span class="line"><span>        root-&gt;height = max(getHeight(root-&gt;left), getHeight(root-&gt;right)) + 1;</span></span>
<span class="line"><span>        if ((getHeight(root-&gt;left) - getHeight(root-&gt;right)) &gt; 1 || (getHeight(root-&gt;left) - getHeight(root-&gt;right)) &lt; -1) {// 判断是否需要旋转</span></span>
<span class="line"><span>            //因为是在左边节点插入的,失衡点必然在左边,所以只需要判断是否需要左旋或者左右旋</span></span>
<span class="line"><span>            if (getHeight(root-&gt;left-&gt;left) &gt; getHeight(root-&gt;left-&gt;right)) {//LL型失衡</span></span>
<span class="line"><span>                root = rightRotate(root);</span></span>
<span class="line"><span>            } else {//LR型失衡</span></span>
<span class="line"><span>                root = leftRightRotate(root);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    } else if (data &gt; root-&gt;data) {</span></span>
<span class="line"><span>        root-&gt;right = insert(root-&gt;right, data);</span></span>
<span class="line"><span>        root-&gt;height = max(getHeight(root-&gt;left), getHeight(root-&gt;right)) + 1;</span></span>
<span class="line"><span>        if ((getHeight(root-&gt;right) - getHeight(root-&gt;left)) &gt; 1 || (getHeight(root-&gt;right) - getHeight(root-&gt;left)) &lt; -1) {</span></span>
<span class="line"><span>            if (getHeight(root-&gt;right-&gt;right) &gt; getHeight(root-&gt;right-&gt;left)) {//RR型失衡</span></span>
<span class="line"><span>                root = leftRotate(root);</span></span>
<span class="line"><span>            } else {//RL型失衡</span></span>
<span class="line"><span>                root = rightLeftRotate(root);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return root;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树"><span>红黑树</span></a></h2><p>这里的叶子节点是空节点,空节点也算在规则内</p><ul><li>根节点和叶子节点都是黑色</li><li>所有的红色节点其左右孩子都必须是黑色的(从上到下不能存在连续的红色节点)</li><li>任一节点到它的叶子节点所有路径上黑色节点数都相同</li><li>插入的节点默认是红色的</li></ul><h1 id="其他树结构" tabindex="-1"><a class="header-anchor" href="#其他树结构"><span>其他树结构</span></a></h1><h2 id="b树" tabindex="-1"><a class="header-anchor" href="#b树"><span>B树</span></a></h2><h2 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树"><span>B+树</span></a></h2><h2 id="哈夫曼树" tabindex="-1"><a class="header-anchor" href="#哈夫曼树"><span>哈夫曼树</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct TreeNode {</span></span>
<span class="line"><span>    int weight;</span></span>
<span class="line"><span>    char value;</span></span>
<span class="line"><span>    struct TreeNode *left;</span></span>
<span class="line"><span>    struct TreeNode *right;</span></span>
<span class="line"><span>} TreeNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void initTreeNode(TreeNode *node, int weight, char value) {</span></span>
<span class="line"><span>    node-&gt;weight = weight;</span></span>
<span class="line"><span>    node-&gt;value = value;</span></span>
<span class="line"><span>    node-&gt;left = NULL;</span></span>
<span class="line"><span>    node-&gt;right = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode *createTreeNode(int weight, char value) {</span></span>
<span class="line"><span>    TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));</span></span>
<span class="line"><span>    initTreeNode(node, weight, value);</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 优先队列节点</span></span>
<span class="line"><span>typedef struct QueueNode {</span></span>
<span class="line"><span>    TreeNode *element;</span></span>
<span class="line"><span>    struct QueueNode *next;</span></span>
<span class="line"><span>} QueueNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void initQueueNode(QueueNode *node, TreeNode *nodeData) {</span></span>
<span class="line"><span>    node-&gt;element = nodeData;</span></span>
<span class="line"><span>    node-&gt;next = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QueueNode *createQueueNode(TreeNode *nodeData) {</span></span>
<span class="line"><span>    QueueNode *node = (QueueNode *)malloc(sizeof(QueueNode));</span></span>
<span class="line"><span>    initQueueNode(node, nodeData);</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int getWeight(QueueNode *node) {</span></span>
<span class="line"><span>    if (node == NULL) {</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return node-&gt;element-&gt;weight;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void enqueue(QueueNode **queue, TreeNode *node) {</span></span>
<span class="line"><span>    if (node == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QueueNode *newNode = createQueueNode(node);</span></span>
<span class="line"><span>    if (*queue == NULL) {</span></span>
<span class="line"><span>        *queue = newNode;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        QueueNode *pre = NULL;</span></span>
<span class="line"><span>        newNode-&gt;next = *queue;</span></span>
<span class="line"><span>        while (newNode-&gt;next &amp;&amp; getWeight(newNode) &gt; getWeight(newNode-&gt;next)) {</span></span>
<span class="line"><span>            pre = newNode-&gt;next;</span></span>
<span class="line"><span>            newNode-&gt;next = newNode-&gt;next-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (pre == NULL) {</span></span>
<span class="line"><span>            *queue = newNode;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            pre-&gt;next = newNode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QueueNode *dequeue(QueueNode **queue) {</span></span>
<span class="line"><span>    if (queue == NULL || *queue == NULL) {</span></span>
<span class="line"><span>        return NULL;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        QueueNode *temp = *queue;</span></span>
<span class="line"><span>        *queue = temp-&gt;next;</span></span>
<span class="line"><span>        return temp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造哈夫曼树</span></span>
<span class="line"><span>TreeNode *createHuffmanTree(QueueNode **queue) {</span></span>
<span class="line"><span>    if (queue == NULL || *queue == NULL) {</span></span>
<span class="line"><span>        return NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    TreeNode *temp1 = NULL, *temp2 = NULL;</span></span>
<span class="line"><span>    while (*queue != NULL &amp;&amp; (*queue)-&gt;next != NULL) {</span></span>
<span class="line"><span>        temp1 = dequeue(queue)-&gt;element;</span></span>
<span class="line"><span>        temp2 = dequeue(queue)-&gt;element;</span></span>
<span class="line"><span>        TreeNode *newNode = createTreeNode(temp1-&gt;weight + temp2-&gt;weight, &#39;\\0&#39;);</span></span>
<span class="line"><span>        newNode-&gt;left = temp1;</span></span>
<span class="line"><span>        newNode-&gt;right = temp2;</span></span>
<span class="line"><span>        enqueue(queue, newNode);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    temp1 = dequeue(queue)-&gt;element;</span></span>
<span class="line"><span>    return temp1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 哈夫曼编码</span></span>
<span class="line"><span>void huffmanEncode(TreeNode *root, int code) {</span></span>
<span class="line"><span>    if (root == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;left != NULL) {</span></span>
<span class="line"><span>        huffmanEncode(root-&gt;left, (code &lt;&lt; 1) | 0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (root-&gt;right != NULL) {</span></span>
<span class="line"><span>        huffmanEncode(root-&gt;right, (code &lt;&lt; 1) | 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (root-&gt;left == NULL &amp;&amp; root-&gt;right == NULL) {</span></span>
<span class="line"><span>        printf(&quot;%c: %d\\n&quot;, root-&gt;value, code);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    QueueNode *n1 = NULL;</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(5, &#39;A&#39;));</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(16, &#39;B&#39;));</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(8, &#39;C&#39;));</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(13, &#39;D&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    TreeNode *tree = createHuffmanTree(&amp;n1);</span></span>
<span class="line"><span>    huffmanEncode(tree, 0);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="堆和有限队列" tabindex="-1"><a class="header-anchor" href="#堆和有限队列"><span>堆和有限队列</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct TreeNode {</span></span>
<span class="line"><span>    int weight;</span></span>
<span class="line"><span>    char value;</span></span>
<span class="line"><span>    struct TreeNode *left;</span></span>
<span class="line"><span>    struct TreeNode *right;</span></span>
<span class="line"><span>} TreeNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void initTreeNode(TreeNode *node, int weight, char value) {</span></span>
<span class="line"><span>    node-&gt;weight = weight;</span></span>
<span class="line"><span>    node-&gt;value = value;</span></span>
<span class="line"><span>    node-&gt;left = NULL;</span></span>
<span class="line"><span>    node-&gt;right = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TreeNode *createTreeNode(int weight, char value) {</span></span>
<span class="line"><span>    TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));</span></span>
<span class="line"><span>    initTreeNode(node, weight, value);</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 优先队列节点</span></span>
<span class="line"><span>typedef struct QueueNode {</span></span>
<span class="line"><span>    TreeNode *element;</span></span>
<span class="line"><span>    struct QueueNode *next;</span></span>
<span class="line"><span>} QueueNode;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void initQueueNode(QueueNode *node, TreeNode *nodeData) {</span></span>
<span class="line"><span>    node-&gt;element = nodeData;</span></span>
<span class="line"><span>    node-&gt;next = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QueueNode *createQueueNode(TreeNode *nodeData) {</span></span>
<span class="line"><span>    QueueNode *node = (QueueNode *)malloc(sizeof(QueueNode));</span></span>
<span class="line"><span>    initQueueNode(node, nodeData);</span></span>
<span class="line"><span>    return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int getWeight(QueueNode *node) {</span></span>
<span class="line"><span>    if (node == NULL) {</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return node-&gt;element-&gt;weight;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void enqueue(QueueNode **queue, TreeNode *node) {</span></span>
<span class="line"><span>    if (node == NULL) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QueueNode *newNode = createQueueNode(node);</span></span>
<span class="line"><span>    if (*queue == NULL) {</span></span>
<span class="line"><span>        *queue = newNode;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        QueueNode *pre = NULL;</span></span>
<span class="line"><span>        newNode-&gt;next = *queue;</span></span>
<span class="line"><span>        while (newNode-&gt;next &amp;&amp; getWeight(newNode) &gt; getWeight(newNode-&gt;next)) {</span></span>
<span class="line"><span>            pre = newNode-&gt;next;</span></span>
<span class="line"><span>            newNode-&gt;next = newNode-&gt;next-&gt;next;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (pre == NULL) {</span></span>
<span class="line"><span>            *queue = newNode;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            pre-&gt;next = newNode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QueueNode *dequeue(QueueNode **queue) {</span></span>
<span class="line"><span>    if (queue == NULL || *queue == NULL) {</span></span>
<span class="line"><span>        return NULL;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        QueueNode *temp = *queue;</span></span>
<span class="line"><span>        *queue = temp-&gt;next;</span></span>
<span class="line"><span>        return temp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    QueueNode *n1= NULL;</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(5, &#39;A&#39;));</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(16, &#39;B&#39;));</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(8, &#39;C&#39;));</span></span>
<span class="line"><span>    enqueue(&amp;n1, createTreeNode(13, &#39;D&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (n1 != NULL) {</span></span>
<span class="line"><span>        QueueNode *temp = dequeue(&amp;n1);</span></span>
<span class="line"><span>        printf(&quot;%c\\n&quot;,temp-&gt;element-&gt;value);</span></span>
<span class="line"><span>        free(temp);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>使用堆也可以实现优先队列,且因为堆的元素是有序的故经常使用数组实现堆 因为堆是完全二叉树,这样使用数组实现的堆其节点在查找自己的父节点时可以使用自身索引/2即可 得到父节点的索引,但必须要以索引为1为根节点,这样吧才不会出bug 堆不保证数组中的元素是有序的,但能保证首位元素是最大(大根堆)或最小(小根堆)的</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct Heap {</span></span>
<span class="line"><span>    int* arr;</span></span>
<span class="line"><span>    int size;</span></span>
<span class="line"><span>    int capacity;</span></span>
<span class="line"><span>} Heap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void initHeap(Heap* heap) {</span></span>
<span class="line"><span>    heap-&gt;capacity = 10;</span></span>
<span class="line"><span>    heap-&gt;size = 1;  // 索引为0处不存数据</span></span>
<span class="line"><span>    heap-&gt;arr = (int*)malloc(heap-&gt;capacity * sizeof(int));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void insert(Heap* heap, int val) {</span></span>
<span class="line"><span>    if (heap == NULL || heap-&gt;size &gt;= heap-&gt;capacity)</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    heap-&gt;arr[heap-&gt;size++] = val;</span></span>
<span class="line"><span>    for (int i = heap-&gt;size - 1; i &gt; 1; --i) {</span></span>
<span class="line"><span>        if (heap-&gt;arr[i] &gt; heap-&gt;arr[i / 2]) {</span></span>
<span class="line"><span>            int tmp = heap-&gt;arr[i];</span></span>
<span class="line"><span>            heap-&gt;arr[i] = heap-&gt;arr[i / 2];</span></span>
<span class="line"><span>            heap-&gt;arr[i / 2] = tmp;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int pop(Heap* heap) {</span></span>
<span class="line"><span>    if (heap == NULL || heap-&gt;size &lt;= 1)</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    int ret = heap-&gt;arr[1];</span></span>
<span class="line"><span>    heap-&gt;arr[1] = heap-&gt;arr[--heap-&gt;size];</span></span>
<span class="line"><span>    for (int i = 1; i &lt; heap-&gt;size &amp;&amp; i * 2 + 1 &lt; heap-&gt;size; ++i) {  // 从根节点开始调整,和插入相反的顺序</span></span>
<span class="line"><span>        if (heap-&gt;arr[i] &lt; heap-&gt;arr[i * 2] || heap-&gt;arr[i] &lt; heap-&gt;arr[i * 2 + 1]) {</span></span>
<span class="line"><span>            int index = heap-&gt;arr[i * 2] &gt; heap-&gt;arr[i * 2 + 1] ? i * 2 : i * 2 + 1;</span></span>
<span class="line"><span>            int tmp = heap-&gt;arr[i];</span></span>
<span class="line"><span>            heap-&gt;arr[i] = heap-&gt;arr[index];</span></span>
<span class="line"><span>            heap-&gt;arr[index] = tmp;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    Heap heap;</span></span>
<span class="line"><span>    initHeap(&amp;heap);</span></span>
<span class="line"><span>    // 插入5,2,3,7,6</span></span>
<span class="line"><span>    insert(&amp;heap, 5);</span></span>
<span class="line"><span>    insert(&amp;heap, 2);</span></span>
<span class="line"><span>    insert(&amp;heap, 3);</span></span>
<span class="line"><span>    insert(&amp;heap, 7);</span></span>
<span class="line"><span>    insert(&amp;heap, 6);</span></span>
<span class="line"><span>    insert(&amp;heap, 8);</span></span>
<span class="line"><span>    insert(&amp;heap, 9);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (int i = 1; i &lt; heap.size; ++i) {</span></span>
<span class="line"><span>        printf(&quot;%d &quot;, heap.arr[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (heap.size &gt; 1)//每次出堆size都会减少所以不能使用for循环</span></span>
<span class="line"><span>        printf(&quot;%d &quot;, pop(&amp;heap));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="并查集" tabindex="-1"><a class="header-anchor" href="#并查集"><span>并查集</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class UnionFind {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    vector&lt;int&gt; arr;</span></span>
<span class="line"><span>    int size;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    UnionFind(int n) : arr(n), size(n) {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; n; ++i) {</span></span>
<span class="line"><span>            arr[i] = -1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int find(int x) {</span></span>
<span class="line"><span>        if (x &lt; 0)</span></span>
<span class="line"><span>            return x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (arr[x] &lt; 0)</span></span>
<span class="line"><span>            return x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int tmp = x;</span></span>
<span class="line"><span>        while (arr[tmp] &gt;= 0) {</span></span>
<span class="line"><span>            tmp = arr[tmp];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        arr[x] = tmp;</span></span>
<span class="line"><span>        return tmp;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void unionSet(int x, int y) {</span></span>
<span class="line"><span>        if (x &lt; 0 || y &lt; 0)</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int rootX = find(x);</span></span>
<span class="line"><span>        int rootY = find(y);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (rootX == rootY)</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (arr[rootX] &gt; arr[rootY]) {</span></span>
<span class="line"><span>            arr[rootY] += arr[rootX];</span></span>
<span class="line"><span>            arr[rootX] = rootY;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            arr[rootX] += arr[rootY];</span></span>
<span class="line"><span>            arr[rootY] = rootX;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void foreach () {</span></span>
<span class="line"><span>        for (int i = 0; i &lt; size; ++i) {</span></span>
<span class="line"><span>            cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; arr.at(i) &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="前缀树" tabindex="-1"><a class="header-anchor" href="#前缀树"><span>前缀树</span></a></h2><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class Trie {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    char val;</span></span>
<span class="line"><span>    bool isEnd = false;</span></span>
<span class="line"><span>    vector&lt;Trie*&gt; child = vector&lt;Trie*&gt;(26, nullptr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void insert(string word) {</span></span>
<span class="line"><span>        Trie* cur = this;</span></span>
<span class="line"><span>        for (auto c : word) {</span></span>
<span class="line"><span>            if (cur-&gt;child[c - &#39;a&#39;] == nullptr) {</span></span>
<span class="line"><span>                cur-&gt;child[c - &#39;a&#39;] = new Trie();</span></span>
<span class="line"><span>                cur-&gt;child[c - &#39;a&#39;]-&gt;val = c;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            cur = cur-&gt;child[c - &#39;a&#39;];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        cur-&gt;isEnd = true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    bool search(string word) {</span></span>
<span class="line"><span>        Trie* cur = this;</span></span>
<span class="line"><span>        for (auto c : word) {</span></span>
<span class="line"><span>            if (cur-&gt;child[c - &#39;a&#39;] == nullptr)</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            cur = cur-&gt;child[c - &#39;a&#39;];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return cur-&gt;isEnd;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    bool startsWith(string prefix) {</span></span>
<span class="line"><span>        Trie* cur = this;</span></span>
<span class="line"><span>        for (auto c : prefix) {</span></span>
<span class="line"><span>            if (cur-&gt;child[c - &#39;a&#39;] == nullptr)</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            cur = cur-&gt;child[c - &#39;a&#39;];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~Trie() {</span></span>
<span class="line"><span>        for (auto child : this-&gt;child) {</span></span>
<span class="line"><span>            if (child != nullptr)</span></span>
<span class="line"><span>                delete child;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    Trie trie;</span></span>
<span class="line"><span>    trie.insert(&quot;apple&quot;);</span></span>
<span class="line"><span>    trie.insert(&quot;app&quot;);</span></span>
<span class="line"><span>    trie.insert(&quot;banana&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Search &#39;apple&#39;: &quot; &lt;&lt; trie.search(&quot;apple&quot;) &lt;&lt; endl;    // 输出 1 (true)</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Search &#39;app&#39;: &quot; &lt;&lt; trie.search(&quot;app&quot;) &lt;&lt; endl;        // 输出 1 (true)</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Search &#39;banana&#39;: &quot; &lt;&lt; trie.search(&quot;banana&quot;) &lt;&lt; endl;  // 输出 1 (true)</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Search &#39;appl&#39;: &quot; &lt;&lt; trie.search(&quot;appl&quot;) &lt;&lt; endl;      // 输出 0 (false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cout &lt;&lt; &quot;StartsWith &#39;app&#39;: &quot; &lt;&lt; trie.startsWith(&quot;app&quot;) &lt;&lt; endl;      // 输出 1 (true)</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;StartsWith &#39;banan&#39;: &quot; &lt;&lt; trie.startsWith(&quot;banan&quot;) &lt;&lt; endl;  // 输出 1 (true)</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;StartsWith &#39;appl&#39;: &quot; &lt;&lt; trie.startsWith(&quot;appl&quot;) &lt;&lt; endl;    // 输出 0 (false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,45)]))}const r=s(l,[["render",p]]),v=JSON.parse('{"path":"/base/dsa/2/","title":"2 树形结构","lang":"zh-CN","frontmatter":{"title":"2 树形结构","createTime":"2025/06/22 16:25:13","permalink":"/base/dsa/2/"},"readingTime":{"minutes":12.27,"words":3680},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/数据结构与算法/2 树形结构.md","headers":[]}');export{r as comp,v as data};
