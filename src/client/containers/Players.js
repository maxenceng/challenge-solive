// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { fetchPlayers } from '../actions/playersAction'
import { initialState } from '../reducers/playersReducer'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  players: state.players,
})

type Props = {
  fetchPlayers: Function,
  // eslint-disable-next-line react/no-typos
  players: ImmutablePropTypes.map,
}

class Players extends React.Component<Props> {
  componentDidMount() {
    if (this.props.players.equals(initialState)) {
      this.props.fetchPlayers()
    }
  }

  renderData() {
    const { players } = this.props
    if (players.get('isFetching')) {
      return <p>Is Fetching</p>
    }

    if (players.get('hasError')) {
      return <p>{players.get('errorMessage')}</p>
    }
    console.log(players.toJS())
    // const data = players.get('data')
    const res = []
    return res
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { fetchPlayers })(Players)
