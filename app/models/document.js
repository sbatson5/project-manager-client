import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  content: attr('string'),
  name: attr('string'),
  published: attr('boolean'),
  viewCount: attr('number'),

  project: belongsTo('project')
});
