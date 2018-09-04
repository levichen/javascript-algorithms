const LinkedList = require('../1-linked-list/LinkedList')

const defaultHashTableSize = 32

class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor (hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList())

    // Just to keep track of all actual keys in a fast way.
    this.keys = {}
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash (key) {

  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set (key, value) {

  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete (key) {

  }

  /**
   * @param {string} key
   * @return {*}
   */
  get (key) {

  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has (key) {

  }

  /**
   * @return {string[]}
   */
  getKeys () {
  }
}

module.exports = HashTable
