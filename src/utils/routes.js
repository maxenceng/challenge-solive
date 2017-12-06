// @flow

import Home from '../client/pages/Home'
import NotFound from '../client/pages/404'

// Routes
export const HOME_ROUTE = '/'
export const GAME_ROUTE = '/games'
export const MEDIA_ROUTE = '/medias'
export const PLAYER_ROUTE = '/players'
export const TEAM_ROUTE = '/teams'
export const NOT_FOUND_ROUTE = '/*'

// Route labels
export const HOME_LABEL = 'Home'
export const GAME_LABEL = 'Games'
export const MEDIA_LABEL = 'Medias'
export const PLAYER_LABEL = 'Players'
export const TEAM_LABEL = 'Teams'
export const NOT_FOUND_LABEL = 'Not Found'


// Map of routes
export const ROUTES: Map<string, Array<any>> = new Map()
ROUTES.set(HOME_LABEL, [HOME_ROUTE, Home])
ROUTES.set(GAME_LABEL, [GAME_ROUTE, null])
ROUTES.set(MEDIA_LABEL, [MEDIA_ROUTE, null])
ROUTES.set(PLAYER_LABEL, [PLAYER_ROUTE, null])
ROUTES.set(TEAM_LABEL, [TEAM_ROUTE, null])
ROUTES.set(NOT_FOUND_LABEL, [NOT_FOUND_ROUTE, NotFound])
