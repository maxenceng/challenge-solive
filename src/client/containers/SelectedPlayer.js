// @flow

import React from 'react'
import { connect } from 'react-redux'

import Select from '../components/Select'

import { updatePlayerSelect } from '../actions/selectedPlayerAction'
import { getPlayerMedia } from '../actions/playerMediaAction'

/**
 * @type {Object}
 */
type Props = {
  updatePlayerSelect: Function,
  getPlayerMedia: Function,
  options: string,
}

/**
 * Displays the select dropdown with the options passed to it for the player dropdown
 * @extends React.Component
 */
class SelectedPlayer extends React.Component<Props> {
  /**
   * @param  {Object} props
   */
  constructor(props) {
    super(props)
    // flow-disable-next-line
    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * dispatches actions if a player has been selected in the dropdown
   * @param  {Object} event
   */
  handleChange(event) {
    const { value } = event.target
    if (value !== '') {
      this.props.updatePlayerSelect(value)
      this.props.getPlayerMedia(value)
    }
  }

  /**
   * Renders our Select component with all the data needed to have a dropdown for the players
   * @return {Object}
   */
  render() {
    return <Select onchange={this.handleChange} options={this.props.options} label="Players" />
  }
}

export default connect(null, { updatePlayerSelect, getPlayerMedia })(SelectedPlayer)
