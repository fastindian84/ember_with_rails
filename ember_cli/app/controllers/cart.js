import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveOrder(){
      console.log('hello from controller')
      return true
    }
  }
});
