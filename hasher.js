var sha1 = require('sha1')

module.exports = function(value) {
  return sha1(new Buffer(sha1(value), 'hex'))
}