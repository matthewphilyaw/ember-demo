export default Ember.Route.extend({
    actions: {
        ping: function(route) {
            var controller = this.controllerFor(this.routeName);

            controller.get('nav').forEach(function(n) {
                n.set('active', n.get('route') === route);
            });
        }
    }
});
