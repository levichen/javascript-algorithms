const DoublyLinkedListNode = require('./DoublyLinkedListNode')
const Comparator = require('../../utils/comparator')

class DoublyLinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor (comparatorFunction) {
    /** @type DoublyLinkedListNode */
    this.head = null

    /** @type DoublyLinkedListNode */
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend (value) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    if (this.head) {
      this.head.previous = newNode
    }

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append (value) {
    const newNode = new DoublyLinkedListNode(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode

    // Attach current tail to the new node's previous reference.
    newNode.previous = this.tail

    // Set new node to be the tail of linked list.
    this.tail = newNode

    return this
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete (value) {
    if (this.head === null) return null

    let deletedNode = null

    let currentNode = this.head

    while (currentNode !== null) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode

        if (currentNode === this.head) {
          this.head = currentNode.next

          if (this.head !== null) {
            this.head.previous = null
          }

          if (this.tail === currentNode) {
            this.tail = null
          }
        } else if (currentNode === this.tail) {
          this.tail = currentNode.previous
          this.tail.next = null
        } else {
          currentNode.previous.next = currentNode.next
          currentNode.next.previous = currentNode.previous
        }
      }

      currentNode = currentNode.next
    }

    return deletedNode
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find ({ value = undefined, callback = undefined }) {
    if (this.head === null) return null

    let currentNode = this.head
    while (currentNode) {
      if (callback !== undefined && callback(currentNode.value)) return currentNode
      if (value !== undefined && this.compare.equal(currentNode.value, value)) return currentNode

      currentNode = currentNode.next
    }

    return null
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail () {
    if (this.tail === null) {
      return null
    }

    // there is only one node
    if (this.head === this.tail) {
      const deletedTail = this.tail

      this.head = null
      this.tail = null

      return deletedTail
    }

    // if there are many nodes
    const deletedTail = this.tail

    this.tail = this.tail.previous
    this.tail.next = null

    return deletedTail
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead () {
    if (this.head === null) {
      return null
    }

    // if there is only one node
    if (this.head === this.tail) {
      const deletedHead = this.head
      this.head = null
      this.tail = null

      return deletedHead
    }

    // if there are many nodes
    const deletedHead = this.head
    this.head = this.head.next
    this.head.previous = null

    return deletedHead
  }

  /**
   * @return {DoublyLinkedListNode[]}
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

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {DoublyLinkedList}
   */
  fromArray (values) {
    values.forEach(value => this.append(value))

    return this
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString (callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}

module.exports = DoublyLinkedList
