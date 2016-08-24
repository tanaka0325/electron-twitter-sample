const Twit = require('twit')
const env = require('../../../../env.json')

module.exports = new Twit({
  consumer_key: env.consumer_key,
  consumer_secret: env.consumer_secret,
  access_token: env.access_token,
  access_token_secret: env.access_token_secret,
})
