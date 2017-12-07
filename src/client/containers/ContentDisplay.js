// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { initialState } from '../reducers/teamsReducer'
import Template from '../components/Template'

/**
 * Maps the required elements from the store for our template
 */
const mapStateToProps = state => ({
  games: state.games,
  players: state.players,
  selectedGame: state.selectedGame,
  selectedPlayer: state.selectedPlayer,
  teams: state.teams,
  teamsMedias: state.teamsMedias,
  playerMedia: state.playerMedia,
})

/**
 * @type {Object}
 */
type Props = {
  // eslint-disable-next-line react/no-typos
  games: ImmutablePropTypes.map,
  players: ImmutablePropTypes.map,
  selectedGame: ImmutablePropTypes.map,
  selectedPlayer: ImmutablePropTypes.map,
  teams: ImmutablePropTypes.map,
  teamsMedias: ImmutablePropTypes.map,
  playerMedia: ImmutablePropTypes.map,
}

/**
 * Displays the main template
 * @extends React.Component
 */
class ContentDisplay extends React.Component<Props> {
  /**
   * Displays content :
   * -> an error message if there was a problem while fetching data
   * -> the template if the data was fetched without errors
   * @return {Object}
   */
  renderData() {
    const {
      games,
      players,
      selectedGame,
      selectedPlayer,
      teams,
      teamsMedias,
      playerMedia,
    } = this.props
    if (teamsMedias.equals(initialState)) {
      return <p>Please select a game</p>
    }
    if (playerMedia.equals(initialState)) {
      return <p>Please select a player</p>
    }
    if (teamsMedias.get('isFetching')) {
      return null
    }
    if (playerMedia.get('isFetching')) {
      return null
    }
    // We get the timestamp thanks to the selected game
    const game = games.get('data').find(obj => obj.get('_id') === selectedGame.get('selectedGame'))
    const homeTeamId = game.get('homeTeamScore').get('teamId')

    // We get the home team and the away team by iterating through the teams (the store can only contains 2 teams)
    let homeTeam
    let awayTeam
    teams.get('data').forEach((value) => {
      const teamObj = value.toJS()
      teamObj.img = teamsMedias.get('data').find(obj => obj.get('teamId') === value.get('_id')).get('path')
      if (value.get('_id') === homeTeamId) {
        homeTeam = teamObj
      } else {
        awayTeam = teamObj
      }
    })
    // We need to make sure homeTeam and awayTeam are defined with these 2 conditions for flow
    homeTeam = homeTeam === undefined ? {} : homeTeam
    awayTeam = awayTeam === undefined ? {} : awayTeam
    // We get the player data thanks to the selected player and add the img property to the object
    const playerObj = players.get('data').find(obj => obj.get('_id') === parseInt(selectedPlayer.get('selectedPlayer'), 10)).toJS()
    playerObj.img = playerMedia.get('data').first().get('path')

    // We transform the timestamp by using the Date class
    // and making transformations as the default format is Y-m-dTh:i:s with extra info we don't use
    const date = new Date(game.get('timestamp') * 1000)
      .toISOString()
      .slice(0, 19)
      .split('T')
      .join(' ')

    // Returns the template component with all the information we need
    return (<Template
      player={playerObj}
      homeTeam={homeTeam}
      awayTeam={awayTeam}
      date={date}
    />)
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { })(ContentDisplay)
