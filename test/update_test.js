const assert = require('assert')
const Book = require('../src/book')

describe('Updating records', () => {
  let testBook

  beforeEach((done) => {
    testBook = new Book({ title: 'bookTest'})
    testBook.save()
      .then(() => done())
  })

  function assertTitle(operation, done) {
    operation
      .then(() => Book.find({}))
      .then((books) => {
        assert(books.length === 1)
        assert(books[0].title === 'TestTitle')
        done()
      })
  }

  it('instance type using set and save', (done) => {
    testBook.set('title', 'TestTitle')
    assertTitle(testBook.save(), done)
      
  })

  it('a model instance can update', (done) => {
    
    assertTitle(testBook.update({ title: 'TestTitle' }), done)
  })
})