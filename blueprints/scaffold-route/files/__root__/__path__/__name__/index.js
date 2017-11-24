import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import PagMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  i18n: Ember.inject.service(),

  actions: {
    remove: function(model) {
      if(confirm(this.get('i18n').t('action.confirm'))) {
        model.destroyRecord();
      }
    }
  },

  model: function() {
    return this.findPaged('<%= dasherizedModuleName %>', params);
  }
});
