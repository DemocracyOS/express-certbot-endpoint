var parseUrl = require('parseurl')

module.exports = function certbotEndpoint (options) {
  if (!options || !options.key) return dummyMiddleware

  var url = '/.well-known/acme-challenge/' + options.key
  var token = [options.key, options.token].join('.')

  return function certbotEndpointMiddleware (req, res, next) {
    if (parseUrl(req).pathname !== url) return next()
    res.status(200).send(token)
  }
}

function dummyMiddleware (req, res, next) {
  next()
}
