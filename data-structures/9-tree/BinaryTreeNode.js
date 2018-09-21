const Comparator = require('../../utils/comparator')
const HashTable = require('../5-hash-table/HashTable')

class BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   */
  constructor (value = null) {
    /** @type {BinaryTreeNode} */
    this.left = null
    /** @type {BinaryTreeNode} */
    this.right = null
    /** @type {BinaryTreeNode} */
    this.parent = null
    this.value = value

    // Any node related meta information may be stored here.
    this.meta = new HashTable()

    // This comparator is used to compare binary tree nodes with each other.
    this.nodeComparator = new Comparator()
  }

  /**
   * @return {number}
   */
  get leftHeight () {
    if (!this.left) return 0

    return this.left.leftHeight + 1
  }

  /**
   * @return {number}
   */
  get rightHeight () {
    if (!this.right) return 0

    return this.right.rightHeight + 1
  }

  /**
   * @return {number}
   */
  get height () {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  /**
   * @return {number}
   */
  get balanceFactor () {
    return this.leftHeight - this.rightHeight
  }

  /**
   * Get parent's sibling if it exists.
   * @return {BinaryTreeNode}
   */
  get uncle () {
    if (!this.parent) return undefined
    if (!this.parent.parent) return undefined

    if (!this.parent.parent.left || !this.parent.parent.right) return undefined

    if (this.nodeComparator.equal(this.parent.parent.left, this.parent)) return this.parent.parent.right
    if (this.nodeComparator.equal(this.parent.parent.right, this.parent)) return this.parent.parent.left
  }

  /**
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  setValue (value) {
    this.value = value

    return this
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft (node) {
    if (this.left) {
      this.left.parent = null
    }

    this.left = node

    if (this.left) {
      this.left.parent = this
    }

    return this
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight (node) {
    if (this.right) {
      this.right.parent = null
    }

    this.right = node

    if (this.right) {
      this.right.parent = this
    }

    return this
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild (nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null

      return true
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null

      return true
    }

    return false
  }

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild (nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) return false

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode
      return true
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode
      return true
    }

    return false
  }

  /**
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode (sourceNode, targetNode) {
    targetNode.setLeft(sourceNode.left)
    targetNode.setValue(sourceNode.value)
    targetNode.setRight(sourceNode.right)
  }

  /**
   * @return {*[]}
   */
  traverseInOrder () {
    let nodes = []

    if (this.left) {
      nodes = nodes.concat(this.left.traverseInOrder())
    }

    nodes.push(this.value)

    if (this.right) {
      nodes = nodes.concat(this.right.traverseInOrder())
    }

    return nodes
  }

  /**
   * @return {string}
   */
  toString () {
    return this.traverseInOrder().toString()
  }
}

module.exports = BinaryTreeNode
