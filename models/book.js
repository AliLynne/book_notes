const mongoose = require('mongoose')

const Schema = mongoose.Schema
const BookSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  author: {
    type: String,
    required: true
  },
  pub_date: {
    type: Date
  }
})

const Book = mongoose.model('book', BookSchema)

module.exports = Book