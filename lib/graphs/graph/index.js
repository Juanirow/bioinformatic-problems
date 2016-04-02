var Node = require('./node')

function Graph (name) {
  this.name = name || 'graph-test'
  this.nodes = []
}

Graph.prototype.getNodes = function () {
  return this.nodes
}

Graph.prototype.addNode = function (node) {
  if ((node instanceof Node) !== true) {
    return false
  }
  return true
}

module.exports = Graph
