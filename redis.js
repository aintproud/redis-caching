const redis = require("redis")
const client = redis.createClient({
  url: "redis://localhost:1111",
});

(async () => {
  await client.connect()

  .then(console.log(await client.ping()))//pong

  .then(console.log(await client.set("key", "value")))//ok

  .then(console.log(await client.get("key")))//value
  
  .then(console.log(await client.expire("key", 10)))//true

  .then(console.log(await client.hSet("keyOfHash", {'firstKey': 'firstValue', 'secondKey': 'secondValue'}))) //0 if its already created

  .then(console.log(await client.hGet("keyOfHash", 'firstKey')))//firstValue

  .then(console.log(await client.hKeys("keyOfHash")))//some keys

  .then(console.log(await client.hLen("keyOfHash")))//length

  .then(console.log(await client.HVALS("keyOfHash")))//vals

  .then(console.log(await client.hKeys("keyOfHash")))//keys

  .then(console.log(await client.hDel("keyOfHash", 'firstKey')))//1

  .then(setTimeout(async()=>console.log(await client.keys("key")), 20000))//sync

  .then(setInterval(async()=>console.log(await client.HVALS("keyOfHash")), 2000))//sync
  
  .then(setTimeout(async()=>console.log(await client.flushAll()), 30000))//sync
})()
