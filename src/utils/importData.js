// @flow

import fs from 'fs'
import path from 'path'
import Mongoose from 'mongoose'

import { MONGO_SERVER, DB_NAME } from './config'
import Game from '../server/models/game'
import Player from '../server/models/player'
import Media from '../server/models/media'
import Team from '../server/models/team'

const removeAll = async (model: Function): Promise<any> => {
  await model.remove({})
}
const save = async (model: Function, data: Object): Promise<any> => {
  await model(data).save()
}

Mongoose.Promise = global.Promise
Mongoose.connect(`mongodb://${MONGO_SERVER}/${DB_NAME}`, { useMongoClient: true })

const JsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data.json')))

removeAll(Game)
for (const gameData of JsonData.games) {
  save(Game, gameData)
}
removeAll(Player)
for (const playerData of JsonData.players) {
  save(Player, playerData)
}
removeAll(Media)
for (const mediaData of JsonData.medias) {
  save(Media, mediaData)
}
removeAll(Team)
for (const teamData of JsonData.teams) {
  save(Team, teamData)
}

process.exit()
