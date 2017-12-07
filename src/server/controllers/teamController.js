// @flow

import Team from '../models/team'
import apiResponse from '../../utils/apiResponse'

/**
 * Gets all the teams.
 * Possible to use GET parameters to limit or sort the results
 * and select the fields you want to get.
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getAll = async (ctx: Object): Promise<any> => {
  const { limit, sort, select } = ctx.query
  const teams = await Team.find({})
    .limit(parseInt(limit, 10))
    .sort(sort)
    .select(select)
  apiResponse(ctx, teams, 'Could not find all teams!')
}

/**
 * Gets one team
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getOne = async (ctx: Object): Promise<any> => {
  const team = await Team.findById(ctx.params.id)
  apiResponse(ctx, team, 'Could not find the team!')
}

/**
 * Gets two teams
 * @param  {Object}   ctx
 * @return {Promise}
 */
const getTwo = async (ctx: Object): Promise<any> => {
  const teams = await Team.find({
    $or: [
      { _id: ctx.params.id1 },
      { _id: ctx.params.id2 },
    ],
  })
  apiResponse(ctx, teams, 'Could not find the two teams!')
}

/**
 * Creates a team
 * @param  {Object}   ctx
 * @return {Promise}
 */
const create = async (ctx: Object): Promise<any> => {
  const team = await new Team(ctx.request.body).save()
  apiResponse(ctx, team, 'Could not create a team!')
}

/**
 * Updates a team
 * @param  {Object}   ctx
 * @return {Promise}
 */
const update = async (ctx: Object): Promise<any> => {
  const team = await Team.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  apiResponse(ctx, team, 'Could not update the team!')
}

/**
 * Removes a team
 * @param  {Object}   ctx
 * @return {Promise}
 */
const remove = async (ctx: Object): Promise<any> => {
  const team = await Team.findByIdAndRemove(ctx.params.id)
  apiResponse(ctx, team, 'Could not remove the team!')
}

export { getAll, getOne, getTwo, create, update, remove }
