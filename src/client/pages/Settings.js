// @flow

import React from 'react'

import Players from '../containers/Players'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the /about route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Settings - Challenge Solive"
        description="Challenge Solive settings template"
        keywords="Solive settings template"
      />
      <h1>Settings</h1>
      <Players />
    </div>
  )
