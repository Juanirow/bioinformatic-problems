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
   * @param {Node} node
   * @return {Boolean}
   * @public
   */
  addNode: function (node) {
    if ((node instanceof Node) === true) {
      this.nodes.push(node)
      return true
    }
    return false
  },

  /*
   * Delete a node
   *
   * @param {String} name
   * @return {Object}
   * @public
   */
  deleteNode: function (name) {
    return {}
  }
}

module.exports = Graph
