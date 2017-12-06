// @flow

import React from 'react'
import { connect } from 'react-redux'

import Select from '../components/Select'

import { updatePlayerSelect } from '../actions/selectedPlayerAction'
import { getPlayerMedia } from '../actions/playerMediaAction'

type Props = {
  updatePlayerSelect: Function,
  getPlayerMedia: Function,
  options: string,
}

class SelectedPlayer extends React.Component<Props> {
  constructor(props) {
    super(props)
    // flow-disable-next-line
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { value } = event.target
    if (value !== '') {
      this.props.updatePlayerSelect(value)
      this.props.getPlayerMedia(value)
    }
  }

  render() {
    return <Select onchange={this.handleChange} options={this.props.options} />
  }
}

export default connect(null, { updatePlayerSelect, getPlayerMedia })(SelectedPlayer)
