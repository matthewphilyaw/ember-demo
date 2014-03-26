r = Ember.Route.extend
  beforeModel: (trans) ->
    trans.send 'event', null

`export default r`
