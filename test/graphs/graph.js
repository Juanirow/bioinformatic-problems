'use strict'

var expect = require('chai').expect
var Graph = require('../../lib/graphs/graph')
var Node = require('../../lib/graphs/graph/node')

describe('Graph', function () {
  describe('constructor()', function () {
    let graph = new Graph('myGraph')

    it('should set a property called name with a value equal to myGraph', function () {
      expect(graph).to.have.property('name')
      expect(graph.getName()).to.equal('myGraph')
    })

    it('should set a property called name with value equal to graph-test if it do not have any parameter', function () {
      expect(new Graph()).to.have.property('name').to.equal('graph-test')
    })

    it('should set an empty array property called nodes', function () {
      expect(graph).to.have.property('nodes')
      expect(graph.nodes).to.be.an('array')
      expect(graph.nodes).to.be.empty
    })
  })

  describe('.addNode(name)', function () {
    let graph = new Graph()

    it('should receive a parameter of type Node and return true if it will', function () {
      expect(graph.addNode(new Node())).to.be.true
    })

    it('should return false if it parameter is not an instance of Node', function () {
      expect(graph.addNode({})).to.be.false
    })

    it("should insert a object node into graph's edges so that the graph has that node", function () {
      let myGraph = new Graph()
      var nodes = [new Node('A'), new Node('B'), new Node('C')]
      for (var i = 0, x = nodes.length; i < x; i++) {
        myGraph.addNode(nodes[i])
        expect(myGraph.getNodes()[i]).to.equal(nodes[i]).and.to.has.property('name', nodes[i].getName())
      }
    })
  })

  describe('.deleteNode(name)', function () {
    let graph = new Graph()
    let node = new Node('A')

    graph.addNode(node)

    it('should return an object literal, with a status equal to false if the parameter is undefined', function () {
      expect(graph.deleteNode()).to.have.property('status', false)
    })

    it("should return an object literal, with a message equal to 'The node's name is required'", function () {
      expect(graph.deleteNode()).to.have.property('message', "The node's name is required")
    })

    it("should return an object literal, with a message equal to 'The node's name has to be a String'", function () {
      expect(graph.deleteNode(23)).to.have.property('message', "The node's name has to be a String")
    })

    it("should return an object literal, with a message equal to 'The node X was not found'", function () {
      expect(graph.deleteNode('X')).to.have.property('message', 'The node X was not found')
    })

    it('should return a object that has the node with property where its name is equal to A', function () {
      let res = graph.deleteNode('A')
      expect(res).to.have.property('node')
      expect(res.node.getName()).to.equal('A')
    })

    it('should delete the node B, so that the graph just has two nodes [{A}, {X}]', function () {
      let graph = new Graph('patito')
      graph.addNode(new Node('A'))
      graph.addNode(new Node('B'))
      graph.addNode(new Node('X'))

      graph.deleteNode('B')

      expect(graph.getNodes().length).to.equal(2)
      expect(graph.getNodes()[0].getName()).to.equal('A')
    })
  })
})
