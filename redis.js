const redis = require("redis")
const client = redis.createClient({
  url: "redis://localhost:1111",
});

(async () => {
    await client.connect()
    console.log(await client.ping())
  await client.set("key", "value")
  console.log(await client.get("key"))
  console.log(await client.exists("key"))
  console.log(await client.expire("key", 10))
  console.log(await client.hSet("hkey", {'34433': 'pp'}))
  console.log(await client.hGet("hkey", '1'))
  setTimeout(async()=>console.log(await client.get("key")), 20000)
})()
