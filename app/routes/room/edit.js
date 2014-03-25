export default Ember.Route.extend({
    beforeModel: function(trans) {
        trans.send('event', 'EDIT');
    },
    /**
     * Get's fired when you navigate directly to the url
     * I'd imagine the link-to helper would fire it to
     */
    model: function(params) {
        return Em.Object.create({
            room_id: params.room_id
        }); 
    },
    /**
     * Fired when .transitionTo is called with a model
     * like it is in routes/world in the edit action
     */
    serialize: function(model) {
        return Em.Object.create({
            room_id: model.get('room_id')
        });
    }
});
