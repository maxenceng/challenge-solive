// @flow

import Mongoose from 'mongoose'

const mediaSchema = new Mongoose.Schema({
  playerId: Number,
  path: String,
  type: String,
})

export default Mongoose.model('media', mediaSchema)
