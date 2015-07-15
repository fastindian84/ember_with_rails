import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('item', params.id)
  },
  actions: {
    addItemToCart(){
      let cart = this.get("cart");
      cart.addItem(this.currentModel);
    },
    removeItem(){
      this.currentModel.destroyRecord().then(() =>
        this.transitionTo('items')
      )
    }
  }
});
