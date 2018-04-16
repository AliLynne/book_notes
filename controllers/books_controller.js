const Book = require('../models/book')

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },

  create(req, res, next) {
    const bookProps = req.body
    
    Book.create(bookProps)
      .then(book => res.send(book))
      .catch(next)
  },

  edit(req, res, next) {
    const bookId = req.params.id
    const bookProps = req.body

    Book.findByIdAndUpdate({ _id: bookId }, bookProps)
      .then(() => Book.findById({ _id: bookId}))
      .then(book => res.send(book))
      .catch(next)
  },

  delete(req, res, next) {
    const bookId = req.params.id
    
    Book.findByIdAndRemove({ _id: bookId })
      .then(book => res.status(204).send(book))
      .catch(next)
  }
}