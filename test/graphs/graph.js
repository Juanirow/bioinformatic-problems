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

  describe('.addNode(node)', function () {
    let graph = new Graph()
    it('should receive a parameter of type Node and return a true if it will', function () {
      expect(graph.addNode(new Node())).to.be.true
    })
  })
})

//   describe('Create an Graph', function () {
//     it('Should create an instance of class Graph', function (done) {
//     var graph = new Graph()
//       expect(new Graph()).to.be.an('object')
//       expect(graph).to.be.instanceof(Graph)
//       done()
//     })

//     describe('Create a Node', function () {
//       var newNode = new Node('A')
//       it('Should create an instance of Node', function (done) {
//         expect(newNode).to.be.instanceof(Node)
//         done()
//       })
//       it('Node should has a name property, its name is A', function (done) {
//         expect(newNode).to.have.property('name', 'A')
//         expect(newNode.name).to.be.a('string')
//         done()
//       })
//       it('Should has a method to get its name', function (done) {
//         expect(newNode.getName()).to.be.equal('A')
//         done()
//       })
//       it('Node should has a edges array with property', function (done) {
//         expect(newNode).to.have.property('edges')
//         expect(newNode.edges).to.be.an('array')
//         done()
//       })
//       it('Node should has a method to get the colletions of edges', function (done) {
//         expect(newNode.getEdges()).to.be.an('array')
//         done()
//       })
//     })

//     describe('Add a new Node to Graph', function () {
//       it('Graph should has a method to add a node called addNode()', function (done) {
//         expect(graph).to.have.property('addNode')
//         expect(graph.addNode).to.be.a('function')
//         done()
//       })
//       it('Method addNode() should has a object of Node with parameter', function (done) {
//         expect(graph.addNode(new Node())).to.be.true
//         done()
//       })
//       it('Method addNode() should return false if its parameter is not an instance of Node', function (done) {
//         expect(graph.addNode({test: 'this a test'})).to.be.false
//         done()
//       })
//       it('Graph should has a one item in its list of nodes', function (done) {
//         var myGraph = new Graph()
//         var myNode = new Node('A')
//         myGraph.addNode(myNode)
//         expect(myGraph.getNodes().length).to.equal(1)
//         expect(myGraph.getNodes()[0]).to.equal(myNode)
//         done()
//       })
//     })

//     describe('Retrieve a Node', function () {
//       let graph = new Graph()

//       graph.addNode(new Node('A'))
//       graph.addNode(new Node('B'))
//       graph.addNode(new Node('C'))

//       let node = graph.retrieveNode('B')

//       it('Should get a instance of Node when call retrieveNode() method', function (done) {
//         expect(node).to.be.instanceof(Node)
//         done()
//       })

//       it('Should has a same name the node that was retrieved', function (done) {
//         expect(node.getName()).to.equal('B')
//         done()
//       })

//       it('Graph should has a two nodes', function (done) {
//         expect(graph.getNodes().length).to.equal(2)
//         done()
//       })

//       it('Should get a false if the node does not exist in the graph', function (done) {
//         expect(graph.retrieveNode('X')).to.be.false
//         done()
//       })
//     })
//   })
// })
