import{_ as n,c as a,a as e,o as i}from"./app-CEcM0piI.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<p>构造函数是由new关键字决定的，任何函数都可以是构造函数，但是没有使用new关键字的函数是普通函数，只有使用new关键字调用的函数才是构造函数</p><p>在访问一个对象身上的属性或者函数时首先会在对象自身查找是否有这个属性（函数），如果没有就继续递归往它的prototype上去找，找到的话就调用，直到protytype为空时还没有找到就会报错</p><p><code>JavaScript</code> 常被描述为一种基于原型的语言——每个对象拥有一个原型对象 当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾 准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的<code>prototype</code>属性上，而非实例对象本身</p><p>原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法 在对象实例和它的构造器之间建立一个链接（它是<code>__proto__</code>属性，是从构造函数的<code>prototype</code>属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法</p><ul><li>一切对象都是继承自<code>Object</code>对象，<code>Object</code> 对象直接继承根源对象<code>null</code></li><li>一切的函数对象（包括 <code>Object</code> 对象），都是继承自 <code>Function</code> 对象</li><li><code>Object</code> 对象直接继承自 <code>Function</code> 对象</li><li><code>Function</code>对象的<code>__proto__</code>会指向自己的原型对象，最终还是继承自<code>Object</code>对象</li></ul><h1 id="_8-继承" tabindex="-1"><a class="header-anchor" href="#_8-继承"><span>8. 继承</span></a></h1><p>如果一个类别B“继承自”另一个类别A，就把这个B称为“A的子类”，而把A称为“B的父类别”也可以称“A是B的超类”</p><h3 id="继承的优点" tabindex="-1"><a class="header-anchor" href="#继承的优点"><span>继承的优点</span></a></h3><p>继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码</p><p>在子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能</p><h3 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式"><span>实现方式</span></a></h3><h4 id="原型链继承" tabindex="-1"><a class="header-anchor" href="#原型链继承"><span>原型链继承</span></a></h4><p>原型链继承是比较常见的继承方式之一，其中涉及的构造函数、原型和实例，三者之间存在着一定的关系，即每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，而实例则包含一个原型对象的指针</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function Parent() {  </span></span>
<span class="line"><span>  this.name = &#39;parent1&#39;;  </span></span>
<span class="line"><span>  this.play = [1, 2, 3]  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>function Child() {  </span></span>
<span class="line"><span>  this.type = &#39;child2&#39;;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>Child.prototype = new Parent();  </span></span>
<span class="line"><span>console.log(new Child())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码看似没问题，实际存在潜在问题</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>var s1 = new Child();  </span></span>
<span class="line"><span>var s2 = new Child();  </span></span>
<span class="line"><span>s1.play.push(4);  </span></span>
<span class="line"><span>console.log(s1.play, s2.play); // [1,2,3,4]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改变<code>s1</code>的<code>play</code>属性，会发现<code>s2</code>也跟着发生变化了</p><p><strong>缺点</strong> 两个实例使用的是同一个原型对象，内存空间是共享的，在一个对象上修改父类原型上的数据，其他继承同一个父类的对象也会被改变</p><h4 id="构造函数继承-借助-call" tabindex="-1"><a class="header-anchor" href="#构造函数继承-借助-call"><span>构造函数继承（借助 call）</span></a></h4><p>通过在子类中调用父类的构造函数实现子类身上有父类的属性（函数）</p><p>借助 <code>call</code>调用<code>Parent</code>函数</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function Parent(){  </span></span>
<span class="line"><span>    this.name = &#39;parent1&#39;;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Parent.prototype.getName = function () {  </span></span>
<span class="line"><span>    return this.name;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>function Child(){  </span></span>
<span class="line"><span>    Parent.call(this);  </span></span>
<span class="line"><span>    this.type = &#39;child&#39;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>let child = new Child();  </span></span>
<span class="line"><span>console.log(child);  // 没问题  </span></span>
<span class="line"><span>console.log(child.getName());  // 会报错</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>父类原型对象中一旦存在父类之前自己定义的方法，那么子类将无法继承这些方法 相比第一种原型链继承方式，父类的引用属性不会被共享，优化了第一种继承方式的弊端，但是只能继承父类的实例属性和方法，不能继承父类原型（prototype）属性或者方法</p><p><strong>缺点</strong> 如果在父类的prototype上定义了属性和方法使用构造函数继承的方式子类无法继承父类的prototype上的属性和方法</p><h4 id="组合继承" tabindex="-1"><a class="header-anchor" href="#组合继承"><span>组合继承</span></a></h4><p>前面两种继承方式，各有优缺点。组合继承则将前两种方式继承起来</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function Parent3 () {  </span></span>
<span class="line"><span>    this.name = &#39;parent3&#39;;  </span></span>
<span class="line"><span>    this.play = [1, 2, 3];  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Parent3.prototype.getName = function () {  </span></span>
<span class="line"><span>    return this.name;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>function Child3() {  </span></span>
<span class="line"><span>    // 第二次调用 Parent3()  </span></span>
<span class="line"><span>    Parent3.call(this);  </span></span>
<span class="line"><span>    this.type = &#39;child3&#39;;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// 第一次调用 Parent3()  </span></span>
<span class="line"><span>Child3.prototype = new Parent3();  </span></span>
<span class="line"><span>// 手动挂上构造器，指向自己的构造函数  </span></span>
<span class="line"><span>Child3.prototype.constructor = Child3;  </span></span>
<span class="line"><span>var s3 = new Child3();  </span></span>
<span class="line"><span>var s4 = new Child3();  </span></span>
<span class="line"><span>s3.play.push(4);  </span></span>
<span class="line"><span>console.log(s3.play, s4.play);  // 不互相影响  </span></span>
<span class="line"><span>console.log(s3.getName()); // 正常输出&#39;parent3&#39;  </span></span>
<span class="line"><span>console.log(s4.getName()); // 正常输出&#39;parent3&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这种方式看起来就没什么问题，方式一和方式二的问题都解决了，但是从上面代码我们也可以看到<code>Parent3</code> 执行了两次</p><p><strong>缺点</strong> 父类的构造执行了两次，造成了多构造一次的性能开销</p><h4 id="原型式继承" tabindex="-1"><a class="header-anchor" href="#原型式继承"><span>原型式继承</span></a></h4><p>这里主要借助<code>Object.create</code>方法实现普通对象的继承</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>let parent = {  </span></span>
<span class="line"><span>    name: &quot;parent&quot;,  </span></span>
<span class="line"><span>    friends: [&quot;p1&quot;, &quot;p2&quot;, &quot;p3&quot;],  </span></span>
<span class="line"><span>    getName: function() {  </span></span>
<span class="line"><span>      return this.name;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>let person1 = Object.create(parent);  </span></span>
<span class="line"><span>person4.name = &quot;tom&quot;;  </span></span>
<span class="line"><span>person4.friends.push(&quot;jerry&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>let person2 = Object.create(parent);  </span></span>
<span class="line"><span>person5.friends.push(&quot;lucy&quot;);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>console.log(person1.name); // tom  </span></span>
<span class="line"><span>console.log(person1.name === person1.getName()); // true  </span></span>
<span class="line"><span>console.log(person2.name); // parent4  </span></span>
<span class="line"><span>console.log(person1.friends); // [&quot;p1&quot;, &quot;p2&quot;, &quot;p3&quot;,&quot;jerry&quot;,&quot;lucy&quot;]  </span></span>
<span class="line"><span>console.log(person2.friends); // [&quot;p1&quot;, &quot;p2&quot;, &quot;p3&quot;,&quot;jerry&quot;,&quot;lucy&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>这种继承方式的缺点也很明显，因为<code>Object.create</code>方法实现的是浅拷贝，多个实例的<strong>引用类型</strong>属性指向相同的内存，存在篡改的可能</p><p><strong>缺点</strong> 由于create对于引用类型的属性采用的是浅拷贝（基本数据类型直接拷贝无影响），所以在修改一个对象的引用类型的数据时和它一起继承同一个父类的其他对象的数据也会被修改</p><h4 id="寄生式继承" tabindex="-1"><a class="header-anchor" href="#寄生式继承"><span>寄生式继承</span></a></h4><p>寄生式继承在上面继承基础上进行优化，利用这个浅拷贝的能力再进行增强，添加一些方法</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>let parent5 = {  </span></span>
<span class="line"><span>    name: &quot;parent5&quot;,  </span></span>
<span class="line"><span>    friends: [&quot;p1&quot;, &quot;p2&quot;, &quot;p3&quot;],  </span></span>
<span class="line"><span>    getName: function() {  </span></span>
<span class="line"><span>        return this.name;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>};  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>function clone(original) {  </span></span>
<span class="line"><span>    let clone = Object.create(original);  </span></span>
<span class="line"><span>    clone.getFriends = function() {  </span></span>
<span class="line"><span>        return this.friends;  </span></span>
<span class="line"><span>    };  </span></span>
<span class="line"><span>    return clone;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>let person5 = clone(parent5);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>console.log(person5.getName()); // parent5  </span></span>
<span class="line"><span>console.log(person5.getFriends()); // [&quot;p1&quot;, &quot;p2&quot;, &quot;p3&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>其优缺点也很明显，跟上面讲的原型式继承一样</p><h4 id="寄生组合式继承" tabindex="-1"><a class="header-anchor" href="#寄生组合式继承"><span>寄生组合式继承</span></a></h4><p>寄生组合式继承，借助解决普通对象的继承问题的<code>Object.create</code> 方法，在几种继承方式的优缺点基础上进行改造，这也是所有继承方式里面相对最优的继承方式</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function clone (parent, child) {  </span></span>
<span class="line"><span>    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程  </span></span>
<span class="line"><span>    child.prototype = Object.create(parent.prototype);  </span></span>
<span class="line"><span>    child.prototype.constructor = child;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>function Parent6() {  </span></span>
<span class="line"><span>    this.name = &#39;parent6&#39;;  </span></span>
<span class="line"><span>    this.play = [1, 2, 3];  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>Parent6.prototype.getName = function () {  </span></span>
<span class="line"><span>    return this.name;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>function Child6() {  </span></span>
<span class="line"><span>    Parent6.call(this);  </span></span>
<span class="line"><span>    this.friends = &#39;child5&#39;;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>clone(Parent6, Child6);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Child6.prototype.getFriends = function () {  </span></span>
<span class="line"><span>    return this.friends;  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>let person6 = new Child6();   </span></span>
<span class="line"><span>console.log(person6); //{friends:&quot;child5&quot;,name:&quot;child5&quot;,play:[1,2,3],__proto__:Parent6}  </span></span>
<span class="line"><span>console.log(person6.getName()); // parent6  </span></span>
<span class="line"><span>console.log(person6.getFriends()); // child5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>可以看到 person6 打印出来的结果，属性都得到了继承，方法也没问题</p><p><code>ES6</code> 中的<code>extends</code>关键字实际采用的也是寄生组合继承方式，因此也证明了这种方式是较优的解决继承的方式</p><p><strong>缺点</strong> 缺点：子类中的prototype的原始属性和方法会丢失。</p><h1 id="new关键字" tabindex="-1"><a class="header-anchor" href="#new关键字"><span>new关键字</span></a></h1><p>执行一个构造函数、返回一个实例对象，根据构造函数的情况，来确定是否可以接受参数的传递</p><p>所做的流程</p><ol><li>创建一个新对象</li><li>将构造函数的作用域赋给新对象（this指向新对象）</li><li>执行构造函数中的代码（为这个新对象添加属性）</li><li>返回新对象</li></ol><p><strong>new和直接调用构造函数的区别</strong> 使用new关键字调用构造函数返回的是一个构造的新对象 直接使用构造函数返回值与构造函数的返回值有关</p>`,49)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/front/principle/4/","title":"4 类型","lang":"zh-CN","frontmatter":{"title":"4 类型","createTime":"2025/06/17 17:21:26","permalink":"/front/principle/4/"},"readingTime":{"minutes":6.69,"words":2008},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/前端/原理/4 类型.md","headers":[]}');export{r as comp,t as data};
