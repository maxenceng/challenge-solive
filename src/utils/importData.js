// @flow

import fs from 'fs'
import path from 'path'
import Mongoose from 'mongoose'

import { MONGO_SERVER, DB_NAME } from './config'
import Game from '../server/models/game'
import Player from '../server/models/player'
import Media from '../server/models/media'
import Team from '../server/models/team'

let i

/**
 * Removes all the documents for the given model
 * @param  {Function}  model
 * @return {Promise}
 */
const removeAll = async (model: Function): Promise<any> => {
  const removed = await model.remove({})
  return Promise.resolve(removed)
}

/**
 * Saves the document for the given model
 * @param  {Function}  model
 * @return {Promise}
 */
const save = async (model: Function, data: Object): Promise<any> => {
  const added = await model(data).save()
  return Promise.resolve(added)
}

/**
 * If all the promises are resolved, we quit the program
 */
const isEverythingFinished = (): void => {
  i -= 1
  if (i === 0) {
    process.exit()
  }
}

// Connection to MongoDB
Mongoose.Promise = global.Promise
Mongoose.connect(`mongodb://${MONGO_SERVER}/${DB_NAME}`, { useMongoClient: true })

// Using remove as a parameter in a terminal will remove everything in the DB
if (process.argv[2] !== null && process.argv[2] === 'remove') {
  i = 4
  removeAll(Game).then(() => {
    isEverythingFinished()
  })
  removeAll(Player).then(() => {
    isEverythingFinished()
  })
  removeAll(Media).then(() => {
    isEverythingFinished()
  })
  removeAll(Team).then(() => {
    isEverythingFinished()
  })
} else {
  // If no parameter was used, then we save everything from the data.json file
  // flow-disable-next-line
  const JsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data.json')))
  const {
    games,
    players,
    medias,
    teams,
  } = JsonData
  i = games.length + players.length + medias.length + teams.length
  for (const game of games) {
    save(Game, game).then(() => {
      isEverythingFinished()
    })
  }
  for (const player of players) {
    save(Player, player).then(() => {
      isEverythingFinished()
    })
  }
  for (const media of medias) {
    save(Media, media).then(() => {
      isEverythingFinished()
    })
  }
  for (const team of teams) {
    save(Team, team).then(() => {
      isEverythingFinished()
    })
  }
}
