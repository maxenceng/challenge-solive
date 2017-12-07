// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

import { PLAYER_ROUTE } from '../../utils/routes'

export const FETCHING_PLAYERS_INFO = 'FETCHING_PLAYERS_INFO'
export const FETCHING_PLAYERS_INFO_SUCCESS = 'FETCHING_PLAYERS_INFO_SUCCESS'
export const FETCHING_PLAYERS_INFO_ERROR = 'FETCHING_PLAYERS_INFO_ERROR'

export const fetchingData = createAction(FETCHING_PLAYERS_INFO)
export const fetchingSuccess = createAction(FETCHING_PLAYERS_INFO_SUCCESS)
export const fetchingError = createAction(FETCHING_PLAYERS_INFO_ERROR)

/**
 * gets all the players in the DB
 * @return {Function} dispatch
 */
export function fetchPlayers() {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    return axios.get(PLAYER_ROUTE)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
