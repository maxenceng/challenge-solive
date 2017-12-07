// @flow

import renderApp from '../renderApp'

/**
 * Renders the home page
 * @param  {Object}   ctx
 * @param  {Function} next
 * @return {Promise}
 */
const get = async (ctx: Object, next: Function): Promise<any> => {
  await next()
  ctx.body = renderApp(ctx.url)
}

// eslint-disable-next-line import/prefer-default-export
export { get }
