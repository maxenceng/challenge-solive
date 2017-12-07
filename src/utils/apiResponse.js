// @flow

/**
 * Modifies the body with the content sent
 * If we don't have an element, then renders an error message
 * @param {Object} ctx
 * @param {Object} elem
 * @param {string} message
 */
export default (ctx: Object, elem: ?Object, message: string): void => {
  if (elem) {
    ctx.body = elem
  } else {
    ctx.status = 400
    ctx.body = { status: 'Error', message }
  }
}
