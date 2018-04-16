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
})