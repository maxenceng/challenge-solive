// @flow

import Router from 'koa-router'

import { getAll, getOne, create, update, remove } from '../controllers/gameController'

const index = new Router()

index.get('/', getAll)
index.get('/:id', getOne)
index.post('/', create)
index.put('/:id', update)
index.delete('/:id', remove)

export default index
