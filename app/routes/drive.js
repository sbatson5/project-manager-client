import Ember from 'ember';
import AuthenicatedRoute from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenicatedRoute, {
  model() {
    return this.store.findAll('drive-file');
  }
});
