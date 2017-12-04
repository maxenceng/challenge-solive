// @flow

import { combineReducers } from 'redux'

import playersReducer from './playersReducer'

/**
 * Combines all the reducers
 */
export default combineReducers({
  players: playersReducer,
})
