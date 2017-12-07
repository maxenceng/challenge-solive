// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

import { GAME_ROUTE } from '../../utils/routes'

export const FETCHING_GAMES_INFO = 'FETCHING_GAMES_INFO'
export const FETCHING_GAMES_INFO_SUCCESS = 'FETCHING_GAMES_INFO_SUCCESS'
export const FETCHING_GAMES_INFO_ERROR = 'FETCHING_GAMES_INFO_ERROR'

export const fetchingData = createAction(FETCHING_GAMES_INFO)
export const fetchingSuccess = createAction(FETCHING_GAMES_INFO_SUCCESS)
export const fetchingError = createAction(FETCHING_GAMES_INFO_ERROR)

/**
 * gets all the games in the DB
 * @return {Function} dispatch
 */
export function fetchGames() {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    return axios.get(GAME_ROUTE)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
