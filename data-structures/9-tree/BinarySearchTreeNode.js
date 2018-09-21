const BinaryTreeNode = require('./BinaryTreeNode')
const Comparator = require('../../utils/comparator')

class BinarySearchTreeNode extends BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor (value = null, compareFunction = undefined) {
    super(value)

    // This comparator is used to compare node values with each other.
    this.compareFunction = compareFunction
    this.nodeValueComparator = new Comparator(compareFunction)
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert (value) {
    if (this.nodeComparator.equal(this.value, null)) {
      this.value = value

      return this
    }

    if (this.nodeComparator.lessThan(value, this.value)) {
      if (this.left) {
        return this.left.insert(value)
      } else {
        const newNode = new BinarySearchTreeNode(value, this.compareFunction)
        this.setLeft(newNode)

        return newNode
      }
    }

    if (this.nodeComparator.greaterThan(value, this.value)) {
      if (this.right) {
        return this.right.insert(value)
      }
      const newNode = new BinarySearchTreeNode(value)
      this.setRight(newNode)

      return newNode
    }

    return this
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find (value) {
    if (this.nodeComparator.equal(this.value, value)) return this

    if (this.nodeComparator.lessThan(value, this.value) && this.left) {
      return this.left.find(value)
    }

    if (this.nodeComparator.greaterThan(value, this.value) && this.right) {
      return this.right.find(value)
    }

    return null
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains (value) {
    return !!this.find(value)
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove (value) {
    const nodeToRemove = this.find(value)
    if (!nodeToRemove) {
      throw new Error('Item not found in the tree')
    }

    let childCount = 0
    if (nodeToRemove.left) childCount += 1
    if (nodeToRemove.right) childCount += 1

    // get removedNode's parent
    const { parent } = nodeToRemove

    // 1. has 0 child
    if (childCount === 0) {
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        nodeToRemove.setValue(undefined)
      }
    } else if (childCount === 1) {
      // 2. has 1 child
      // get removeNode's parent and check is left or right
      // find nodeToRemove's child check is left or right
      /** @var BinarySearchTreeNode */
      const childNode = nodeToRemove.left || nodeToRemove.right

      // if is right. parent.right.replace = nodeToRemove's child
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode)
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove)
      }
    } else {
      // 3. has 2 children
      // find the nextBigNode (the smalles value in right sub tree)
      const nextBigNode = nodeToRemove.right.findMin()

      if (!this.nodeComparator.equal(nextBigNode, nodeToRemove.right)) {
        // nextBigNode.remove
        this.remove(nextBigNode.value)
        nodeToRemove.setValue(nextBigNode.value)
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value)
        nodeToRemove.setRight(nodeToRemove.right.right)
      }

      return true
    }

    nodeToRemove.parent = null
    return true
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  findMin () {
    if (!this.left) {
      return this
    }

    return this.left.findMin()
  }
}

module.exports = BinarySearchTreeNode
