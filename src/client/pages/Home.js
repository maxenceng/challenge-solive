// @flow

import React from 'react'

import Games from '../containers/Games'
import Players from '../containers/Players'
import Template from '../containers/Template'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the /about route
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
      <Template />
    </div>
  )
