const Book = require('../models/book')

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },

  create(req, res) {
    console.log(req.body)
    const bookProps = req.body
    
    Book.create(bookProps)
      .then(book => res.send(book))
      
  }
}