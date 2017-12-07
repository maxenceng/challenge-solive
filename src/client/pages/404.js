// @flow

import React from 'react'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed when the user tries to access a non-existing route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Not Found - Challenge Solive"
        description="Challenge Solive page not found"
        keywords="Solive Challenge 404 Not Found"
      />
      <p>404 Not Found!</p>
    </div>
  )
