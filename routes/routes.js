const BooksController = require('../controllers/books_controller')

module.exports = (app) => {

  app.get('/api', BooksController.greeting)

  app.post('/api/books', BooksController.create)
  app.put('/api/books/:id', BooksController.edit)
  app.delete('/api/books/:id', BooksController.delete)
}