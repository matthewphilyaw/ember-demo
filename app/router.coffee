# ensure we don't share routes between all Router instances
Router = Ember.Router.extend()

Router.map ->
  @resource 'world', ->
    @resource 'room', ->
      @route 'new'
      @route 'edit', { path: '/:room_id/edit' }

  @route 'items'

`export default Router`
