const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/book_notes')

app.use(express.json())
routes(app)

module.exports = app