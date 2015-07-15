import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.computed.alias('targetObject.cart'),

  actions: {
    decrementItem(){
      this.get('cart').decrementItem(this.get('content'))
    },
    removeItem(){
     this.get('cart').removeItem(this.get('content'))
    }

  }
});
