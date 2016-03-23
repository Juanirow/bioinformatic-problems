var expect = require('chai').expect

describe('This is test to mocha', function () {
  it('testing a strings', function (done) {
    expect('hello').to.be.equal('hello')
    done()
  })
})
