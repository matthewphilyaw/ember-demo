var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.resource('world', function() {
        this.resource('room', function() {
            this.route('new');
            this.route('edit', { path: '/:room_id/edit' });
        });
    });
    this.route('items');
});

export default Router;
