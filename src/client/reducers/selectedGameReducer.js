// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import { SELECT_GAME_CHANGE } from '../actions/selectedGameAction'

/**
 * Example of an initial state
 */
export const initialState = Immutable.fromJS({
  selectedGame: '',
})

/**
 * Modifies the state if one of the actions has been called
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
    case SELECT_GAME_CHANGE:
      return state.set('selectedGame', action.payload)
    default:
      return state
  }
}
