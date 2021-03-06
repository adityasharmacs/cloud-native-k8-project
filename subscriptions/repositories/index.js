let makeRedisClient = (config) => {
    
    const redis = require("async-redis")
    const options = {
        host: config.redis_host,
        port: config.redis_port,
        password: process.env.REDIS_PASSWORD
    }

    return redis.createClient(options)
}

module.exports = (config) => {

    const client = makeRedisClient(config)
    const subscriptionsRepo = require('./SubscriptionsRepository')(client)

    return {subscriptionsRepository: subscriptionsRepo}
}