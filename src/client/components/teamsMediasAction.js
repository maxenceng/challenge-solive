// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'
import type { fromJS as ImmutType } from 'immutable'

import { MEDIA_ROUTE } from '../../utils/routes'


export const FETCHING_TEAMS_MEDIAS_INFO = 'FETCHING_TEAMS_MEDIAS_INFO'
export const FETCHING_TEAMS_MEDIAS_INFO_SUCCESS = 'FETCHING_TEAMS_MEDIAS_INFO_SUCCESS'
export const FETCHING_TEAMS_MEDIAS_INFO_ERROR = 'FETCHING_TEAMS_MEDIAS_INFO_ERROR'

export const fetchingData = createAction(FETCHING_TEAMS_MEDIAS_INFO)
export const fetchingSuccess = createAction(FETCHING_TEAMS_MEDIAS_INFO_SUCCESS)
export const fetchingError = createAction(FETCHING_TEAMS_MEDIAS_INFO_ERROR)

/**
 * gets medias of the two teams
 * @param  {ImmutType} game
 * @return {Function} dispatch
 */
export function getTeamsMedias(game: ImmutType) {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    const homeTeam = game.get('homeTeamScore')
    const awayTeam = game.get('awayTeamScore')
    return axios.get(`${MEDIA_ROUTE}/teams/${homeTeam.get('teamId')}/${awayTeam.get('teamId')}`)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
