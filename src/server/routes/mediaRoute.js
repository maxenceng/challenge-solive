// @flow

import Router from 'koa-router'

import { getAll, getOne, create, update, remove } from '../controllers/mediaController'

const index = new Router()

/**
 * Calls the get function in our controller for our index route of this subrouter
 */
index.get('/', getAll)
index.get('/:id', getOne)
index.post('/', create)
index.put('/:id', update)
index.delete('/:id', remove)

export default index
