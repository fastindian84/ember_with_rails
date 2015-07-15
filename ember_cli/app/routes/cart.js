import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveOrder: function(){
      console.log('Hello from toute')
      this.get('cart').save().then(() => {
        this.transitionTo('items')
      })
    }
  }
});
