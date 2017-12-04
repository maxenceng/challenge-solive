// @flow

import 'regenerator-runtime/runtime'

import Koa from 'koa'
import Compress from 'koa-compress'
import Serve from 'koa-static'
import Mount from 'koa-mount'
import Router from 'koa-router'
import Mongoose from 'mongoose'

import index from './routes/indexRoute'
import settings from './routes/settingsRoute'
import notFound from './routes/404Route'
import { IS_PROD, STATIC_PATH, WEB_PORT, MONGO_SERVER, DB_NAME } from '../utils/config'
import { HOME_ROUTE, SETTINGS_ROUTE, NOT_FOUND_ROUTE } from '../utils/routes'

Mongoose.connect(`mongodb://${MONGO_SERVER}/${DB_NAME}`, { useMongoClient: true })

const app = new Koa()
const router = new Router()

// Enables compression
app.use(Compress())

// Routes our static assets
app.use(Mount(`/${STATIC_PATH}`, Serve(STATIC_PATH)))

// Routes everything we have on the server
router.use(HOME_ROUTE, index.routes())
router.use(SETTINGS_ROUTE, settings.routes())
router.use(NOT_FOUND_ROUTE, notFound.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line
  console.log(`Running on port: ${WEB_PORT}(${IS_PROD ? 'production' : 'development'})`)
})
