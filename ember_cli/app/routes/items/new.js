import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('item')
  },
  deactivate: function(){
    let item = this.get('currentModel');
    if (item.get('isNew')) {item.unloadRecord()}
  },
  actions:{
    saveItem: function(){
      let item = this.get('currentModel');

      item.save().then(()=>
        this.transitionTo('items')
      )
    }
  }
});
