// @flow

import { createAction } from 'redux-actions'

export const SELECT_PLAYER_CHANGE = 'SELECT_PLAYER_CHANGE'

export const selectPlayerChange = createAction(SELECT_PLAYER_CHANGE)

export function updatePlayerSelect(option: string) {
  return (dispatch: Function) => {
    dispatch(selectPlayerChange(option))
  }
}
