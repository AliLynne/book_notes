const assert = require('assert')
const Book = require('../src/book')

describe('Reading books out of the database', () => {

  let testBook

  beforeEach((done) => {
    testBook = new Book({ title: 'testBook'})
    testBook.save()
      .then(() => done())
  })

  it('finds all books with a title of testBook', (done) => {
    Book.find({ title: 'testBook' })
      .then((books) => {
        assert(books[0]._id.toString() === testBook._id.toString())
        done()
      })
  })

})