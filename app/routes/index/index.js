export default Ember.Route.extend({
    beforeModel: function() {
        var controller = this.controllerFor('index'),
            target;


        controller.get('nav').forEach(function(n) {
            if (n.get('default') === false) return;

            target = n.get('route');
        });

        this.transitionTo(target);
    } 
});
