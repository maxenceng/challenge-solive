// @flow

export default (ctx: Object, elem: ?Object, message: string): void => {
  if (elem) {
    ctx.body = elem
  } else {
    ctx.status = 400
    ctx.body = { status: 'Error', message }
  }
}
