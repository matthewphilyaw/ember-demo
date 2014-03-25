export default Ember.Controller.extend({
    nav: [
        Em.Object.create({ 
            active: true,
            name: 'Index', 
            route: 'index', 
            hidden: true
        }),
        Em.Object.create({ 
            active: false,
            name: 'World', 
            route: 'world', 
            hidden: false
        }),
        Em.Object.create({ 
            active: false,
            name: 'Items', 
            route: 'items', 
            hidden: false
        }),
    ],
});
