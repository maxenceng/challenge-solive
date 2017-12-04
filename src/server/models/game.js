// @flow

import Mongoose from 'mongoose'

const gameSchema = new Mongoose.Schema({
  timestamp: Number,
  stadium: String,
  homeTeamScore: {
    teamId: Number,
    score: Number,
  },
  awayTeamScore: {
    teamId: Number,
    score: Number,
  },
})

export default Mongoose.model('game', gameSchema)
