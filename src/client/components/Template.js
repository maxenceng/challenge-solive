// @flow

import React from 'react'

import Card from './Card'

/**
 * @type {Object}
 */
type Props = {
  player: Object,
  homeTeam: Object,
  awayTeam: Object,
  date: string,
}

/**
 * Displays content given as a parameter
 * @param  {Object} player
 * @param  {Object} homeTeam
 * @param  {Object} awayTeam
 * @param  {string} date
 */
export default ({
  player,
  homeTeam,
  awayTeam,
  date,
}: Props) =>
  (
    <div className="flex">
      <Card img={player.img} title={`${player.firstName} ${player.lastName}`} text={null} />
      <Card img={homeTeam.img} title={homeTeam.name} text={`Score: ${homeTeam.score}`} />
      <Card img={awayTeam.img} title={awayTeam.name} text={`Score: ${awayTeam.score}`} />
      <Card img="/static/images/calendar.png" title="Date" text={date} />
    </div>
  )
