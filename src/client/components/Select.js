// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  onchange: Function,
  options: string,
}

/**
 * @param  {Function} onchange
 * @param  {string} text
 */
export default ({ onchange, options }: Props) =>
  (
    <select onChange={onchange}>
      <option value="">Please select a value</option>
      {options}
    </select>
  )
