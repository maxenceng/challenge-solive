// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { fetchGames } from '../actions/gamesAction'
import { initialState } from '../reducers/gamesReducer'
import SelectedGame from '../containers/SelectedGame'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  games: state.games,
})

type Props = {
  fetchGames: Function,
  // eslint-disable-next-line react/no-typos
  games: ImmutablePropTypes.map,
}

class Games extends React.Component<Props> {
  componentDidMount() {
    if (this.props.games.equals(initialState)) {
      this.props.fetchGames()
    }
  }

  renderData() {
    const { games } = this.props
    if (games.get('isFetching')) {
      return <p>Is Fetching</p>
    }

    if (games.get('hasError')) {
      return <p>{games.get('errorMessage')}</p>
    }

    const data = games.get('data')
    const res = []
    data.forEach((value, key) => {
      res.push(<option key={key} value={value.get('_id')}>{value.get('stadium')}</option>)
    })
    return <SelectedGame options={res} />
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { fetchGames })(Games)
