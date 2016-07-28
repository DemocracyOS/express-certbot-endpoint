ExpressJS Certbot Cert Validation middleware
===

Express middleware to add `/.well-known/acme-challenge/:key` endpoint for [Certbot](https://certbot.eff.org) certonly manual generation.

The idea is to configure this middleware one time in your App, and set the environment variables `CERTBOT_KEY` and `CERTBOT_TOKEN` every time you want to generate/update your certs.

## Install

1 - Install the middleware in your express/connect project:
```bash
npm install --save express-certbot-endpoint
```

2 - Add it:
```javascript
var express = require('express')
var certbotEndpoint = require('express-certbot-endpoint')

var app = express()

app.use(certbotEndpoint({
  key: process.env.CERTBOT_KEY,
  token: process.env.CERTBOT_TOKEN
}))
```

## Usage

1 - Make sure to have [Certbot](https://certbot.eff.org) on your 💻.

2 - `sudo certbot certonly --manual`

3 - Follow the instructions, until it says `Make sure your web server displays the …` and leave that tab open.

4 - Configure in your server the `key` and the `token` it gave you.
  * For example, using heroku: `heroku config:set CERTBOT_KEY='hvBj5jK2o3B6IpFhdrc8Q1OR6UeIl63_xXxXxXxXxXx' CERTBOT_TOKEN='msbwzok5NNPLg2BjLBIGVali8utyXrc95xXxXxXxXxX'`

5 - **Press ENTER** and it will generate the certs on your 💻 (it will give you the paths).

6 - Upload the certs to your server/DNS/Proxy and you're done.
  * For example, using heroku: `sudo heroku certs:update /etc/letsencrypt/live/domain.com/fullchain.pem /etc/letsencrypt/live/domain.com/privkey.pem --confirm heroku-app-name`

7 - **Ω**

## LICENCE
**MIT**
