export function initialize(application) {
  let cart = application.container.lookup("store:main").createRecord('cart');
  application.applicationRegistry.register("current:cart", cart, {instantiate: false});
  application.applicationRegistry.injection('route', 'cart', 'current:cart');
  application.applicationRegistry.injection('controller', 'cart', 'current:cart');
}

export default {
  name: 'cart',
  initialize: initialize
};
