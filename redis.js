const redis = require("redis");
const client = redis.createClient({
  url: "redis://localhost:1111",
});

(async () => {
  await client.connect();
  await client.set("key", "value");
  console.log(await client.get("key"));
})();
