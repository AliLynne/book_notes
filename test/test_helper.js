const mongoose = require('mongoose')

before(done => {
  mongoose.connect('mongodb://localhost/book_notes_test')
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', error)
    })
})

beforeEach(done => {
  const { books } = mongoose.connection.collections
  books.drop()
    .then(() => done())
    .catch(() => done())
})