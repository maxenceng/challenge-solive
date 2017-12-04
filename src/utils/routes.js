// @flow

import Home from '../client/pages/Home'
import Settings from '../client/pages/Settings'
import NotFound from '../client/pages/404'

// Routes
export const HOME_ROUTE = '/'
export const SETTINGS_ROUTE = '/settings'
export const NOT_FOUND_ROUTE = '/*'

// Route labels
export const HOME_LABEL = 'Home'
export const SETTINGS_LABEL = 'Settings'
export const NOT_FOUND_LABEL = 'Not Found'


// Map of routes
export const ROUTES: Map<string, Array<any>> = new Map()
ROUTES.set(HOME_LABEL, [HOME_ROUTE, Home])
ROUTES.set(SETTINGS_LABEL, [SETTINGS_ROUTE, Settings])
ROUTES.set(NOT_FOUND_LABEL, [NOT_FOUND_ROUTE, NotFound])
