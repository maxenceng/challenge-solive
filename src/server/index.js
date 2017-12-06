// @flow

import 'regenerator-runtime/runtime'

import Koa from 'koa'
import Compress from 'koa-compress'
import BodyParser from 'koa-bodyparser'
import Serve from 'koa-static'
import Mount from 'koa-mount'
import Router from 'koa-router'
import Mongoose from 'mongoose'

import index from './routes/indexRoute'
import game from './routes/gameRoute'
import media from './routes/mediaRoute'
import player from './routes/playerRoute'
import team from './routes/teamRoute'
import notFound from './routes/404Route'
import { IS_PROD, STATIC_PATH, WEB_PORT, MONGO_SERVER, DB_NAME } from '../utils/config'
import {
  HOME_ROUTE,
  GAME_ROUTE,
  MEDIA_ROUTE,
  PLAYER_ROUTE,
  TEAM_ROUTE,
  NOT_FOUND_ROUTE,
} from '../utils/routes'

Mongoose.Promise = global.Promise
Mongoose.connect(`mongodb://${MONGO_SERVER}/${DB_NAME}`, { useMongoClient: true })

const app = new Koa()
const router = new Router()

// Enables compression
app.use(Compress())

// Enables body parsing
app.use(BodyParser())

// Routes our static assets
app.use(Mount(`/${STATIC_PATH}`, Serve(STATIC_PATH)))

// Routes everything we have on the server
router.use(HOME_ROUTE, index.routes())
router.use(GAME_ROUTE, game.routes())
router.use(MEDIA_ROUTE, media.routes())
router.use(PLAYER_ROUTE, player.routes())
router.use(TEAM_ROUTE, team.routes())
router.use(NOT_FOUND_ROUTE, notFound.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line
  console.log(`Running on port: ${WEB_PORT}(${IS_PROD ? 'production' : 'development'})`)
})
