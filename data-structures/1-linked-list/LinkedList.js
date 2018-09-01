const LinkedListNode = require('./LinkedListNode')
const Comparator = require('../../utils/comparator')

class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor (comparatorFunction) {
    /** @type {LinkedListNode} */
    this.head = null
    /** @type {LinkedListNode} */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
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
   * @param {*} value
   * @returns {LinkedList}
   */
  prepend (value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead () {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail () {
    const deletedTail = this.tail
    let currentNode = this.head

    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    while (currentNode.next !== null) {
      if (currentNode.next.next === null) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedTail
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find ({ value = undefined, callback = undefined }) {}

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete (value) {
    if (this.head === null) {
      return null
    }

    let deletedNode = null
    while (this.head !== null && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    while (currentNode !== null && currentNode.next !== null) {
      if (this.compare.equal(currentNode.next.value, value)) {
        deletedNode = currentNode.next
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      deletedNode = this.tail
      this.tail = currentNode
    }

    return deletedNode
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
