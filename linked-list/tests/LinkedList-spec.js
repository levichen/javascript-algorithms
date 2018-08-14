const chai = require('chai')
const LinkedList = require('../LinkedList')
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
})
