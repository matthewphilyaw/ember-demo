import Echo from 'appkit/lib/routes/nav/echo';

export default Echo.extend({
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
         * We intercept edit here
         * instead of linking to it
         * so we can grab the selected 
         * room in the viewer.
         */
        edit: function() {
            // get the selected room
            //...

            
            // this would be setup for the new 
            // query string param in the canary builds
            // will work on that later
            // but the intent is to pass room_id here
            this.transitionTo('index.world.room.edit');
        }
    }
});
