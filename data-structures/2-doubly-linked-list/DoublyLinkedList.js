const DoublyLinkedListNode = require('./DoublyLinkedListNode')

class DoublyLinkedList {
  constructor () {
    /** @type DoublyLinkedListNode */
    this.head = null

    /** @type DoublyLinkedListNode */
    this.tail = null
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

  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find ({ value = undefined, callback = undefined }) {

  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail () {

  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead () {

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
   * @return {string}
   */
  toString () {
    return this.toArray().map(node => node.toString()).toString()
  }
}

module.exports = DoublyLinkedList
