function Graph (name) {
  this.name = name || 'graph-test'
  this.nodes = []
}

Graph.prototype.getNodes = function () {
  return this.nodes
}

Graph.prototype.addNode = function () {
  return true
}

module.exports = Graph
