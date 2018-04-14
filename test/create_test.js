const assert = require('assert')
const Book = require('../src/book')


describe('Creating records', () => {

  it('saves a book', () => {
    const newBook = new Book({ title: 'Book Title'})
  })

})