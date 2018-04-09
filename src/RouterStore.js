import { observable, action } from 'mobx'

class RouterStore {
  router = null;

  @observable route = null;
  @observable previousRoute = null;
  @observable transitionRoute = null;
  @observable transitionError = null;

  setRouter = router => {
    this.router = router
  };

  setRoute = (type, route) => {
    this[type] = route
  };

  clearRoute (type) {
    this[type] = null
  }

  @action
  onTransitionStart = (route, previousRoute) => {
    this.setRoute('transitionRoute', route)
    this.transitionError = null
  };

  @action
  onTransitionSuccess = (route, previousRoute, opts) => {
    this.setRoute('route', route)
    this.setRoute('previousRoute', previousRoute)
    this.clearErrors()
  };

  @action
  onTransitionCancel = (route, previousRoute) => {
    this.clearRoute('transitionRoute')
  };

  @action
  onTransitionError = (route, previousRoute, transitionError) => {
    this.setRoute('transitionRoute', route)
    this.setRoute('previousRoute', previousRoute)
    this.transitionError = transitionError
  };

  @action
  clearErrors = () => {
    this.clearRoute('transitionRoute')
    this.transitionError = null
  };

  cancel = () => {
    this.router.cancel()
  };

  forward = (fromRoute, toRoute) => {
    this.router.forward(fromRoute, toRoute)
  };

  navigate = (name, params, opts) => {
    this.router.navigate(name, params, opts)
  };

  navigateToDefault = opts => {
    this.router.navigateToDefault(opts)
  };
}

export default RouterStore
