const LinkedListNode = require('./LinkedListNode')

class LinkedList {
  constructor () {
    /** @type {LinkedListNode} */
    this.head = null
    /** @type {LinkedListNode} */
    this.tail = null
  }

  /**
   * @param {*} value
   * @returns {LinkedList}
   */
  append (value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * @returns {LinkedListNode[]}
   */
  toArray () {
    const nodes = []
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }
  toString () {
    return this.toArray().map(node => node.toString()).toString()
  }
}

module.exports = LinkedList
