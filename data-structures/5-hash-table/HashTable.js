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
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0
    )

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set (key, value) {
    const hashKey = this.hash(key)

    this.keys[key] = hashKey

    const bucketLinkedList = this.buckets[hashKey]
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key })

    if (!node) {
      bucketLinkedList.append({ key, value })
    } else {
      node.value.value = value
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete (key) {
    const hashKey = this.hash(key)
    delete this.keys[key]
    const bucketLinkedList = this.buckets[hashKey]
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key })

    if (node) {
      return bucketLinkedList.delete(node.value)
    }

    return null
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get (key) {
    const hashKey = this.hash(key)
    const bucketLinkedList = this.buckets[hashKey]
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key })

    return node ? node.value.value : undefined
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has (key) {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  /**
   * @return {string[]}
   */
  getKeys () {
    return Object.keys(this.keys)
  }
}

module.exports = HashTable
