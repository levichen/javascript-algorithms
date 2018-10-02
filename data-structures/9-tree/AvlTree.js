const BinarySearchTree = require('./BinarySearchTree')

class AvlTree extends BinarySearchTree {
  /**
   * @param {*} value
   */
  insert (value) {
    // Do the normal BST insert.
    super.insert(value)

    // Let's move up to the root and check balance factors along the way.
    let currentNode = this.root.find(value)
    while (currentNode) {
      this.balance(currentNode)
      currentNode = currentNode.parent
    }
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove (value) {

  }

  /**
   * @param {BinarySearchTreeNode} node
   */
  balance (node) {

  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftLeft (rootNode) {
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight (rootNode) {
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft (rootNode) {
  }

  /**
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight (rootNode) {
  }
}

module.exports = AvlTree
