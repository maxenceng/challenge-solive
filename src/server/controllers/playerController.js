// @flow

import Player from '../models/player'
import apiResponse from '../../utils/apiResponse'

/**
 * Gets all the players.
 * Possible to use GET parameters to limit or sort the results
 * and select the fields you want to get.
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const players = await Player.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, players, 'Could not find all players!')
}

/**
 * Gets one player
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getOne = async (ctx: Object): Promise<any> => {
  const player = await Player.findById(ctx.params.id)
  apiResponse(ctx, player, 'Could not find the player!')
}

/**
 * Creates a player
 * @param  {Object}   ctx
 * @return {Promise}
 */
const create = async (ctx: Object): Promise<any> => {
  const player = await new Player(ctx.request.body).save()
  apiResponse(ctx, player, 'Could not create a player!')
}

/**
 * Updates a player
 * @param  {Object}   ctx
 * @return {Promise}
 */
const update = async (ctx: Object): Promise<any> => {
  const player = await Player.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, player, 'Could not update the player!')
}

/**
 * Removes a player
 * @param  {Object}   ctx
 * @return {Promise}
 */
const remove = async (ctx: Object): Promise<any> => {
  const player = await Player.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, player, 'Could not remove the player!')
}

export { getAll, getOne, create, update, remove }
