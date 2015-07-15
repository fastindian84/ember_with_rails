import DS from 'ember-data';

export default DS.Model.extend({
  items: DS.hasMany('item', {async: true}),
  addItem(item){
    this.containThisItem(
      item,
      (foundedItem)=> foundedItem.incrementProperty('count'),
      (items) => items.addObject(item)
    );
  },

  decrementItem(item){
    this.containThisItem(
      item,
      (foundedItem) => {

        let count = foundedItem.get('count');

        if (count > 1) {
          foundedItem.decrementProperty('count');
        } else {
          this.get('items').removeObject(foundedItem)
        }
      }
    );
  },

  removeItem(item){
    item.set('count', 1);
    this.get('items').removeObject(item)
  },

  itemsCount: Ember.reduceComputed('items.@each.count', {
    initialValue: 0,
    addedItem: (accValue, split) => { return accValue + split.get('count'); },
    removedItem: (accValue, split) => { return accValue - split.get('count'); }
  }),

  totalPrice:  Ember.reduceComputed('items.@each.count', {
    initialValue: 0,
    addedItem: (accValue, split) => {
      return accValue + split.get('price') * split.get('count');
    },
    removedItem: (accValue, split) => {
      return accValue - split.get('price') * split.get('count');
    }
  }),

  containThisItem(item, yesCallback, notCallback){
    let items = this.get("items");

    if(items.contains(item)){
      let containedItem = items.findBy('id', item.id);
      yesCallback(containedItem);
    } else {
      notCallback(items);
    }
  }
});
