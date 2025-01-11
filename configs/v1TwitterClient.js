const path = require('path');
const Twitter = require('twitter');
const dotenv = require('dotenv');


dotenv.config({ path: path.resolve(__dirname, '../.env') });

const v1Client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
});

module.exports = { v1Client };
