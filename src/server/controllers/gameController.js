// @flow

import Game from '../models/game'
import apiResponse from '../../utils/apiResponse'

/**
 * Gets all the games.
 * Possible to use GET parameters to limit or sort the results
 * and select the fields you want to get.
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const games = await Game.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, games, 'Could not find all games!')
}

/**
 * Gets one game
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getOne = async (ctx: Object): Promise<any> => {
  const game = await Game.findById(ctx.params.id)
  apiResponse(ctx, game, 'Could not find the game!')
}

/**
 * Creates a game
 * @param  {Object}   ctx
 * @return {Promise}
 */
const create = async (ctx: Object): Promise<any> => {
  const game = await new Game(ctx.request.body).save()
  apiResponse(ctx, game, 'Could not create a game!')
}

/**
 * Updates a game
 * @param  {Object}   ctx
 * @return {Promise}
 */
const update = async (ctx: Object): Promise<any> => {
  const game = await Game.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, game, 'Could not update the game!')
}

/**
 * Removes a game
 * @param  {Object}   ctx
 * @return {Promise}
 */
const remove = async (ctx: Object): Promise<any> => {
  const game = await Game.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, game, 'Could not remove the game!')
}

export { getAll, getOne, create, update, remove }
