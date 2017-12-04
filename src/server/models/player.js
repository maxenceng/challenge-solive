// @flow

import Mongoose from 'mongoose'

const playerSchema = new Mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  teamId: Number,
})

export default Mongoose.model('player', playerSchema)
