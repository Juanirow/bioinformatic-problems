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
  this.nodes.push(node)
  return true
}

/**
 * Try to delete a node of graph with its name
 *
 * @param {String} name
 * @return {Node|false}
 * @public
 */
Graph.prototype.retrieveNode = function (name) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].getName() === name) {
      return this.nodes.splice(i, 1)[0]
    }
  }
  return false
}

module.exports = Graph
