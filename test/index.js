var expect = require('chai').expect
var calculator = require('../lib/calculator')

describe('this is the first test', function () {
  it('Full name', function (done) {
    expect('hello world').to.be.equal('hello world')
    done()
  })
})

describe('this is the juancho test', function () {
  it('Message', function () {
    expect('caldo volador').to.be.a('string')
  })
})

describe('calculator', function () {
  describe('suma()', function () {
    it('should return the add of two numbers', function () {
      expect(calculator.suma(1, 2)).to.equal(3)
    })
  })
})
