// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import playersReducer from '../client/reducers/playersReducer'

/**
 * Initiates the store on the server
 * @param  {Object} plainState
 */
export default (plainState: ?Object) => {
  const preloadedState = plainState ? {} : undefined

  if (plainState && plainState.players) {
    // flow-disable-next-line
    preloadedState.players = playersReducer(undefined, {}).merge(Immutable.fromJS(plainState.players))
  }
  return createStore(
    combineReducers({ players: playersReducer }),
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}
