// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import { SELECT_PLAYER_CHANGE } from '../actions/selectedPlayerAction'

/**
 * Example of an initial state
 */
export const initialState = Immutable.fromJS({
  selectedPlayer: '',
})

/**
 * Modifies the state if SELECT_PLAYER_CHANGE has been called
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
    case SELECT_PLAYER_CHANGE:
      return state.set('selectedPlayer', action.payload)
    default:
      return state
  }
}
