const BooksController = require('../controllers/books_controller')

module.exports = (app) => {

  app.get('/api', BooksController.greeting)
}