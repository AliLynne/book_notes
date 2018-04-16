const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const Book = mongoose.model('book')


describe('Books controller', () => {
  it('Post to /api/books creates a new book', done => {
    Book.count().then(count => {

      request(app)
      .post('/api/books')
      .send({ 
        title: 'I am a title',
        author: 'I am an author'
      })
      .end(() => {

        Book.count().then(newCount => {
          assert(count + 1 === newCount)
          done()
        })
      })
    })
    
  })

  it('PUT to /api/books/id edits and existing book', done => {
    const book = new Book({ title: 'Title Test', author: 'Test Author', read: false })

    book.save().then(() => {
      request(app)
        .put(`/api/books/${book._id}`)
        .send({ read: true })
        .end(() => {
          Book.findOne({ title: 'Title Test' })
            .then(driver => {
              assert(driver.read === true)
              done()
            })
        })
    })
  })

  it('DELETE to /api/books/id can delete a book', done => {
    const book = new Book({ title: 'test book', author: 'test author'})

    book.save().then(() => {
      request(app)
        .delete(`/api/books/${book._id}`)
        .end(() => {
          Book.findOne({ title: 'test book' })
            .then((book) => {
              assert(book === null)
              done()
            })
        })
    })
  })
})