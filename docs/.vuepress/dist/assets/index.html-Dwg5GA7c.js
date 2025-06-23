import{_ as n,c as a,a as l,o as i}from"./app-CEcM0piI.js";const e={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[l(`<p>如果并发的线程数量很多，并且每个线程都是执行一个时间很短的任务就结束了，这样频繁创建线程就会大大降低系统的效率，因为频繁创建线程和销毁线程需要时间。</p><p>使得线程可以复用，执行完一个任务，并不被销毁，可以继续执行其他的任务</p><p>多线程的 &quot; 惊群效应 &quot; ,当很多线程因为条件变量而阻塞时,倘若生产者生产出一个资源可以被消费者消费,这时发出信号解除多线程的阻塞,但其中只有一个线程可以拿到资源,其他线程被唤醒后还要接着阻塞. 其中线程被唤醒而又被阻塞就会带来不必要的cpu性能的消耗,因此大多时需要配合多反应堆模型减少惊群效应的性能消耗</p><h1 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h1><p>线程池是一种多线程处理形式，处理过程中将任务添加到队列，然后在创建线程后自动启动这些任务。线程池线程都是后台线程。每个线程都使用默认的堆栈大小，以默认的优先级运行，并处于多线程单元中。如果某个线程在托管代码中空闲（如正在等待某个事件）,则线程池将插入另一个辅助线程来使所有处理器保持繁忙。如果所有线程池线程都始终保持繁忙，但队列中包含挂起的工作，则线程池将在一段时间后创建另一个辅助线程但线程的数目永远不会超过最大值。超过最大值的线程可以排队，但他们要等到其他线程完成后才启动。</p><p>线程池的组成主要分为3个部分，这三部分配合工作就可以得到一个完整的线程池：</p><ol><li>任务队列，存储需要处理的任务，由工作的线程来处理这些任务 <ul><li>通过线程池提供的API函数，将一个待处理的任务添加到任务队列，或者从任务队列中删除</li><li>已处理的任务会被从任务队列中删除</li><li>线程池的使用者，也就是调用线程池函数往任务队列中添加任务的线程就是生产者线程</li></ul></li><li>工作的线程（任务队列任务的消费者） ，N个 <ul><li>线程池中维护了一定数量的工作线程, 他们的作用是是不停的读任务队列, 从里边取出任务并处理</li><li>工作的线程相当于是任务队列的消费者角色，</li><li>如果任务队列为空, 工作的线程将会被阻塞 (使用条件变量/信号量阻塞)</li><li>如果阻塞之后有了新的任务, 由生产者将阻塞解除, 工作线程开始工作</li></ul></li><li>管理者线程（不处理任务队列中的任务），1个 <ul><li>它的任务是周期性的对任务队列中的任务数量以及处于忙状态的工作线程个数进行检测</li><li>当任务过多的时候, 可以适当的创建一些新的工作线程</li><li>当任务过少的时候, 可以适当的销毁一些工作的线程</li></ul></li></ol><h1 id="glib库" tabindex="-1"><a class="header-anchor" href="#glib库"><span>Glib库</span></a></h1><p>data任务，而user_data是在创建线程池时传入的共享数据对于每个任务都是一样的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typedef void(*GFunc)(gpointer data, gpointer user_data);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>创建线程池</li></ol><ul><li>func：线程执行的函数</li><li>user_data：传递给func的数据，可以为NULL，最终会存储在GThreadPool结构体的user_data属性中</li><li>max_threads：线程池中最大线程数</li><li>exclusive：独占标记位。决定当前的线程池独占所有的线程还是与其它线程池共享这些线程。取值可以是TRUE或FALSE TRUE：立即启动数量为max_threads的线程，且启动的线程只能被当前线程池使用 FALSE：只有在需要时，即需要执行任务时才创建线程，且线程可以被多个非独享资源的线程池共用</li><li>error：用于报告错误信息，可以是NULL，表示忽略错误</li><li>return：无论是否发生错误，都会返回有效的线程池对象</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>GThreadPool* g_thread_pool_new(GFunc func, gpointer user_data, gint max_threads, gboolean exclusive, GError** error);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>添加任务 向pool指向的线程池实例添加任务。当存在可用线程时任务立即执行，否则任务数据会一直待在队列中，直至腾出可用线程执行任务</li></ol><ul><li>pool指向线程池实例的指针</li><li>data传递给每个任务的独享数据</li><li>error：错误信息</li><li>return：成功返回ture，失败返回false</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>gboolean g_thread_pool_push(GThreadPool* pool,gpointer data,GError** error);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>释放线程池 释放pool指向的线程池分配的所有资源</li></ol><ul><li>pool：线程池指针</li><li>immediate：是否立即释放线程池 TRUE：立即释放所有资源，未处理的任务不被处理 FALSE：在最后一个任务执行完毕之前，线程池不会被释放 在释放线程池时，线程池的任何一个线程都不会被打断。无论这个参数是何取值，都可以保证线程池释放前正在运行的线程可以完成它们的任务。</li><li>wait_：当前函数是否阻塞等待所有任务完成 TRUE：所有需要处理的任务执行完毕当前函数才会返回 FALSE：当前函数立即返回</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>void g_thread_pool_free(GThreadPool* pool,gboolean immediate,gboolean wait_)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>示例:</strong></p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#include &quot;threadpool.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;pthread.h&gt;</span></span>
<span class="line"><span>#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct Task {</span></span>
<span class="line"><span>    void* (*func)(void*);</span></span>
<span class="line"><span>    void* arg;</span></span>
<span class="line"><span>} Task;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct TaskQueue {</span></span>
<span class="line"><span>    Task* queue;   // 任务队列</span></span>
<span class="line"><span>    int capacity;  // 队列容量</span></span>
<span class="line"><span>    int size;      // 队列大小</span></span>
<span class="line"><span>    int front;     // 队头</span></span>
<span class="line"><span>    int rear;      // 队尾</span></span>
<span class="line"><span>} TaskQueue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct ThreadPool {</span></span>
<span class="line"><span>    TaskQueue* taskqueue;  // 任务队列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pthread_t manager;   // 管理者线程</span></span>
<span class="line"><span>    pthread_t* threads;  // 工作线程</span></span>
<span class="line"><span>    int min;             // 最小线程数</span></span>
<span class="line"><span>    int max;             // 最大线程数</span></span>
<span class="line"><span>    int busy;            // 当前工作的线程数</span></span>
<span class="line"><span>    int live;            // 当前存活的线程数</span></span>
<span class="line"><span>    int exit;            // 要销毁的线程数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pthread_mutex_t mutexPool;  // 锁线程池</span></span>
<span class="line"><span>    pthread_mutex_t mutexBusy;  // 锁busy</span></span>
<span class="line"><span>    pthread_cond_t notEmpty;    // 判定任务队列是否满</span></span>
<span class="line"><span>    pthread_cond_t notFull;     // 判定任务队列是否空</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    bool shutdown;  // 线程池是否销毁</span></span>
<span class="line"><span>} ThreadPool;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 创建任务队列</span></span>
<span class="line"><span> * @param queueSize 任务队列的容量</span></span>
<span class="line"><span> * @return 任务队列</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>TaskQueue* taskQueueCreate(int queueSize) {</span></span>
<span class="line"><span>    TaskQueue* taskQueue = (TaskQueue*)malloc(sizeof(TaskQueue));</span></span>
<span class="line"><span>    if (taskQueue == NULL) {</span></span>
<span class="line"><span>        return NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    taskQueue-&gt;queue = (Task*)malloc(sizeof(Task) * queueSize);</span></span>
<span class="line"><span>    if (taskQueue-&gt;queue == NULL) {</span></span>
<span class="line"><span>        return NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    taskQueue-&gt;capacity = queueSize;</span></span>
<span class="line"><span>    taskQueue-&gt;size = 0;</span></span>
<span class="line"><span>    taskQueue-&gt;front = 0;</span></span>
<span class="line"><span>    taskQueue-&gt;rear = 0;</span></span>
<span class="line"><span>    return taskQueue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 销毁任务队列</span></span>
<span class="line"><span> * @param queue 任务队列</span></span>
<span class="line"><span> * @return 0 成功，-1 失败</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>int taskQueueDestroy(TaskQueue* queue) {</span></span>
<span class="line"><span>    if (queue == NULL) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    free(queue-&gt;queue);</span></span>
<span class="line"><span>    queue-&gt;queue = NULL;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 创建线程池</span></span>
<span class="line"><span> * @param min 最小线程数</span></span>
<span class="line"><span> * @param max 最大线程数</span></span>
<span class="line"><span> * @param queueSize 任务队列的容量</span></span>
<span class="line"><span> * @return 线程池</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>ThreadPool* threadPoolCreate(int min, int max, int queueSize) {</span></span>
<span class="line"><span>    ThreadPool* pool = (ThreadPool*)malloc(sizeof(ThreadPool));</span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>        if (pool == NULL) {</span></span>
<span class="line"><span>            perror(&quot;malloc threadpool fail&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pool-&gt;taskqueue = taskQueueCreate(queueSize);</span></span>
<span class="line"><span>        if (pool-&gt;taskqueue == NULL) {</span></span>
<span class="line"><span>            perror(&quot;malloc taskqueue fail&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pool-&gt;threads = (pthread_t*)malloc(sizeof(pthread_t) * max);</span></span>
<span class="line"><span>        if (pool-&gt;threads == NULL) {</span></span>
<span class="line"><span>            perror(&quot;malloc threads fail&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pool-&gt;min = min;</span></span>
<span class="line"><span>        pool-&gt;max = max;</span></span>
<span class="line"><span>        pool-&gt;busy = 0;</span></span>
<span class="line"><span>        pool-&gt;live = min;</span></span>
<span class="line"><span>        pool-&gt;exit = 0;</span></span>
<span class="line"><span>        memset(pool-&gt;threads, 0, sizeof(pthread_t) * max);</span></span>
<span class="line"><span>        if (pthread_mutex_init(&amp;pool-&gt;mutexPool, NULL) != 0 ||</span></span>
<span class="line"><span>            pthread_mutex_init(&amp;pool-&gt;mutexBusy, NULL) != 0 ||</span></span>
<span class="line"><span>            pthread_cond_init(&amp;pool-&gt;notEmpty, NULL) != 0 ||</span></span>
<span class="line"><span>            pthread_cond_init(&amp;pool-&gt;notFull, NULL) != 0) {</span></span>
<span class="line"><span>            perror(&quot;init mutex or cond fail&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pool-&gt;shutdown = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pthread_create(&amp;pool-&gt;manager, NULL, manager, pool);</span></span>
<span class="line"><span>        for (int i = 0; i &lt; min; i++) {</span></span>
<span class="line"><span>            pthread_create(&amp;pool-&gt;threads[i], NULL, worker, pool);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return pool;</span></span>
<span class="line"><span>    } while (0);</span></span>
<span class="line"><span>    if (pool) {</span></span>
<span class="line"><span>        free(pool);</span></span>
<span class="line"><span>        if (pool-&gt;taskqueue)</span></span>
<span class="line"><span>            free(pool-&gt;taskqueue);</span></span>
<span class="line"><span>        if (pool-&gt;threads)</span></span>
<span class="line"><span>            free(pool-&gt;threads);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 销毁线程池</span></span>
<span class="line"><span> * @param pool 要销毁的线程池对象</span></span>
<span class="line"><span> * @return 0 成功，-1 失败</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>int threadPoolDestroy(ThreadPool* pool) {</span></span>
<span class="line"><span>    if (pool == NULL) {</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    pool-&gt;shutdown = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 阻塞回收管理者线程</span></span>
<span class="line"><span>    pthread_join(pool-&gt;manager, NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 唤醒阻塞的消费者线程</span></span>
<span class="line"><span>    for (int i = 0; i &lt; pool-&gt;live; ++i) {</span></span>
<span class="line"><span>        pthread_cond_signal(&amp;pool-&gt;notEmpty);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pool-&gt;taskqueue) {</span></span>
<span class="line"><span>        taskQueueDestroy(pool-&gt;taskqueue);</span></span>
<span class="line"><span>        free(pool-&gt;taskqueue);</span></span>
<span class="line"><span>        pool-&gt;taskqueue = NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (pool-&gt;threads) {</span></span>
<span class="line"><span>        free(pool-&gt;threads);</span></span>
<span class="line"><span>        pool-&gt;threads = NULL;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    pthread_mutex_destroy(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>    pthread_mutex_destroy(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>    pthread_cond_destroy(&amp;pool-&gt;notEmpty);</span></span>
<span class="line"><span>    pthread_cond_destroy(&amp;pool-&gt;notFull);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    free(pool);</span></span>
<span class="line"><span>    pool = NULL;</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 添加任务</span></span>
<span class="line"><span> * @param pool 线程池对象</span></span>
<span class="line"><span> * @param func 任务函数</span></span>
<span class="line"><span> * @param arg 任务函数的参数</span></span>
<span class="line"><span> * @return 0 成功，-1 失败</span></span>
<span class="line"><span> * @note 线程池销毁时，会等待任务队列中的任务全部执行完毕再销毁</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>void threadPoolAdd(ThreadPool* pool, void* (*func)(void*), void* arg) {</span></span>
<span class="line"><span>    pthread_mutex_lock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>    while (pool-&gt;shutdown != false &amp;&amp; pool-&gt;taskqueue-&gt;size == pool-&gt;taskqueue-&gt;capacity) {</span></span>
<span class="line"><span>        pthread_cond_wait(&amp;pool-&gt;notFull, &amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pool-&gt;shutdown == false) {</span></span>
<span class="line"><span>        pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        pool-&gt;taskqueue-&gt;queue[pool-&gt;taskqueue-&gt;rear] = (Task){func, arg};</span></span>
<span class="line"><span>        // 做成循环队列</span></span>
<span class="line"><span>        pool-&gt;taskqueue-&gt;rear = (pool-&gt;taskqueue-&gt;rear + 1) % (pool-&gt;taskqueue-&gt;capacity);</span></span>
<span class="line"><span>        pool-&gt;taskqueue-&gt;size++;</span></span>
<span class="line"><span>        pthread_cond_signal(&amp;pool-&gt;notEmpty);</span></span>
<span class="line"><span>        pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 获取当前工作的线程数</span></span>
<span class="line"><span> * @param pool 线程池对象</span></span>
<span class="line"><span> * @return 当前工作的线程数</span></span>
<span class="line"><span> * @note 线程池销毁时，会等待任务队列中的任务全部执行完毕再销毁</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>int threadPoolBusyNum(ThreadPool* pool) {</span></span>
<span class="line"><span>    pthread_mutex_lock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>    int busy = pool-&gt;busy;</span></span>
<span class="line"><span>    pthread_mutex_unlock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>    return busy;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 获取当前存活的线程数</span></span>
<span class="line"><span> * @param pool 线程池对象</span></span>
<span class="line"><span> * @return 当前存活的线程数</span></span>
<span class="line"><span> * @note 线程池销毁时，会等待任务队列中的任务全部执行完毕再销毁</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>int threadPoolAliveNum(ThreadPool* pool) {</span></span>
<span class="line"><span>    pthread_mutex_lock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>    int alive = pool-&gt;live;</span></span>
<span class="line"><span>    pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>    return alive;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 工作线程</span></span>
<span class="line"><span> * @param arg 线程池对象</span></span>
<span class="line"><span> * @return NULL</span></span>
<span class="line"><span> * @note 线程池销毁时，会等待任务队列中的任务全部执行完毕再销毁</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>void* worker(void* arg) {</span></span>
<span class="line"><span>    ThreadPool* pool = (ThreadPool*)arg;</span></span>
<span class="line"><span>    while (1) {</span></span>
<span class="line"><span>        pthread_mutex_lock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>        while (pool-&gt;shutdown != false &amp;&amp; pool-&gt;taskqueue-&gt;size == 0) {</span></span>
<span class="line"><span>            pthread_cond_wait(&amp;pool-&gt;notEmpty, &amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>            // 判断线程是否过多需要销毁线程</span></span>
<span class="line"><span>            if (pool-&gt;exit &gt; 0) {</span></span>
<span class="line"><span>                pool-&gt;exit--;</span></span>
<span class="line"><span>                if (pool-&gt;exit &gt; pool-&gt;min) {</span></span>
<span class="line"><span>                    pool-&gt;live--;</span></span>
<span class="line"><span>                    pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>                    threadExit(pool);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (pool-&gt;shutdown) {</span></span>
<span class="line"><span>            pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>            threadExit(pool);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            Task task = pool-&gt;taskqueue-&gt;queue[pool-&gt;taskqueue-&gt;front];</span></span>
<span class="line"><span>            pool-&gt;taskqueue-&gt;front = (pool-&gt;taskqueue-&gt;front + 1) % (pool-&gt;taskqueue-&gt;capacity);</span></span>
<span class="line"><span>            pool-&gt;taskqueue-&gt;size--;</span></span>
<span class="line"><span>            pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            printf(&quot;thread %ld start working\\n&quot;, pthread_self());</span></span>
<span class="line"><span>            pthread_mutex_lock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>            pool-&gt;busy++;</span></span>
<span class="line"><span>            pthread_mutex_unlock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            task.func(task.arg);</span></span>
<span class="line"><span>            // 工作完成后正在工作的线程数-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            printf(&quot;thread %ld end working\\n&quot;, pthread_self());</span></span>
<span class="line"><span>            pthread_mutex_lock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>            pool-&gt;busy--;</span></span>
<span class="line"><span>            pthread_mutex_unlock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 管理线程</span></span>
<span class="line"><span> * @param arg 线程池对象</span></span>
<span class="line"><span> * @return NULL</span></span>
<span class="line"><span> * @note 线程池销毁时，会等待任务队列中的任务全部执行完毕再销毁</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>void* manager(void* arg) {</span></span>
<span class="line"><span>    ThreadPool* pool = (ThreadPool*)arg;</span></span>
<span class="line"><span>    while (!pool-&gt;shutdown) {</span></span>
<span class="line"><span>        sleep(3);</span></span>
<span class="line"><span>        pthread_mutex_lock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>        int queueSize = pool-&gt;taskqueue-&gt;size;</span></span>
<span class="line"><span>        int liveNum = pool-&gt;live;</span></span>
<span class="line"><span>        pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pthread_mutex_lock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span>        int busyNum = pool-&gt;busy;</span></span>
<span class="line"><span>        pthread_mutex_unlock(&amp;pool-&gt;mutexBusy);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 线程数较小需要添加线程时</span></span>
<span class="line"><span>        // 任务个数&gt;存活的线程个数 &amp;&amp; 存活的线程数&lt;最大线程数</span></span>
<span class="line"><span>        if (queueSize &gt; liveNum &amp;&amp; liveNum &lt; pool-&gt;max) {</span></span>
<span class="line"><span>            pthread_mutex_lock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>            int count = 0;  // 每次加2个线程</span></span>
<span class="line"><span>            for (int i = 0; i &lt; pool-&gt;max &amp;&amp; count &lt; 2 &amp;&amp; pool-&gt;live &lt; pool-&gt;max; i++) {</span></span>
<span class="line"><span>                if (pool-&gt;threads[i] == 0) {</span></span>
<span class="line"><span>                    pthread_create(&amp;pool-&gt;threads[i], NULL, worker, (void*)pool);</span></span>
<span class="line"><span>                    count++;</span></span>
<span class="line"><span>                    pool-&gt;live++;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 存活的线程太多需要销毁线程</span></span>
<span class="line"><span>        // 忙的线程数*2&lt;存活的线程个数 &amp;&amp; 存活的线程数&gt;最小线程数</span></span>
<span class="line"><span>        if (busyNum * 2 &lt; liveNum &amp;&amp; liveNum &gt; pool-&gt;min) {</span></span>
<span class="line"><span>            pthread_mutex_lock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>            pool-&gt;exit = 2;  // 每次销毁两个</span></span>
<span class="line"><span>            pthread_mutex_unlock(&amp;pool-&gt;mutexPool);</span></span>
<span class="line"><span>            for (int i = 0; i &lt; 2; ++i) {</span></span>
<span class="line"><span>                // 把阻塞的线程唤醒,唤醒后它们判断是否需要销毁线程首先进入的被销毁,共销毁两个</span></span>
<span class="line"><span>                pthread_cond_signal(&amp;pool-&gt;notEmpty);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @brief 销毁线程池</span></span>
<span class="line"><span> * @param pool 线程池对象</span></span>
<span class="line"><span> * @return 0 成功，-1 失败</span></span>
<span class="line"><span> * @note 线程池销毁时，会等待任务队列中的任务全部执行完毕再销毁</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>void threadExit(ThreadPool* pool) {</span></span>
<span class="line"><span>    pthread_t tid = pthread_self();</span></span>
<span class="line"><span>    for (int i = 0; i &lt; pool-&gt;max; i++) {</span></span>
<span class="line"><span>        if (pool-&gt;threads[i] == tid) {</span></span>
<span class="line"><span>            pool-&gt;threads[i] = 0;</span></span>
<span class="line"><span>            printf(&quot;threadExit():tid=%ld\\n&quot;, tid);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    pthread_exit(NULL);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,21)]))}const v=n(e,[["render",p]]),r=JSON.parse('{"path":"/base/os/4/","title":"4 线程池","lang":"zh-CN","frontmatter":{"title":"4 线程池","createTime":"2025/06/15 13:33:30","permalink":"/base/os/4/"},"readingTime":{"minutes":9.41,"words":2823},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/基础/操作系统/4 线程池.md","headers":[]}');export{v as comp,r as data};
