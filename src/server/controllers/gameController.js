// @flow

import Game from '../models/game'
import apiResponse from '../../utils/apiResponse'

const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const games = await Game.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, games, 'Could not find all games!')
}

const getOne = async (ctx: Object): Promise<any> => {
  const game = await Game.findById(ctx.params.id)
  apiResponse(ctx, game, 'Could not find the game!')
}

const create = async (ctx: Object): Promise<any> => {
  const game = await new Game(ctx.request.body).save()
  apiResponse(ctx, game, 'Could not create a game!')
}

const update = async (ctx: Object): Promise<any> => {
  const game = await Game.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, game, 'Could not update the game!')
}

const remove = async (ctx: Object): Promise<any> => {
  const game = await Game.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, game, 'Could not remove the game!')
}

export { getAll, getOne, create, update, remove }
