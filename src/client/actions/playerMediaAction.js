// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

import { MEDIA_ROUTE } from '../../utils/routes'


export const FETCHING_PLAYER_MEDIA_INFO = 'FETCHING_PLAYER_MEDIA_INFO'
export const FETCHING_PLAYER_MEDIA_INFO_SUCCESS = 'FETCHING_PLAYER_MEDIA_INFO_SUCCESS'
export const FETCHING_PLAYER_MEDIA_INFO_ERROR = 'FETCHING_PLAYER_MEDIA_INFO_ERROR'

export const fetchingData = createAction(FETCHING_PLAYER_MEDIA_INFO)
export const fetchingSuccess = createAction(FETCHING_PLAYER_MEDIA_INFO_SUCCESS)
export const fetchingError = createAction(FETCHING_PLAYER_MEDIA_INFO_ERROR)


/**
 * gets the selected player media
 * @param  {string} playerId
 * @return {Function} dispatch
 */
export function getPlayerMedia(playerId: string) {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    return axios.get(`${MEDIA_ROUTE}/player/${playerId}`)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
