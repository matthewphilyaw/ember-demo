export default Ember.Controller.extend({
    nav: [
        Em.Object.create({ 
            active: true,
            name: 'Index', 
            route: 'index', 
            default: true,
            hidden: true
        }),
        Em.Object.create({ 
            active: true,
            name: 'World', 
            route: 'world', 
            default: true,
            hidden: false
        }),
        Em.Object.create({ 
            active: false,
            name: 'Items', 
            route: 'items', 
            default: false,
            hidden: false
        }),
    ],
});
