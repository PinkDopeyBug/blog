---
title: 5 SpringDataRedis
createTime: 2025/04/05 12:12:26
permalink: /tools/redis/5/
---
SpringData是Spring中数据操作的模块，包含对各种数据库的集成，其其中对Redis的集成模块就叫做SpringDataRedis

#### 配置
```
  data:
    redis:
      host: localhost
      port: 6379
      password: "03604"
      lettuce:
        pool:
          max-active: 8 # 最大连接
          max-idle:  8 # 最大空闲连接
          min-idle: 0 # 最小空闲连接
          max-wait: 100 # 连接等待时间
```

SpringDataRedis中提供了RedisTemplate了各种对ReOIs的操作.：并且将不同数据类型的操作API封装到了不同的类型中：

| API                         | 返回值             | 类型说明            |
| --------------------------- | --------------- | --------------- |
| redisTemplate.opsForValue() | ValueOperations | 操作String类型数据    |
| redisTemplate.opsForHash()  | HashOperations  | 操作Hash类型数据      |
| redisTemplate.opsForList()  | ListOperations  | 操作List类型数据      |
| redisTemplate.opsForSet()   | SetOperations   | 操作Set类型数据       |
| redisTemplate.opsForZSet()  | ZSetOperations  | 操作SortedSet类型数据 |
| redisTemplate               |                 | 通用的命令           |
示例:
```
@SpringBootTest
class DemoApplicationTests {
	@Autowired
	private RedisTemplate<String,Object> redisTemplate;

	@Test
	void testString(){
		redisTemplate.opsForValue().set("name","zhangsan");
		System.out.println(redisTemplate.opsForValue().get("name"));
	}
}
```

但设置数据后再次查询name键,如果之前没有name就查询不到数据,如果之前有name键那么查询到的是旧的数据而不是新插入的

RedisTemplate可以接收任意Object作为值写入Redis，只不过写入前会把Object序列化为字节形式，默认是采用JDK序列化，得到的结果是这样的：`\xAC\xED\x00\x05t\x00\x04name`
这种方法可读性差且内存占用较大

可以自己指定序列化器,不使用jdk的序列化器























