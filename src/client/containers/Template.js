// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'

import { initialState } from '../reducers/teamsReducer'

/**
 * Maps the text when triggered, here it is on first load
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

class Template extends React.Component<Props> {
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
      return <p>Is Fetching</p>
    }
    if (playerMedia.get('isFetching')) {
      return <p>Is Fetching</p>
    }
    const timestamp = games.get('data').find(obj => obj.get('_id') === selectedGame.get('selectedGame')).get('timestamp')
    const teamsArray = []
    teams.get('data').forEach((value) => {
      const teamObj = value.toJS()
      teamObj.img = teamsMedias.get('data').find(obj => obj.get('teamId') === value.get('_id'))
      teamsArray.push(teamObj)
    })
    const playerObj = players.get('data').find(obj => obj.get('_id') === parseInt(selectedPlayer.get('selectedPlayer'), 10)).toJS()
    playerObj.img = playerMedia.get('data').first().get('path')
    console.log({ timestamp, teamsArray, playerObj })
    const res = []
    res.push(<p>{timestamp}</p>)
    res.push(<p>{teamsArray[0].score}</p>)
    res.push(<p>{teamsArray[1].score}</p>)
    res.push(<p>{playerObj.firstName}</p>)
    return <div>{res}</div>
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { })(Template)
