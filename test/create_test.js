const assert = require('assert')
const Book = require('../src/book')


describe('Creating records', () => {

  it('saves a book', (done) => {
    const testBook = new Book({ title: 'Book Title'})

    testBook.save()
      .then(() => {
        assert(!testBook.isNew)
        done()
      })
  })

})