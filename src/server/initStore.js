// @flow

import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../client/reducers/'
import gamesReducer from '../client/reducers/gamesReducer'
import playersReducer from '../client/reducers/playersReducer'
import selectedGameReducer from '../client/reducers/selectedGameReducer'
import selectedPlayerReducer from '../client/reducers/selectedPlayerReducer'
import teamsReducer from '../client/reducers/teamsReducer'
import teamsMediasReducer from '../client/reducers/teamsMediasReducer'
import playerMediaReducer from '../client/reducers/playerMediaReducer'

/**
 * Initiates the store on the server
 * @param  {Object} plainState
 */
export default (plainState: ?Object) => {
  const preloadedState = plainState ? {} : undefined

  if (plainState) {
    if (plainState.games) {
      // flow-disable-next-line
      preloadedState.games = gamesReducer(undefined, {}).merge(Immutable.fromJS(plainState.games))
    }
    if (plainState.players) {
      // flow-disable-next-line
      preloadedState.players = playersReducer(undefined, {}).merge(Immutable.fromJS(plainState.players))
    }
    if (plainState.selectedGame) {
      // flow-disable-next-line
      preloadedState.selectedGame = selectedGameReducer(undefined, {}).merge(Immutable.fromJS(plainState.selectedGame))
    }
    if (plainState.selectedPlayer) {
      // flow-disable-next-line
      preloadedState.selectedPlayer = selectedPlayerReducer(undefined, {}).merge(Immutable.fromJS(plainState.selectedPlayer))
    }
    if (plainState.teams) {
      // flow-disable-next-line
      preloadedState.teams = teamsReducer(undefined, {}).merge(Immutable.fromJS(plainState.teams))
    }
    if (plainState.teamsMedias) {
      // flow-disable-next-line
      preloadedState.teamsMedias = teamsMediasReducer(undefined, {}).merge(Immutable.fromJS(plainState.teamsMedias))
    }
    if (plainState.playerMedia) {
      // flow-disable-next-line
      preloadedState.playerMedia = playerMediaReducer(undefined, {}).merge(Immutable.fromJS(plainState.playerMedia))
    }
  }
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}
