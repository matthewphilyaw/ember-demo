r = Ember.Route.extend
  beforeModel: (trans) ->
    trans.send 'event', 'ADD'

`export default r`
