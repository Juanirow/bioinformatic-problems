var expect = require('chai').expect
var Worker = require('../lib/worker')

describe('this is the first test', function () {
  it('Full name', function (done) {
    var mike = new Worker('Miguel', 'Angel')
    expect(mike.toString()).to.be.equal('Miguel Angel')
    done()
  })
})
