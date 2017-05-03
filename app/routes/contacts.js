import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('contact').then(contacts => contacts.toArray());
    },
    actions:{
        add: function() {
            this.transitionTo('contacts.add');
        },
        delete: function (id) {
            this.store.findRecord('contact',id, { backgroundReload : false }).then(function (contact) {
                contact.deleteRecord();
                contact.get('isDeleted');
                contact.save().then(function (response) {
                        console.log(response);
                    },
                    function(err){
                        console.log(err);
                });
            });
        }
    }
});
