// @flow

import Mongoose from 'mongoose'

/**
 * @type {Mongoose}
 */
const playerSchema = new Mongoose.Schema({
  _id: Number,
  firstName: String,
  lastName: String,
  teamId: Number,
})

export default Mongoose.model('Player', playerSchema)
