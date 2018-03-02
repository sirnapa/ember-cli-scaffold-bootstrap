import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  i18n: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  busy: Ember.inject.service(),

  actions: {
    remove: function(model) {
      var route = this;
      route.get('busy').show();

      if(confirm(this.get('i18n').t('action.confirm'))) {
        model.destroyRecord().then(function(){
          route.get('busy').hide();
          route.transitionTo('<%= dasherizedModuleNamePlural %>');
          route.get('notify').success(route.get('i18n').t('<%= dasherizedModuleName %>.messages.delete.success'));
        }, function(){
          route.get('busy').hide();
          route.get('notify').error(route.get('i18n').t('<%= dasherizedModuleName %>.messages.delete.error'));
        });
      }
    }
  }
});
