var assert = require('assert')
var hasher = require('../hasher')
describe('Hash', function() {
  describe('f3a2a51a9b0f2be2468926b4132313728c250dbf', function() {
    it('should equal to `foo`', function() {
      assert.equal('f3a2a51a9b0f2be2468926b4132313728c250dbf', hasher('foo'))
    })
  })
  
  describe('e8d46ce25265e545d225a8a6f1baf642febee5cb', function() {
    it('should equal to `bar`', function() {
      assert.equal('e8d46ce25265e545d225a8a6f1baf642febee5cb', hasher('bar'))
    })
  })
})
