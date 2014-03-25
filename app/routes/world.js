import Ping from 'appkit/lib/routes/nav/ping';

export default Ping.extend({
    actions: {
        event: function(e) {
            var controller = this.controllerFor(this.routeName);

            if (e === 'ADD' || e === 'EDIT') {
               controller.set('show.sidebar', true); 
               return;
            }

            controller.set('show.sidebar', false);
        },
        /**
         * Perhaps use this to catch and edit
         * event triggered from the world viewer
         *
         * this controller will need to know about the 
         * edit route, but not the viewer
         *
         * thinking maybe it could have set of standard
         * events that the view/component could trigger
         * that would be handled by the container
         * like this
         *
         * biggest change here the action takes an argument
         * so no look up.
         */
        edit: function(roomId) {
            
            // Going to fix this soon to pass roomId
            // into it. 
            //
            // like:
            // https://github.com/voluspa/vilive/blob/master/apps/exmud_web/priv/builder/app/routes/exit/edit.js
            this.transitionTo('room.edit', Em.Object.create({
                room_id: roomId,
            }));
        }
    }
});
