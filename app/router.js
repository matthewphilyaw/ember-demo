var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.resource('index', { path: '/' }, function() {
        this.resource('index.world', { path: 'world' }, function() {
            this.resource('index.world.new', { path: 'new' }, function() {
                this.route('room');
            });
            this.resource('index.world.room', { path: 'room/:room_id' }, 
                          function() {
                this.route('edit' );
            });
        });
        this.route('items');
    });
});

export default Router;
