export default Ember.Route.extend({
    beforeModel: function(trans) {
        trans.send('event', 'EDIT');
    }
});
