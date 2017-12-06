// @flow

import Media from '../models/media'
import apiResponse from '../../utils/apiResponse'

const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const medias = await Media.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, medias, 'Could not find all medias!')
}

const getOneById = async (ctx: Object): Promise<any> => {
  const media = await Media.findById(ctx.params.id)
  apiResponse(ctx, media, 'Could not find the media!')
}

const getOneByTeamId = async (ctx: Object): Promise<any> => {
  const media = await Media.find({ teamId: ctx.params.id })
  apiResponse(ctx, media, 'Could not find the team media!')
}

const getTwoByTeamId = async (ctx: Object): Promise<any> => {
  const medias = await Media.find({
    $or: [
      { teamId: ctx.params.id1 },
      { teamId: ctx.params.id2 },
    ],
  })
  apiResponse(ctx, medias, 'Could not find the two team medias!')
}

const getOneByPlayerId = async (ctx: Object): Promise<any> => {
  const media = await Media.find({ playerId: ctx.params.id })
  apiResponse(ctx, media, 'Could not find the media!')
}

const create = async (ctx: Object): Promise<any> => {
  const media = await new Media(ctx.request.body).save()
  apiResponse(ctx, media, 'Could not create a media!')
}

const update = async (ctx: Object): Promise<any> => {
  const media = await Media.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, media, 'Could not update the media!')
}

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
