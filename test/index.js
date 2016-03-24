var expect = require('chai').expect

describe('this is the first test', function () {
  it('Full name', function (done) {
    expect('hello world').to.be.equal('hello world')
    done()
  })
})
