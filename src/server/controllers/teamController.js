// @flow

import Team from '../models/team'
import apiResponse from '../../utils/apiResponse'

const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const teams = await Team.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, teams, 'Could not find all teams!')
}

const getOne = async (ctx: Object): Promise<any> => {
  const team = await Team.findById(ctx.params.id)
  apiResponse(ctx, team, 'Could not find the team!')
}

const create = async (ctx: Object): Promise<any> => {
  const team = await new Team(ctx.request.body).save()
  apiResponse(ctx, team, 'Could not create a team!')
}

const update = async (ctx: Object): Promise<any> => {
  const team = await Team.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, team, 'Could not update the team!')
}

const remove = async (ctx: Object): Promise<any> => {
  const team = await Team.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, team, 'Could not remove the team!')
}

export { getAll, getOne, create, update, remove }
