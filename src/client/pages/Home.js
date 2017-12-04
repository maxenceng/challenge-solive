// @flow

import React from 'react'

import Message from '../containers/Message'
import Button from '../containers/Button'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the / route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Template - Challenge Solive"
        description="Challenge Solive display template"
        keywords="Solive template"
      />
      <h1>Template</h1>
      <Message />
      <Button />
    </div>
  )
