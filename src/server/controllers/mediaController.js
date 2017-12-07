// @flow

import Media from '../models/media'
import apiResponse from '../../utils/apiResponse'

/**
 * Gets all the medias.
 * Possible to use GET parameters to limit or sort the results
 * and select the fields you want to get.
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const medias = await Media.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, medias, 'Could not find all medias!')
}

/**
 * Gets one media, using _id
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getOneById = async (ctx: Object): Promise<any> => {
  const media = await Media.findById(ctx.params.id)
  apiResponse(ctx, media, 'Could not find the media!')
}

/**
 * Gets one media, using teamId
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getOneByTeamId = async (ctx: Object): Promise<any> => {
  const media = await Media.find({ teamId: ctx.params.id })
  apiResponse(ctx, media, 'Could not find the team media!')
}

/**
 * Gets two medias, using teamId
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getTwoByTeamId = async (ctx: Object): Promise<any> => {
  const medias = await Media.find({
    $or: [
      { teamId: ctx.params.id1 },
      { teamId: ctx.params.id2 },
    ],
  })
  apiResponse(ctx, medias, 'Could not find the two team medias!')
}

/**
 * Gets one player, using playerId
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getOneByPlayerId = async (ctx: Object): Promise<any> => {
  const media = await Media.find({ playerId: ctx.params.id })
  apiResponse(ctx, media, 'Could not find the media!')
}

/**
 * Creates a media
 * @param  {Object}   ctx
 * @return {Promise}
 */
const create = async (ctx: Object): Promise<any> => {
  const media = await new Media(ctx.request.body).save()
  apiResponse(ctx, media, 'Could not create a media!')
}

/**
 * Updates a media
 * @param  {Object}   ctx
 * @return {Promise}
 */
const update = async (ctx: Object): Promise<any> => {
  const media = await Media.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, media, 'Could not update the media!')
}

/**
 * Removes a media
 * @param  {Object}   ctx
 * @return {Promise}
 */
const remove = async (ctx: Object): Promise<any> => {
  const media = await Media.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, media, 'Could not remove the media!')
}

export {
  getAll,
  getOneById,
  getOneByTeamId,
  getTwoByTeamId,
  getOneByPlayerId,
  create,
  update,
  remove,
}
