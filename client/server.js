// import { __prod__ } from './constants'

import express from 'express'
import session from 'express-session'
import cors from 'cors'

import { createClient } from 'redis'
import connectRedis from 'connect-redis'

const main = async () => {
  const redisClient = createClient()

  redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err)
  })
  redisClient.on('connect', function () {
    console.log('Connected to redis successfully')
  })

  const app = express()

  await redisClient.connect()
  const RedisStore = connectRedis(session)
  const redis = new RedisStore({
    client: redisClient,
    disableTTL: true,
    disableTouch: true,
  })

  app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

  app.listen(8081, () => {
    console.log('Server started on localhost:8081')
  })
}

main().catch((err) => console.log(err))
