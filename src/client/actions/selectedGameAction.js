// @flow

import { createAction } from 'redux-actions'

export const SELECT_GAME_CHANGE = 'SELECT_GAME_CHANGE'
export const selectGameChange = createAction(SELECT_GAME_CHANGE)


export function updateGameSelect(option: string) {
  return (dispatch: Function) => {
    dispatch(selectGameChange(option))
  }
}
