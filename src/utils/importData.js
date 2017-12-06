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

const removeAll = async (model: Function): Promise<any> => {
  const removed = await model.remove({})
  return Promise.resolve(removed)
}
const save = async (model: Function, data: Object): Promise<any> => {
  const added = await model(data).save()
  return Promise.resolve(added)
}

const isEverythingFinished = (): void => {
  i -= 1
  if (i === 0) {
    process.exit()
  }
}

Mongoose.Promise = global.Promise
Mongoose.connect(`mongodb://${MONGO_SERVER}/${DB_NAME}`, { useMongoClient: true })

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
