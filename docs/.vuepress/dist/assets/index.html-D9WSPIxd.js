import{_ as n,c as e,a,o as i}from"./app-CEcM0piI.js";const l={};function p(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<p>在部署应用程序的方式上，主要经历了三个阶段：</p><ol><li>传统部署：互联网早期，会直接将应用程序部署在物理机上 一个服务器上运行多个程序,但当一个程序出现内存泄漏就会挤占其他程序的内存,会影响到其他程序</li></ol><blockquote><p>[!tip] Title 优点：简单，不需要其它技术的参与 缺点：不能为应用程序定义资源使用边界，很难合理地分配计算资源，而且程序之间容易产生影响</p></blockquote><ol start="2"><li>虚拟化部署：可以在一台物理机上运行多个虚拟机，每个虚拟机都是独立的一个环境</li></ol><blockquote><p>[!tip] Title 优点：程序环境不会相互产生影响，提供了一定程度的安全性 缺点：增加了操作系统，浪费了部分资源</p></blockquote><ol start="3"><li>容器化部署：与虚拟化类似，但是共享了操作系统</li></ol><blockquote><p>[!tip] Title 优点： 可以保证每个容器拥有自己的文件系统、CPU、内存、进程空间等 运行应用程序所需要的资源都被容器包装，并和底层基础架构解耦 容器化的应用程序可以跨云服务商、跨Linux操作系统发行版进行部署</p></blockquote><p>容器化部署方式给带来很多的便利，但是也会出现一些问题：</p><ul><li>一个容器故障停机了，怎么样让另外一个容器立刻启动去替补停机的容器</li><li>当并发访问量变大的时候，怎么样做到横向扩展容器数量</li></ul><p>这些容器管理的问题统称为容器编排问题，为了解决这些容器编排问题，就产生了一些容器编排的软件：</p><ul><li>Swarm：Docker自己的容器编排工具</li><li>Mesos：Apache的一个资源统一管控的工具，需要和Marathon结合使用</li><li>Kubernetes：Google开源的的容器编排工具</li></ul><p>kubernetes的本质是一组服务器集群，它可以在集群的每个节点上运行特定的程序，来对节点中的容器进行管理。它的目的就是是实现资源管理的自动化，主要提供了如下的主要功能：</p><ol><li>自我修复：一旦某一个容器崩溃，能够在1秒中左右迅速启动新的容器</li><li>弹性伸缩：可以根据需要，自动对集群中正在运行的容器数量进行调整</li><li>服务发现：服务可以通过自动发现的形式找到它所依赖的服务</li><li>负载均衡：如果一个服务起动了多个容器，能够自动实现请求的负载均衡</li><li>版本回退：如果发现新发布的程序版本有问题，可以立即回退到原来的版本</li><li>存储编排：可以根据容器自身的需求自动创建存储卷</li></ol><p>一个kubernetes集群主要是由控制节点（master)、工作节点（node)构成，每个节点上都会安装不同的组件。</p><p><strong>master：集群的控制平面，负责集群的决策</strong></p><ul><li>ApiServer：资源操作的唯一入口，接收用户输入的命令，提供认证、授权、API注册和发现等机制</li><li>Scheduler：负责集群资源调度，按照预定的调度策略将Pod调度到相应的node节点上</li><li>ControllerManager：负责维护集群的状态，比如程序部署安排、故障检测、自动扩展、滚动更新等</li><li>Etcd：负责存储集群中各种资源对象的信息</li></ul><p><strong>node：集群的数据平面，负责为容器提供运行环境</strong></p><ul><li>Kubelet：负责维护容器的生命周期，即通过控制docker，来创建、更新、销毁容器</li><li>KubeProxy：负责提供集群内部的服务发现和负载均衡</li><li>Docker：负责节点上容器的各种操作</li></ul><p><strong>kubernetes系统各个组件调用关系：</strong></p><ol><li>首先要明确，一旦kubernetes环境启动之后，master和node都会将自身的信息存储到etcd数据库中</li><li>一个程序服务的安装请求会首先被发送到master节点的apiServer组件</li><li>apiServer组件会调用scheduler组件来决定到底应该把这个服务安装到哪个node节点上 , 在此时，它会从etcd中读取各个node节点的信息，然后按照一定的算法进行选择，并将结果告知apiServe</li><li>apiServer调用controller-manager去调度Node节点安装该程序服务</li><li>kubelet接收到指令后，会通知docker，然后由docker来启动一个程序的pod , pod是kubernetes的最小操作单元，容器必须跑在pod中至此，</li><li>一个程序服务就运行了，如果需要访问该程序，就需要通过kube-proxy来对pod产生访问的代理 这样，外界用户就可以访问集群中的该程序服务了</li></ol><h3 id="kubernetes概念" tabindex="-1"><a class="header-anchor" href="#kubernetes概念"><span>kubernetes概念</span></a></h3><ul><li>Master：集群控制节点，每个集群需要至少一个master节点负责集群的管控</li><li>Node：工作负载节点，由master分配容器到这些node工作节点上，然后node节点上的docker负责容器的运行</li><li>Pod：kubernetes的最小控制单元，容器都是运行在pod中的，一个pod中可以有1个或者多个容器</li><li>Controller：控制器，通过它来实现对pod的管理，比如启动pod、停止pod、伸缩pod的数量等等</li><li>Service：pod对外服务的统一入口，下面可以维护者同一类的多个pod</li><li>Label：标签，用于对pod进行分类，同一类pod会拥有相同的标签</li><li>NameSpace：命名空间，用来隔离pod的运行环境</li></ul><h3 id="集群类型" tabindex="-1"><a class="header-anchor" href="#集群类型"><span>集群类型</span></a></h3><p>kubernetes集群大体上分为两类：一主多从和多主多从。</p><ul><li>一主多从：一台Master节点和多台Node节点，搭建简单，但是有单机故障风险，适合用于测试环境</li><li>多主多从：多台Master节点和多台Node节点，搭建麻烦，安全性高，适合用于生产环境</li></ul><h3 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式"><span>安装方式</span></a></h3><p>kubernetes有多种部署方式，目前主流的方式有kubeadm、minikube、二进制包</p><ul><li>minikube：一个用于快速搭建单节点kubernetes的工具</li><li>kubeadm：一个用于快速搭建kubernetes集群的工具</li><li>二进制包：从官网下载每个组件的二进制包，依次去安装此方式对于理解kubernetes组件更加有效</li></ul><h1 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境"><span>配置环境</span></a></h1><h2 id="主机配置" tabindex="-1"><a class="header-anchor" href="#主机配置"><span>主机配置</span></a></h2><ol><li>主机名解析 为了方便后面集群节点间的直接调用，在这配置一下主机名解析，企业中推荐使用内部DNS服务器</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#主机名成解析编辑三台服务器的/etc/hosts文件，添加下面内容</span></span>
<span class="line"><span>192.168.109.100 master</span></span>
<span class="line"><span>192.168.109.101 node1</span></span>
<span class="line"><span>192.168.109.102 node2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>时间同步 kubernetes要求集群中的节点时间必须精确一致，这里直接使用chronyd服务从网络同步时间。 企业中建议配置内部的时间同步服务器</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#启动chronyd服务</span></span>
<span class="line"><span>[root@master~]# systemctl start chronyd</span></span>
<span class="line"><span>#设置chronyd服务开机自启</span></span>
<span class="line"><span>[root@master~]# systemctl enable chronyd</span></span>
<span class="line"><span>#chronyd服务启动稍等几秒钟，就可以使用date命令验证时间了</span></span>
<span class="line"><span>[root@master~]# date</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>禁用iptables和firewalld服务 kubernetes和docker在运行中会产生大量的iptabtes规则，为了不让系统规则跟它们混淆，直接关闭系统的规则</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#1关闭firewalld服务</span></span>
<span class="line"><span>[root@master~]# systemctl stop firewalld</span></span>
<span class="line"><span>[root@master~]# systemctl disable firewalld</span></span>
<span class="line"><span>#2关闭iptables服务</span></span>
<span class="line"><span>[root@master~]# systemctl stop iptables</span></span>
<span class="line"><span>[root@master~]# systemctl disable iptables</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>禁用selinux selinux是linux系统下的一个安全服务，如果不关闭它，在安装集群中会产生各种各样的奇问题</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#编辑/etc/selinux/config文件，修改SELINUx的值为disabled</span></span>
<span class="line"><span>#注意修改完毕之后需要重启linux服务</span></span>
<span class="line"><span>SELINUX=disabled</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>禁用swap分区 swap分区指的是虚拟内存分区，它的作用是在物理内存使用完之后，将磁盘空间虚拟成内存来使用 启用swap设备会对系统的性能产生非常负面的影响，因此kubernetes要求每个节点都要禁用swap设备 但是如果因为某些原因确实不能关闭swap分区，就需要在集群安装过程中通过明确的参数进行配置说明</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>#编辑分区配置文件/etc/fstab，注释掉swap分区一行</span></span>
<span class="line"><span>#注意修改完毕之后需要重启linux服务</span></span>
<span class="line"><span>UUID=455cc753-7a60-4c17-a424-7741728c44a1 /boot xfs defaults 0 0</span></span>
<span class="line"><span>/dev/mapper/centos-home /home                   xfs defaults 0 0</span></span>
<span class="line"><span>#/dev/mapper/centos-swap swap                   swap defaults 0 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>修改linux的内核参数</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 修改linux的内核采纳数，添加网桥过滤和地址转发功能</span></span>
<span class="line"><span># 编辑/etc/sysctl.d/kubernetes.conf文件，添加如下配置：</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span>net.ipv4.ip_forward = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新加载配置</span></span>
<span class="line"><span>[root@master ~]# sysctl -p</span></span>
<span class="line"><span># 加载网桥过滤模块</span></span>
<span class="line"><span>[root@master ~]# modprobe br_netfilter</span></span>
<span class="line"><span># 查看网桥过滤模块是否加载成功</span></span>
<span class="line"><span>[root@master ~]# lsmod | grep br_netfilter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>配置ipvs功能 在Kubernetes中Service有两种带来模型，一种是基于iptables的，一种是基于ipvs的两者比较的话，ipvs的性能明显要高一些，但是如果要使用它，需要手动载入ipvs模块</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 1.安装ipset和ipvsadm</span></span>
<span class="line"><span>[root@master ~]# yum install ipset ipvsadm -y</span></span>
<span class="line"><span># 2.添加需要加载的模块写入脚本文件</span></span>
<span class="line"><span>[root@master ~]# cat &lt;&lt;EOF&gt; /etc/sysconfig/modules/ipvs.modules</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>modprobe -- ip_vs</span></span>
<span class="line"><span>modprobe -- ip_vs_rr</span></span>
<span class="line"><span>modprobe -- ip_vs_wrr</span></span>
<span class="line"><span>modprobe -- ip_vs_sh</span></span>
<span class="line"><span>modprobe -- nf_conntrack_ipv4</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span># 3.为脚本添加执行权限</span></span>
<span class="line"><span>[root@master ~]# chmod +x /etc/sysconfig/modules/ipvs.modules</span></span>
<span class="line"><span># 4.执行脚本文件</span></span>
<span class="line"><span>[root@master ~]# /bin/bash /etc/sysconfig/modules/ipvs.modules</span></span>
<span class="line"><span># 5.查看对应的模块是否加载成功</span></span>
<span class="line"><span>[root@master ~]# lsmod | grep -e ip_vs -e nf_conntrack_ipv4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="组件安装" tabindex="-1"><a class="header-anchor" href="#组件安装"><span>组件安装</span></a></h2><ol><li>安装docker</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 1、切换镜像源</span></span>
<span class="line"><span>[root@master ~]# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2、查看当前镜像源中支持的docker版本</span></span>
<span class="line"><span>[root@master ~]# yum list docker-ce --showduplicates</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3、安装特定版本的docker-ce</span></span>
<span class="line"><span># 必须制定--setopt=obsoletes=0，否则yum会自动安装更高版本</span></span>
<span class="line"><span>[root@master ~]# yum install --setopt=obsoletes=0 docker-ce-18.06.3.ce-3.el7 -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4、添加一个配置文件</span></span>
<span class="line"><span>#Docker 在默认情况下使用Vgroup Driver为cgroupfs，而Kubernetes推荐使用systemd来替代cgroupfs</span></span>
<span class="line"><span>[root@master ~]# mkdir /etc/docker</span></span>
<span class="line"><span>[root@master ~]# cat &lt;&lt;EOF&gt; /etc/docker/daemon.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	&quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],</span></span>
<span class="line"><span>	&quot;registry-mirrors&quot;: [&quot;https://kn0t2bca.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5、启动dokcer</span></span>
<span class="line"><span>[root@master ~]# systemctl restart docker</span></span>
<span class="line"><span>[root@master ~]# systemctl enable docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ol start="2"><li>安装Kubernetes组件</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 1、由于kubernetes的镜像在国外，速度比较慢，这里切换成国内的镜像源</span></span>
<span class="line"><span># 2、编辑/etc/yum.repos.d/kubernetes.repo,添加下面的配置</span></span>
<span class="line"><span>[kubernetes]</span></span>
<span class="line"><span>name=Kubernetes</span></span>
<span class="line"><span>baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgchech=0</span></span>
<span class="line"><span>repo_gpgcheck=0</span></span>
<span class="line"><span>gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg</span></span>
<span class="line"><span>			http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3、安装kubeadm、kubelet和kubectl</span></span>
<span class="line"><span>[root@master ~]# yum install --setopt=obsoletes=0 kubeadm-1.17.4-0 kubelet-1.17.4-0 kubectl-1.17.4-0 -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4、配置kubelet的cgroup</span></span>
<span class="line"><span>#编辑/etc/sysconfig/kubelet, 添加下面的配置</span></span>
<span class="line"><span>KUBELET_CGROUP_ARGS=&quot;--cgroup-driver=systemd&quot;</span></span>
<span class="line"><span>KUBE_PROXY_MODE=&quot;ipvs&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5、设置kubelet开机自启</span></span>
<span class="line"><span>[root@master ~]# systemctl enable kubelet</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ol start="3"><li>准备集群镜像</li></ol><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 在安装kubernetes集群之前，必须要提前准备好集群需要的镜像，所需镜像可以通过下面命令查看</span></span>
<span class="line"><span>[root@master ~]# kubeadm config images list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下载镜像</span></span>
<span class="line"><span># 此镜像kubernetes的仓库中，由于网络原因，无法连接，下面提供了一种替换方案</span></span>
<span class="line"><span>images=(</span></span>
<span class="line"><span>	kube-apiserver:v1.17.4</span></span>
<span class="line"><span>	kube-controller-manager:v1.17.4</span></span>
<span class="line"><span>	kube-scheduler:v1.17.4</span></span>
<span class="line"><span>	kube-proxy:v1.17.4</span></span>
<span class="line"><span>	pause:3.1</span></span>
<span class="line"><span>	etcd:3.4.3-0</span></span>
<span class="line"><span>	coredns:1.6.5</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for imageName in \${images[@]};do</span></span>
<span class="line"><span>	docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName</span></span>
<span class="line"><span>	docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName k8s.gcr.io/$imageName</span></span>
<span class="line"><span>	docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName </span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ol start="4"><li>集群初始化 <strong>下面的操作只需要在master节点上执行即可</strong></li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span># 创建集群</span></span>
<span class="line"><span>[root@master ~]# kubeadm init \\</span></span>
<span class="line"><span>	--apiserver-advertise-address=192.168.81.128 \\</span></span>
<span class="line"><span>	--image-repository registry.aliyuncs.com/google_containers \\</span></span>
<span class="line"><span>	--kubernetes-version=v1.17.4 \\</span></span>
<span class="line"><span>	--service-cidr=10.96.0.0/12 \\</span></span>
<span class="line"><span>	--pod-network-cidr=10.244.0.0/16</span></span>
<span class="line"><span># 创建必要文件</span></span>
<span class="line"><span>[root@master ~]# mkdir -p $HOME/.kube</span></span>
<span class="line"><span>[root@master ~]# sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>
<span class="line"><span>[root@master ~]# sudo chown $(id -u):$(id -g) $HOME/.kube/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下面的操作只需要在node节点上执行即可</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>kubeadm join 192.168.0.100:6443 --token awk15p.t6bamck54w69u4s8 \\</span></span>
<span class="line"><span>    --discovery-token-ca-cert-hash sha256:a94fa09562466d32d2952</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,55)]))}const t=n(l,[["render",p]]),c=JSON.parse('{"path":"/tools/kubernetes/1/","title":"1 概述","lang":"zh-CN","frontmatter":{"title":"1 概述","createTime":"2025/06/18 21:08:30","permalink":"/tools/kubernetes/1/"},"readingTime":{"minutes":9.64,"words":2893},"git":{"createdTime":1750599657000,"updatedTime":1750599657000,"contributors":[{"name":"pink","username":"pink","email":"pinkdopeybug@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pink?v=4","url":"https://github.com/pink"}]},"filePathRelative":"notes/工具/Kubernetes/1 概述.md","headers":[]}');export{t as comp,c as data};
