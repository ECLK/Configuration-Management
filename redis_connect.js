const redis = require('redis');
const redis_client = redis.createClient(process.env.REDIS_PORT);
    
try {
    redis_client.on('error', (err) => {
        console.log('redis connected')
    }
    );
} catch (error) {
    console.log(error)
}


module.exports = redis_client;