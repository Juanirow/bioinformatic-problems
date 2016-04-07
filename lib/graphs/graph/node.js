function Node (name) {
  this.name = name
  this.edges = []
}

Node.prototype.getName = function () {
  return this.name
}

Node.prototype.getEdges = function () {
  return this.edges
}

module.exports = Node
