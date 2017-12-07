// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { fetchPlayers } from '../actions/playersAction'
import { initialState } from '../reducers/playersReducer'
import SelectedPlayer from '../containers/SelectedPlayer'

/**
 * Maps the players from the store
 */
const mapStateToProps = state => ({
  players: state.players,
})

/**
 * @type {Object}
 */
type Props = {
  fetchPlayers: Function,
  // eslint-disable-next-line react/no-typos
  players: ImmutablePropTypes.map,
}

/**
 * Displays the player dropdown
 * @extends React.Component
 */
class Players extends React.Component<Props> {
  /**
   * Triggers the action if the players were not fetched yet
   */
  componentDidMount() {
    if (this.props.players.equals(initialState)) {
      this.props.fetchPlayers()
    }
  }

  /**
   * Displays content :
   * -> an error message if there was a problem while fetching data
   * -> the player dropdown if the data was fetched without errors
   * @return {Object}
   */
  renderData() {
    const { players } = this.props
    if (players.get('isFetching')) {
      return null
    }

    if (players.get('hasError')) {
      return <p>{players.get('errorMessage')}</p>
    }

    const data = players.get('data')
    const res = []
    // A new option element is added to the array for each player found
    data.forEach((value, key) => {
      res.push(<option key={key} value={value.get('_id')}>{value.get('firstName')} {value.get('lastName')}</option>)
    })
    return <SelectedPlayer options={res} />
  }

  /**
   * Renders data from the renderData function
   * @return {Object}
   */
  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { fetchPlayers })(Players)
