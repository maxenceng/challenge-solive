// @flow

import { combineReducers } from 'redux'

import games from './gamesReducer'
import players from './playersReducer'
import selectedGame from './selectedGameReducer'
import selectedPlayer from './selectedPlayerReducer'
import teams from './teamsReducer'
import teamsMedias from './teamsMediasReducer'
import playerMedia from './playerMediaReducer'

/**
 * Combines all the reducers
 */
export default combineReducers({
  games,
  players,
  selectedGame,
  selectedPlayer,
  teams,
  teamsMedias,
  playerMedia,
})
