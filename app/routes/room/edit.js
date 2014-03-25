export default Ember.Route.extend({
    beforeModel: function(trans) {
        trans.send('event', 'EDIT');
    },
    model: function(params) {
        return null;
    },
    serialize: function(model) {
        return {
            room_id: model.get('room_id')
        }
    }
});
