import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  kind: attr('string'),
  createdDate: attr('date'),
  title: attr('string'),
  lastModifyingUserName: attr('string'),
  lastModifyingUser: attr(),
  iconLink: attr('string')
});
