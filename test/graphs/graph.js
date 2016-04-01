var expect = require('chai').expect
var Graph = require('../../lib/graphs/graph')

describe('Graph Directed', function () {
  it('Should have a module to represents a Graph directed', function (done) {
    expect(Graph).to.be.a('function')
    done()
  })
  describe('Create an Graph', function () {
    var graph = new Graph()
    it('Should create an instance of class Graph', function (done) {
      expect(new Graph()).to.be.an('object')
      expect(graph).to.be.instanceof(Graph)
      done()
    })
    it('Should have list of nodes', function (done) {
      expect(graph).to.have.property('nodes')
      done()
    })
  })
})
