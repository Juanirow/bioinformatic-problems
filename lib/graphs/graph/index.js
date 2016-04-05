var Node = require('./node')

function Graph (name) {
  this.name = name || 'graph-test'
  this.nodes = []
}

Graph.prototype = {
  /*
   * Method getter
   *
   * @return {String}
   * @public
   */
  getName: function () {
    return this.name
  },

  /*
   * Method Getter
   *
   * @return {Array}
   * @public
   */
  getNodes: function () {
    return this.nodes
  },

  /*
   * Add a new node in nodes's list
   *
   * @param {Node}
   * @return {Boolean}
   * @public
   */
  addNode: function (node) {
    if ((node instanceof Node) === true) {
      this.nodes.push(node)
      return true
    }
    return false
  }
}
// /**
//  * Try to delete a node of graph with its name
//  *
//  * @param {String} name
//  * @return {Node|false}
//  * @public
//  */
// Graph.prototype.retrieveNode = function (name) {
//   for (var i = 0; i < this.nodes.length; i++) {
//     if (this.nodes[i].getName() === name) {
//       return this.nodes.splice(i, 1)[0]
//     }
//   }
//   return false
// }

module.exports = Graph
