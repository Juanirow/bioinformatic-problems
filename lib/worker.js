var Worker = function (first, last) {
  this.first = first
  this.last = last
}

Worker.prototype.toString = function () {
  return this.first + ' ' + this.last
}

module.exports = Worker
