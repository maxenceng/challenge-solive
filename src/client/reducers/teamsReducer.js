// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import {
  FETCHING_TEAMS_INFO,
  FETCHING_TEAMS_INFO_SUCCESS,
  FETCHING_TEAMS_INFO_ERROR,
} from '../actions/teamsAction'

/**
 * Initial state of the reducer
 */
export const initialState = Immutable.fromJS({
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
})

/**
 * Modifies the state if SAY_OKAY is called
 * @param  {ImmutType} state
 * @param  {string} type
 * @param  {any} payload
 * @return {ImmutType}
 */
export default (
  state: ImmutType = initialState,
  action: { type: string, payload: any },
): ImmutType => {
  switch (action.type) {
    case FETCHING_TEAMS_INFO:
      return state.merge({
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null,
      })
    case FETCHING_TEAMS_INFO_SUCCESS:
      return state.merge({
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      })
    case FETCHING_TEAMS_INFO_ERROR:
      return state.merge({
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload,
      })
    default:
      return state
  }
}
