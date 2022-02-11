const redis = require("redis")
const client = redis.createClient({
  url: "redis://localhost:1111",
});

(async () => {
  await client.connect()

  .then(console.log(await client.ping()))

  .then(console.log(await client.set("key", "value")))

  .then(console.log(await client.get("key")))
  
  .then(console.log(await client.expire("key", 10)))

  .then(console.log(await client.hSet("keyOfHash", {'firstKey': 'firstValue', 'secondKey': 'secondValue'}))) //0 if its already created

  .then(console.log(await client.hGet("keyOfHash", 'firstKey')))

  .then(console.log(await client.hKeys("keyOfHash")))

  .then(console.log(await client.hLen("keyOfHash")))

  .then(console.log(await client.HVALS("keyOfHash")))

  .then(console.log(await client.hKeys("keyOfHash")))

  .then(console.log(await client.hKeys("keyOfHash")))

  .then(setTimeout(async()=>console.log(await client.keys("key")), 20000))//sync

  .then(setInterval(async()=>console.log(await client.HVALS("keyOfHash")), 2000))//sync
  
  .then(setTimeout(async()=>console.log(await client.flushAll()), 30000))//sync
})()
