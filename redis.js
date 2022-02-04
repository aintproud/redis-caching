const redis = require('redis'),
client = redis.createClient()

client.on('error', (error)=>console.log(error))
client.on('connect', ()=>{
    client.set('random key', 'random value',(error, reply)=>{
        error? console.log(error):console.log(reply)
    })
    client.get('random key', (error, reply)=>{
        error? console.log(error):console.log(reply)
    })
})








// console.log(redis, '\n\n\n', client)