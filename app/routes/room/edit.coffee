r = Ember.Route.extend
  beforeModel: (trans) ->
    trans.send 'event', 'EDIT'

  ### 
    Get's fired when you navigate directly to the url
    I'd imagine the link-to helper would fire it to
  ###
  model: (params) ->
    Em.Object.create
      room_id: params.room_id

  ### 
    Fired when .transitionTo is called with a model
    like it is in routes/world in the edit action
  ###
  serialize: (model) ->
    Em.Object.create
      room_id: model.get 'room_id'

`export default r`
