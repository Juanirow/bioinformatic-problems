var expect = require('chai').expect
var Graph = require('../../lib/graphs/graph')
var Node = require('../../lib/graphs/graph/node.js')

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
    describe('Add a Node', function () {
      it('Should create an instance of Node', function (done) {
        var newNode = new Node('A')
        expect(newNode).to.be.instanceof(Node)
        done()
      })
      // it('The method addNode() should has an instance of Node with parameter', function (done) {
      //   var newNode = new Node('A')
      // })
      // it('Graph should has a method to add a node', function (done) {
      //   expect(graph.addNode()).to.be.true
      //   done()
      // })
    })
  })
})
