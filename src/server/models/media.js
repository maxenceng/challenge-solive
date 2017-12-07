// @flow

import Mongoose from 'mongoose'

/**
 * @type {Mongoose}
 */
const mediaSchema = new Mongoose.Schema({
  playerId: Number,
  teamId: Number,
  path: String,
  type: String,
})

export default Mongoose.model('Media', mediaSchema)
