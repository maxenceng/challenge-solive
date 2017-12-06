// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import Select from '../components/Select'

import { updateGameSelect } from '../actions/selectedGameAction'
import { getTeams } from '../actions/teamsAction'
import { getTeamsMedias } from '../actions/teamsMediasAction'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  games: state.games,
})

type Props = {
  updateGameSelect: Function,
  getTeams: Function,
  getTeamsMedias: Function,
  options: string,
  // eslint-disable-next-line react/no-typos
  games: ImmutablePropTypes.map,
}

class selectedGame extends React.Component<Props> {
  constructor(props) {
    super(props)
    // flow-disable-next-line
    this.handleChange = this.handleChange.bind(this)
  }

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

  render() {
    return <Select onchange={this.handleChange} options={this.props.options} />
  }
}

export default connect(mapStateToProps, { updateGameSelect, getTeams, getTeamsMedias })(selectedGame)
