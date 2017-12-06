// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  player: Object,
  team: Object,
  game: Object,
}

/**
 * @param  {Object} player
 * @param  {Object} team
 * @param  {Object} game
 */
export default ({ player, team, game }: Props) =>
  (
    <div>
      <img src={player.image} alt={player.name} />
      <p>{player.name}</p>
      <img src={team.image} alt={team.name} />
      <p>{team.name}</p>
      <p>{game.score}</p>
      <p>{game.date}</p>
    </div>
  )
