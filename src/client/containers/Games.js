// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { fetchGames } from '../actions/gamesAction'
import { initialState } from '../reducers/gamesReducer'
import SelectedGame from '../containers/SelectedGame'

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
  fetchGames: Function,
  // eslint-disable-next-line react/no-typos
  games: ImmutablePropTypes.map,
}

/**
 * Displays the game dropdown
 * @extends React.Component
 */
class Games extends React.Component<Props> {
  /**
   * Triggers the action if the games were not fetched yet
   */
  componentDidMount() {
    if (this.props.games.equals(initialState)) {
      this.props.fetchGames()
    }
  }

  /**
   * Displays content :
   * -> an error message if there was a problem while fetching data
   * -> the game dropdown if the data was fetched without errors
   * @return {Object}
   */
  renderData() {
    const { games } = this.props
    if (games.get('isFetching')) {
      return null
    }

    if (games.get('hasError')) {
      return <p>{games.get('errorMessage')}</p>
    }

    const data = games.get('data')
    const res = []
    // A new option element is added to the array for each game found
    data.forEach((value, key) => {
      res.push(<option key={key} value={value.get('_id')}>{value.get('stadium')}</option>)
    })
    return <SelectedGame options={res} />
  }

  /**
   * Renders data from the renderData function
   * @return {Object}
   */
  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { fetchGames })(Games)
