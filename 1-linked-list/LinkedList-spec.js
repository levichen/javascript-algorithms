const chai = require('chai')
const LinkedList = require('./LinkedList')
const expect = chai.expect

describe('Test Linked-List', function () {
  it('expect create a emply list', function () {
    const linkedList = new LinkedList()

    expect(linkedList.toString()).to.equal('')
  })

  it('expect append two number to list', function () {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)

    expect(linkedList.toString()).to.equal('1,2')
  })

  it('expect prepend one number to empty list', function () {
    const linkedList = new LinkedList()

    linkedList.prepend(0)

    expect(linkedList.toString()).to.equal('0')
  })

  it('expect prepend one number to list', function () {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.prepend(0)

    expect(linkedList.toString()).to.equal('0,1,2')
  })

  it('expect delete head work', function () {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)

    const deletedHead1 = linkedList.deleteHead()
    expect(deletedHead1.toString()).to.equal('1')
    expect(linkedList.toString()).to.equal('2')

    const deletedHead2 = linkedList.deleteHead()
    expect(deletedHead2.toString()).to.equal('2')
    expect(linkedList.toString()).to.equal('')
  })

  it('expect delete tail work', function () {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)

    const deletedTail1 = linkedList.deleteTail()
    expect(deletedTail1.toString()).to.equal('2')
    expect(linkedList.toString()).to.equal('1')

    const deletedTail2 = linkedList.deleteTail()
    expect(deletedTail2.toString()).to.equal('1')
    expect(linkedList.toString()).to.equal('')
  })
})
