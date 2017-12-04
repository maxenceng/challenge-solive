// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

export const FETCHING_PLAYERS_INFO = 'FETCHING_PLAYERS_INFO'
export const FETCHING_PLAYERS_INFO_SUCCESS = 'FETCHING_PLAYERS_INFO_SUCCESS'
export const FETCHING_PLAYERS_INFO_ERROR = 'FETCHING_PLAYERS_INFO_ERROR'

export const fetchingData = createAction(FETCHING_PLAYERS_INFO)
export const fetchingSuccess = createAction(FETCHING_PLAYERS_INFO_SUCCESS)
export const fetchingError = createAction(FETCHING_PLAYERS_INFO_ERROR)

export function fetchPlayers() {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    return axios.get('/players')
      .then((res: Object) => {
        dispatch(fetchingSuccess(res))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.message))
      })
  }
}
