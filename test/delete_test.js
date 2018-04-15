const assert = require('assert')
const Book = require('../src/book')

describe('Deleting a book', () => {
  let testBook

  beforeEach((done) => {
    testBook = new Book({title: 'bookTest'})
    testBook.save()
      .then(() => done())
  })

  it('model instance remove', (done) => {
    testBook.remove()
      .then(() => Book.findOne({ title: 'bookTest' }))
      .then((book) => {
        assert(book === null)
        done()
      })
  })

  it('class method remove', () => {

  })

  it('class method findAndRemove', () => {

  })

  it('class method findByIdAndRemove', () => {

  })
})