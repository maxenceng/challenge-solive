// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import Select from '../components/Select'

import { updateGameSelect } from '../actions/selectedGameAction'
import { getTeams } from '../actions/teamsAction'
import { getTeamsMedias } from '../actions/teamsMediasAction'

/**
 * Maps the games from the store
 */
const mapStateToProps = state => ({
  games: state.games,
})

/**
 * @type {Object}
 */
type Props = {
  updateGameSelect: Function,
  getTeams: Function,
  getTeamsMedias: Function,
  options: string,
  // eslint-disable-next-line react/no-typos
  games: ImmutablePropTypes.map,
}

/**
 * Displays the select dropdown with the options passed to it for the game dropdown
 * @extends React.Component
 */
class selectedGame extends React.Component<Props> {
  /**
   * @param  {Object} props
   */
  constructor(props) {
    super(props)
    // flow-disable-next-line
    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * dispatches actions if a game has been selected in the dropdown
   * @param  {Object} event
   */
  handleChange(event) {
    const { value } = event.target
    const { games } = this.props
    if (value !== '') {
      const game = games.get('data').find(obj => obj.get('_id') === value)
      this.props.updateGameSelect(value)
      this.props.getTeams(game)
      this.props.getTeamsMedias(game)
    }
  }

  /**
   * Renders our Select component with all the data needed to have a dropdown for the games
   * @return {Object}
   */
  render() {
    return <Select onchange={this.handleChange} options={this.props.options} label="Games" />
  }
}

export default connect(mapStateToProps, { updateGameSelect, getTeams, getTeamsMedias })(selectedGame)
