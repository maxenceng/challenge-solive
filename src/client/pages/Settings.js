// @flow

import React from 'react'

import Message from '../containers/Message'
import Button from '../containers/Button'
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
      <Message />
      <Button />
    </div>
  )
