`import Ping from 'appkit/lib/routes/nav/ping'`

r = Ping.extend
  ###
    Semantics of action state that false
    prevents action from defaulting
    and coffee script turns everything into
    and expression so the javascript generated
    will return the last statement which will
    most likely be a truthy value and thus
    may not be what you are expecting

    so we probably want to explicitly put
    false/true for actions
    
    where as in javascript you would simply 
    just not return anything.
  ###
  actions:
    event: (e) ->
      controller = @controllerFor @routeName

      show = true if e is 'ADD' or e is 'EDIT'

      controller.set 'show.sidebar', show

      # don't propagate action
      false

    ### 
    Perhaps use this to catch and edit
    event triggered from the world viewer

    this controller will need to know about the 
    edit route, but not the viewer

    thinking maybe it could have set of standard
    events that the view/component could trigger
    that would be handled by the container
    like this

    biggest change here the action takes an argument
    so no look up.
    ###
    edit: (roomId) ->
      model = Em.Object.create
        room_id: roomId

      @transitionTo 'room.edit', model

      false

`export default r`
