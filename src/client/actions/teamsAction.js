// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'
import type { fromJS as ImmutType } from 'immutable'

import { TEAM_ROUTE } from '../../utils/routes'


export const FETCHING_TEAMS_INFO = 'FETCHING_TEAMS_INFO'
export const FETCHING_TEAMS_INFO_SUCCESS = 'FETCHING_TEAMS_INFO_SUCCESS'
export const FETCHING_TEAMS_INFO_ERROR = 'FETCHING_TEAMS_INFO_ERROR'

export const fetchingData = createAction(FETCHING_TEAMS_INFO)
export const fetchingSuccess = createAction(FETCHING_TEAMS_INFO_SUCCESS)
export const fetchingError = createAction(FETCHING_TEAMS_INFO_ERROR)


export function getTeams(game: ImmutType) {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    const homeTeam = game.get('homeTeamScore')
    const awayTeam = game.get('awayTeamScore')
    return axios.get(`${TEAM_ROUTE}/${homeTeam.get('teamId')}/${awayTeam.get('teamId')}`)
      .then((res: Object) => {
        const { data } = res
        // eslint-disable-next-line no-underscore-dangle
        if (data[0]._id === homeTeam.get('teamId')) {
          data[0].score = homeTeam.get('score')
          data[1].score = awayTeam.get('score')
        } else {
          data[1].score = homeTeam.get('score')
          data[0].score = awayTeam.get('score')
        }
        dispatch(fetchingSuccess(data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
