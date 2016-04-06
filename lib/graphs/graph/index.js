'use strict'

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
    return name !== undefined ? typeof (name) !== 'string' ? {
      status: false,
      message: "The node's name has to be a String"
    } : (function (self) {
      let list = self.getNodes()
      for (var i = 0, x = list.length; i < x; i++) {
        if (list[i].getName() === name) {
          return {
            status: true,
            message: 'ok',
            node: list[i]
          }
        }
      }
      return {status: false, message: 'The node ' + name + ' was not found'}
    })(this) : {
      status: false,
      message: "The node's name is required"
    }
  }
}

module.exports = Graph
