import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('items', function() {
    this.route('item', { path: '/:id' });
    this.route('new');
  });
  this.route('cart');
  this.route('orders', function(){
    this.route('order', {path: '/:id'});
  });
});

export default Router;
