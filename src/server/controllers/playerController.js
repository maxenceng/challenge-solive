// @flow

import Player from '../models/player'
import apiResponse from '../../utils/apiResponse'

const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const players = await Player.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, players, 'Could not find all players!')
}

const getOne = async (ctx: Object): Promise<any> => {
  const player = await Player.findById(ctx.params.id)
  apiResponse(ctx, player, 'Could not find the player!')
}

const create = async (ctx: Object): Promise<any> => {
  const player = await new Player(ctx.request.body).save()
  apiResponse(ctx, player, 'Could not create a player!')
}

const update = async (ctx: Object): Promise<any> => {
  const player = await Player.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, player, 'Could not update the player!')
}

const remove = async (ctx: Object): Promise<any> => {
  const player = await Player.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, player, 'Could not remove the player!')
}

export { getAll, getOne, create, update, remove }
