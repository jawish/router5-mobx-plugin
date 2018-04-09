const mobxPluginFactory = routerStore => {
  function mobxPlugin (router, dependencies) {
    router.setDependency('mobxStore', routerStore)
    routerStore.setRouter(router)

    return {
      onStart: () => {
        typeof routerStore.onStart === 'function' && routerStore.onStart()
      },
      onStop: () => {
        typeof routerStore.onStop === 'function' && routerStore.onStop()
      },
      onTransitionStart: (toState, fromState) => {
        typeof routerStore.onTransitionStart === 'function' &&
          routerStore.onTransitionStart(toState, fromState)
      },
      onTransitionSuccess: (toState, fromState, opts) => {
        typeof routerStore.onTransitionSuccess === 'function' &&
          routerStore.onTransitionSuccess(toState, fromState, opts)
      },
      onTransitionCancel: (toState, fromState) => {
        typeof routerStore.onTransitionCancel === 'function' &&
          routerStore.onTransitionCancel(toState, fromState)
      },
      onTransitionError: (toState, fromState, err) => {
        typeof routerStore.onTransitionError === 'function' &&
          routerStore.onTransitionError(toState, fromState, err)
      }
    }
  }

  mobxPlugin.pluginName = 'MOBX_PLUGIN'

  return mobxPlugin
}

export default mobxPluginFactory
