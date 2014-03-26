r = Ember.Route.extend
  actions:
    ping: (route) ->
      controller = @controllerFor @routeName

      controller.get('nav').forEach (n) ->
        n.set 'active', n.get('route') == route

`export default r`
