export default Ember.Route.extend({
    beforeModel: function() {
        var name = this.routeName,
            controller; 
            
        controller = this.controllerFor(name.substr(0, name.lastIndexOf('.')));
        controller.get('nav').forEach(function (n) {
            if (n.get('route') !== name) 
                n.set('active', false);
            else
                n.set('active', true);    
        }); 
    }
});
