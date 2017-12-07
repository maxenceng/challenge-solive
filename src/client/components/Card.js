// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  img: string,
  title: string,
  text: any,
}

/**
 * Displays content given as a parameter
 * @param  {string} img
 * @param  {string} title
 * @param  {any} text
 */
export default ({ img, title, text }: Props) =>
  (
    <div className="card">
      <img src={img} alt={img} />
      <div className="card-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
