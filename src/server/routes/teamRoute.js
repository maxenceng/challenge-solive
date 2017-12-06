// @flow

import Router from 'koa-router'

import { getAll, getOne, getTwo, create, update, remove } from '../controllers/teamController'

const index = new Router()

/**
 * Calls the get function in our controller for our index route of this subrouter
 */
index.get('/', getAll)
index.get('/:id', getOne)
index.get('/:id1/:id2', getTwo)
index.post('/', create)
index.put('/:id', update)
index.delete('/:id', remove)

export default index
