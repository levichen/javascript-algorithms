const Comparator = require('../../utils/comparator')

/**
 * Parent class for Min and Max Heaps.
 */
class Heap {
  /**
   * @constructs Heap
   * @param {Function} [comparatorFunction]
   */
  constructor (comparatorFunction) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }

    // Array representation of the heap.
    this.heapContainer = []
    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex (parentIndex) {
    return parentIndex * 2 + 1
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex (parentIndex) {
    return parentIndex * 2 + 2
  }

  /**
   * @param {number} childIndex
   * @return {number}
   */
  getParentIndex (childIndex) {
    return Math.floor(childIndex / 2 - 1)
  }

  /**
   * @param {number} childIndex
   * @return {boolean}
   */
  hasParent (childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasLeftChild (parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasRightChild (parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  leftChild (parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  rightChild (parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  /**
   * @param {number} childIndex
   * @return {*}
   */
  parent (childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  swap (indexOne, indexTwo) {
    let tmp = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = tmp
  }

  /**
   * @return {*}
   */
  peek () {
    if (this.heapContainer.length === 0) {
      return null
    }

    return this.heapContainer[0]
  }

  /**
   * @return {*}
   */
  poll () {
    // return first root node and put last leaft to root node then heapifyDown()
  }

  /**
   * @param {*} item
   * @return {Heap}
   */
  add (item) {
    // add a node to last node then heapifyUp()
  }

  /**
   * @param {*} item
   * @param {Comparator} [comparator]
   * @return {Heap}
   */
  remove (item, comparator = this.compare) {

  }

  /**
   * @param {*} item
   * @param {Comparator} [comparator]
   * @return {Number[]}
   */
  find (item, comparator = this.compare) {

  }

  /**
   * @return {boolean}
   */
  isEmpty () {
    return this.heapContainer.length === 0
  }

  /**
   * @return {string}
   */
  toString () {
    return this.heapContainer.toString()
  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyUp (customStartIndex) {

  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyDown (customStartIndex = 0) {

  }

  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  /* istanbul ignore next */
  pairIsInCorrectOrder (firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `)
  }
}

module.exports = Heap
