const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/books_test')
mongoose.connection
  .once('open', () => console.log('Connected'))
  .on('error', (error) => {
    console.warn('Warning', error)
  })