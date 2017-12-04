// @flow

import Mongoose from 'mongoose'

const teamSchema = new Mongoose.Schema({
  _id: Number,
  name: String,
})

export default Mongoose.model('Team', teamSchema)
