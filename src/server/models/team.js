// @flow

import Mongoose from 'mongoose'

const teamSchema = new Mongoose.Schema({
  id: Number,
  name: String,
})

export default Mongoose.model('team', teamSchema)
