const LinkedList = require('../1-linked-list/LinkedList')

class Stack {
  constructor () {
    // We're going to implement Queue based on LinkedList since this
    // structures a quite similar. Compare push/pop operations of the Stack
    // with append/deleteTail operations of LinkedList.
    this.linkedList = new LinkedList()
  }

  /**
   * @return {boolean}
   */
  isEmpty () {
    return this.linkedList.head === null
  }

  /**
   * @return {*}
   */
  peek () {
    return this.linkedList.tail ? this.linkedList.tail.value : null
  }

  /**
   * @param {*} value
   */
  push (value) {
    this.linkedList.append(value)
  }

  /**
   * @return {*}
   */
  pop () {
    const poppedNode = this.linkedList.deleteTail()
    return poppedNode ? poppedNode.value : null
  }

  /**
   * @return {*[]}
   */
  toArray () {
    const arr = []

    while (this.linkedList.tail) {
      arr.push(this.linkedList.deleteTail().value)
    }

    return arr
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString (callback) {
    return this.linkedList.toString(callback)
  }
}

module.exports = Stack
