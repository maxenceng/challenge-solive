// @flow

import Mongoose from 'mongoose'

/**
 * @type {Mongoose}
 */
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

export default Mongoose.model('Game', gameSchema)
