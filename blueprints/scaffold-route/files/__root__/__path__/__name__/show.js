import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  i18n: Ember.inject.service(),

  actions: {
    remove: function(model) {
      if(confirm(this.get('i18n').t('action.confirm'))) {
        model.destroyRecord();
      }
    }
  }
});
