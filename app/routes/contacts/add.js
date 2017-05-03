import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        save: function() {
            var id = this.store.peekAll('contact').content.length;
            var name = this.get('controller').get('name');
            if (name !== '' && isNaN(name)){
                let contact = this.store.createRecord('contact',{name: name,ids: id});
                this.modelFor('contacts').pushObject(contact);
                this.get('controller').set('name','');
                contact.save().then(function (response) {
                    console.log(response);
                },
                function(err){
                    console.log(err);
                });
                this.transitionTo('contacts');
            }else {
                alert('Please fill out the field with info thats requested');
                this.get('controller').set('name', '');
            }
        },
    }
});
