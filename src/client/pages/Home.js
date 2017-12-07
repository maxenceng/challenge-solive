// @flow

import React from 'react'

import Games from '../containers/Games'
import Players from '../containers/Players'
import ContentDisplay from '../containers/ContentDisplay'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the home route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Home - Challenge Solive"
        description="Challenge Solive settings template"
        keywords="Solive settings template"
      />
      <h1>Settings</h1>
      <Players />
      <Games />
      <h1>Template</h1>
      <ContentDisplay />
    </div>
  )
