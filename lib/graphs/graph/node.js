function Node (name) {
  this.name = name
  this.edges = []
}

Node.prototype = {
  getName: function () {
    return this.name
  },

  getEdges: function () {
    return this.edges
  },

  addEdge: function (node) {
    this.edges.push(node)
  }
}

module.exports = Node
