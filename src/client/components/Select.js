// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  onchange: Function,
  options: string,
  label: string,
}

/**
 * Select dropdown with a label following jsx-a11y rules
 * @param  {Function} onchange
 * @param  {string} options
 * @param  {string} label
 */
export default ({ onchange, options, label }: Props) =>
  (
    <label className="label-select" htmlFor={label.toLowerCase()}>
      <div className="label-select-content">{label}</div>
      <select onChange={onchange} id={label.toLowerCase()}>
        <option value="">Please select a value</option>
        {options}
      </select>
    </label>
  )
