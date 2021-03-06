
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = require('./date')

const experienceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: date.schema,
    required: true
  }
})

module.exports = mongoose.model('Experience', experienceSchema)
