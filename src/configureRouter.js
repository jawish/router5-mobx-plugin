import { createRouter } from 'router5'
import browserPlugin from 'router5/plugins/browser'
import mobxPlugin from './mobxPlugin'

const configureRouter = (routes, routerStore) => {
  const router = createRouter(routes)
    .usePlugin(mobxPlugin(routerStore))
    .usePlugin(browserPlugin({ useHash: true }))

  return router
}

export default configureRouter
