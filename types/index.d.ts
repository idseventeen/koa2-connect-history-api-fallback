import { Middleware } from 'koa'

declare interface IRewrites {
  from: string,
  to: string
}

declare interface IOptions {
  logger?: object
  index?: string | '/default.html'
  whiteList?: string[]
  rewrites?: IRewrites[]
  verbose?: boolean
  htmlAcceptHeaders?: string[]
  disableDotRule?: boolean
}

declare function historyApiFallback (options?: IOptions): Middleware

export default historyApiFallback
export { historyApiFallback }
