// @flow

import Router from 'koa-router'

import {
  getAll,
  getOneById,
  getOneByTeamId,
  getTwoByTeamId,
  getOneByPlayerId,
  create,
  update,
  remove,
} from '../controllers/mediaController'

const index = new Router()

index.get('/', getAll)
index.get('/:id', getOneById)
index.get('/team/:id', getOneByTeamId)
index.get('/teams/:id1/:id2', getTwoByTeamId)
index.get('/player/:id', getOneByPlayerId)
index.post('/', create)
index.put('/:id', update)
index.delete('/:id', remove)

export default index
