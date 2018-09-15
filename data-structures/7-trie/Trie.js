const TrieNode = require('./TrieNode')

// Character that we will use for trie tree root.
const HEAD_CHARACTER = '*'

class Trie {
  constructor () {
    this.head = new TrieNode(HEAD_CHARACTER)
  }

  /**
   * @param {string} word
   * @return {Trie}
   */
  addWord (word) {
    const characters = word.split('')
    let currentNode = this.head

    for (let i = 0; i < characters.length; i = i + 1) {
      currentNode.addChild(characters[i])
      currentNode = currentNode.getChild(characters[i])
    }

    currentNode.isCompleteWord = true

    return this
  }

  /**
   * @param {string} word
   * @return {Trie}
   */
  deleteWord (word) {
    /**
     * @param {TrieNode} currentNode
     * @param {number} charIndex
     */
    const depthFirstDelete = (currentNode, charIndex = 0) => {
      if (charIndex >= word.length) return

      const char = word[charIndex]
      const nextNode = currentNode.getChild(char)

      if (nextNode === undefined) return

      depthFirstDelete(nextNode, charIndex + 1)

      if (charIndex === (word.length - 1)) {
        nextNode.isCompleteWord = false
      }

      currentNode.removeChild(char)
    }

    depthFirstDelete(this.head)

    return this
  }

  /**
   * @param {string} word
   * @return {string[]}
   */
  suggestNextCharacters (word) {
    const lastChar = this.getLastCharacterNode(word)

    return lastChar ? lastChar.children.getKeys() : null
  }

  /**
   * Check if complete word exists in Trie.
   *
   * @param {string} word
   * @return {boolean}
   */
  doesWordExist (word) {
    const lastChar = this.getLastCharacterNode(word)

    return !!lastChar && lastChar.isCompleteWord
  }

  /**
   * @param {string} word
   * @return {TrieNode}
   */
  getLastCharacterNode (word) {
    const chars = [...word]
    let currentNode = this.head

    for (let i = 0; i < chars.length; i = i + 1) {
      if (!currentNode.hasChild(chars[i])) {
        return null
      }

      currentNode = currentNode.getChild(chars[i])
    }

    return currentNode
  }
}

module.exports = Trie
