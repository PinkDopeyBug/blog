---
title: 2 Jedis
createTime: 2025/04/05 12:12:26
permalink: /tools/redis/2/
---
jedis方法操作和redis中的命令一样,但线程不安全


引入依赖
```
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>4.3.1</version>
        </dependency>
```

### 使用

```
public class JedisTest {
  private Jedis jedis;

//建立连接
  @BeforeEach
  void setUp() {
    // 建立连接
    jedis = new Jedis("localhost", 6379);
    // 验证密码
    jedis.auth("030604");
    // 选择数据库
    jedis.select(0);
  }

//操作数据库
  @Test
  void testString() {
    System.out.println(jedis.set("name", "zhangsan"));

    System.out.println(jedis.get("name"));
  }

  @Test
  void testHash(){
    System.out.println(jedis.hset("user:1", "name", "zhangsan"));
    System.out.println(jedis.hset("user:1", "age","21"));
    Map<String, String> map = jedis.hgetAll("user:1");

    System.out.println(map);
  }

//释放连接
  @AfterEach
  void tearDown() {
    // 关闭连接
    if (jedis != null) {
      jedis.close();
    }
  }
}
```

### 数据库连接池
因为jedis是线程不安全的所以推荐使用数据库连接池
jedis提供了自带的数据库连接池,JedisPool
```
public class JedisConnefctionFactory {
  private static final JedisPool jedisPool;
  static {
    JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();// 最大连接
    jedisPoolConfig.setMaxTotal(8);
    // 最大空闲连接
    jedisPoolConfig.setMaxIdle(8);
    // 最小空闲连接
    jedisPoolConfig.setMinIdle(0);
    // 设置最长等待时间,ms
    jedisPoolConfig.setMaxWaitMillis(200);
    jedisPool = new JedisPool(jedisPoolConfig, "localhost", 6379, 1000, "123321");
  }

  // 获取Jedis对象
  public static Jedis getJedis() {
    return jedisPool.getResource();
  }
}
```





































