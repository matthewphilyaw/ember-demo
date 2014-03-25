export default Ember.Controller.extend({
    nav: [
        Em.Object.create({ 
            active: true,
            name: 'World', 
            route: 'world', 
            default: true
        }),
        Em.Object.create({ 
            active: false,
            name: 'Items', 
            route: 'items', 
            default: false
        })
    ],
});