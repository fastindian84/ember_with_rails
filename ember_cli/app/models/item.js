import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  imageSrc: DS.attr('string', {defaultValue:"http://www.designofsignage.com/application/symbol/building/image/600x600/no-photo.jpg"}),
  price: DS.attr('number'),
  count: DS.attr("number", {defaultValue: 1})
});
