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
    describe('Check Properties -> Nodes and Edges', function () {
      it('Should have list of nodes', function (done) {
        var nodes = graph.getNodes()
        expect(nodes).to.be.an('array')
        expect(nodes).to.be.empty
        done()
      })
    })
  })
})
